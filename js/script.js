// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if number is valid
    if (isNaN(num) || num.toString().length == 0 || num<1 || num>10000 || !Number.isInteger(Number(num))) {
        txt += `Invalid input.  Please enter a whole number between 1 and 10000.`
    } else {
        txt += `You have entered the number ${num}`;
        txt += `Its factors: ${factors(num)}`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

// Function to Get the Factors
function factors(num) {
    let result = [];
    for (let i=1; i<=num; i++) {
        if (num % i==0) {
            result.push(i);
        }
    }
    return result;
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("numinfo").innerHTML = txt;
}