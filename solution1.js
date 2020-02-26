//display configuration dialog for given table
function configure(tableName) {
   var unhideDiv = document.getElementById(tableName + "TableInputs");
   unhideDiv.style.display = 'block';
   document.getElementById(tableName + "nInput").value = '';
   document.getElementById(tableName + "xInput").value = '';
   document.getElementById(tableName + "mInput").value = '';
   document.getElementById(tableName + "wInput").value = '';
}

function isOdd(num) { return num % 2;}

//user has clicked on OK for given table entries
function processTableInputs(tableName) {

  var invalidEntry = false;
  var nFactor = document.getElementById(tableName + "nInput");
  if ( !isNumber(nFactor.value) ) {
    nFactor.value = nFactor.value + ' is invalid';
    invalidEntry = true;
  }
  var xFactor = document.getElementById(tableName + "xInput");
  if ( !isNumber(xFactor.value) ) {
    xFactor.value = xFactor.value + ' is invalid';
    invalidEntry = true;
  } else if ( parseInt(xFactor.value) == 0 ) {
    xFactor.value = xFactor.value + ' is invalid';
    invalidEntry = true;  
  }
  var mFactor = document.getElementById(tableName + "mInput");
  if ( !isNumber(mFactor.value) ) {
    mFactor.value = mFactor.value + ' is invalid';
    invalidEntry = true;
  } 
  var wFactor = document.getElementById(tableName + "wInput"); 
  if ( !isNumber(wFactor.value) ) {
    wFactor.value = wFactor.value + ' is invalid';
    invalidEntry = true;
  }
  
  //need to check increment vs start/max
  var m = parseInt(mFactor.value) + 1;
  var n = parseInt(nFactor.value);
  var x = parseInt(xFactor.value);  
  var w = parseInt(wFactor.value);
  
  if ( ( m < n ) && ( x > 0 ) ) {
    xFactor.value = xFactor.value + ' is invalid';
    invalidEntry = true;  
  }
    
  if ( ( m > n ) && ( x < 0 ) ) {
    xFactor.value = xFactor.value + ' is invalid';
    invalidEntry = true;  
  }
  
  // keep it from getting too small
  if ( ( w < 20 ) || ( w > 40)) {
    wFactor.value = wFactor.value + ' is invalid';
    invalidEntry = true;  
  }
  
  //skip table generaqtion if inputs do not make sense
  if ( !invalidEntry ) {
      var direction = document.getElementById(tableName + "Direction").value; 
      //set % span text
      document.getElementById(tableName + "Percent").textContent = w + "%";
      
      document.getElementById(tableName + 'TableContainer').
            setAttribute("style","width:" + w + "%");
      
      //lets see how many cells we have (cleanup?)
      var maxValue = n;
      var counter = 1;
      while ( ( maxValue + x ) < m ) {
         maxValue += x;
         counter++;
      }
     
      var numEntities = counter;
      var numRows = Math.ceil(numEntities/5);
      var totalCells = numRows * 5;
      var newTableContents = "";
      
      var i = totalCells;
      
      var displayData = m -1;
      var curRow = numRows;
      while (i > 0 ) { 
          newTableContents += "<tr>";
          //get 1 rows worth of data
          var tdValues = [];
          for (var j = 1; j <= 5; j++) {
             var dataIndex = i - j;
             var cellValue = '';
             var bgcolor = 'bgcolor="grey"';
             if ( dataIndex < numEntities ) {
               var cellValue = maxValue;
               maxValue -= x;
               bgcolor = '';
             }
             var tdValue = '<td ' + bgcolor + '>' + cellValue + '</td>';
             tdValues.push(tdValue);
          }
          
          // order values in table
          var startIndex = 0;
          var endIndex = 4;
          var increment = 1;
          //switch display direction
          if ( ( direction == 'LTR' ) && isOdd(curRow)) {
             startIndex = 4;
             endIndex = 0;
             increment = -1;
          } else if ( ( direction == 'RTL' ) && !isOdd(curRow)) {
             startIndex = 4;
             endIndex = 0;
             increment = -1;
          } 
          curRow--;
          
          while ( startIndex != endIndex ) {
               newTableContents += tdValues[startIndex];
               startIndex += increment;
          }
          newTableContents += tdValues[startIndex];
          
          newTableContents += "</tr>";
          i -= 5;
      }   
      
      var newTable = '<tr>' + newTableContents + '</tr>';
      var tableBody = document.getElementById(tableName + "Body");
      tableBody.innerHTML = newTable;

     hideTableInputs(tableName);
  }
}

//hide the entry form
function hideTableInputs(tableName) {
  var unhideDiv = document.getElementById(tableName + "TableInputs");
  unhideDiv.style.display = 'none';
}

//verify string is integer
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

//if not enough room hide blue
function checkBlueFits() {

}
