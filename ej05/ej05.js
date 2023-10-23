function digVal()
{
    var Nño = parseInt(prompt("Ingresar numero de niños", "Digitar aqui"));
    var Nña = parseInt(prompt("Ingresar numero de niñas", "Digitar aqui"));
    var Tnñ = (Nña+Nño)
    alert("Los porcentajes de niños es: " + Math.trunc(Nño*100/Tnñ) + "%");
    alert("Los porcentajes de niñas es: " + Math.trunc(Nña*100/Tnñ) + "%");
}





