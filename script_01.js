
/***** Erinnerung: Arrays *******/


/***** Objekte 1 Daten/Funktionen *******/

let person =
{
        firstName: "Javad",
        familyName: "Hajian",
        salary: [120000, 160000],
        permission: true,
        sayHello:
                function () {
                        return "Hello , ich bin " + this.firstName
                }


}



output(person)
output(person.firstName)
output(person.familyName)

const text = "ich bin " + person.firstName + " " + person.familyName + " und verdiene " +
        person.salary[1] + " p.a. "
output(text)
output(person.sayHello())

/** Ausgabe */
function output(outputData) {
        console.log(outputData);
}