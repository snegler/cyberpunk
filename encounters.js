
//globale variabler
var buttonCaption1 = "";
var buttonCaption2 = "";
var buttonCaption3 = "";
var buttonText1 = "";
var buttonText2 = "";
var buttonText3 = "";
var adventuretext = "";
var adventureprogress = 0;
var nextArea = 0;
var northlocation = 0;
var southlocation = 0;
var eastlocation = 0;
var westlocation = 0;
var buttonCaption4 = "";
var buttonCaption4 = "";
var buttonCaption5 = "";
var buttonCaption5 = "";
var buttonCaption6 = "";
var buttonCaption6 = "";
var buttonCaption7 = "";
var buttonCaption7 = "";



//Dette representerer ting som ligger i en ekstern database
//Vi må anta at vi ønsker å bruke en god del forkjellige dialogvalg, og disse må kunne ligge i databasen
//Derfor må vi ha mange knapper, og de må ha faste funksjoner på onclick. så Fjerner vi bare dem når de er borte og ikke i bruk.
//Denne funksjonen later som om vi henter info om et nytt sted fra databasen.
function getNewInfo(){
if (adventureprogress === 0){


adventuretext = "<i>01100110011101010110001101101011.. I'm off man. I'm leaving this piss-stenched hellhole. No amount of credits can make me hook up again.</i> <br> <br> Julia left me while I was still inside the system. She was pissed and with good reason. Hell, I was more fragile than her with this shit, and she left first.....fuck..<br><br> I'd never have left..If it wasn't for her.";


buttonCaption1 = "I gently removed the connector from my right temple";  // the text on the button
buttonText1 = "The plug had been in too long, and some tissue had regrown around the hole. I wish the pain had jolted me out of my state of mind."; //the text that the button adds. This will have no effect on the game besides storyline.

buttonCaption2 = "Furious with her betrayal, I ripped the cord from my skull.";
buttonText2 = "I instantly regretted it. The skin around the connector had regrown somewhat, and I tore off more than I would have wanted. Some blood trickled down on my sweatpants and made yet another stain.";

buttonCaption3 = "";//denne knappen har ikke noe caption, og derfor vises den ikke.
buttonText3 = "Denne teksten vil aldri se dagens lys.";

buttonCaption4 = ""; //route north

buttonCaption5 = ""; //route east

buttonCaption6 = "I got up from my chair." //route south
southlocation = 1;

buttonCaption7 = ""; //route west


}

if (adventureprogress === 1){


adventuretext = "The stale air filled the hole in my skull. I smeared on some of the anti-viral mud and plugged the hole thoroughly before I got up.<br><br> Thank God I hadn't shat myself.  I hated when that happened.<br><br> We had killed the wrong guy in there. Kicking up shit in the dead section. We had been looking for one of the many thousands of wanted felons hiding in the fringe code.<br><br><br> Shoot enough corpses in the foot and one might prove to be still alive. <br> We had done it a houndred times.<br>Picking up ghoul ID-tags. It could net you a nice bit of credits...<br><br>Whatever Julia shot..that was no fucking ghoul....";


buttonCaption1 = "I examined the fat-smudged monitor for any odd entries in the log.";  // the text on the button
buttonText1 = "The greasy screen flickered with bits of code from our latest trip in the void. Ghoul code was mostly gibberish, and hard to read. The thing that Julia shot... well, it was gibberish as well, but the mass of code.. at least 5 terabytes.. what the hell?"; //the text that the button adds. This will have no effect on the game besides storyline.

buttonCaption2 = "I tried to call Julia's place.";
buttonText2 = "No reply. She's either fucked up on something, or about to get fucked up on something. I better stay out of it.";

buttonCaption3 = "";//denne knappen har ikke noe caption, og derfor vises den ikke.
buttonText3 = "Denne teksten vil aldri se dagens lys.";




}
}



//This makes the value of the next location that is stored in the DB based on the option chosen.
function moveNorth(){
adventureprogress = northlocation;
newEncounter();

}

function moveEast(){
adventureprogress = eastlocation;
newEncounter();
}

function moveSouth(){
adventureprogress = southlocation;

newEncounter();
}

function moveWest(){
adventureprogress = westlocation;
newEncounter();
}






function scrolldown(){
  var elem = document.getElementById("advTextParagraph");
    elem.scrollTop = elem.scrollHeight;

}



//denne koden endrer ting basert på den nye informasjonen. Blant annet hva som står i knappene, og dermed hvilke handlinger som er mulige.
//For at dette skal fungere bra bør det bare være mulig å klikke en gang på hver knapp, og at de deretter forsvinner.
//Vi må også ha en kode som setter knappene i en tilfeldig rekkefølge.
function nextEncounter(){

document.getElementById("textoption1").value = buttonCaption1;
document.getElementById("textoption2").value = buttonCaption2;
document.getElementById("textoption3").value = buttonCaption3;
document.getElementById("northMoveoption").value = buttonCaption4;
document.getElementById("eastMoveoption").value = buttonCaption5;
document.getElementById("southMoveoption").value = buttonCaption6;
document.getElementById("westMoveoption").value = buttonCaption7;
}






// videre i eventyret.
function newEncounter(){
getNewInfo();
var currentText = document.getElementById("advTextParagraph").innerHTML;
var newText =  currentText + "<br><br>" + adventuretext + "<br><br>";
document.getElementById("advTextParagraph").innerHTML = newText;
//scrolls down
scrolldown()
nextEncounter();
}


//Dette er funksjonene for hver knapp, og muligens alle options i spillet. De kan kanskje ligge i en egen fil...


function addAdventureText1(){
var currentText = document.getElementById("advTextParagraph").innerHTML;
var newText =  currentText + "<br>" + buttonText1 + "<br>";
document.getElementById("advTextParagraph").innerHTML = newText;
scrolldown()
}


function addAdventureText2(){

  var currentText = document.getElementById("advTextParagraph").innerHTML;
  var newText =  currentText + "<br>" + buttonText2 + "<br>";
  document.getElementById("advTextParagraph").innerHTML = newText;
  scrolldown()

}


function addAdventureText3(){

  var currentText = document.getElementById("advTextParagraph").innerHTML;
  var newText =  currentText + "<br>" + buttonText3 + "<br>";
  document.getElementById("advTextParagraph").innerHTML = newText;
  scrolldown()

}
