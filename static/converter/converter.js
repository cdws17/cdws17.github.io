// Switches between units
function grpSwitch() {
  let grp = window.grpSelect;
  for (i = 0; i < grp.length; i++) {
    grpName = window.grpSelect[i].value;
    window[grpName].style.display = "none";
  }
  window[grp.value].style.display = "";
}
//adds commas based on unit
function addCommas(nStr) {
  nStr += '';
  let x = nStr.split('.');
  let x1 = x[0];
  let x2 = x.length > 1 ? '.' + x[1] : '';
  let rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}

//converts unit values
function convUnits(c) {
  let amt = document.getElementById(c+ "amt").value;
  let result = document.getElementById("result");

  let frUnit = window[c + "fr"].value;
  let frVal = units[frUnit];
  let toUnit = window[c + "to"].value;
  let toVal = units[toUnit];

  if (frVal == undefined || toVal == undefined) {
    result.style.display = "none";
    return;
  }

  let frAbbrev = abbrev[frUnit];
  let toAbbrev = abbrev[toUnit];

  result.style.display = "";
  result.innerHTML = amt + " " + frAbbrev + " = " + addCommas(((amt*frVal)/toVal).toFixed(3)) + " " + toAbbrev + " <br>" + amt + " " + toAbbrev + " = " + addCommas(((amt*toVal)/frVal).toFixed(3)) + " " + frAbbrev;
  return true;
}

//converts between temperatures
function convTmp() {
  let amt = document.getElementById("tmpamt").value;

  let frUnit = window["tmpfr"].value;
  let frVal = units[frUnit];
  let toUnit = window["tmpto"].value;
  let toVal = units[toUnit];

  frAbbrev = abbrev[frUnit];
  toAbbrev = abbrev[toUnit];

  if (frUnit == "uDegc" && toUnit == "uDegf") { var res = parseInt(amt) * (9/5) + 32; var res2 = (((parseInt(amt)) + 459.67) * (5/9)) - 273.15 }
  if (frUnit == "uDegc" && toUnit == "uDegk") { var res = parseInt(amt) + 273.15; res2 = parseInt(amt) - 273.15 }
  if (frUnit == "uDegc" && toUnit == "uDegn") { var res = parseInt(amt)/(100/33); res2 = parseInt(amt)*(100/33) }
  if (frUnit == "uDegc" && toUnit == "uDegc") { var res = parseInt(amt); var res2 = parseInt(amt) }

  if (frUnit == "uDegf" && toUnit == "uDegc") { var res = (((parseInt(amt)) + 459.67) * (5/9)) - 273.15; var res2 = parseInt(amt) * (9/5) + 32 }
  if (frUnit == "uDegf" && toUnit == "uDegk") { var res = ((parseInt(amt)) + 459.67) * (5/9); res2 = (parseInt(amt) - 273.15) * (9/5) + 32 }
  if (frUnit == "uDegf" && toUnit == "uDegn") { var res = ((parseInt(amt) - 32)/(9/5))/(100/33); res2 = (parseInt(amt)*(100/33)) * (9/5) + 32 }
  if (frUnit == "uDegf" && toUnit == "uDegf") { var res = parseInt(amt); var res2 = parseInt(amt) }

  if (frUnit == "uDegk" && toUnit == "uDegc") { var res = parseInt(amt) - 273.15; var res2 = parseInt(amt) + 273.15 }
  if (frUnit == "uDegk" && toUnit == "uDegf") { var res = (parseInt(amt) - 273.15) * (9/5) + 32; res2 = ((parseInt(amt)) + 459.67) * (5/9) }
  if (frUnit == "uDegk" && toUnit == "uDegn") { var res = (parseInt(amt) - 273.15)/(100/33); res2 = parseInt(amt) * (100/33) + 273.15 }
  if (frUnit == "uDegk" && toUnit == "uDegk") { var res = parseInt(amt); var res2 = parseInt(amt) }

  if (frUnit == "uDegn" && toUnit == "uDegc") { var res = parseInt(amt)*(100/33); var res2 = parseInt(amt)/(100/33) }
  if (frUnit == "uDegn" && toUnit == "uDegf") { var res = (parseInt(amt)*(100/33)) * (9/5) + 32; res2 = ((parseInt(amt) - 32)/(9/5))/(100/33) }
  if (frUnit == "uDegn" && toUnit == "uDegk") { var res = parseInt(amt) * (100/33) + 273.15; res2 = (parseInt(amt) - 273.15)/(100/33) }
  if (frUnit == "uDegn" && toUnit == "uDegn") { var res = parseInt(amt); var res2 = parseInt(amt) }

  let result = document.getElementById("result");
  result.style.display = "";
  result.innerHTML = amt + " " + frAbbrev + " = " + res.toFixed(1) + " " + toAbbrev + " <br>" + amt + " " + toAbbrev + " = " + res2.toFixed(1) + " " + frAbbrev;
  return true;
}

//list of units and relative values e.g., 1 min = 60 seconds
var units = {
  "ums":"0.001",
  "uSec":"1",
  "uMin":"60",
  "uHr":"3600",
  "uDay":"86400",
  "uWk":"604800",
  "uMo":"2592000",
  "uYr":"31536000",
  "uDec":"315360000",
  "uC":"3153600000",
  "uMm":"0.001",
  "uCm":"0.01",
  "uM":"1",
  "uIn":"0.0254",
  "uFt":"0.3048",
  "uYd":"0.9144",
  "uMi":"1609.344",
  "uBit":"1",
  "uByte":"8",
  "uKb":"8192",
  "uMb":"8388608",
  "uGb":"8589934592",
  "uTb":"8796093022208",
  "uCm2":"0.0001",
  "uM2":"1",
  "uKm2":"1000000",
  "uHectare":"10000",
  "uSqin":"0.00064516",
  "uSqft":"0.09290304",
  "uSqmi":"2589988.1103359996",
  "uAcre":"4046.8564224",
  "uMg":"0.000001",
  "uG":"0.001",
  "uKg":"1",
  "uTon":"1000",
  "uOzTr":"0.031103",
  "uOzav":"0.028349523125",
  "uLb":"0.45359237",
  "uStone":"6.35029318",
  "uSt":"907.18474",
  "uL":"0.001",
  "uMl":"0.000001",
  "uCc":"0.000001",
  "uMm3":"0.000000001",
  "uM3":"1",
  "uKm3":"1000000000",
  "uFloz":"0.000028413062499999998",
  "uTsp":"0.000004735510416666666",
  "uTbsp":"0.000014206531249999999",
  "uCup":"0.00022730449999999999",
  "uGali":"0.004546090000000001",
  "uGalu":"0.003785411784",
  "uPt":"0.00056826125",
  "uQt":"0.0011365225000000002",
  "uCuin":"0.000016387064",
  "uCuft":"0.028316846592",
  "uCumi":"4168181825.440579584",
  "uMs":"1",
  "uKmh":"0.277777777777777",
  "uMph":"0.44704",
  "uMpm":"26.8224",
  "uMps":"1609.344",
  "uFps":"0.3048",
  "uR":"1",
  "uD":"0.017453308908541416422",
  "uGr":"0.01570796326",
  "uMR":"0.001",
  "uAM":"0.0002908882",
  "uAS":"0.00000484813",
  "uJ":"1",
  "uKJ":"1000",
  "uGC":"4.184",
  "uKC":"4184",
  "uWH":"3600",
  "uKWH":"3600000",
  "uEV":"1.6022e-19",
  "uBTU":"1055.06",
  "uUT":"1.05506e+8",
  "uPa":"1",
  "uBar":"100000",
  "uPSI":"6894.76",
  "uTorr":"133.322",
  "uSa":"101325",
  "uHz":"1",
  "ukHz":"1000",
  "uMHz":"1000000",
  "uGHz":"1000000000"
}

//temp unit values
let temp = {
  "uDegc":"1,-273.15",
  "uDegf":"1,459.67*(5/9)",
  "uDegk":"1,0",
  "uDegn":"(100/33),273.15"
}

//unit abbreviations to be printed with values
let abbrev = {
  "ums":"ms",
  "uSec":"s",
  "uMin":"m",
  "uHr":"hr",
  "uDay":"d",
  "uWk":"wk",
  "uMo":"mo",
  "uYr":"yr",
  "uDec":"dec",
  "uC":"C",
  "uMm":"mm",
  "uCm":"cm",
  "uM":"m",
  "uIn":"in",
  "uFt":"ft",
  "uYd":"yd",
  "uMi":"mi",
  "uBit":"b",
  "uByte":"B",
  "uKb":"KB",
  "uMb":"MB",
  "uGb":"GB",
  "uTb":"TB",
  "uCm2":"cm²",
  "uM2":"m²",
  "uKm2":"km²",
  "uHectare":"hectare",
  "uSqin":"sq in",
  "uSqft":"sq ft",
  "uSqmi":"sq mi",
  "uAcre":"acre",
  "uMg":"mg",
  "uG":"g",
  "uKg":"kg",
  "uTon":"t",
  "uOztr":"oz. tr.",
  "uOzav":"oz. av.",
  "uLb":"lb",
  "uStone":"stone",
  "uSt":"ST",
  "uL":"l",
  "uMl":"mL",
  "uCc":"cc",
  "uMm3":"mm³",
  "uM3":"m³",
  "uKm3":"km³",
  "uFloz":"fl. oz.",
  "uTsp":"tsp.",
  "uTbsp":"tbsp.",
  "uCup":"cup",
  "uGali":"gal (imp.)",
  "uGalu":"gal (US)",
  "uPt":"pt",
  "uQt":"qt",
  "uCuin":"cu in",
  "uCuft":"cu ft",
  "uCumi":"cu mi",
  "uMs":"m/s",
  "uKmh":"km/h",
  "uMph":"mph",
  "uMpm":"mpm",
  "uMps":"mps",
  "uFps":"fps",
  "uDegc":"°C",
  "uDegf":"°F",
  "uDegk":"K",
  "uDegn":"°N",
  "uR":"rad",
  "uD":"°",
  "uGr":"gr",
  "uMR":"mrad",
  "uAM":"′",
  "uAS":"″",
  "uJ":"J",
  "uKJ":"kJ",
  "uGC":"cal",
  "uKC":"kcal",
  "uWH":"Wh",
  "uKWH":"kWh",
  "uEV":"eV",
  "uBTU":"Btu",
  "uUT":"therm",
  "uFP":"ft⋅lbf",
  "uPa":"Pa",
  "uBar":"bar",
  "uPSI":"psi",
  "uTorr":"Torr",
  "uSa":"atm",
  "uHz":"Hz",
  "ukHz":"kHz",
  "uMHz":"MHz",
  "uGHz":"GHz"
}