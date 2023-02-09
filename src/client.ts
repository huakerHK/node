// This file is auto-generated, don't edit it
import Dns, * as $Dns from '@alicloud/alidns20150109';
import Util from '@alicloud/tea-util';
import Env from '@alicloud/darabonba-env';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import Console from '@alicloud/tea-console';
import * as $tea from '@alicloud/tea-typescript';
import axios from 'axios';


export default class Client {

  /**
  * Initialization  初始化公共请求参数
  * LTAI5t7vwL9C8JmyMskkVVFs
  * fH8OolTa2FN2DN0hoaxiblptoW7Gfd
  * 
  * LTAI5tQXMk91pr6tGVmaqi9i
  * KHCRMHjMOCeFxVecOIhpUyL2tkgSlZ
  * 
  * 808726816517698560
  */
  static Initialization(regionId: string): Dns {
    let config = new $OpenApi.Config({})
    const accessKeyId:string = 'LTAI5tQXMk91pr6tGVmaqi9i'
    const accessKeySecret:string = 'KHCRMHjMOCeFxVecOIhpUyL2tkgSlZ'
    // 您的AccessKey ID
    config.accessKeyId = accessKeyId;
    // 您的AccessKey Secret
    config.accessKeySecret = accessKeySecret;

    // 您的可用区ID
    config.regionId = regionId;
    return new Dns(config);
  }

  /**
   * 获取主域名的所有解析记录列表
   */
  static async DescribeDomainRecords(client: Dns, domainName: string, RR: string, recordType: string): Promise<$Dns.DescribeDomainRecordsResponse> {
    let req = new $Dns.DescribeDomainRecordsRequest({});
    // 主域名
    req.domainName = domainName;
    // 主机记录
    req.RRKeyWord = RR;
    // 解析记录类型
    req.type = recordType;
    try {
      let resp = await client.describeDomainRecords(req);
      Console.log("-------------------获取主域名的所有解析记录列表--------------------");
      Console.log(Util.toJSONString($tea.toMap(resp)));
      return resp;
    } catch (error) {
      Console.log(error.message);
    }
    return null;
  }

  /**
   * 修改解析记录
   */
  static async UpdateDomainRecord(client: Dns, req: $Dns.UpdateDomainRecordRequest): Promise<void> {
    try {
      let resp = await client.updateDomainRecord(req);
      Console.log("-------------------修改解析记录--------------------");
      Console.log(Util.toJSONString($tea.toMap(resp)));
    } catch (error) {
      Console.log(error.message);
    }
  }

    static async main(args: string[]): Promise<void> {
    let regionid = args[0];
    let currentHostIP = args[1];
    let domainName = args[2];
    let RR = args[3];
    let recordType = args[4];
    
    let client = Client.Initialization(regionid);
    let resp = await Client.DescribeDomainRecords(client, domainName, RR, recordType);
    if (Util.isUnset($tea.toMap(resp)) || Util.isUnset($tea.toMap(resp.body.domainRecords.record[0]))) {
      Console.log("错误参数！");
      return;
    }

    let record = resp.body.domainRecords.record[0];
    // 记录ID
    let recordId = record.recordId;
    // 记录值
    let recordsValue = record.value;
    Console.log(`-------------------当前主机公网IP为：${currentHostIP}--------------------`);
    if (!Util.equalString(currentHostIP, recordsValue)) {
      // 修改解析记录
      let req = new $Dns.UpdateDomainRecordRequest({});
      // 主机记录
      req.RR = RR;
      // 记录ID
      req.recordId = recordId;
      // 将主机记录值改为当前主机IP
      req.value = currentHostIP;
      // 解析记录类型
      req.type = recordType;
      await Client.UpdateDomainRecord(client, req);
    }

  }

}

const test: string[] = ['cn-hangzhou','127.0.0.1','lhua.top','@','A']

// Client.main(test);

const url:string = 'https://ip.cn/api/index?ip=&type=0'
let oldIp:string = '127.0.0.1'
function getIp():void{
  axios.get(url).then( res => {
    console.log(res.data.ip)
    if(res.data.ip !== oldIp){
      test[1] = res.data.ip
      Client.main(test)
      oldIp = res.data.ip
    }
  })
  .catch(err => {
    console.log(err)
  })
}
// getIp()
setTimeout(function(){
  console.log('start...')
  getIp()
},60000)