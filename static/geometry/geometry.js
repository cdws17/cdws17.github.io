//Finds the intersection of two lines using two sets of points
function intersect() {
    let x1 = document.getElementById("xc1i").value;
    let y1 = document.getElementById("yc1i").value;
    let x2 = document.getElementById("xc2i").value;
    let y2 = document.getElementById("yc2i").value;
    let x3 = document.getElementById("xc3i").value;
    let y3 = document.getElementById("yc3i").value;
    let x4 = document.getElementById("xc4i").value;
    let y4 = document.getElementById("yc4i").value;

    let numeratorX = -1*((x1-x2)*((x3*y4)-(x4*y3))-(x4-x3)*((x2*y1)-(x1*y2)));
    let numeratorY =  -1*((x3*y4*y1)-(x3*y4*y2)-(x4*y3*y1)+(x4*y3*y2)-(y3*x1*y2)+(y3*x2*y1)+(y4*x1*y2)-(y4*x2*y1));

    let denominatorX = ((y3-y4)*(x1-x2)-(x4-x3)*(y2-y1));
    let denominatorY = (-1*x3*y1)+(x3*y2)+(x4*y1)-(x4*y2)+(y3*x1)-(y3*x2)-(y4*x1)+(y4*x2);

    let x = numeratorX/denominatorX;
    let y = numeratorY/denominatorY;

    if ((x1 === x2 && y1 === y2) || (x3 === x4 && y3 === y4) || denominatorX == 0 || denominatorY == 0) {
        alert("The lines don't intersect");
    }
    else{

        alert("The lines intersect at : (" + x + ", " + y + ").");
    }
    alert("The intersection of two lines can be found by setting two equations to be equal.\nTo find each of the equations you have to find the gradient from the coordinates and then find the value of the intercept with the y axis.\nYou can then set the two equations to be equal and solve for x.\nThen use the x value to solve for y.");
}

//Finds the distance between two points by pythagoras
function distance() {
    let x1 = document.getElementById("xc1d").value;
    let y1 = document.getElementById("yc1d").value;
    let x2 = document.getElementById("xc2d").value;
    let y2 = document.getElementById("yc2d").value;

    let dist = (((x2-x1)**2)+((y2-y1)**2))**0.5;
    alert("The distance between the points is " + dist);
    alert("To find the distance you need to use pythagoras theorem.\nYou can find the difference in the x-coordinates and y-coordinates of each point and then find the distance between them.");
}

//find the equation of a line using two points
function equation() {
    let x1 = document.getElementById("xc1e").value;
    let y1 = document.getElementById("yc1e").value;
    let x2 = document.getElementById("xc2e").value;
    let y2 = document.getElementById("yc2e").value;

    let grad = (y2-y1)/(x2-x1);
    let c = y1 - grad*x1;
    alert("The equation of the line is:\n y = " + grad + "x + " + c);
    alert("Find the gradient by change in y / change in x.\nFind c by subbing the gradient into y = mx + c.");
}

//Find the tangent to a polynomial at a point
function tangent() {
    let t3 = document.getElementById("tan3").value;
    let t2 = document.getElementById("tan2").value;
    let t1 = document.getElementById("tan1").value;
    let t0 = document.getElementById("tan0").value;
    let x1 = document.getElementById("xct").value;

    let f = x => t3*x**3 - -1*t2*x**2 - -1*t1*x - -1*t0;
    let df = x => 3*t3*x**2 - -2*t2*x - -1*t1;

    let grad = df(x1);
    let c = f(x1) - grad*x1;

    alert("Equation:\n y = " + grad + "x + " + c);
    alert("Find the gradient by differentiating the function and subbing in the x value. Find the tangent equation by rearranging y = mx + c to find c.");
}

//Find the normal to a polynomial at a point
function normal() {
    let n3 = document.getElementById("norm3").value;
    let n2 = document.getElementById("norm2").value;
    let n1 = document.getElementById("norm1").value;
    let n0 = document.getElementById("norm0").value;
    let x1 = document.getElementById("xcn").value;

    let f = x => n3*x**3 - -1*n2*x**2 - -1*n1*x - -1*n0;
    let df = x => 3*n3*x**2 - -2*n2*x - -1*n1;
    let tanGrad = df(x1);
    let grad = -1/tanGrad;
    let c = f(x1) - grad*x1

    alert("Equation:\n y = " + grad + "x + " + c);
    alert("Find the gradient of the tangent by differentiating the function and subbing in the x value. Find the normal gradient by -1/tangent gradient. Find the normal equation by rearranging y = mx + c to find c.");
}

//Find the equation of a circle given the center and radius
function circle() {
    let x1 = document.getElementById("xc1c").value;
    let y1 = document.getElementById("yc1c").value;
    let radius = document.getElementById("radius").value;

    alert("The equation of the circle is :\n" + "(x-" + x1 + ")² " + " +  (y-" + y1 + ")² " + " =  " + radius**2);
    alert("Circles are written in the form (x-x1)^2 + (y-y1)^2 = radius^2");
}

//Find the area of a regular polygon given the side length and number of sides
function areaSide() {
    let length = document.getElementById("length1").value;
    let n = document.getElementById("n").value;

    let p = length * n;
    let a = length / (4*Math.tan(Math.PI/n));
    let area = p*a;

    alert("The area is: " + area);
    alert("The area of a regular polygon is equal to the side length squared multiplied by the number of sides divided by 4 times tan(π / number of sides).");
}

// Find the area of a regular polygon given the internal angle and side length
function areaAngle() {
    let angle = document.getElementById("angle").value;
    let length = document.getElementById("length2").value;
    let n = 360/(180-angle);

    let p = length * n;
    let a = length / (4*Math.tan(Math.PI/n));
    let area = p*a;

    alert("The area is: " + area + ".\nThe shape has " + n + " sides.");
    alert("The area of a regular polygon is equal to the side length squared multiplied by (360/(180-angle)) divided by 4 times tan(π / (360/(180-angle))).");
}


//Find the radius, area and circumference of a circle given the radius
function circleInfo(){
    let radius = document.getElementById("radius2").value;
    let area = Math.PI*(radius**2);
    let circumference = Math.PI*radius*2;

    alert("The area is: " + area + ".\nThe circumference is " + circumference + ".");
    alert("The area is the radius squared multiplied by π.\nThe circumference is the diameter multiplied by π.")
}