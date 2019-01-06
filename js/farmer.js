// custom function to calculate the final result
function calculateResult() {

    // store data from the inputs
    var rabbits = parseInt(document.getElementById("rabbits").value);
    var sheep = parseInt(document.getElementById("sheep").value);
    var smallDog = parseInt(document.getElementById("smallDog").value);
    var pigs = parseInt(document.getElementById("pigs").value);
    var cows = parseInt(document.getElementById("cows").value);
    var bigDog = parseInt(document.getElementById("bigDog").value);
    var horses = parseInt(document.getElementById("horses").value);

    // do the math

    var total = rabbits + (6 * sheep) + (6 * smallDog) + (12 * pigs) + (36 * bigDog) + (36 * cows) + (72 * horses);

    // Display the result

    document.getElementById("result").innerHTML = total;
    window.scrollTo(0, 0);

}

// clicking the buttons changes the value
document.getElementById("calculate").onclick = function() { calculateResult(); };