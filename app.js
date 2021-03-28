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
    drawStats()
    autoFishBoatTimer()
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
    drawPriceUpdate()
    autoFishFleetTimer()
  }
  document.getElementById("buyFleet").disabled = true
}

function autoFishBoatTimer() {
  setInterval(() => { fishCount += 25 }, 3000)
}

function autoFishFleetTimer() {
  setInterval(() => { fishCount += 100 }, 10000)
}

function getStarted() {
  drawStats()
  drawPriceUpdate()
}


function drawStats() {
  let statsUpdate = document.getElementById('statsUpdate')
  let template = `

    <div id="statsUpdate" class="row align-items-center justify-content-center py-5  text-center">
      <div class="col-md-4">
        <p>STATS</p>
        <p>Fishing Poles: ${poleCount} | Pole Value: ${poleValue}</p>
        <p>Fishing Nets: ${netCount}| Net Value: ${netValue}</p>
        <p>Fishing Boats: ${boatCount}| Boat Value: ${boatValue}</p>
        <p>Fishing Fleets: ${fleetCount}| Fleet Value: ${fleetValue}</p>
        <p>Fish Per Click: ${clickValue}</p>
      </div>
      <div class="col-md-4">
        <img src="http://www.pngall.com/wp-content/uploads/2016/03/Fish-PNG-4.png" alt="" class="smFishImg no-select"
          onclick="goFish()">
      </div>
      <div class="col-md-4">
        <p>Your Fish Count: ${fishCount}</p>
      </div>
    </div>

  `
  statsUpdate.innerHTML = template
}

function drawPriceUpdate() {
  let priceUpdate = document.getElementById('priceUpdate')
  let template = `

    <div id="priceUpdate" class="row text-center text-light">
      <div class="col-md-3">
        <img src="https://fishingbooker.com/blog/media/rsz_rod_closeup.jpg" alt="" id="buyPole" class="smEnhanceImgs sepia-filter"
          onclick="buyPole()">
        <p>Fishing Pole</p>
        <p>Unlock Purchase at 50 Fish</p>
        <p>Price: ${polePrice} Fish</p>
        <p>+2 Fish / Click / # of Poles</p>
      </div>
      <div class="col-md-3">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/A_fishing_net_in_Brandon_Creek_-_geograph.org.uk_-_921094.jpg/300px-A_fishing_net_in_Brandon_Creek_-_geograph.org.uk_-_921094.jpg"
          alt="" id="buyNet" class="smEnhanceImgs sepia-filter" onclick="buyNet()">
        <p>Fishing Net</p>
        <p>Unlock Purchase at 200 Fish</p>
        <p>Price: ${netPrice} Fish</p>
        <p>+10 Fish / Click / # of Nets</p>
      </div>
      <div class="col-md-3">
        <img src="https://cdn.dealerspike.com/imglib/v1/800x600/imglib/trimsdb/10231091-0-70535721.jpg" alt=""
          id="buyBoat" class="smEnhanceImgs sepia-filter" onclick="buyBoat()">
        <p>Fishing Boat</p>
        <p>Unlock Purchase at 1000 Fish</p>
        <p>Price: ${boatPrice} Fish</p>
        <p>+50 Fish / Click / # of Boats</p>
        <p>Auto +25 Fish Per 3 Seconds</p>
      </div>
      <div class="col-md-3">
        <img
          src="https://www.lundsfish.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Brianna-Louise.jpg?bwg=1529197339"
          alt="" id="buyFleet" class="smEnhanceImgs sepia-filter" onclick="buyFleet()">
        <p>Fishing Fleet</p>
        <p>Unlock Purchase at 5000 Fish</p>
        <p>Price: ${fleetPrice} Fish</p>
        <p>+200 Fish / Click / # of Fleets</p>
        <p>Auto +100 Fish Per 10 Seconds</p>
      </div>
    </div>

  `
  priceUpdate.innerHTML = template
}


