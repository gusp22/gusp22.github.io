
function displayname() {
    document.getElementById("demo").innerHTML = document.getElementById('firstname'). value + " " + document.getElementById('lastname').value;
}//puts left side of equal sign in html when demo is called

function changeBodyColor() {
    document.body.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';//16 numbers to make color
    var color = '#';// placeholder
    for (var i = 0; i < 6; i++) { //0 to 6 numbers counting up from zero
        color += letters[Math.floor(Math.random()* 16)]; //random numbers of the 16
    }
    return color;
}