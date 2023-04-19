//Find the unknown values in a suvat equation
function suvat(){
    let s = document.getElementById("sValueS").value;
    let u = document.getElementById("uValueS").value;
    let v = document.getElementById("vValueS").value;
    let a = document.getElementById("aValueS").value;
    let t = document.getElementById("tValueS").value;

    if (t<0){
        alert("T can't be negative");
        return
    }

    let s1 = u*t+0.5*a*(t**2);
    let s2 = v*t-0.5*a*(t**2);
    let s3 = (v**2-u**2)/(2*a);
    let s4 = 0.5*t*(u+v);
    let u1 = v - a*t;
    let u2 = (s-0.5*a*t**2)/t;
    let u3 = (v**2-2*a*s)**0.5;
    let u4 = 2*s/t - v;
    let v1 = u + a*t;
    let v2 = (s+0.5*a*t**2)/t;
    let v3 = (u**2+2*a*s)**0.5;
    let v4 = 2*s/t - u;
    let a1 = (v-u)/t;
    let a2 = 2*(s-u*t)/(t**2);
    let a3 = -2*(s-v*t)/(t**2);
    let a4 = (v**2-u**2)/(2*s);
    let t1 = (v-u)/a;
    let t2 = (2*s)/(v-(-1*u));

    let b1 = (-2*v)/a;
    let c1 = (2*s)/a;
    let disc1 = b1**2-4*c1;
    let t3 = (-b1+disc1**0.5)/2;
    let t4 = (-b1-disc1**0.5)/2;

    let b2 = (2*u)/a;
    let c2 = (-2*s)/a;
    let disc2 = (b2**2)-4*c2;
    let t5 = (-b2+disc2**0.5)/2;
    let t6 = (-b2-disc2**0.5)/2;

    //Chooses the equation depending on what values were inputted
    if (s==""){
        if (u==""){
            alert("The values are:\nS = " + s2 + "\nU = " + u1);
        }
        else if (v==""){
            alert("The values are:\nS = " + s1 + "\nV = " + v1);
        }
        else if (a==""){
            alert("The values are:\nS = " + s4 + "\nA = " + a1);
        }
        else if (t==""){
            if (t1>=0) {
                alert("The values are:\nS = " + s3 + "\nT = " + t1);
            }
            else if(t1<0) {
                alert("There is no solution for time\nS = " + s3);
            }
        }

    }


    else if (u==""){
        if (v==""){
            alert("The values are:\nU = " + u2 + "\nV = " + v2);
        }
        else if (a==""){
            alert("The values are:\nU = " + u4 + "\nA = " + a3);
        }
        else if (t==""){
            if (t3>=0 && t4>=0){
                alert("The values are:\nU = ±" + u3 + "\nT = " + t3 + "\nor T = " + t4);
            }
            else if (t3>=0){
                alert("The values are:\nU = ±" + u3 + "\nT = " + t3);
            }
            else if (t4>=0){
                alert("The values are:\nU = ±" + u3 + "\nT = " + t4);
            }
            else {
                alert("There is no solution for time\nU = ±" + u3);
            }
        }
    }

    else if (v==""){
        if (a==""){
            alert("The values are:\nV = " + v4 + "\nA = " + a2);
        }
        else if (t==""){
            if (t5>=0 && t6>=0){
                alert("The values are:\nV = ±" + v3 + "\nT = " + t5 + "\nor T = " + t6);
            }
            else if (t5>=0){
                alert("The values are:\nV = ±" + v3 + "\nT = " + t5);
            }
            else if (t6>=0){
                alert("The values are:\nV = ±" + v3 + "\nT = " + t6);
            }
            else if(t5<0 && t6<0){
                alert("There is no solution for time\nV = ±" + v3);
            }
        }
    }
    else if (a==""){
        if (t=="" && t2>=0){
            alert("The values are:\na = " + a4 + "\nT = " + t2);
        }
        else if(t2<0){
            alert("There is no solution for time\nA = " + a4);
        }
    }

    alert("The suvat equations are:\nv^2 = u^2 + 2as\ns = ut + 0.5at^2\ns = vt - 0.5at^2\nv = u + at\ns = t(v+u)/2");
}

//Finds the remaining value from F=ma
function Fma(){
    let f = document.getElementById("fValueF").value;
    let m = document.getElementById("mValueF").value;
    let a = document.getElementById("aValueF").value;

    if (f==""){
        alert("F = " + (m*a));
    }
    else if (m==""){
        alert("M = " + (f/a));
    }
    else if (a==""){
        alert("A = " + (f/m));
    }
    else{
        alert("Enter two values");
    }
    alert("Rearrange Force = mass * acceleration");
}

// Find the remaining values from and impulse equation
function Impulse() {
    let I = document.getElementById("IValueI").value;
    let m = document.getElementById("mValueI").value;
    let v = document.getElementById("vValueI").value;
    let u = document.getElementById("uValueI").value;
    let f = document.getElementById("fValueI").value;
    let t = document.getElementById("tValueI").value;

    //Chooses the equation based on what values were inputted
    if (I==""){
        if(m=="" || v=="" || u==""){
            alert("Impulse = " + (f*t));
        }
        else if (f=="" || t==""){
            alert("Impulse = " + (m*(v-u)));
        }
        else{
            alert("Not enough values");
            return
        }
    }
    else if (m==""){
        if (I!="" && v!="" && u!=""){
            alert("Mass = " + (I/(v-u)));
        }
        else {
            alert("Not enough values");
            return
        }
    }
    else if (u==""){
        if (I!="" && v!="" && m!=""){
            alert("Initial velocity = " + (v-(I/m)));
        }
        else {
            alert("Not enough values");
            return
        }
    }
    else if (v==""){
        if (I!="" && u!="" && m!=""){
            alert("Final velocity = " + (u+(I/m)));
        }
        else {
            alert("Not enough values");
            return
        }
    }
    else if (f==""){
        if (I!="" && t!=""){
            alert("Force = " + (I/t));
        }
        else {
            alert("Not enough values");
            return
        }
    }
    else if (t==""){
        if (I!="" && f!=""){
            alert("Time = " + (I/f));
        }
        else {
            alert("Not enough values");
            return
        }
    }
    alert("Impulse = change in velocity * mass or Impulse = force * time");
}

//Find the remaining values from F = mu * R
function fmur(){
    let f = document.getElementById("fValueMu").value;
    let mu = document.getElementById("muValueMu").value;
    let r = document.getElementById("rValueMu").value;

    if (f==""){
        alert("F = " + (mu*r));
    }
    else if (mu==""){
        alert("µ = " + (f/r));
    }
    else if (r==""){
        alert("R = " + (f/mu));
    }
    else{
        alert("Enter two values")
    }

    alert("The maximum value of friction = the coefficient of friction (μ) * the reaction force");
}

//Finds the remaining values for Ek = 0.5 * m * v^2
function Ek(){
    let ke = document.getElementById("keValueEk").value;
    let m = document.getElementById("mValueEk").value;
    let v = document.getElementById("vValueEk").value;

    if (ke==""){
        alert("Ek = " + (0.5*m*v**2));
    }
    else if (m==""){
        alert("M = " + (2*ke)/(v**2));
    }
    else if (v==""){
        alert("V = ±" + (2*ke/m)**0.5);
    }
    else{
        alert("Enter two values")
    }

    alert("Kinetic energy = 0.5 * mass * velocity squared");
}

//Finds the remaining values from GPE = mgh
function GPE(){
    let GPE = document.getElementById("gpeValueGPE").value;
    let m = document.getElementById("mValueGPE").value;
    let h = document.getElementById("hValueGPE").value;
    let g = 9.8;

    if (GPE==""){
        alert("GPE = " + (m*g*h));
    }
    else if (m==""){
        alert("M = " + GPE/(g*h));
    }
    else if (h==""){
        alert("H = " + (GPE/(m*g)));
    }
    else{
        alert("Enter two values")
    }

    alert("Gravitational potential energy = mass * gravity (9.8) * height");
}