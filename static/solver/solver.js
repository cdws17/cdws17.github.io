//Solves simultaneous equations with two variables
function sim2Var() {
    let Var1 = document.getElementById("2Var1").value;
    let Var2 = document.getElementById("2Var2").value;
    let Var3 = document.getElementById("2Var3").value;
    let Var4 = document.getElementById("2Var4").value;
    let Var5 = document.getElementById("2Var5").value;
    let Var6 = document.getElementById("2Var6").value;
    let A = (-Var2*Var6+Var3*Var5)/(Var2*Var4-Var1*Var5)
    let B = (-Var1*Var6+Var3*Var4)/(Var1*Var5-Var2*Var4)

    //If any inputs aren't real numbers then output message
    if (isNaN(Var1)===true || isNaN(Var2)===true || isNaN(Var3)===true || isNaN(Var4)===true || isNaN(Var5)===true || isNaN(Var6)===true || Var1==="" || Var2==="" || Var3==="" || Var4==="" || Var5==="" || Var6===""){
        alert("Your input must only contain real numbers and cannot be blank");
        return;
    }
    else{
        //Outputs the solutions / no solutions if the equations are parallel
        if ((Var2*Var4-Var1*Var5) === 0 ||  (Var1*Var5-Var2*Var4) === 0){
            alert("No real solutions")
        }
        else{
            alert("A = " + A + "\nB = " + B);
        }

        alert("Rearrange to find both equations in terms of one variable then set the equations equal and solve. Substitute the value found into one of the equations to get the second variable.");
    }
}

//Solves simultaneous equations with two variables
function sim3Var() {
    let Var1 = document.getElementById("3Var1").value;
    let Var2 = document.getElementById("3Var2").value;
    let Var3 = document.getElementById("3Var3").value;
    let Var4 = document.getElementById("3Var4").value;
    let Var5 = document.getElementById("3Var5").value;
    let Var6 = document.getElementById("3Var6").value;
    let Var7 = document.getElementById("3Var7").value;
    let Var8 = document.getElementById("3Var8").value;
    let Var9 = document.getElementById("3Var9").value;
    let Var10 = document.getElementById("3Var10").value;
    let Var11 = document.getElementById("3Var11").value;
    let Var12 = document.getElementById("3Var12").value;
    // A_{1}B_{2}C_{3}D_{4}
    // K_{5}L_{6}M_{7}N_{8}
    // P_{9}Q_{10}R_{11}S_{12}

    //If any inputs aren't real numbers then output message
    if (isNaN(Var1)===true || isNaN(Var2)===true || isNaN(Var3)===true || isNaN(Var4)===true || isNaN(Var5)===true || isNaN(Var6)===true || isNaN(Var7)===true || isNaN(Var8)===true || isNaN(Var9)===true || isNaN(Var10)===true || isNaN(Var11)===true || isNaN(Var12)===true || Var1==="" || Var2==="" || Var3==="" || Var4==="" || Var5==="" || Var6==="" || Var7==="" || Var8==="" || Var9==="" || Var10==="" || Var11==="" || Var12===""){
        alert("Your input must only contain real numbers and cannot be blank");
        return;
    }
    else {
        //Outputs the solutions / no solutions if the equations are parallel
        let real3Var = true;

        let Z1 = (-1 * Var6 * Var4 * Var9 + Var2 * Var8 * Var9 + -1 * Var2 * Var5 * Var12 + Var6 * Var1 * Var12 + -1 * Var1 * Var8 * Var10 + Var4 * Var5 * Var10);
        let Z2 = (-1 * Var7 * Var2 * Var9 + Var7 * Var1 * Var10 + Var2 * Var5 * Var11 + -1 * Var6 * Var1 * Var11 + Var6 * Var3 * Var9 + -1 * Var3 * Var5 * Var10);
        if (Z2 === 0) {
            real3Var = false;
        }
        let Z = Z1 / Z2;


        let Y1 = (-1 * Var5 * Var4 * Var11 + Var1 * Var8 * Var11 + -1 * Var1 * Var7 * Var12 + Var5 * Var3 * Var12 + -1 * Var3 * Var8 * Var9 + Var4 * Var7 * Var9);
        let Y2 = (-1 * Var6 * Var1 * Var11 + Var6 * Var3 * Var9 + Var1 * Var7 * Var10 + -1 * Var5 * Var3 * Var10 + Var5 * Var2 * Var11 + -1 * Var2 * Var7 * Var9);
        if (Y2 === 0) {
            real3Var = false;
        }
        let Y = Y1 / Y2;


        let X1 = (-1 * Var6 * Var4 * Var11 + Var2 * Var8 * Var11 + -1 * Var2 * Var7 * Var12 + Var6 * Var3 * Var12 + -1 * Var3 * Var8 * Var10 + Var4 * Var7 * Var10);
        let X2 = (-1 * Var5 * Var2 * Var11 + Var5 * Var3 * Var10 + Var2 * Var7 * Var9 + -1 * Var6 * Var3 * Var9 + Var6 * Var1 * Var11 + -1 * Var1 * Var7 * Var10);
        if (X2 === 0) {
            real3Var = false;
        }
        let X = X1 / X2;


        if (real3Var === true) {
            alert("A = " + -1*X + "\nB = " + -1*Y + "\nC = " + -1*Z);
        } else if (real3Var === false) {
            alert("Could find real solutions");
        }

        alert("Set each of the equations equal to one variable then solve by setting the equations equal. Then substitute the value of the variable into the equations and solve by find the equations in terms of one of the remaining two variables. Set the equations equal and solve. Then substitute the value of the two variables to find the third.");
    }
}

//Linear equation solver (ax+b=0)
function linear() {
    let linA = document.getElementById("1Pow1").value;
    let linB = document.getElementById("1Pow2").value;

    if (isNaN(linA)===true || isNaN(linB)===true || linA==="" || linB===""){
        alert("Your input must only contain real numbers and cannot be blank");
        return;
    }
    else {
        if (linA === 0) {
            alert("Enter a linear equation")
        } else if (linA !== 0) {
            alert("x = " + -1 * linB / linA);
        }
        alert("If the equation is in the form ax + b = 0\nx = -b/a");
    }
}

//Quadratic equation solver (ax^2+bx+c=0)
function quadratic() {
    let quadA = document.getElementById("2Pow1").value;
    let quadB = document.getElementById("2Pow2").value;
    let quadC = document.getElementById("2Pow3").value;
    if (isNaN(quadA)===true || isNaN(quadB)===true || isNaN(quadC)===true || quadA==="" || quadB==="" || quadC===""){
        alert("Your input must only contain real numbers and cannot be blank");
        return;
    }
    else {
        let X;
        let X1;
        let X2;
        let discriminant = (quadB**2-4*quadA*quadC);
        if (quadA !== 0){
            //If the discriminant is negative, then there are two complex solutions
            if (discriminant < 0) {
                X = -quadB/(2*quadA);
                alert("Two complex solutions:\nX = " + X + " + " + ((-1*discriminant)**0.5)/(2*quadA) + "i \nX = " + X + " - " + ((-1*discriminant)**0.5)/(2*quadA) + "i");
            }
            //If the discriminant = 0, then there is one real repeated solution
            else if (discriminant === 0) {
                X = -quadB/(2*quadA);
                alert("One repeated solution:\nX = " + X);
            }
            //If the discriminant is positive, then there are two real solutions
            else if (discriminant > 0) {
                X1 = (-quadB + discriminant**0.5)/(2*quadA);
                X2 = (-quadB - discriminant**0.5)/(2*quadA);
                alert("Two real solutions:\nX = " + X1 + "\nX = " + X2);
            }
        }
        else if (quadA === 0){
            alert("Enter a quadratic equation")
        }
        alert("Use the quadratic formula\nX = -b±√(b^2-4ac)/2a");
    }
}

//Cubic equation solver (ax^3+bx^2+cx+d=0)
function cubic() {
    let a = document.getElementById("3Pow1").value;
    let b = document.getElementById("3Pow2").value;
    let c = document.getElementById("3Pow3").value;
    let d = document.getElementById("3Pow4").value;
    if (isNaN(a)===true || isNaN(b)===true || isNaN(c)===true || isNaN(d)===true || a==="" || b==="" || c==="" || d===""){
        alert("Your input must only contain real numbers and cannot be blank");
        return;
    }
    else {
        let f = x =>a*x**3 + 1*b*x**2 + 1*c*x + 1*d;
        let df = x => 3*a*x**2 + 2*b*x + 1*c;

        let xAns;
        let repeats;

        //Uses Newton-Raphson method to find estimates for the roots of a polynomial

        function newton(f, df, x0) {
            if (repeats === 50){
                xAns = x0;
            } else {
                repeats = repeats + 1;
                return newton(f, df, x0 - f(x0) / df(x0));
            }
        }
        repeats = 0;
        newton(f, df, 10);
        let x1 = xAns;
        repeats = 0;
        newton(f, df, 0);
        let x2 = xAns;
        repeats = 0;
        newton(f, df, -10);
        let x3 = xAns;
        alert("Estimates for roots found:\nX = " + x1 + "\nX = " + x2 + "\nX = " + x3);

        alert("The cubic solutions are solved using the Newton-Raphson method.\nx1 = x0 - f(x)/f'(x)\nUse a starting value of x0 that is near to the root.\nRepeat until you find a value that is close to the actual root.");
    }
}

//Integrate polynomial equations
function integrate (){
    let i1 = document.getElementById("int1").value;
    let i2 = document.getElementById("int2").value;
    let i3 = document.getElementById("int3").value;
    let i4 = document.getElementById("int4").value;

    if (isNaN(i1)===true || isNaN(i2)===true || isNaN(i3)===true || isNaN(i4)===true || i1==="" || i2==="" || i3==="" || i4===""){
        alert("Your input must only contain real numbers and cannot be blank");
        return;
    }
    else {
        i1 = i1/4;
        i2 = i2/3;
        i3 = i3/2;

        alert("The integration is:\n" + i1 + "x⁴ + " + i2 + "x³ + " + i3 + "x² + " + i4 + "x + C");

        alert("∫ (ax^b) dx = (a/b+1) * x^(b+1)");
    }
}

//Integrate polynomials between two values
function integrateBounds() {
    integrate()
    let a = document.getElementById("int1").value;
    let b = document.getElementById("int2").value;
    let c = document.getElementById("int3").value;
    let d = document.getElementById("int4").value;
    let x1 = document.getElementById("bound1").value;
    let x2 = document.getElementById("bound2").value;

    if (isNaN(a)===true || isNaN(b)===true || isNaN(c)===true || isNaN(d)===true || a==="" || b==="" || c==="" || d===""){
        alert("Your input must only contain real numbers and cannot be blank");
        return;
    }
    else {
        let f = x => (a / 4) * x ** 4 + 1 * (b / 3) * x ** 3 + 1 * (c / 2) * x ** 2 + 1 * d * x;
        let ans = f(x2) - f(x1);
        alert("The integration between " + x1 + " and " + x2 + " is:\n" + ans);

        alert("∫[p,q] (ax^b) dx = (a/b+1) * p^(b+1) - (a/b+1) * q^(b+1)");
    }
}

//Differentiate polynomials
function differentiate (){
    let d1 = document.getElementById("dif1").value;
    let d2 = document.getElementById("dif2").value;
    let d3 = document.getElementById("dif3").value;

    if (isNaN(d1)===true || isNaN(d2)===true || isNaN(d3)===true || d1==="" || d2==="" || d3===""){
        alert("Your input must only contain real numbers and cannot be blank");
        return;
    }
    else {
        d1 = d1 * 3;
        d2 = d2 * 2;

        alert("The differentiation is:\n" + d1 + "x² + " + d2 + "x + " + d3);
        alert("d/dx (ax^b) = bax^(b-1)");
    }
}





// function cubic1() {
//     let cubeA = document.getElementById("3Pow1").value;
//     let cubeB = document.getElementById("3Pow2").value;
//     let cubeC = document.getElementById("3Pow3").value;
//     let cubeD = document.getElementById("3Pow4").value;
//     let root1;
//
//     Math.cbrt = function(x) {
//         let sign = x === 0 ? 0 : x > 0 ? 1 : -1;
//         return sign * Math.pow(Math.abs(x), 1 / 3);
//     }
//     if (cubeA != 0) {
//
//         let p = ((-1 * (cubeB ** 3) / (27 * (cubeA ** 3))) + ((cubeB * cubeC) / (6 * (cubeA ** 2))) - ((cubeD) / (2 * cubeA)));
//
//         let q = ((cubeC / (3 * cubeA)) - (cubeB ** 2) / (9 * cubeA ** 2));
//
//         let r = (p + (p ** 2 + q ** 3) ** 0.5);
//
//         let s = (p - (p ** 2 + q ** 3) ** 0.5);
//
//         let t = Math.cbrt(r) + Math.cbrt(s) - cubeB / (3 * cubeA);
//         root1 = t
//         if (root1>=0 || root1<=0){
//             alert("There is a root at x = " + root1);
//             let k = ((-cubeB*root1)-(cubeA*(root1**2))**2)+4*cubeA*cubeD*root1;
//             let l = (cubeB*root1)+(cubeA*(root1**2));
//             let root2 = -1*(l+(k**0.5))/(2*cubeA*root1);
//             let root3 = -1*(l-(k**0.5))/(2*cubeA*root1);
//             if (k > 0){
//                 alert("There is a root at x = " + root2);
//                 alert("There is a root at x = " + root3);
//             }
//             else if (k==0){
//                 let root4 = (-1*l)/(2*cubeA*root1);
//                 alert("There is a repeated root at x = " + root3);
//             }
//             else if (k < 0){
//                 alert("Couldn't find the other roots")
//             }
//         }
//         else {
//             alert("Couldn't find the roots")
//         }
//     }
//     else if (cubeA == 0){
//         alert("Please enter a cubic")
//     }
//
//     alert("");
// }