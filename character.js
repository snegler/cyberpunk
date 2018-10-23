const player = {
  name: null,
  age: null,
  gender: null,
  hp: hitPoints(),

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
  }


}

function hitPoints() {

}




function getName() {
  var sheet = document.getElementById("sheet");
  var name = document.getElementById("characterName").value;
  player.name = name;
}

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
