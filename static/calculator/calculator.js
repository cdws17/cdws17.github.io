document.getElementById("answer").readOnly = true; //set this attribute in Html file
let screen = document.getElementById("answer");
buttons = document.querySelectorAll("button");

//Allows writing e or π instead of Math.E or Math.PI or 3.14159...
//Also allows multiplication with e or π to be done more easily since e/π are stored as constants rather than writing out the value
const e = Math.E;
const π = Math.PI;

//Factorial function:
let f = [];
function Factorial (z) {
    //If the number is not an integer, use Stirling's approximation of the gamma function:
    if (!Number.isInteger(z)){
        z += 1;
        // return Math.sqrt(2 * Math.PI / z) * Math.pow((1 / Math.E) * (z + 1 / (12 * z - 1 / (10 * z))), z);
        return gamma(z);
    }
    //If the number is an integer, use this recursive factorial function:
    else {
        if (z === 0 || z === 1)
            return 1;
        else if(z<0){
            return NaN;
        }
        if (f[z] > 0)
            return f[z];
        return f[z] = Factorial(z-1) * z;
    }
}

//nCr function used for probability
function nCr(n,r){
    if (n==r || r==0)
    {
        return 1;
    }
    else if (r>n){
        return 0;
    }
    else if (n>=0)
    {
        let ans1 = Factorial(n);
        let ans2 = Factorial((n-r));
        let ans3 = Factorial(r);
        let ans = ans1/(ans2*ans3);
        return (ans);
    }
    else if (Number.isInteger(n)){
        return ((-1)**r) * (nCr(-n+r-1, r));
    }
}

//Gamma function called for factorial function
var g = 7;
var C = [0.99999999999980993, 676.5203681218851, -1259.1392167224028,771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
function gamma(z) {

    if (z < 0.5) return Math.PI / (Math.sin(Math.PI * z) * gamma(1 - z));
    else {
        z -= 1;

        var x = C[0];
        for (var i = 1; i < g + 2; i++)
        x += C[i] / (z + i);

        var t = z + g + 0.5;
        return Math.sqrt(2 * Math.PI) * Math.pow(t, (z + 0.5)) * Math.exp(-t) * x;
    }
}

//Functions to make functions appear as cos(x) rather than Math.cos(x):

function sin (x) {
    return Math.sin(x);
}
function arcsin (x) {
    return Math.asin(x);
}
function cos (x) {
    return Math.cos(x);
}
function arccos (x) {
    return Math.acos(x);
}
function tan (x) {
    return Math.tan(x);
}
function arctan (x) {
    return Math.atan(x);
}
function log2 (x) {
    return Math.log2(x);
}
function log10 (x) {
    return Math.log10(x);
}
function ln (x) {
    return Math.log(x);
}
function abs (x) {
    return Math.abs(x);
}
function floor (x) {
    return Math.floor(x);
}
function ceiling (x) {
    return Math.ceil(x);
}
function round (x) {
    return Math.round(x);
}


//Determines the function based on what button is pressed
let screenValue = "";
for (item of buttons) {
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerText;
        if (buttonText === "X") {
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText === "x") {
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText === "÷") {
            buttonText = "/";
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText === "π") {
            // buttonText = Math.PI;
            buttonText = "π";
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText === "√x") {
            buttonText = "**0.5";
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText === "x2") {
            buttonText = "**2";
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText === "x3") {
            buttonText = "**3";
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText === "xy") {
            buttonText = "**";
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText === "!") {
            buttonText = "Factorial(";
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText === "abs") {
            buttonText = "abs(";
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText === "e") {
            // buttonText = Math.E;
            buttonText = "e";
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText === "ln") {
            buttonText = "ln(";
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText === "log10") {
            buttonText = "log10(";
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText === "log2") {
            buttonText = "log2(";
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText === "floor") {
            buttonText = "floor(";
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText === "ceiling") {
            buttonText = "ceiling(";
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText === "round") {
            buttonText = "round(";
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText === "sin") {
            buttonText = "sin(";
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText === "cos") {
            buttonText = "cos(";
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText === "tan") {
            buttonText = "tan(";
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText === "arcsin") {
            buttonText = "arcsin(";
            screenValue += buttonText;
            screen.value = screenValue;
            } else if (buttonText === "arccos") {
            buttonText = "arccos(";
            screenValue += buttonText;
            screen.value = screenValue;
            } else if (buttonText === "arctan") {
            buttonText = "arctan(";
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText === "+") {
            buttonText = "+";
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText === "C") {
            screenValue = "";
            screen.value = screenValue;
        } else if (buttonText === "=") {
            checkForBracketMulti(); // automatically evaluates if no brackets
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}

//Allows entering certain keys (e.g. (, %)) when typing with shift
document.addEventListener("keydown", function (event) {
    console.log(event.which);
    if (event.shiftKey === 57) {
        event.key = "(";
    } else if (event.shiftKey === 48) {
        event.key = ")";
    } else if (event.shiftKey === 53) {
        event.key = "%";
    }
    if (event.keyCode === 88) {
        screenValue += "*";
        screen.value = screenValue;
    }
    if (
        event.key <= 9 ||
        event.key === "+" ||
        event.key === "-" ||
        event.key === "*" ||
        event.key === "." ||
        event.key === "," ||
        event.key === "/" ||
        event.key === "%" ||
        event.key === "(" ||
        event.key === ")"
    ) {
        screenValue += event.key;
        screen.value = screenValue;
    }
    if (event.key === "e"){
        // screenValue += Math.E;
        screenValue += "e";
        screen.value = screenValue;
    }
    if (event.key === "p"){
        // screenValue += Math.PI;
        screenValue += "π";
        screen.value = screenValue;
    }
    if (event.keyCode === 13 || event.keyCode === 187) {
        checkForBracketMulti(); // automatically evaluates if no brackets
    } else if (event.keyCode === 46) {
        screenValue = "";
        screen.value = screenValue;
        console.clear();
    } else if (event.keyCode === 107) {
        screenValue = "+";
        screen.value = screenValue;
        console.clear();
    } else if (event.keyCode === 187) {
        screenValue = "+";
        screen.value = screenValue;
        console.clear();
    } else if (
        event.keyCode === 8) {
        screenValue = screenValue.slice(0, -1);
        screen.value = screenValue;
    } else if (event.keyCode === 67) {
        screenValue = "";
        screen.value = screenValue;
        console.clear();
    } else if (event.keyCode === 82) {
        location.reload();
    }
});

//Prints error message
window.onerror = function () {
    alert("PLEASE INPUT VALID EXPRESSION");
    screenValue = "";
    screen.value = screenValue;
    console.clear();
};

//Allows multiplication with brackets, without typing "*", by automatically adding multiplication
window.onBracketMultiplication = function () {
    //Doesn't automatically add "*" if using logarithm functions
    if (buttonText !== "log2(" && buttonText !== "log10("){
        screenValue = addStr(screen.value, screen.value.indexOf("("), "*");
    }
    screen.value = eval(screenValue);
};

function addStr(str, index, stringToAdd) {
    return (
        str.substring(0, index) + stringToAdd + str.substring(index, str.length)
    );
}

function checkForBracketMulti() {
    // Check if there's a number directly in-front of a bracket
    if (
        screen.value.includes("(") &&
        !isNaN(screen.value.charAt(screen.value.indexOf("(") - 1))
    ) {
        window.onBracketMultiplication();
    } else {
        screen.value = eval(screenValue);
    }
}