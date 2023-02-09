"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
// This file is auto-generated, don't edit it
var alidns20150109_1 = require("@alicloud/alidns20150109"), $Dns = alidns20150109_1;
var tea_util_1 = require("@alicloud/tea-util");
var $OpenApi = require("@alicloud/openapi-client");
var tea_console_1 = require("@alicloud/tea-console");
var $tea = require("@alicloud/tea-typescript");
var axios_1 = require("axios");
var Client = /** @class */ (function () {
    function Client() {
    }
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
    Client.Initialization = function (regionId) {
        var config = new $OpenApi.Config({});
        var accessKeyId = 'LTAI5tQXMk91pr6tGVmaqi9i';
        var accessKeySecret = 'KHCRMHjMOCeFxVecOIhpUyL2tkgSlZ';
        // 您的AccessKey ID
        config.accessKeyId = accessKeyId;
        // 您的AccessKey Secret
        config.accessKeySecret = accessKeySecret;
        // 您的可用区ID
        config.regionId = regionId;
        return new alidns20150109_1["default"](config);
    };
    /**
     * 获取主域名的所有解析记录列表
     */
    Client.DescribeDomainRecords = function (client, domainName, RR, recordType) {
        return __awaiter(this, void 0, void 0, function () {
            var req, resp, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        req = new $Dns.DescribeDomainRecordsRequest({});
                        // 主域名
                        req.domainName = domainName;
                        // 主机记录
                        req.RRKeyWord = RR;
                        // 解析记录类型
                        req.type = recordType;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, client.describeDomainRecords(req)];
                    case 2:
                        resp = _a.sent();
                        tea_console_1["default"].log("-------------------获取主域名的所有解析记录列表--------------------");
                        tea_console_1["default"].log(tea_util_1["default"].toJSONString($tea.toMap(resp)));
                        return [2 /*return*/, resp];
                    case 3:
                        error_1 = _a.sent();
                        tea_console_1["default"].log(error_1.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, null];
                }
            });
        });
    };
    /**
     * 修改解析记录
     */
    Client.UpdateDomainRecord = function (client, req) {
        return __awaiter(this, void 0, void 0, function () {
            var resp, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, client.updateDomainRecord(req)];
                    case 1:
                        resp = _a.sent();
                        tea_console_1["default"].log("-------------------修改解析记录--------------------");
                        tea_console_1["default"].log(tea_util_1["default"].toJSONString($tea.toMap(resp)));
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        tea_console_1["default"].log(error_2.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Client.main = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var regionid, currentHostIP, domainName, RR, recordType, client, resp, record, recordId, recordsValue, req;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        regionid = args[0];
                        currentHostIP = args[1];
                        domainName = args[2];
                        RR = args[3];
                        recordType = args[4];
                        client = Client.Initialization(regionid);
                        return [4 /*yield*/, Client.DescribeDomainRecords(client, domainName, RR, recordType)];
                    case 1:
                        resp = _a.sent();
                        if (tea_util_1["default"].isUnset($tea.toMap(resp)) || tea_util_1["default"].isUnset($tea.toMap(resp.body.domainRecords.record[0]))) {
                            tea_console_1["default"].log("错误参数！");
                            return [2 /*return*/];
                        }
                        record = resp.body.domainRecords.record[0];
                        recordId = record.recordId;
                        recordsValue = record.value;
                        tea_console_1["default"].log("-------------------\u5F53\u524D\u4E3B\u673A\u516C\u7F51IP\u4E3A\uFF1A".concat(currentHostIP, "--------------------"));
                        if (!!tea_util_1["default"].equalString(currentHostIP, recordsValue)) return [3 /*break*/, 3];
                        req = new $Dns.UpdateDomainRecordRequest({});
                        // 主机记录
                        req.RR = RR;
                        // 记录ID
                        req.recordId = recordId;
                        // 将主机记录值改为当前主机IP
                        req.value = currentHostIP;
                        // 解析记录类型
                        req.type = recordType;
                        return [4 /*yield*/, Client.UpdateDomainRecord(client, req)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Client;
}());
exports["default"] = Client;
var test = ['cn-hangzhou', '127.0.0.1', 'lhua.top', '@', 'A'];
// Client.main(test);
var url = 'https://ip.cn/api/index?ip=&type=0';
var oldIp = '127.0.0.1';
function getIp() {
    axios_1["default"].get(url).then(function (res) {
        console.log(res.data.ip);
        if (res.data.ip !== oldIp) {
            test[1] = res.data.ip;
            Client.main(test);
            oldIp = res.data.ip;
        }
    })["catch"](function (err) {
        console.log(err);
    });
}
getIp()
// setTimeout(function () {
//     console.log('start...');
//     getIp();
// }, 60000);
