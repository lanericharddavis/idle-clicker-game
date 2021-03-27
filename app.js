// let fishClickUpgrades = [
//   {
//     name: "pole",
//     value: 2,
//     currentValue: 0
//   },
//   {
//     name: "net",
//     value: 10,
//     currentValue: 0
//   },
//   {
//     name: "boat",
//     value: 50,
//     currentValue: 0
//   },
//   {
//     name: "fleet",
//     value: 200,
//     currentValue: 0
//   }
// ]



let poleUpgrades = {
  'value': 2,
  'currentValue': 0
}
let netUpgrades = {
  'value': 10,
  'currentValue': 0
}
let boatUpgrades = {
  'value': 50,
  'currentValue': 0
}
let fleetUpgrades = {
  'value': 200,
  'currentValue': 0
}
let autoUpgrades = {}
let fishCount = 0
let clickValue = 1
let poleCount = 0
let netCount = 0
let boatCount = 0
let fleetCount = 0



function goFish() {
  document.getElementById("fishImg")
  fishCount += clickValue
  console.log("fish")
  draw()
}

function drawStats() {
  poleCount = poleUpgrades.currentValue
  netCount = netUpgrades.currentValue
  boatCount = boatUpgrades.currentValue
  fleetCount = fleetUpgrades.currentValue
}

function poleCounter() {
  if (fishCount >= 10) {
    document.getElementById("poleCounter").disabled = false
    poleCount++
    fishCount -= 50
    console.log("pole")
    draw()
  }
  document.getElementById("poleCounter").disabled = true
}

function netCounter() {
  if (fishCount >= 20) {
    document.getElementById("netCounter").disabled = false
    netCount++
    fishCount -= 200
    console.log('net')
    draw()
  }
  document.getElementById("netCounter").disabled = true
}

function boatCounter() {
  if (fishCount >= 30) {
    document.getElementById("boatCounter").disabled = false
    boatCount++
    console.log("boat")
    draw()
  }
  document.getElementById("boatCounter").disabled = true
}

function fleetCounter() {
  if (fishCount >= 40) {
    document.getElementById("fleetCounter").disabled = false
    fleetCount++
    console.log("fleet")
    draw()
  }
  document.getElementById("fleetCounter").disabled = true
}


function draw() {
  let countUpdate = document.getElementById('fishStats')
  let template = `
  
    <div id="fishStats" class="row align-items-center py-5 text-center">
      <div class="col-md-4">
        <p>STATS</p>
        <p>Fishing Poles: ${poleCount} </p>
        <p>Fishing Nets: ${netCount} </p>
        <p>Fishing Boats: ${boatCount} </p>
        <p>Fishing Fleets: ${fleetCount} </p>
      </div>
      <div id="fishImg" class="col-md-4">
        <img src="//placehold.it/200x200" alt="" onclick="goFish()">
      </div>
      <div class="col-md-4">
        <p>Your Fish Count: ${fishCount}</p>
      </div>
    </div>
  `
  countUpdate.innerHTML = template
}

draw()