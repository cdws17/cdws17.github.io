//Function to determine if a number is prime
function prime() {
    let n = document.getElementById("primeValue").value;
    let prime=true;
    if(n==2) {
        prime=true;
    }
    else {
        //Checks factors up to the square root, since that is the largest possible factor
        for(let x=2; x<(Math.floor(n/(n**0.5))+1); x++) {
            if(n%x==0) {
                prime=false;
            }
        }
    }
    //If the input is not an integer or is less than or equal to 1, then it is not prime
    if(Number.isInteger(1*n)===false || n<=1){
        alert("Your number isn't prime");

    }
    else if (prime==true){
        alert("Your number is prime");
    }
    else {
        alert("Your number isn't prime");
    }

}

//Checks if the input is a perfect number
function perfect() {
    let n = document.getElementById("perfectValue").value;
    let sum = 0;
    for (let i=1; i<=(n/2); i++) {
        if (n%i == 0) {
            sum += i
        }
    }
    if (sum == n && sum != 0) {
        alert("Your number is perfect");
    }
    else {
        alert("Your number isn't perfect")
    }
}

//Checks if the input is square
function square() {
    let n = document.getElementById("squareValue").value;
    let x = n**0.5;
    if (Number.isInteger(x)) {
        alert("Your number is square");
    }

    else {
        alert("Your number isn't square");
    }
}

//Checks if the input is a cube
function cube() {
    let n = document.getElementById("cubeValue").value;
    let x = n**(1/3);
    if (Number.isInteger(x) || Number.isInteger((-1*n)**(1/3))) {
        alert("Your number is cube");
    }

    else {
        alert("Your number isn't cube");
    }
}

//Checks if the input is a fibonacci number
function fibonacci() {
    let n = document.getElementById("fibonacciValue").value;
    let x1 = 5*n**2+4;
    let x2 = 5*n**2-4;
    let x3 = x1**0.5;
    let x4 = x2**0.5;
    if (n=="" || n<1){
        alert("Your number isn't a fibonacci number");
    }
    //A number is a fibonacci number if the square root of 5^2±4 is an integer
    else if (Number.isInteger(x3) || Number.isInteger((x4))) {
        alert("Your number is a fibonacci number");
    }
    else {
        alert("Your number isn't a fibonacci number");
    }

}

//Checks if the input is a triangular number
function triangle() {
    let n = document.getElementById("triangleValue").value;
    //A triangular number is a number in the form n(n+1)/2
    //If the solution to n(n+1)/2 = 0 is an integer, then the number is triangular
    let x = (-1+((1+8*n)**0.5))/2;
    if (Number.isInteger(x)) {
        alert("Your number is triangular");
    }

    else {
        alert("Your number isn't triangular");
    }
}