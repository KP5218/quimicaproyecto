
function operacion()
{
    var ingresanumero =parseFloat( document.querySelector("#ingresanumero").value);
    
    var operation = document.querySelector("#select").value;

    if (operation == document.querySelector("#Newton").value)
    {
        console.log("El resultado es: "+ingresanumero)
        document.querySelector("#muestratexto").value=ingresanumero;
        
    } 

    if (operation == document.querySelector("#Kilonewton").value)
    {
        var op= ingresanumero/1000
        console.log(op)
        document.querySelector("#muestratexto").value=op;    
    } 
    
    if (operation == document.querySelector("#Micronewton").value)
    {
        var op= ingresanumero*1000000
        console.log(op)
        document.querySelector("#muestratexto").value=op;    
    }

    if (operation == document.querySelector("#Dina").value)
    {
        var op= ingresanumero*100000
        console.log(op)
        document.querySelector("#muestratexto").value=op;    
    }

    if (operation == document.querySelector("#KilogramoFuerza").value)
    {
        var op= ingresanumero/9.807
        console.log(op)
        document.querySelector("#muestratexto").value=op;    
    }

      
}
       

        



        

        
        











