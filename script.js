let name = prompt("Welcome to GC mini golf! What is your name?");
let par = 0;
let totalPar = 0;






const howmany = parseInt(prompt(`Hi, ${name}! Would you like to play 3 or 6 holes?`));


console.log("Your username is " + name)



if (howmany === 3) {
    const hole1 = parseInt(prompt("How many putts for hole 1? (par: 3)"));
    const hole2 = parseInt(prompt("How many putts for hole 2? (par: 3)"));
    const hole3 = parseInt(prompt("How many putts for hole 3? (par: 3)"));
    totalPar = (hole1 + hole2 + hole3);
    console.log("Your total Par is " + totalPar)
    par = totalPar - 9;
    if (totalPar == 9) {
        console.log("Good game, " + name + ". Your total par was: " + par + ".");
    } else if (totalPar < 9) {
        console.log("Great job, " + name + "! Your total par was: " + par + ".")
    } else if (totalPar > 9) {
        console.log("Nice try, " + name + ". Your total par was: +" + par + ".")
    }

} else if (howmany === 6) {
    const hole1 = parseInt(prompt("How many putts for hole 1? (par: 3)"));
    const hole2 = parseInt(prompt("How many putts for hole 2? (par: 3)"));
    const hole3 = parseInt(prompt("How many putts for hole 3? (par: 3)"));
    const hole4 = parseInt(prompt("How many putts for hole 4? (par: 3)"));
    const hole5 = parseInt(prompt("How many putts for hole 5? (par: 3)"));
    const hole6 = parseInt(prompt("How many putts for hole 6? (par: 3)"));
    totalPar = (hole1 + hole2 + hole3 + hole4 + hole5 + hole6);
    console.log("Your total Par is " + totalPar)
    par = totalPar - 18;
    if (totalPar == 18) {
        console.log("Good game, " + name + ". Your total par was: " + par + ".");
    } else if (totalPar < 18) {
        console.log("Great job, " + name + "! Your total par was: " + par + ".")
    } else if (totalPar > 18) {
        console.log("Nice try, " + name + ". Your total par was: +" + par + ".")
    }

}



