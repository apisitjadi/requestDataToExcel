var request = require("request");
var http = require('http');
var async = require('async');
var Promise = require("bluebird");
var rp = require('request-promise');
var clientInfoArray = [];
var startDate = "24/09/2017";
var endDate = "24/09/2017";

var flowaccountCookie = 'freeTrialNotifications=121; mp_mixpanel__c=31; listNewClicked=true; AWSELB=39B5C9C70C262FEB823BE8D91E96B47E990F9EE01E1CFBA1BA32E5CEAE86A9BB2171D46868A5DE9F89A97B906994549002223554A31D6C28581864BEC921F1848BEFCBAAF9; ASP.NET_SessionId=btxcpmfk1ogvkshbmz315h3p; __RequestVerificationToken=8TTVoKGkmgwdb6ixv00MZ9Fpcu5oZcTKPjNapZ68OFOyPcyxIziSjTVXH3Knh5vtEpkgknlNae5Os7KloiSBov0VIUhdf_-VoHcf-fCqVw41; _ga=GA1.2.1264918240.1505822896; _gid=GA1.2.379918577.1505976874; .AspNet.ExternalCookie=a9UPWfUvcT8uK6_gDfLUj9PKPFLG79TFNkcvGcvU7A5f9i3RhXc510otQlere7ucnl_jYTxDJAKK7KXWBAWBaG5arswcXkJXloRZFthvykoGEMYZkOmsd60DNMw4n9rRGNwGdr_rSBLx2F8ocO0VntEos_eZ3H0tJOQLzOPArACgRo7ovYKoGWmYEqkxv8CGpuSiydgMYM_ZrHsfChGYkIVpm6tmnATdZ3PNRbeFp6RrP2wIXyV5BMvch35rInJX5Oy5IdcYh7YocSr3uqR9AH7zpeZHvWlJDmP0J13OEUgZqOs2ukjvxsGuO1yjedej5DM26M3dufoR4qSTVp7XBcb51zspUXIF2zzsFHM9hpFFXVe-Lcyh-NCCxEr4FeSAv1u7nN4NILOfR7gDPoLAMO5AxdgDWtOykA-3Yh9i1ni6UY6tB0K2x1KkaEEJY1fn_cHZOaD_gMhyWt352o9xzcwjkeczQYHMMgangaXCo30; FlowApp.ApplicationCookie=x8LEs9ZnHvZQaiNmCjHc_zpvO8Nhxl3P7Yu6H7JWbE69FvZ9vnkI7uJhQi5tX9H9QIfZI6XpAN1J4mQ7uclsPlpzNBg3a4MqB5_0FEDt8laRlDWo6XAGorcuAsrHOkvuybcMhjUltTEAgKz5YV5jicZ0wG8MVj1TI8Ie5fzHRvBGwuy3ROrjKc_f4Uo9nRgLl8IrWP8peWLt3AlRuGGNjeb5QhzvWxs7ZzAK58u9NX3FHqzrrwur95SrYX6G8I1f0rLeOIoar4y3UmAKfqyiYFB0LPrX0bfI9mhvBDDIkOKvK2PP-y1mlIFc81GA4kjqDl-IEgejIVUYB20Z77wlR9lpi0hD80HueBiIh_tauOlvmwCAcvTVumNzlDLPqcVx5z8gqx_TB1SgHCZCgTJnjymsziQmWJdC2f4daumXuuwPBL--qfiLcuCjhp-jX37__mHaBxvilDMei9F4zeRYjQfFl7mu1t5myhVFHjHm-qUP5x4X5r8Gmm8r8OYg7srwh0lqfUVzLK0X5BYFmN_vNWkMm3z1EVKsxm6tvIx4lYw; mp_41272d18399c471ff77934a08cde5694_mixpanel=%7B%22distinct_id%22%3A%20%2246249%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fapp.flowaccount.com%2FCompanyAdmin%2Fth%22%2C%22%24initial_referring_domain%22%3A%20%22app.flowaccount.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpap%22%3A%20%5B%5D%7D; intercom-session-v8m0o18j=NTREQWlINHB6bnd1SWsvQ29zL3dTWGJkNHJLS2xkVDJHYjhSdkNFWDNrYXpBU3lBWklvY1BqdHEvZHl2b0F0Qy0tUngwRlRZM1B0U1pJQmM0bmErQ3FWQT09--087ff1fd84612246e007a97ed7c401c34f7d04d8; SERVERID=web5|WcfzY|WcfKU; mp_mixpanel__c=3; myappculture=th';

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

      for(var i=0; i<clientInfoArray.length; i++) {
        textToExcel += clientInfoArray[i].invoiceNumber + tab + clientInfoArray[i].name + tab + clientInfoArray[i].value + tab + clientInfoArray[i].contactNumber + tab + clientInfoArray[i].addressLine1 + clientInfoArray[i].addressLine2 + newLine;
      }

      writeStream.write(textToExcel);

      writeStream.close();
    }, 1500);

  }, documentIdArray.length * 1500);

});
