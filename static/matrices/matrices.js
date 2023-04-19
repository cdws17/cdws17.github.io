// Find the determinant of a 2x2 matrix
function det2x2() {
    let a = document.getElementById("2a").value;
    let b = document.getElementById("2b").value;
    let c = document.getElementById("2c").value;
    let d = document.getElementById("2d").value;

    let det = a*d-b*c;

    let a1 = d/det;
    let b1 = -1*b/det;
    let c1 = -1*c/det;
    let d1 = a/det;

    if (det===0){
        alert("The matrix is singular and the determinant is 0\nThere is no inverse");
    }
    else if (det!==0){
        alert("The matrix is non-singular and the determinant is " + det + "\nThe inverse is:\n" + a1 + ", " + b1 + "\n" + c1 + ", " + d1);
    }
    alert("The determinant is a*d - b*c.\nIf the determinant is 0, the matrix is singular and has no inverse.\nIf the determinant is non-zero, then each value is divided by the determinant.\nThe values in the top right and bottom left values are multiplied by negative 1.\nThe values in the top left and bottom right are switched.");
}

// Find the determinant of a 3x3 matrix
function det3x3() {
    let a = document.getElementById("3a").value;
    let b = document.getElementById("3b").value;
    let c = document.getElementById("3c").value;
    let d = document.getElementById("3d").value;
    let e = document.getElementById("3e").value;
    let f = document.getElementById("3f").value;
    let g = document.getElementById("3g").value;
    let h = document.getElementById("3h").value;
    let i = document.getElementById("3i").value;

    let det = a*(e*i-f*h) - b*(d*i-f*g) + c*(d*h-e*g);

    let a1 = (e*i-f*h)/det;
    let b1 = -1*(b*i-c*h)/det;
    let c1 = (b*f-c*e)/det;
    let d1 = -1*(d*i-f*g)/det;
    let e1 = (a*i-c*g)/det;
    let f1 = -1*(a*f-c*d)/det;
    let g1 = (d*h-e*g)/det;
    let h1 = -1*(a*h-b*g)/det;
    let i1 = (a*e-b*d)/det;


    if (det===0){
        alert("The matrix is singular and the determinant is 0\nThe matrix has no inverse");
    }
    else if (det!==0){
        alert("The matrix is non-singular and the determinant is " + det + "\nThe inverse is:\n" + a1 + ", " + b1 + ", " + c1 + "\n" + d1 + ", " + e1 + ", " + f1 + "\n" + g1 + ", " + h1 + ", " + i1);
    }
    alert("To find the determinant of a 3x3 matrix you need to do a(ei-fh) - b(di-fg) + c(dh-eg).\nTo find the inverse you need to find the determinant of each value and the reflect the matrix and multiply the four outside centre terms by negative 1.");
}

// Find the product of two 2x2 matrices
function mult2x2(){
    let a1 = document.getElementById("2am1").value;
    let b1 = document.getElementById("2bm1").value;
    let c1 = document.getElementById("2cm1").value;
    let d1 = document.getElementById("2dm1").value;
    let a2 = document.getElementById("2am2").value;
    let b2 = document.getElementById("2bm2").value;
    let c2 = document.getElementById("2cm2").value;
    let d2 = document.getElementById("2dm2").value;

    let a = (a1*a2) + (b1*c2);
    let b = (a1*b2) + (b1*d2);
    let c = (c1*a2) + (d1*c2);
    let d = (c1*b2) + (d1*d2);

    alert("The new matrix is:\n" + a + ", " + b + "\n" + c + ", " + d);
    alert("To multiply two 2x2 matrices you need to multiply each column on the first with each row on the second to create the product.");
}

// Find the product of two 3x3 matrices
function mult3x3() {
    let a1 = document.getElementById("3am1").value;
    let b1 = document.getElementById("3bm1").value;
    let c1 = document.getElementById("3cm1").value;
    let d1 = document.getElementById("3dm1").value;
    let e1 = document.getElementById("3em1").value;
    let f1 = document.getElementById("3fm1").value;
    let g1 = document.getElementById("3gm1").value;
    let h1 = document.getElementById("3hm1").value;
    let i1 = document.getElementById("3im1").value;
    let a2 = document.getElementById("3am2").value;
    let b2 = document.getElementById("3bm2").value;
    let c2 = document.getElementById("3cm2").value;
    let d2 = document.getElementById("3dm2").value;
    let e2 = document.getElementById("3em2").value;
    let f2 = document.getElementById("3fm2").value;
    let g2 = document.getElementById("3gm2").value;
    let h2 = document.getElementById("3hm2").value;
    let i2 = document.getElementById("3im2").value;

    let a = (a1*a2) + (b1*d2) + (c1*g2);
    let b = (a1*b2) + (b1*e2) + (c1*h2);
    let c = (a1*c2) + (b1*f2) + (c1*i2);
    let d = (d1*a2) + (e1*d2) + (f1*g2);
    let e = (d1*b2) + (e1*e2) + (f1*h2);
    let f = (d1*c2) + (e1*f2) + (f1*i2);
    let g = (g1*a2) + (h1*d2) + (i1*g2);
    let h = (g1*b2) + (h1*e2) + (i1*h2);
    let i = (g1*c2) + (h1*f2) + (i1*i2);

    alert("The new matrix is:\n" + a + ", " + b + ", " + c + "\n" + d + ", " + e + ", " + f + "\n" + g + ", " + h + ", " + i);
    alert("To multiply two 3x3 matrices you need to multiply each column on the first with each row on the second to get the product.");
}
