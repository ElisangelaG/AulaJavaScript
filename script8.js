
function verificar() {
    number = document.getElementById("calc").value;
    number = number.split(",");
    var numMaior = parseInt(number[0]);
    for (i = 1; i < number.length; i++) {
        if (parseInt(number[i]) > numMaior) {
            numMaior = parseInt(number[i]);
        }
    }
    alert("O maior número que você digitou é " + numMaior);

}