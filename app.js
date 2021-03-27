let clickUpgrades = {
  poleUpgrades: {
    price: 10,
    quantity: 0,
    multiplier: 2
  },
  netUpgrades: {
    price: 20,
    quantity: 0,
    multiplier: 10
  },
  boatUpgrades: {
    price: 30,
    quantity: 0,
    multiplier: 50
  },
  fleetUpgrades: {
    price: 40,
    quantity: 0,
    multiplier: 200
  }
}


let automaticUpgrades = {
  boatAutoUpgrades: {
    price: 30,
    quantity: 0,
    multiplier: 50
  },
  fleetAutoUpgrades: {
    price: 40,
    quantity: 0,
    multiplier: 200
  }
}

let fishCount = 0
let clickValue = 1
let poleCount = 0
let polePrice = 50
let netCount = 0
let netPrice = 200
let boatCount = 0
let boatPrice = 1000
let fleetCount = 0
let fleetPrice = 5000

function upgradeQuantity() {
  clickUpgrades.poleUpgrades['quantity'] = poleCount
  clickUpgrades.netUpgrades['quantity'] = netCount
  clickUpgrades.boatUpgrades['quantity'] = boatCount
  clickUpgrades.fleetUpgrades['quantity'] = fleetCount
}

function priceIncrease() {
  clickUpgrades.poleUpgrades['price'] = polePrice * 2
  clickUpgrades.netUpgrades['price'] = netPrice * 2
  clickUpgrades.boatUpgrades['price'] = boatPrice * 2
  clickUpgrades.fleetUpgrades['price'] = fleetPrice * 2
}

function clickValueUpdater() {
  if (fleetCount > 0) {
    clickValue = clickUpgrades.fleetUpgrades.multiplier
  }
  else if (boatCount > 0) {
    clickValue = clickUpgrades.boatUpgrades.multiplier
  }
  else if (netCount > 0) {
    clickValue = clickUpgrades.netUpgrades.multiplier
  }
  else if (poleCount > 0) {
    clickValue = clickUpgrades.poleUpgrades.multiplier
  }
  else {
    clickValue = 1
  }
}

function goFish() {
  document.getElementById("fishImg")
  fishCount += clickValue
  console.log("fish")
  drawStats()
}

function buyPole() {
  if (fishCount >= 10) {
    document.getElementById("buyPole").disabled = false
    poleCount++
    fishCount -= 10
    upgradeQuantity()
    clickValueUpdater()
    priceIncrease()
    console.log("pole")
    drawStats()
    drawPriceUpdate()
  }
  document.getElementById("buyPole").disabled = true
}

function buyNet() {
  if (fishCount >= 20) {
    document.getElementById("buyNet").disabled = false
    netCount++
    fishCount -= 20
    upgradeQuantity()
    clickValueUpdater()
    priceIncrease()
    console.log("net")
    drawStats()
    drawPriceUpdate()
  }
  document.getElementById("buyNet").disabled = true
}

function buyBoat() {
  if (fishCount >= 30) {
    document.getElementById("buyBoat").disabled = false
    boatCount++
    fishCount -= 30
    upgradeQuantity()
    clickValueUpdater()
    priceIncrease()
    console.log("boat")
    drawStats()
    drawPriceUpdate()
  }
  document.getElementById("buyBoat").disabled = true
}

function buyFleet() {
  if (fishCount >= 40) {
    document.getElementById("buyFleet").disabled = false
    fleetCount++
    fishCount -= 40
    upgradeQuantity()
    clickValueUpdater()
    priceIncrease()
    console.log("fleet")
    drawStats()
    drawPriceUpdate()
  }
  document.getElementById("buyFleet").disabled = true
}


function drawStats() {
  let fishCountUpdate = document.getElementById('statsUpdate')
  let template = `
  
    <div class="row align-items-center justify-content-center py-5 text-center">
      <div id="statsUpdate" class="col-md-4">
        <p>STATS</p>
        <p>Fishing Poles: ${poleCount}</p>
        <p>Fishing Nets: ${netCount}</p>
        <p>Fishing Boats: ${boatCount}</p>
        <p>Fishing Fleets: ${fleetCount}</p>
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
  fishCountUpdate.innerHTML = template
}

function drawPriceUpdate() {
  let statsUpdate = document.getElementById('priceUpdate')
  let template = `

    <div id="priceUpdate" class="row text-center text-light">
      <div class="col-md-3">
        <img src="https://fishingbooker.com/blog/media/rsz_rod_closeup.jpg" alt="" id="buyPole" class="smEnhanceImgs"
          onclick="buyPole()">
        <p>Fishing Pole</p>
        <p>Unlock Purchase at 50 Fish</p>
        <p>Price: ${polePrice} Fish</p>
        <p>+2 Fish Per Click</p>
      </div>
      <div class="col-md-3">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/A_fishing_net_in_Brandon_Creek_-_geograph.org.uk_-_921094.jpg/300px-A_fishing_net_in_Brandon_Creek_-_geograph.org.uk_-_921094.jpg"
          alt="" id="buyNet" class="smEnhanceImgs" onclick="buyNet()">
        <p>Fishing Net</p>
        <p>Unlock Purchase at 200 Fish</p>
        <p>Price: ${netPrice} Fish</p>
        <p>+10 Fish Per Click</p>
      </div>
      <div class="col-md-3">
        <img src="https://cdn.dealerspike.com/imglib/v1/800x600/imglib/trimsdb/10231091-0-70535721.jpg" alt=""
          id="buyBoat" class="smEnhanceImgs" onclick="buyBoat()">
        <p>Fishing Boat</p>
        <p>Unlock Purchase at 1000 Fish</p>
        <p>Price: ${boatPrice} Fish</p>
        <p>+50 Fish Per Click</p>
        <p>Auto +50 Fish Per 3 Seconds</p>
      </div>
      <div class="col-md-3">
        <img
          src="https://www.lundsfish.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Brianna-Louise.jpg?bwg=1529197339"
          alt="" id="buyFleet" class="smEnhanceImgs" onclick="buyFleet()">
        <p>Fishing Fleet</p>
        <p>Unlock Purchase at 5000 Fish</p>
        <p>Price: ${fleetPrice} Fish</p>
        <p>+200 Fish Per Click</p>
        <p>Auto +200 Fish Per 10 Seconds</p>
      </div>
    </div>

  `
  statsUpdate.innerHTML = template
}
