// Show a console error in an alert box
// Useful when the error is followed by a page reload
// source: https://developer.chrome.com/devtools/docs/javascript-debugging#pause-on-exceptions
window.onerror = function(message, url, line) {
  alert(message + ', ' + url + ', ' + line);
};



//globale variabler
//addtext variabler
var button1caption = "";
var button2caption = "";
var button3caption = "";
var button1text = "";
var button2text = "";
var button3text = "";

var adventuretext = "";
var adventureprogress = 0;
var nextArea = 0;


//variabler som inneholder stedene som du kommer til hvis du reiser i en himmelretning
var northlocation = 0;
var southlocation = 0;
var eastlocation = 0;
var westlocation = 0;
//Det som skal stå på knappene, 4 = N, 5 = E, 6 = S, 7 = w
var button4caption = "";
var button5caption = "";
var button6caption = "";
var button7caption = "";






//arrayene som holder oversikt over hvilke valg som er tatt.
var startlocation = [0,0,1,1,1,0,1]











//Dette representerer ting som ligger i en ekstern database
//Vi må anta at vi ønsker å bruke en god del forkjellige dialogvalg, og disse må kunne ligge i databasen
//Derfor må vi ha mange knapper, og de må ha faste funksjoner på onclick. så Fjerner vi bare dem når de er borte og ikke i bruk.
//Denne funksjonen later som om vi henter info om et nytt sted fra databasen.
//Det som mangler her er et system for å huske hvilke ting som allerede er gjort.
function getNewInfo(){
if (adventureprogress === 0){

//vi må ha en array som viser hvilke av valgene som allerede er gjort.
= []


adventuretext = "<i>01100110011101010110001101101011.. I'm off man. I'm leaving this piss-stenched hellhole. No amount of credits can make me hook up again.</i> <br> <br> Julia left me while I was still inside the system. She was pissed and with good reason. Hell, I was more fragile than her with this shit, and she left first.....fuck..<br><br> I'd never have left..If it wasn't for her.";


button1caption = "I gently removed the connector from my right temple";  // the text on the button
button1text = "The plug had been in too long, and some tissue had regrown around the hole. I wish the pain had jolted me out of my state of mind."; //the text that the button adds. This will have no effect on the game besides storyline.
button1hidden = true;

button2caption = "Furious with her betrayal, I ripped the cord from my skull.";
button2text = "I instantly regretted it. The skin around the connector had regrown somewhat, and I tore off more than I would have wanted. Some blood trickled down on my sweatpants and made yet another stain.";
button2hidden = true;

button3caption = "";//denne knappen har ikke noe caption, og derfor vises den ikke.
button3text = "Denne teksten vil aldri se dagens lys.";
button3hidden = true;

button4caption = ""; //route north
button4hidden = true;

button5caption = ""; //route east
button5hidden = true;


button6caption = "I got up from my chair."; //route south
southlocation = 1;
button1hidden = true;


button7caption = ""; //route west
button1hidden = true;


}

if (adventureprogress === 1){


adventuretext = "The stale air filled the hole in my skull. I smeared on some of the anti-viral mud and plugged the hole thoroughly before I got up.<br><br> Thank God I hadn't shat myself.  I hated when that happened.<br><br> We had killed the wrong guy in there. Kicking up shit in the dead section. We had been looking for one of the many thousands of wanted felons hiding in the fringe code.<br><br><br> Shoot enough corpses in the foot and one might prove to be still alive. <br> We had done it a houndred times.<br>Picking up ghoul ID-tags. It could net you a nice bit of credits...<br><br>Whatever Julia shot..that was no fucking ghoul....";


button1caption = "I examined the fat-smudged monitor for any odd entries in the log.";  // the text on the button
button1text = "The greasy screen flickered with bits of code from our latest trip in the void. Ghoul code was mostly gibberish, and hard to read. The thing that Julia shot... well, it was gibberish as well, but the mass of code.. at least 5 terabytes.. what the hell?"; //the text that the button adds. This will have no effect on the game besides storyline.

button2caption = "I tried to call Julia's place.";
button2text = "No reply. She's either fucked up on something, or about to get fucked up on something. I better stay out of it.";

button3caption = "";//denne knappen har ikke noe caption, og derfor vises den ikke.
button3text = "Denne teksten vil aldri se dagens lys.";




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








//Knappeskjuling 2.0!!!!
//eventlistener som sjekker knappene er trykket på
//variabler

var b1 = document.getElementById("textoption1");
var b2 = document.getElementById("textoption2");
var b3 = document.getElementById("textoption3");


//eventlisteners til knappene
b1.addEventListener("click", addAdventureText1);
b2.addEventListener("click", addAdventureText2);
b3.addEventListener("click", addAdventureText3);





//Alle mulige
function hidebuttons(){


}



//scroller ned advTextParagraph når nye ting kommer inn.
function scrolldown(){
  var elem = document.getElementById("advTextParagraph");
    elem.scrollTop = elem.scrollHeight;

}



//denne koden endrer ting basert på den nye informasjonen. Blant annet hva som står i knappene, og dermed hvilke handlinger som er mulige.
//For at dette skal fungere bra bør det bare være mulig å klikke en gang på hver knapp, og at de deretter forsvinner.
//Vi må også ha en kode som setter knappene i en tilfeldig rekkefølge.
function nextEncounter(){

document.getElementById("textoption1").value = button1caption;
document.getElementById("textoption2").value = button2caption;
document.getElementById("textoption3").value = button3caption;
document.getElementById("northMoveoption").value = button4caption;
document.getElementById("eastMoveoption").value = button5caption;
document.getElementById("southMoveoption").value = button6caption;
document.getElementById("westMoveoption").value = button7caption;
hidebuttons();
}






// videre i eventyret.
function newEncounter(){
getNewInfo();
var currentText = document.getElementById("advTextParagraph").innerHTML;
var newText =  currentText + "<br><br>" + adventuretext + "<br><br>";
document.getElementById("advTextParagraph").innerHTML = newText;
scrolldown();
nextEncounter();

}


//Dette er funksjonene for hver knapp, og muligens alle options i spillet. De kan kanskje ligge i en egen fil...
function addAdventureText1(){
var currentText = document.getElementById("advTextParagraph").innerHTML;
var newText =  currentText + "<br>" + button1text + "<br>";
document.getElementById("advTextParagraph").innerHTML = newText;
scrolldown();
document.getElementById("textoption1").value = "";
//hidebuttons();
}


function addAdventureText2(){

  var currentText = document.getElementById("advTextParagraph").innerHTML;
  var newText =  currentText + "<br>" + button2text + "<br>";
  document.getElementById("advTextParagraph").innerHTML = newText;
  scrolldown();
  document.getElementById("textoption2").value = "";
  //hidebuttons();

}


function addAdventureText3(){

  var currentText = document.getElementById("advTextParagraph").innerHTML;
  var newText =  currentText + "<br>" + button3text + "<br>";
  document.getElementById("advTextParagraph").innerHTML = newText;
  scrolldown();
  document.getElementById("textoption3").value = "";
  //hidebuttons();

}
