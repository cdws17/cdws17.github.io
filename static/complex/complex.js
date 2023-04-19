//i^n = 1,i,-1,-i when n%4 is 0,1,2,3 respectively
function ipown(){
    let n = document.getElementById("nValue").value;
    let ans;

    if (n%4 == 0){
        ans = "1"
    }
    else if (n%4 == 1){
        ans = "i"
    }
    else if (n%4 == 2){
        ans = "-1"
    }
    else if (n%4 == 3){
        ans = "-i"
    }
    alert("Answer = " + ans);
    alert("If n is a multiple of 4 then i^n = 1\nIf n is one more than a multiple of 4 then i^n = i\nIf n is two more than a multiple of 4 then i^n = -1\nIf n is three more then a multiple of 4 then i^n = -i");
}

//Converts from (a+bi)^n to re^i0
function reix(){
    let a = document.getElementById("aValue").value;
    let b = document.getElementById("bValue").value;
    let n = document.getElementById("nValue2").value;

    let r = ((a**2 + b**2)**0.5)**(1/n);
    let x = Math.atan(b/a)/n;

    alert("Answers:\n r = " + r + "\nθ = " + x + "\nθ can also equal x + 2πk÷n for k between 0 and n-1");
    alert("r^n is the distance between a and b\nSo r = (a^2 + b^2)^(1/n)\nθ is the angle between (0,0) and (a,b)\nSo θ = arctan(b/a)/n");
}

//Multiplies complex numbers
function multiply() {
    let a = document.getElementById("aValueM").value;
    let b = document.getElementById("bValueM").value;
    let c = document.getElementById("cValueM").value;
    let d = document.getElementById("dValueM").value;

    let p = a*c-b*d;
    let q = a*d+b*c;

    alert("(" + a + "+" + b + "i)(" + c + "+" + d + "i) =\n" + p + "+" + q + "i");
    alert("Since i = √-1, i^2 = -1\nSo, when finding the real component of the product of two complex numbers you multiply the two real parts and subtract the product of the coefficients of the complex parts\nTo find the complex part you multiply the real part of the first and the complex part of the second and add it to the product of the real part of the second and the complex part of the first\nSo the final answer is (a*c-b*d) + (a*d+b*c)i");
}

// Divides complex numbers
function divide() {
    let a = document.getElementById("aValueD").value;
    let b = document.getElementById("bValueD").value;
    let c = document.getElementById("cValueD").value;
    let d = document.getElementById("dValueD").value;

    let p = (a*c+b*d)/(c**2+d**2);
    let q = (b*c-a*d)/(c**2+d**2);

    alert("(" + a + "+" + b + "i)/(" + c + "+" + d + "i) =\n" + p + "+" + q + "i");
    alert("To divide two complex numbers you have to multiply the numerator and the denominator by the c - di in order to remove the i on the bottom.\nThen you can do simple multiplication and divide each part by c^2 + d^2.");
}

//Adds complex numbers
function add() {
    let a = Number(document.getElementById("aValueA").value);
    let b = Number(document.getElementById("bValueA").value);
    let c = Number(document.getElementById("cValueA").value);
    let d = Number(document.getElementById("dValueA").value);

    let p = (a+c);
    let q = (b+d);

    alert("(" + a + "+" + b + "i) + (" + c + "+" + d + "i) =\n" + p + "+" + q + "i");
    alert("To add two complex numbers you need to add each part individually.\nSo they answer would be (a+c) + (b+d)i.");
}

//Finds the modulus argument form of a + bi
function modarg() {
    let x = document.getElementById("xValue").value;
    let y = document.getElementById("yValue").value;

    let arg;
    let mod = (x**2+y**2)**0.5;

    //The argument is dependent on what quadrant the complex number is in
    if (x<0 && y>0){
        arg = Math.PI-(Math.atan(Math.abs(y/x)));
    }
    else if (x>0 && y>0){
        arg = Math.atan(Math.abs(y/x));
    }
    else if (x>0 && y<0){
        arg = -1*(Math.atan(Math.abs(y/x)));
    }
    else if (x<0 && y<0){
        arg = -1*(Math.PI-Math.atan(Math.abs(y/x)));
    }


    alert("|Z| = " + mod + "\narg(Z) = " + arg + " radians");
    alert("The argument is the angle from (0,0) to (a,b), so you need to use trigonometry.\nThe modulus is the distance from (0,0) to (a,b,), so you need to you pythagoras theorem.");
}
