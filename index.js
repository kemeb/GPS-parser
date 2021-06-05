const lat = "4 deg 33' 0.45\" N";
const long = "75 deg 39' 35.02\" W";

const longArr = long.split(" ");
const longDeg = parseInt(longArr[0]);
const longMin = parseInt(longArr[2]);
const longSec = parseFloat(longArr[3]);
const longDir = longArr[4];

const latArr = lat.split(" ");
const latDeg = parseInt(latArr[0]);
const latMin = parseInt(latArr[2]);
const latSec = parseFloat(latArr[3]);
const latDir = latArr[4];

const calcLong = (longDeg, longMin, longSec, longDir) => {
  if (longDir === "S" || longDir === "W") {
    const sol = (longDeg + longMin / 60 + longSec / 3600).toFixed(4);
    const solution1 = "-" + sol;
    return solution1;
  } else {
    const sol = (longDeg + longMin / 60 + longSec / 3600).toFixed(4);
    const solution2 = "" + sol;
    return solution2;
  }
};

const calcLat = (latDeg, latMin, latSec, latDir) => {
  if (latDir === "S" || latDir === "W") {
    const sol = (latDeg + latMin / 60 + latSec / 3600).toFixed(4);
    const solution1 = "-" + sol;
    return solution1;
  } else {
    const sol = (latDeg + latMin / 60 + latSec / 3600).toFixed(4);
    const solution2 = "" + sol;
    return solution2;
  }
};

const readyLong = calcLong(longDeg, longMin, longSec, longDir);
const readyLat = calcLat(latDeg, latMin, latSec, latDir);

console.log(readyLat + " " + readyLong);
