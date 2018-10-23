//Sjølve spelaren

const player = {
  name: null,
  age: null,
  gender: null,
  hitPoints: null,

  stats: {
    strength: null,
    agility: null,
    smarts: null,
    endurance: null,
    charisma: null
  },

  body: {
    leftHand: null,
    rightHand: null,
    back: null,
    legs: null,
    head: null,
    glasses: null,
    shoes: null
  },

  backpack: {
    largeWeapon: null,
    smallWeapon1: null,
    smallWeapon2: null,
    smallItem1: null,
    smallItem2: null,
    smallItem3: null,
    smallItem4: null,
    smallItem5: null,
    largeItem1: null,
    largeItem2: null
  }


}

//Funksjoner for å generere karakter
function rollStats() {
  var strength = Math.floor(Math.random() * 70 + 30);
  var agility = Math.floor(Math.random() * 70 + 30);
  var smarts = Math.floor(Math.random() * 70 + 30);
  var endurance = Math.floor(Math.random() * 70 + 30);
  var charisma = Math.floor(Math.random() * 70 + 30);

  player.stats.strength = strength;
  player.stats.agility = agility;
  player.stats.smarts = smarts;
  player.stats.endurance = endurance;
  player.stats.charisma = charisma;
}

function hitPoints() {
  if(player.gender === "male") {
   if(player.age <= 18) {
     player.hitPoints = player.stats.endurance + Math.floor(Math.random() * 100 + 20);
   } else if(player.age <= 50) {
     player.hitPoints = player.stats.endurance + Math.floor(Math.random() * 100 + 30);
   } else if(player.age > 50) {
     player.hitPoints = player.stats.endurance + Math.floor(Math.random() * 100 + 20);
   }
  } else if(player.gender === "female") {
    if(player.age <= 18) {
      player.hitPoints = player.stats.endurance + Math.floor(Math.random() * 100 + 15);
    } else if(player.age <= 50) {
      player.hitPoints = player.stats.endurance + Math.floor(Math.random() * 100 + 25);
    } else if(player.age > 50) {
    player.hitPoints = player.stats.endurance + Math.floor(Math.random() * 100 + 15);
    }
  }
}

// Funksjoner for å få

function getName() {
  var sheet = document.getElementById("sheet");
  var name = document.getElementById("characterName").value;
  player.name = name;
}
