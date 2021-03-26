let fishCount = 0

let fishClickUpgrades = {
  pole: 0,
  net: 0,
  boat: 0,
  fleet: 0,
}


function goFish() {
  document.getElementById("fishImg")
  fishCount++
  console.log("fish")
  draw()
}

function poleMultiplier() {
  document.getElementById("poleMultipier")
  fishClickUpgrades.pole++
  console.log("pole")
}

function netMultiplier() {
  document.getElementById("netMultipier")
  fishClickUpgrades.net++
  console.log("net")
}

function boatMultiplier() {
  document.getElementById("boatMultipier")
  fishClickUpgrades.boat++
  console.log("boat")
}

function fleetMultiplier() {
  document.getElementById("fleetMultipier")
  fishClickUpgrades.fleet++
  console.log("fleet")
}


function draw() {
  let countUpdate = document.getElementById('fishStats')
  let template = `
  
    <div id="fishStats" class="row align-items-center py-5 text-center">
      <div class="col-md-4">
        <p>STATS</p>
        <p>Fishing Poles: ${fishClickUpgrades.pole}</p>
        <p>Fishing Nets: ${fishClickUpgrades.net}</p>
        <p>Fishing Boats: ${fishClickUpgrades.boat}</p>
        <p>Fishing Fleets: ${fishClickUpgrades.fleet}</p>
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