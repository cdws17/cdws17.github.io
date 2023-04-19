//Generates a random integer between a range entered by the user
function rng() {
    let min = Math.ceil(document.getElementById("min").value);
    let max = Math.floor(document.getElementById("max").value);
    return(alert(Math.floor(Math.random() * (max-min+1) + min)));
}