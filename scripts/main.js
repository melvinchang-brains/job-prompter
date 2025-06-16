
console.log(departments);

console.log("De afdeling Sales heeft ", departments.sales.numberOfEmployees ,"medewerkers");
console.log("Marketing is een leuke afdeling om te werken ", departments.marketing.description);
console.log("De afdeling Customer Service heeft ", departments["customer-service"].numberOfEmployees ,"medewerkers");
console.log("Sales is een uitdagende afdeling om te werken als " + departments.sales.jobs[1].title + ". " + departments.sales.jobs[1].description);

const userInput = prompt("Over welke afdeling wil je meer informatie? Kies uit:  marketing / sales / customer-service");
console.log(userInput);

console.log("Je koos "+ userInput + ".");
    if (userInput==="marketing") {
        console.log(departments.marketing.description);
    }
    else if (userInput==="sales") {
        console.log(departments.sales.description);
    }
    else if (userInput==="customer-service") {
        console.log(departments["customer-service"].description);
    }

    else {
        console.error("Ongeldige keuze. Probeer het opnieuw door pagina te verversen");
}

/*console.log("Je koos marketing. Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in." +
   "\n0 : " + departments.marketing.jobs[0].title +
   "\n1 : " + departments.marketing.jobs[1].title +
   "\n2 : " + departments.marketing.jobs[2].title +
   "\n3 : " + departments.marketing.jobs[3].title
);

const roleChoice= prompt("voer een getal tussen 0 en 3 in");
console.log(roleChoice);

    if (roleChoice === "0") {
        console.log("Je koos " +departments.marketing.jobs[0].title + ". Een uitdagende rol!" + departments.marketing.jobs[0].description);
    }
    else if (roleChoice ==="1") {
        console.log("Je koos " +departments.marketing.jobs[1].title + ". Een uitdagende rol!" + departments.marketing.jobs[1].description);
    }
    else if (roleChoice === "2") {
        console.log("Je koos " +departments.marketing.jobs[2].title + ". Een uitdagende rol!" + departments.marketing.jobs[2].description);
    }
    else if (roleChoice === "3") {
        console.log("Je koos " +departments.marketing.jobs[3].title + ". Een uitdagende rol!" + departments.marketing.jobs[3].description);
    }
    else {
        console.error("Je hebt ongeldige keus gemaakt, probeer het opnieuw door pagina te refreshen.")
    }
*/

/*const chosenInput = prompt("Over welke afdeling wil je meer informatie?(marketing, sales, customer-services").toLowerCase();
console.log(chosenInput);
const afdeling = chosenInput
console.log(departments[chosenInput]);
if (departments[afdeling]) {
    console.log(afdeling  + " is een leuke afdeling om te werken.  Er werken op dit moment " + departments[afdeling].numberOfEmployees + " medewerkers");
} else {
    console.log("niet de juiste keus. Probeer pagina opnieuw te verversen");
} */


/*console.log(departments[chosenInput]);*/

/*const yourInput = prompt("Over welke afdeling wil je meer informatie (marketing, sales, customer-service?").toLowerCase();
if (departments[yourInput]) {
    console.log("0:" + departments[yourInput].jobs[0].title);
    console.log("1:" + departments[yourInput].jobs[1].title);
    console.log("2:" + departments[yourInput].jobs[2].title);
    console.log("3:" + departments[yourInput].jobs[3].title);
} else {
    console.log("niet de juiste keuze, ververst pagina nogmaals")

} */

let yourInputA = prompt("Over welke afdeling wil je meer informatie (marketing, sales,customer-service)?").toLowerCase();

    const afdelingNaam =(departments[yourInputA]);
if (afdelingNaam) {
    const roleChoice = prompt("voer een getal tussen 0 en 3 in");
    const functie = (afdelingNaam.jobs[roleChoice]);

    if (functie) {
        console.log("Je koos " + functie.title + ". Een uitdagende baan " + functie.description);
    } else {
        console.error("Je hebt geen juiste functie gemaakt, probeer nogmaals te verversen");
    }

else {
         console.error("Je hebt geen goede keus voor afdeling gemaakt, ververs en probeer opnieuw")
 }


