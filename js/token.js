
window.onload = function getRandomArbitrary() {

    var max = 9999;
    var min = 1000;
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    var div = document.getElementById('tommyToken');

    div.innerHTML = "Your magic token is: " + random;
}
