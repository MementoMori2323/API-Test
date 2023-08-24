const wbook = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1dlXH3mP0l9NyB648xepKGwD14KK4P0KGTTiKKt-1R0A/edit?usp=sharing');

const sheet = webook.getSheetByName('Floor39');

function doGet(e){
   var action = e.parameters.action;

   if(action == 'getUsers'){
    return getUsers(e);
   }
}

function getUsers(e){
  var rows = sheet.getRange(2,1, sheet.getLastRow()-1, sheet.getLastColumn()).getValues();
  var data = [];

  for(var i=0;i<rows.lenght;i++){
      var row = rows[i];
      var record = {};

      record['Name'] = row[0];
      record['Department'] = row[1];
      record['Workstation#'] = row[2];
      record['Floor'] = row[3];

      data.push(record);
  }   

}

var result = JSON.stringify(data);

return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
