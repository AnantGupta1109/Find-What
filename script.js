function print(txt) {
    document.getElementById("display").value = txt;
}

function getText() {
    var i = document.getElementById("display").value;
    return Number(i);
}

function findFactorial() {
    var n = getText();  // Call the function with parentheses
    if (n < 0) {
        print("Factorial is not defined for negative numbers");
        return; // Exit function early
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    print(result);
}

function findSquare() {
    var i = getText();
    var ans = i * i;
    print(ans); // Print the result
}

function findSquareRoot() {
    var i = getText();
    var ans = Math.sqrt(i);
    print(ans); // Print the result
}

function findCube() {
    var i = getText();
    var ans = i * i * i;
    print(ans); // Print the result
}

function findCubeRoot() {
    var i = getText();
    var ans = Math.cbrt(i);
    print(ans); // Print the result
}

function findOddEven() {
    var i = getText();
    var ans = i % 2;
    if (ans === 0) {
        print("Even");
    } else {
        print("Odd");
    }
}
