var request = require("request");
// var http = require('http');
var async = require('async');
var Promise = require("bluebird");
var rp = require('request-promise');
var clientInfoArray = [];
var startDate = "20/08/2017";
var endDate = "20/08/2017";
var fs = require('fs');

var flowaccountCookie = '.AspNet.ExternalCookie=1qtROWqTBeCeTXvV5avwy1fhxR_LTtDP8LrP29u9z1zpRYi757YWSCkyiy1gfJ8hg9j_y-6UwfwRwK667OEuud3sS0Dbw4l4Y07_y7d9RXUPd5mjltL1dKLqn2wen-H-HgF5DRrnbUFLywdaLYp6lRM5K0pBOpJ0MHN1vyeuR2wZjTf-0rEjcwIehpkMb05v_WvsrFPuOigEcCnKnmxdxQLeNcU-qcplaOdBKmv7pbkZIm6FZTkZxP8Xa_USE96ddK40UcCzWqx1tPsVQubls2QG6eECdHKgNZ_efOD56UucVSKMjc4pfgFF5zdEhULakqPQTOStFoDFoxPSL03RcPLm2XTVlxWRvU6980ZRPRIAMdrzrOsOmbhlTh02Vckt18ZP8PjCpCE3wvrkFwW4GSGrwEczNmLzV1-i3V4sQoeHlmqOEaOwsrhWwDTbY5ip; listNewClicked=true; ; freeTrialNotifications=218; mp_mixpanel__c=21; listNewClicked=true; SERVERID=web5%7CWXeH7%7CWXeGx; showSalesPopup=true; ASP.NET_SessionId=gs0lamu3tjblvbghzfrsxqg5; __RequestVerificationToken=_zx8pPioyL2SGJ5YN41hz2kesDIqN3oJlRQ0kgswXAf8qif79AzrDEBvTAxL1txxOSCCfsNUZbxFdOKHOFMa-vE9bzrXJgiN_aPmzmxBjGE1; AWSELB=39B5C9C70C262FEB823BE8D91E96B47E990F9EE01E8BD10CF2DE49F44851183BE23C452693058C88459F792872823443D63F0CDAFA6FE9BA54CB5C46C78FF4C129A91500F7; AB_TEST_MASTER_COOKIE_Register=SPLIT_GROUP=Register&SPLIT_NAME=Version 1&SPLIT_GOAL=SignupWizard&action=Register&controller=Account&area=&Namespaces=Gismo.AccountingHub.Controllers; .AspNet.ExternalCookie=GPvh6umJebZ_9pS11vEKUZ-AFZibTVlwlYJu14ipU7DiuF68gvP_ltm8cgj3bPwQIYGxt0Y5pHxQj7TS28SCUAdci29BMo1A4VJzJ0N-DYbgLPdYRB97oo7VoPkmF0Nu9VY4CVf4S4buZp-HGEYnNFGWuCINXleYVpCOQJm7WJmr8cAA05c4qVU3BAU7xFhtwoe1VR2R6zBgvEHfQbSDbQfLlaiscW7WQWQaE9dkLx8oI4kPyzqjifR7Dd9ABSudOE_9g4s8HXINn7xBGa9rPEUP4PMD7o22dlnLjJV1kf42yCn2oZ_TE3xXb_CNlWCW_4Tq_6UXls7fGOO2yiyy9MnsBSdc8OdyGIsLAovGgsySrXNZRNIoSGnYkDgMB3CAS1Eb61fESn1rb5Ta-VyEXHmniqLRq2QjFvqVKVFn-GsvF3gMrWAxMx9HsA_nV3LrgFHOWSW1WfP-7lG6VHPFtmTvkq6Iu9A7u30tOvUtUmY; _ga=GA1.2.641072738.1497477826; _gid=GA1.2.644041534.1503383083; FlowApp.ApplicationCookie=1ZHrNOqHW_0faab0CO5rin84_benKz2Oa84REwv2dRkS-eOGUoneHk6CP8FxfURnUHR4PmMcAyZXj-oubqvr_k0zt9QxY77fgFG2yZy7er221_W5r4Y5gJhaMXGiIpm1gvRqZnHncfXlFlYuik0wKPulXhRDg-_nQ1GxWB1rXnVsPhollPCZ-7P8UaBlfLhgYooMQoJ9dRc61QhHvXjTP_8absPrdbd5NXkEs8sKKnbwFPgrACZkQP97zYfZ_EqTtJLdHOTz3Cj2W7YBnlcyXozBL1hgp8d3KsHGNSM5UJ5eUMp-8w2vfaHOzO5Aukrrh8NSNTxc5BdZjWsZ3RZIrq0dHpQnIEtNdbZwSqJ_Yz5rBNRPLNkDRCMCn3GoqGBKu-fC37a3E-m6egs1QhL-FHau790o85XA0dAThVSqUx-bdXjXr6MtulhY5mDNQgZElTOLzuyiIlnf323W52MA_-SIWryVlAzZTcAvYY1Zr1qJaup3XPrQByoVqfGqkPP2u-zvKHTim_WaVKHdOjC_0bEa6DY3EVTGp3ODARmlnfr4WDg9BLdTOmJFBbXoV0qu; mp_41272d18399c471ff77934a08cde5694_mixpanel=%7B%22distinct_id%22%3A%20%2247117%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpap%22%3A%20%5B%5D%7D; intercom-session-v8m0o18j=UlJoZ3UrWDhtY1J4U29mYzQ2TnhSRXdHU1U2RzhZb1BDeWFVWk1CZ3RlekxueWVBYlorZWxPNXFHYy9TVHJrdi0tOUIrYm9ZeXVMLzhCdVJQR2FwWHlDQT09--ad4649e1893313654253aefa21734d4215b09eaf; mp_mixpanel__c=5; myappculture=th; SERVERID=web5|WZyLf|WZx/R';

var optionsRequestByDocumentId = { method: 'POST',
  url: 'https://app.flowaccount.com/CompanyAdmin/th/Invoice/CheckForInformationUpdates ',
  headers:
   { 'postman-token': '97130777-704c-66e4-69ea-e5be4dbfb7e8',
     'cache-control': 'no-cache',
     host: 'app.flowaccount.com',
     cookie: flowaccountCookie,
     'content-type': 'application/json',
     'x-access-token': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTAxYTQzNzkzNzFhNjJmMzg1Nzg2OTEiLCJ1c2VybmFtZSI6InRhZUBnbWFpbC5jb20iLCJlbWFpbCI6InRhZUBnbWFpbC5jb20iLCJpYXQiOjE0OTUzNDIwMjJ9.Cm6Ofz222HBkSlYDtKzyrnDT6zNm1QXdtb7kMe959zk' },
  body: { documentId: '1339255', _type: 'TaxInvoice' },
  json: true };

var optionsRequestGridData = { method: 'POST',
  url: 'https://app.flowaccount.com/CompanyAdmin/th/Invoice/GetGridData ',
  headers:
   { 'postman-token': 'e7c2160d-be7e-2029-5bf5-3ad0e15a7c59',
     'cache-control': 'no-cache',
     'x-requested-with': 'XMLHttpRequest',
     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36',
     referer: 'https://app.flowaccount.com/CompanyAdmin/th ',
     host: 'app.flowaccount.com',
     cookie: flowaccountCookie,
     connection: 'keep-alive',
     'accept-language': 'en-US,en;q=0.8',
     'accept-encoding': 'gzip, deflate, br',
     accept: '/',
     'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
  formData:
   { 'query[ReportType]': 'Sales',
     'query[DocumentType]': '7',
     'query[StatusIDList]': '',
     'query[Range]': 'Manual',
     'query[previousdatepicker]': '',
     'query[Year][]': '0',
     'query[Month]': '7',
     'query[StartDate]': startDate,
     'query[EndDate]': endDate,
     'query[startDateHolder]': '17/07/2017',
     'query[endDateHolder]': '17/07/2017',
     'query[start-month-range]': '',
     'query[end-month-range]': '',
     'query[SortBy][name]': 'DocumentSerial',
     'query[SortBy][sortOrder]': '3',
     completeCallback: '',
     currentPage: '1',
     pageSize: '1000' }
   };

// TODO: function of Request Grid Data

var checkDataIsRequestSuccess = function(data) {
  if(data) {
    data = JSON.parse(data);
    if(data.message === 'ค้นหาสำเร็จ') {
      data = JSON.parse(data.Data);
      return(data);
    }
  } else {
    console.log('Please try to input an new cookies');
    return(0);
  }
};

var getGridData = function(callback) {
  return rp(optionsRequestGridData)
};

var insertDocumentIdToArray = function(data) {
  var array = [];
  for(var i=0; i<data.length; i++) {
    array.push(data[i].DocumentId);
  }
  return array;
};

// TODO: function of Request Document By Id

var getDocumentById = function(documentId) {
  optionsRequestByDocumentId.body.documentId = documentId;
  return rp(optionsRequestByDocumentId)
};

getGridData()
  .then(function(reqData){
    var data = checkDataIsRequestSuccess(reqData);
    if(data === 0) { return(0); }

    var documentIdArray = insertDocumentIdToArray(data);
    var promise = [];

    for(var i=0; i<documentIdArray.length; i++) {
      optionsRequestByDocumentId.body.documentId = documentIdArray[i];
      promise.push(getDocumentById(documentIdArray[i]))
    }

    return Promise.all(promise)
  }).then(function(clientInfoArray){

    var startDateString = startDate.replace(/\//g, "-");
    var endDateString = endDate.replace(/\//g, "-");
    var writeStream = fs.createWriteStream("ใบเก็บเตา["+startDateString+" - "+endDateString+"].xls");
    var tab = "\t";
    var newLine = "\n";

    var textToExcel = "ชื่อ" + tab + "เบอร์โทร" + tab + "ที่อยู่" + newLine;

    for(var i=0; i<clientInfoArray.length; i++) {
      var clientInfo = JSON.parse(clientInfoArray[i].clientInfo);
      clientInfo = JSON.parse(clientInfo);
      textToExcel += clientInfo.name + tab + clientInfo.contactNumber + tab + clientInfo.addressLine1 + clientInfo.addressLine2 + newLine;
    }

    writeStream.write(textToExcel);
    writeStream.close();
  })
