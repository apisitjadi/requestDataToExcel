var request = require("request");
var http = require('http');
var async = require('async');
var Promise = require("bluebird");
var rp = require('request-promise');
var clientInfoArray = [];
var startDate = "15/03/2018";
var endDate = "15/03/2018";


var flowaccountCookie = 'listNewClicked=true; mp_mixpanel__c=22; showSalesPopup=true; freeTrialNotifications=365; ASP.NET_SessionId=c1gqbhkdcqwjik11zhkdfvlp; __RequestVerificationToken=Wzfn9AWkNJnpX8uULZnz6Q_qRJDpHvEOSWugDafiRdl08kG4SR1viG238OAST4TXa64s9Da9GMLIWRulI-T3_weTY86jSVgHqvCHYeUBw781; AWSELB=39B5C9C70C262FEB823BE8D91E96B47E990F9EE01E8BD10CF2DE49F44851183BE23C452693A5DE9F89A97B906994549002223554A36FE9BA54CB5C46C78FF4C129A91500F7; _ga=GA1.2.1125247355.1514530499; intercom-lou-v8m0o18j=1; isbeta=false; forcebeta=false; beta=false; ReferrerUrl=https://www.google.co.th/; ReferrerUrlQuery=https://flowaccount.com/; _gid=GA1.2.785413619.1520923910; myappculture=th; .AspNet.ExternalCookie=TJmCvnnVgH7ukhp3dam-_-ew5QdNyzABFnftFH__XCFMA5DBUWMVLwHFom19o6EuilSMwdvIg1lxmHyhAJGYxFcgd2BKD1RUkTFdLZUU5ECeq-5dOdUCVwtrYvWJfk09_JlZyj7ZyEykBLfezoKq14ZQtKuN7-As2vFlmhkxAmPCSHUcwuVskMOiZV3UY1jiwK3o3hN33CFvprqwf5UL4MIvZ13GxZd0nk4E405Ftk6bbooMX3nvN7hvoUxq7-dKlD8m85EBOnXN-h2Gk5QZy78sFRGqD4DTtHu3QBGOp8x0qIiaFTOFBMkALVcqOc-OpkXSzEN8UbaPJqAxEI7ImqCaEE3SDqehgcNK78VJyVMzSzdgYNRFEVBQsisXrdPlrFJ7yI1UjC2Y_Qc_ItkubL_k31SHGWxtwjLlFEsXl6XR2NpTgy7WpWXyL0zDXsDy; FlowApp.ApplicationCookie=TP6IkXyUsilQR513CH6KWB-Z3-IDMx4junUFN5sZW-f2idUbNN56RwRA2r2w31F4-FdmoSFpvQCKFtlLyTmbSfP6S5aiGUgHaCn6GlV8rb7AEltR6Mt1b0mbwyImDt8KD5BxalpOr5qK-Ob9v6fYrdLZ0AYpp39ZveXbRMJ7jJ2kDdN7DkrKvwzyyWkLT1u-IulxUfvFpdYJAcxsIWfiI5Okn2x5ET8K2q0uMp4uohi24bOlVe-U2xyhmfkjWRA4kd1cWtRqDGkzEAkvQ-aYMYubDNF26qsrnd4DWfNPPFGOisRPcw5Uy5fEC6cG8qwUdcoqFWyEaCutcwR1UqcQZptTBn1KfZWIl9yfO9TYsDFBMjI3Hwx7nrM2jIwmr1ZkvvD64oXjd9L65uArx3q6gIC0IzHm5BM_C7K4mYuDzFfLU_UYaXP0KmCatcTKuz91p5yK_-2D5fJxU_bBQcFXThWptiNbqBNSH5b84t4WGvWRHEC_Z25sqUMn-V1vA0aIaaeQb-SPMvnbTQkJhUT25Q; mp_mixpanel__c=0; intercom-session-v8m0o18j=T3dHNlRHbEJpTGdLc1NBU3BFbHhib0EwcnNqZ2o0ZTJBQVB4UlVpMUtmc2VUb01KZ3dsaldid01Sa1VnVlFWWi0tdWxRNjV6QVA0d2Mzb1lPZ1RZcklyQT09--17760aca200da1aa468fa44f4331e3f3bf6be05c; SERVERID=web3|Wqr1Z|Wqrzy; mp_41272d18399c471ff77934a08cde5694_mixpanel=%7B%22distinct_id%22%3A%20%2246249%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24search_engine%22%3A%20%22google%22%2C%22First%20visit%22%3A%201515396947382%7D';

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
      // var mkdirp = require('mkdirp');
      //
      // mkdirp('/path/to/dir', function (err) {
      //     if (err) console.error(err)
      //     else console.log('dir created')
      // });

      var startDateString = startDate.replace(/\//g, "-");
      var endDateString = endDate.replace(/\//g, "-");
      // var writeStream = fs.createWriteStream("month-" + startDateString.substring(3,10) + "/ใบเก็บเตา["+startDateString+" - "+endDateString+"].xls");
      var writeStream = fs.createWriteStream("ใบเก็บเตา["+startDateString+" - "+endDateString+"].xls");
      var tab = "\t";
      var newLine = "\n";

      var textToExcel = "Invoice Number" + tab + "ชื่อ" + tab + "ราคา" + tab + "เบอร์โทร" + tab + "ที่อยู่" + newLine;

      for(var i=clientInfoArray.length-1; i>=0; i--) {
        textToExcel += clientInfoArray[i].invoiceNumber + tab + clientInfoArray[i].name + tab + clientInfoArray[i].value + tab + clientInfoArray[i].contactNumber + tab + clientInfoArray[i].addressLine1 + clientInfoArray[i].addressLine2 + newLine;
      }

      writeStream.write(textToExcel);

      writeStream.close();
    }, 1500);

  }, documentIdArray.length * 1500);

});
