function idades() {
    var age = document.getElementById("calc").value;
    age = age.split(",");
    var maior = 0;
    var menor = 0;
    for (i = 0; i < age.length; i++) {
        if (parseInt(age[i]) >= 18) {
            maior++;
        } else {
            menor++;
        }
    }
    document.write("Os maiores de 18 anos são: " + maior + "<br>" + "  Os menores de 18 anos são:" + menor);
}