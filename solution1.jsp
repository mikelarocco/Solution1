<!DOCTYPE html>

<html>
<head>
<link rel="stylesheet" type="text/css" href="solution1.css">
<script src="solution1.js"></script>
</head>
<body onresize="displayResize()">

<div id='solutionContainer'>

<div id='redTableContainer' style='float:left;width:30%'>
<div id='redTableDiv'>
<table>
  <tbody id='redBody'>
    <tr>
      <td bgcolor='grey'></td>
      <td bgcolor='grey'></td>
      <td bgcolor='grey'></td>
      <td bgcolor='grey'></td>
      <td bgcolor='grey'></td>
    </tr>
  </tbody>
</table>
<br>
<button onclick="configure('red')">Configure</button> 
<span id='redPercent' style='float:right'>30%</span>
</div>
<br>
<div id='redTableInputs' style='display:none' >
<p>Table:<span style='color:green'>RED</span></p>
<br>
  <label for="rednInput">N = </label>
  <input type="text" id="rednInput" name="rednInput">
 <br><br>
  <label for="redxInput">X = </label>
  <input type="text" id="redxInput" name="redxInput">
 <br><br>
   <label for="redxInput">M = </label>
  <input type="text" id="redmInput" name="redmInput">
 <br><br> 
   <label for="wInput">W = </label>
  <input type="text" id="redwInput" name="redwInput">%
 <br><br>
 <label for="redDirection">D = </label>

 <select id="redDirection">
  <option value="LTR-UP">LTR-UP</option>
  <option value="RTL-UP">RTL-UP</option>
 </select> 
 <br><br>
<button onclick="processTableInputs('red')">OK</button> 
<button onclick="hideTableInputs('red')">Cancel</button>
</div>
</div>
<div id='greenTableContainer' style='float:left;padding-left:30px;width:30%'>
<div id='greenTableDiv'>
<table>
  <tbody id='greenBody'>
  <tr>
    <td bgcolor='grey'></td>
    <td bgcolor='grey'></td>
    <td bgcolor='grey'></td>
    <td bgcolor='grey'></td>
    <td bgcolor='grey'></td>
  </tr>
  </tbody>
</table>
<br>
<button onclick="configure('green')">Configure</button> 
<span id='greenPercent' style='float:right'>30%</span>
</div>
<br>
<div id='greenTableInputs' style='display:none'>
<p>Table:<span style='color:green'>GREEN</span></p>
<br>
  <label for="greennInput">N = </label>
  <input type="text" id="greennInput" name="greennInput">
 <br><br>
  <label for="greenxInput">X = </label>
  <input type="text" id="greenxInput" name="greenxInput">
 <br><br>
   <label for="greenxInput">M = </label>
  <input type="text" id="greenmInput" name="greenmInput">
 <br><br> 
   <label for="greenwInput">W = </label>
  <input type="text" id="greenwInput" name="greenwInput">%
 <br><br> 
 <label for="greenDirection">D = </label>

 <select id="greenDirection">
  <option value="LTR-UP">LTR-UP</option>
  <option value="RTL-UP">RTL-UP</option>
 </select>
 <br><br>
<button onclick="processTableInputs('green')">OK</button> 
<button onclick="hideTableInputs('green')">Cancel</button>
</div>
</div>

<div id='blueTableContainer' style='float:left;padding-left:30px;width:25%'>
<div id='blueTableDiv'>
<table>
  <tbody id='blueBody'>
  <tr>
    <td bgcolor='grey'></td>
    <td bgcolor='grey'></td>
    <td bgcolor='grey'></td>
    <td bgcolor='grey'></td>
    <td bgcolor='grey'></td>
  </tr>
  </tbody>
</table>
<br>
<button onclick="configure('blue')">Configure</button> 
<span id='bluePercent' style='float:right'>25%</span>
</div>
<br>
<div id='blueTableInputs' style='display:none'>
<p>Table:<span style='color:blue'>BLUE</span></p>
<br>
  <label for="bluenInput">N = </label>
  <input type="text" id="bluenInput" name="bluenInput">
 <br><br>
  <label for="bluexInput">X = </label>
  <input type="text" id="bluexInput" name="bluexInput">
 <br><br>
   <label for="bluemInput">M = </label>
  <input type="text" id="bluemInput" name="bluemInput">
 <br><br> 
   <label for="bluewInput">W = </label>
  <input type="text" id="bluewInput" name="bluewInput">%
 <br><br> 
 <label for="blueDirection">D = </label>

 <select id="blueDirection">
  <option value="LTR-UP">LTR-UP</option>
  <option value="RTL-UP">RTL-UP</option>
 </select>
 <br><br>
<button onclick="processTableInputs('blue')">OK</button> 
<button onclick="hideTableInputs('blue')">Cancel</button>
</div>

</div>
</body>
</html>
  
