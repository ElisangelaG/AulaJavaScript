function exibirNomes(){
    var name = document.getElementById("Nomes").value;
    name =  name.split(",");
    
   for(i= name.length-1;i>=0;i--){
    document.write(name[i]+"<br>");
}
}