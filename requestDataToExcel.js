var request = require("request");
var http = require('http');
var async = require('async');
var Promise = require("bluebird");
var rp = require('request-promise');
var clientInfoArray = [];
var startDate = "23/08/2017";
var endDate = "23/08/2017";

var flowaccountCookie = '.AspNet.ExternalCookie=1qtROWqTBeCeTXvV5avwy1fhxR_LTtDP8LrP29u9z1zpRYi757YWSCkyiy1gfJ8hg9j_y-6UwfwRwK667OEuud3sS0Dbw4l4Y07_y7d9RXUPd5mjltL1dKLqn2wen-H-HgF5DRrnbUFLywdaLYp6lRM5K0pBOpJ0MHN1vyeuR2wZjTf-0rEjcwIehpkMb05v_WvsrFPuOigEcCnKnmxdxQLeNcU-qcplaOdBKmv7pbkZIm6FZTkZxP8Xa_USE96ddK40UcCzWqx1tPsVQubls2QG6eECdHKgNZ_efOD56UucVSKMjc4pfgFF5zdEhULakqPQTOStFoDFoxPSL03RcPLm2XTVlxWRvU6980ZRPRIAMdrzrOsOmbhlTh02Vckt18ZP8PjCpCE3wvrkFwW4GSGrwEczNmLzV1-i3V4sQoeHlmqOEaOwsrhWwDTbY5ip; listNewClicked=true; ; freeTrialNotifications=218; mp_mixpanel__c=21; listNewClicked=true; SERVERID=web5%7CWXeH7%7CWXeGx; showSalesPopup=true; ASP.NET_SessionId=gs0lamu3tjblvbghzfrsxqg5; __RequestVerificationToken=_zx8pPioyL2SGJ5YN41hz2kesDIqN3oJlRQ0kgswXAf8qif79AzrDEBvTAxL1txxOSCCfsNUZbxFdOKHOFMa-vE9bzrXJgiN_aPmzmxBjGE1; AWSELB=39B5C9C70C262FEB823BE8D91E96B47E990F9EE01E8BD10CF2DE49F44851183BE23C452693058C88459F792872823443D63F0CDAFA6FE9BA54CB5C46C78FF4C129A91500F7; AB_TEST_MASTER_COOKIE_Register=SPLIT_GROUP=Register&SPLIT_NAME=Version 1&SPLIT_GOAL=SignupWizard&action=Register&controller=Account&area=&Namespaces=Gismo.AccountingHub.Controllers; _ga=GA1.2.641072738.1497477826; _gid=GA1.2.644041534.1503383083; .AspNet.ExternalCookie=wYpnTu6vTj7SUjhPnqopKqc0Nmh5aUJ2ceoLhVoAhFJ19MlmEoT-3fL9dUzhP0VZsi7ABxtyAYyIJdQSJMoCjknduQzawghAKcXUxGilSICMOwnEK6hDsbAQzFO4IVvBSLNv9r9Ej7a0psDiQ8oC0RZdwE82Fq3DJqeuEhOsU8q7pvyWM4Bw29AbJCHTbXYOPki-xP3QP5LM1I2ucVwDrMzOQWnKWXfTCj0eEuLPyNar0yL75WLAJaQP3vykyqgnEXHu96paJCikIH8az5cG2zBJukXgKh3pW36aTuYkXtAIgcHmAPpygQl-hfcnS5C7HaEUMU7ReDpGZnS2QiY3XOenp8BF1xHAi8UC7Uo4WT_fTI3lRKa85Dlgt4j6WgekI1xRPU07GPbGzZPhQXmjS6WnWyKCPMD03MuPl8lDbT8tqB7l31jQJ76bBXXGGlHfFfkoL9YZxl8YopjBFVKsewiNl_2ws5QNH6W17RcUHck; FlowApp.ApplicationCookie=N4J4pUbcfuvaBTKKZ-WCOSzlUqV0clVfwAOh4chkWJ6g7NPUqga-nwT0xeIZgJX3Chbom5VsdBwrrvn97a40-ZH2-5t8deRp0FBVKMdjQMdRMHf4ETUCZyUhDf69lIWngGQwmaSZyGh9UZObMa4D1J43Asm6PJLd8FWki9_QxIr3BldNSIyduXqqYpokA7BH6_xz2P6WZBfYDQvWwBMnomQwPwAOr_-CDI71nfQzN1w9kT_qvHGFcqCxKqquWrjx9GXw5jMDUFo-1CeIhS07ZhFvz6g1ePCyU5RGIeOrYsB6y8PcWptwwDZKlxm6hIe1k_2jGvYLiJXmVTpZUqEsa5nor-ccldPaXU3suhjc3YdRrYp_Nq0gbBrY84e7XA-qyrrbVNmgDDgx2sMSY0D1ONKYw0icE9eA-uVeTHr8919XkXqIIfsvD6g6M71o9yYqFwlFEGGlUEhNAaEGw_nw7dIFEmIeus-V1t3AN_nxPGclA2FcEmGjOlpOMjVbVU8gX7fs-FJDRANwmqLhB1XMjXXTEllS8Ku8TMwkMEn2hWrVooqZ-RTUVj84KYpU6dux; intercom-session-v8m0o18j=MWxDckR5Ym9pRHllSFdSOXg2Ty9oS2RJZU9MRHBQR01TS214bTZYM01aUWtINlBuUVc3S3FMWkdnVjBrbHA4VC0tKzlDWVdiWjE3Wm1xWWFWby84Y0xEdz09--278516aa2b10e6e27b06345e4816fd2cc2dbb210; mp_41272d18399c471ff77934a08cde5694_mixpanel=%7B%22distinct_id%22%3A%20%2247117%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpap%22%3A%20%5B%5D%7D; mp_mixpanel__c=8; myappculture=th; SERVERID=web6|WZ2YQ|WZ2NA';

var optionsRequestByDocumentId = { method: 'POST',
  url: 'https://app.flowaccount.com/CompanyAdmin/th/Invoice/CheckForInformationUpdates',
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
  url: 'https://app.flowaccount.com/CompanyAdmin/th/Invoice/GetGridData',
  headers:
   { 'postman-token': 'e7c2160d-be7e-2029-5bf5-3ad0e15a7c59',
     'cache-control': 'no-cache',
     'x-requested-with': 'XMLHttpRequest',
     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36',
     referer: 'https://app.flowaccount.com/CompanyAdmin/th',
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
  request(optionsRequestGridData, function (error, response, body) {
    if (error) throw new Error(error);

    callback(body);
  });
};

var insertDocumentIdToArray = function(data) {
  var array = [];
  for(var i=0; i<data.length; i++) {
    array.push({
      'Index': i,
      'DocumentId': data[i].DocumentId,
      'DocumentSerial': data[i].DocumentSerial,
      'Value': data[i].Value
    });
  }
  return(array);
};

// TODO: function of Request Document By Id

var getDocumentById = function(index, documentId, documentSerial, value) {
  optionsRequestByDocumentId.body.documentId = documentId;

  request(optionsRequestByDocumentId, function (error, response, body) {
    if (error) throw new Error(error);

    var clientInfo = JSON.parse(body.clientInfo);
    clientInfo = JSON.parse(clientInfo);

    var clientInfoToObject = {
      'index': index,
      'invoiceNumber': documentSerial,
      'name': clientInfo.name,
      'contactNumber': clientInfo.contactNumber,
      'addressLine1': clientInfo.addressLine1,
      'addressLine2': clientInfo.addressLine2,
      'value': value
    };

    clientInfoArray.push(clientInfoToObject);
  });
};

// TODO: nomal function


// TODO: using function

getGridData(function (reqData) {
  var data = checkDataIsRequestSuccess(reqData);
  if(data === 0) { return(0); }
  var documentIdArray = insertDocumentIdToArray(data);

  for(var i=0; i<documentIdArray.length; i++) {
    optionsRequestByDocumentId.body.documentId = documentIdArray[i].DocumentId;
    getDocumentById(documentIdArray[i].Index, documentIdArray[i].DocumentId, documentIdArray[i].DocumentSerial, documentIdArray[i].Value);
  }

  setTimeout(function() {
    clientInfoArray.sort(function (a, b) {
      return a.index - b.index;
    });

    setTimeout(function() {
      var fs = require('fs');

      var startDateString = startDate.replace(/\//g, "-");
      var endDateString = endDate.replace(/\//g, "-");
      var writeStream = fs.createWriteStream("ใบเก็บเตา["+startDateString+" - "+endDateString+"].xls");
      var tab = "\t";
      var newLine = "\n";

      var textToExcel = "Invoice Number" + tab + "ชื่อ" + tab + "เบอร์โทร" + tab + "ราคา" + tab + "ที่อยู่" + newLine;

      for(var i=0; i<clientInfoArray.length; i++) {
        textToExcel += clientInfoArray[i].invoiceNumber + tab + clientInfoArray[i].name + tab + clientInfoArray[i].contactNumber + tab + clientInfoArray[i].value + tab + clientInfoArray[i].addressLine1 + clientInfoArray[i].addressLine2 + newLine;
      }

      writeStream.write(textToExcel);

      writeStream.close();
    }, 1500);

  }, documentIdArray.length * 1500);

});
