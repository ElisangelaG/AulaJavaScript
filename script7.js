function calcular() {
    var number = document.getElementById("calc").value;
    number = number.split(",");
    for (i = 0; i < number.length; i++) {
        quadrado = parseInt(number[i]) * parseInt(number[i]);
        document.write("O quadrado de " + number[i] + " é " + quadrado + "<br>");
    }

}