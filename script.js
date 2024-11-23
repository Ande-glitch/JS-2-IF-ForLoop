// Oppgave 1

function myOdds() {
    var shortcut = document.getElementById("odddemo");
    var oddpar = parseFloat(document.getElementById("oddpar").value);
    if (oddpar %2 === 0) {
        shortcut.innerHTML = oddpar + " er partall"
    } else {
        shortcut.innerHTML = oddpar + " er oddetall"
    }
}

// Oppgave 2

function myAlder() {
    var shortcut = document.getElementById("agedemo");
    var age = parseFloat(document.getElementById("age").value);

    if (age <= 13) {
        shortcut.innerHTML = "Barn"
    } else if (age >= 13 && age <= 19) {
        shortcut.innerHTML = "Tenåring"
    } else if (age >=20 && age <= 64) {
        shortcut.innerHTML = "Voksen"
    } else {
        shortcut.innerHTML = "Pensjonist"
    }
}

// Oppgave 3 

function myLogin() {
    var shortcut = document.getElementById("logged");
    var username = (document.getElementById("username").value);
    var usernameright = "@gov.com";
    var password = (document.getElementById("password").value);
    var passwordright = "macabre";

    if ( password == passwordright && username == usernameright) {
        shortcut.innerHTML = "Signert på"
    } else {
        shortcut.innerHTML = "Prøv på nytt i noen minutter"
    }
}

// Oppgave 4

function myMonth() {
    const måneder = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"];
    var månedTall = parseInt(document.getElementById("måned").value);
    var shortcut = document.getElementById("month");
 
    var riktigMåned = måneder[månedTall-1]
 
    if (riktigMåned == "Desember" || riktigMåned =="Januar" || riktigMåned =="Februar") {
        var årstid = "vinter"
    }
    else if (riktigMåned == "Mars" || riktigMåned =="April" || riktigMåned =="Mai") {
        var årstid = "vår"
    }
    else if (riktigMåned == "Juni" || riktigMåned =="Juli" || riktigMåned =="August") {
        var årstid = "sommer"
    }
    else if (riktigMåned == "September" || riktigMåned =="Oktober" || riktigMåned =="November") {
        var årstid = "Høst"
    }
    shortcut.innerHTML = " I " + riktigMåned + "  er årstiden " + årstid
}

// Oppgave 5 

function myBmi() {
    var height = (document.getElementById("height").value);
    var weight = (document.getElementById("weight").value);
    var shortcut = document.getElementById("bmi");
    
    var BMI = weight / height**2;
    var BMIres = BMI.toFixed(2)
    
    if (BMIres <=18.5) {
        shortcut.innerHTML = BMIres + " Du er undervektig"
    } 
    else if (BMIres <=25) {
        shortcut.innerHTML = BMIres + " Du er normalvektig"
    }
    else if (BMIres <=30) {
        shortcut.innerHTML = BMIres + " Du er overvektig"
    }
    else if (BMIres >=30) {
        shortcut.innerHTML = BMIres + " Ditt resultat er fedme"
    }
}
 
// Oppgave 6 

function myTicket() {
    var price = (document.getElementById("range").value);
    var barn = (document.getElementById("barn").value);
    var student = (document.getElementById("student").value);
    var voksen = (document.getElementById("voksen").value);
    var pensjonist = (document.getElementById("pensjonist").value);
    var shortcut = document.getElementById("ticket");

    if (price==barn) {
        shortcut.innerHTML = "Billettprisen er gratis"
    } else if (price==student) {
        shortcut.innerHTML = "Billettprisen er 85 kr"
    } else if (price==voksen) {
        shortcut.innerHTML = "Billettprisen er 110 kr"
    } else if (price==pensjonist) {
        shortcut.innerHTML = "Billettprisen er 65 kr"
    }
}