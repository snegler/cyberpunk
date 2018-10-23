var gunName;
var gun = {
  damage: null,
  accuracy: null,
  critical: null,
}

function gunSelect(gunName) {

  switch (gunName) {
    case "9mm":
        gun.damage = 10;
        gun.accuracy = 3;
        gun.critical = 3;
      break;
    case "Beretta":
        gun.damage = 15;
        gun.accuracy = 4;
        gun.critical = 5;
      break;
    default:
      console.log("Error. No gun selected");
      gun.damage = 0;
      gun.accuracy = 0;
      gun.critical = 0;
  }

  return gun;
}

function equipGun(gun) {
  player.body.
}
