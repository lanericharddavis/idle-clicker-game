let clickUpgrades = {
  poleUpgrades: {
    price: 50,
    quantity: 0,
    multiplier: 2
  },
  netUpgrades: {
    price: 200,
    quantity: 0,
    multiplier: 10
  },
  boatUpgrades: {
    price: 1000,
    quantity: 0,
    multiplier: 50
  },
  fleetUpgrades: {
    price: 5000,
    quantity: 0,
    multiplier: 200
  }
}



let fishCount = 0
let clickValue = 1
let poleCount = 0
let polePrice = 50
let poleValue = 0
let netCount = 0
let netPrice = 200
let netValue = 0
let boatCount = 0
let boatPrice = 1000
let boatValue = 0
let fleetCount = 0
let fleetPrice = 5000
let fleetValue = 0
let autoFishies = null

function upgradeQuantity() {
  clickUpgrades.poleUpgrades['quantity'] = poleCount
  clickUpgrades.netUpgrades['quantity'] = netCount
  clickUpgrades.boatUpgrades['quantity'] = boatCount
  clickUpgrades.fleetUpgrades['quantity'] = fleetCount
}

function priceIncrease() {
  clickUpgrades.poleUpgrades['price'] = polePrice
  clickUpgrades.netUpgrades['price'] = netPrice
  clickUpgrades.boatUpgrades['price'] = boatPrice
  clickUpgrades.fleetUpgrades['price'] = fleetPrice
}

function valueCalculator() {
  poleValue = poleCount * 2
  netValue = netCount * 10
  boatValue = boatCount * 50
  fleetValue = fleetCount * 200
}

function clickValueUpdater() {
  if (fleetCount > 0) {
    clickValue = (clickUpgrades.fleetUpgrades.multiplier * fleetCount) + (clickUpgrades.boatUpgrades.multiplier * boatCount) + (clickUpgrades.netUpgrades.multiplier * netCount) + (clickUpgrades.poleUpgrades.multiplier * poleCount)
  }
  else if (boatCount > 0) {
    clickValue = (clickUpgrades.boatUpgrades.multiplier * boatCount) + (clickUpgrades.netUpgrades.multiplier * netCount) + (clickUpgrades.poleUpgrades.multiplier * poleCount)
  }
  else if (netCount > 0) {
    clickValue = (clickUpgrades.netUpgrades.multiplier * netCount) + (clickUpgrades.poleUpgrades.multiplier * poleCount)
  }
  else if (poleCount > 0) {
    clickValue = clickUpgrades.poleUpgrades.multiplier * poleCount
  }
  else {
    clickValue = 1
  }
}

function goFish() {
  document.getElementById("fishImg")
  fishCount += clickValue
  console.log("fish")
  getStarted()
  sepiaFilter()
}

function autoFish() {
  if (boatCount > 0) {
    fishCount += 25
  }

  if (fleetCount > 0) {
    fishCount += 100
  }
  getStarted()
}

function sepiaFilter() {
  if (fishCount >= polePrice) {
    document.getElementById("buyPole").classList.remove("sepia-filter")
  }
  document.getElementById("buyPole").classList.add("sepia-filter")

  if (fishCount >= netPrice) {
    document.getElementById("buyNet").classList.remove("sepia-filter")
  }
  document.getElementById("buyNet").classList.add("sepia-filter")

  if (fishCount >= boatPrice) {
    document.getElementById("buyBoat").classList.remove("sepia-filter")
  }
  document.getElementById("buyBoat").classList.add("sepia-filter")

  if (fishCount >= fleetPrice) {
    document.getElementById("buyFleet").classList.remove("sepia-filter")
  }
  document.getElementById("buyFleet").classList.add("sepia-filter")
}

function buyPole() {
  if (fishCount >= polePrice) {
    document.getElementById("buyPole").disabled = false
    poleCount++
    fishCount -= polePrice
    polePrice *= 2
    upgradeQuantity()
    clickValueUpdater()
    priceIncrease()
    valueCalculator()
    console.log("pole")
    drawStats()
    drawPriceUpdate()
  }
  document.getElementById("buyPole").disabled = true
}

function buyNet() {
  if (fishCount >= netPrice) {
    document.getElementById("buyNet").disabled = false
    netCount++
    fishCount -= netPrice
    netPrice *= 2
    upgradeQuantity()
    clickValueUpdater()
    priceIncrease()
    valueCalculator()
    console.log("net")
    drawStats()
    drawPriceUpdate()
  }
  document.getElementById("buyNet").disabled = true
}

function buyBoat() {

  if (fishCount >= boatPrice) {
    document.getElementById("buyBoat").disabled = false
    boatCount++
    fishCount -= boatPrice
    boatPrice *= 2
    upgradeQuantity()
    clickValueUpdater()
    priceIncrease()
    valueCalculator()
    console.log("boat")
    autoFishBoatTimer()
    drawStats()
  }
  document.getElementById("buyBoat").disabled = true
}

function buyFleet() {
  if (fishCount >= fleetPrice) {
    document.getElementById("buyFleet").disabled = false
    fleetCount++
    fishCount -= fleetPrice
    fleetPrice *= 2
    upgradeQuantity()
    clickValueUpdater()
    priceIncrease()
    valueCalculator()
    console.log("fleet")
    drawStats()
    autoFishFleetTimer()
    drawPriceUpdate()
  }
  document.getElementById("buyFleet").disabled = true
}

function autoFishBoatTimer() {
  setInterval(() => {
    autoFish(),
      console.log("3 seconds have passed")
  }, 3000)
}

function autoFishFleetTimer() {
  setInterval(() => {
    autoFish(),
      console.log("10 seconds have passed")
  }, 10000)
}

function getStarted() {
  drawStats()
  drawPriceUpdate()
}


function drawStats() {
  let statsUpdate = document.getElementById('statsUpdate')
  let template = `
      <div class="col-md-4">
        <p>STATS</p>
        <p>Fishing Poles: ${poleCount} | Pole Value: ${poleValue}</p>
        <p>Fishing Nets: ${netCount}| Net Value: ${netValue}</p>
        <p>Fishing Boats: ${boatCount}| Boat Value: ${boatValue}</p>
        <p>Fishing Fleets: ${fleetCount}| Fleet Value: ${fleetValue}</p>
        <p>Fish Per Click: ${clickValue}</p>
      </div>
      <div class="col-md-4">
        <img src="./fish.jpg" alt="" class="smFishImg no-select"
          onclick="goFish()">
      </div>
      <div class="col-md-4">
        <p>Your Fish Count: ${fishCount}</p>
      </div>
  `
  statsUpdate.innerHTML = template
}

function drawPriceUpdate() {
  let priceUpdate = document.getElementById('priceUpdate')
  let template = `

      <div class="col-md-3">
        <img src="./fishingpole.jpg" alt="" id="buyPole" class="smEnhanceImgs sepia-filter"
          onclick="buyPole()">
        <p>Fishing Pole</p>
        <p>Unlock Purchase at 50 Fish</p>
        <p>Price: ${polePrice} Fish</p>
        <p>+2 Fish / Click / # of Poles</p>
      </div>
      <div class="col-md-3">
        <img
          src="./net.jpg"
          alt="" id="buyNet" class="smEnhanceImgs sepia-filter" onclick="buyNet()">
        <p>Fishing Net</p>
        <p>Unlock Purchase at 200 Fish</p>
        <p>Price: ${netPrice} Fish</p>
        <p>+10 Fish / Click / # of Nets</p>
      </div>
      <div class="col-md-3">
        <img src="./boat.jpg" alt=""
          id="buyBoat" class="smEnhanceImgs sepia-filter" onclick="buyBoat()">
        <p>Fishing Boat</p>
        <p>Unlock Purchase at 1000 Fish</p>
        <p>Price: ${boatPrice} Fish</p>
        <p>+50 Fish / Click / # of Boats</p>
        <p>Auto +25 Fish Per 3 Seconds</p>
      </div>
      <div class="col-md-3">
        <img
          src="./fleet.jpg"
          alt="" id="buyFleet" class="smEnhanceImgs sepia-filter" onclick="buyFleet()">
        <p>Fishing Fleet</p>
        <p>Unlock Purchase at 5000 Fish</p>
        <p>Price: ${fleetPrice} Fish</p>
        <p>+200 Fish / Click / # of Fleets</p>
        <p>Auto +100 Fish Per 10 Seconds</p>
      </div>

  `
  priceUpdate.innerHTML = template
}


