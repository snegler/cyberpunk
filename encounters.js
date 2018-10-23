


var adventuretext = "<i>01100110011101010110001101101011.. I'm off man. I'm leaving this piss-stenched hellhole. No amount of credits can make me hook up again.</i> <br> <br> Julia left me while I was still inside the system. She was pissed and with good reason. Hell, I was more fragile than her with this shit, and she left first.....fuck..<br><br> I'd never have left..If it wasn't for her.<br>"
var adventureprogress = 0



//midlertidig.. vi trenger en database for alle encounters, og et system for å hente dem ut. XML eller det google greiene.
//vi må også få en måte å lagre effektene av valgene. Det er selvsagt mulig å lage en story uten noen valg, eller å bruke en choose-your-own-adventure type storyline.
//Det er jo mulig å endre onclick for knappene også...
function nextEncounter(){


  if (adventureprogress == 0){

  adventuretext = "<i>01100110011101010110001101101011.. I'm off man. I'm leaving this piss-stenched hellhole. No amount of credits can make me hook up again.</i> <br>............<br> <br> Julia left me while I was still inside the system. She was pissed and with good reason. Hell, I was more fragile than her with this shit, and she left first.....fuck..<br><br> I'd never have left..If it wasn't for her.<br>";
  document.getElementById("option1").value = "I gently removed the connector from my right temple";
  document.getElementById("option2").value = "Furious with her betrayal, I ripped the cord from my skull.";
  document.getElementById("option3").value = "Denne knappen forsvinner hvis den ikke har innhold";
  }







if (adventureprogress == 1){

adventuretext = "The stale air filled the hole in my skull. I smeared on some of the anti-viral mud and plugged the hole thoroughly before I got up.<br><br> Thank God I hadn't shat myself.  I hated when that happened.<br><br> We had killed the wrong guy in there. Kicking up shit in the dead section. We had been looking for one of the many thousands of wanted felons hiding in the fringe code.<br><br><br> Shoot enough corpses in the foot and one might prove to be still alive. <br> We had done it a houndred times.<br>Picking up ghoul ID-tags. It could net you a nice bit of credits...<br><br>Whatever Julia shot..that was no fucking ghoul....";
document.getElementById("option1").value = "I examined the fat-smudged monitor for any odd entries in the log.";
document.getElementById("option2").value = "I tried to call Julia's place";
document.getElementById("option3").value = "";
}


}





// videre i eventyret.
function newEncounter(){
  nextEncounter();
adventureprogress = adventureprogress +1;
document.getElementById("advTextParagraph").innerHTML = adventuretext;



//Dette skjuler optionsknappene hvis de ikke har noe innhold. Forløbig bare option 3...

if (document.getElementById("option3").value == ""){
document.getElementById("option3").style.display = "none";
}else{
document.getElementById("option3").style.display = "block";

}

}
