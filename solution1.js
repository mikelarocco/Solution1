//handle resize (hide blue table at 400px)
function displayResize() {
   var curWidth = parseInt(document.getElementById("solutionContainer").offsetWidth);
   if ( curWidth < 400 ) {
     document.getElementById("blueTableContainer").style.display = 'none';
   } else {
     document.getElementById("blueTableContainer").style.display = 'block';  
   }
}
//display configuration dialog for given table
function configure(tableName) {
   var unhideDiv = document.getElementById(tableName + "TableInputs");
   unhideDiv.style.display = 'block';
   document.getElementById(tableName + "nInput").value = '';
   document.getElementById(tableName + "xInput").value = '';
   document.getElementById(tableName + "mInput").value = '';
   document.getElementById(tableName + "wInput").value =       parseInt(document.getElementById(tableName + 'TableContainer').style.width);
   checkCookies(tableName);  //load config dialog with any saved data
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
  
  // make sure increment works here
  if ( ( m < n ) && ( x > 0 ) ) {
    xFactor.value = xFactor.value + ' is invalid';
    invalidEntry = true;  
  }
  //leave it to positive #'s for the time being
  if ( x <= 0 ) {
    xFactor.value = xFactor.value + ' is invalid';
    invalidEntry = true;    
  }
  
  if ( n <= 0 ) {
    nFactor.value = nFactor.value + ' is invalid';
    invalidEntry = true;    
  }
  
  if ( m <= 0 ) {
    mFactor.value = mFactor.value + ' is invalid';
    invalidEntry = true;    
  }
  
  // keep it from getting too small
  if ( ( w < 20 ) || ( w > 40)) {
    wFactor.value = wFactor.value + ' is invalid';
    invalidEntry = true;  
  }
  
  //skip table generation if inputs do not make sense
  if ( !invalidEntry ) {
      var direction = document.getElementById(tableName + "Direction").value; 
      //Make sure width changed before doing anything
      var curWidth = parseInt(document.getElementById(tableName + 'TableContainer').style.width);
      if ( curWidth != w ) {
        document.getElementById(tableName + "Percent").textContent = w + "%";
      
        document.getElementById(tableName + 'TableContainer').
            setAttribute("style","width:" + w + "%");
      }
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
          if ( ( direction == 'LTR-UP' ) && isOdd(curRow)) {
             startIndex = 4;
             endIndex = 0;
             increment = -1;
          } else if ( ( direction == 'RTL-UP' ) && !isOdd(curRow)) {
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
      
      var newTable = newTableContents;      
      var tableBody = document.getElementById(tableName + "Body");
      tableBody.innerHTML = newTable;
     // store table config in cookies 
     saveTableForLater(tableName,m,n,x)
     //hide user inpus
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

//store table config value in cookies (note width
//and direction not stored)
function saveTableForLater(tableName,m,n,x) { 
  var d = new Date();
  var numDays = 3;
  d.setTime(d.getTime() + (numDays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = tableName + "X=" + x + ";" + expires + ";";
  document.cookie = tableName + "M=" + m + ";" + expires + ";";
  document.cookie = tableName + "N=" + n + ";" + expires + ";";
}
// any cookies out there from before?
function checkCookies(tableName) {
   //checkTable
   var cookieVal = getCookie(tableName + 'X');
   if ( cookieVal.length > 0 ) {
     document.getElementById(tableName + "xInput").value = cookieVal;
     document.getElementById(tableName + "nInput").value = getCookie(tableName + 'N');
     document.getElementById(tableName + "mInput").value = getCookie(tableName + 'M')
   }
}

//get table COOKIE by name
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
