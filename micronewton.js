
function operacion()
{
    var ingresanumero =parseFloat( document.querySelector("#ingresanumero").value);
    
    var operation = document.querySelector("#select").value;

    if (operation == document.querySelector("#Micronewton").value)
    {
        console.log("El resultado es: "+ingresanumero)
        document.querySelector("#muestratexto").value=ingresanumero;
        
    } 

    if (operation == document.querySelector("#Newton").value)
    {
        var op= ingresanumero/1000000
        console.log(op)
        document.querySelector("#muestratexto").value=op;    
    } 
    
    if (operation == document.querySelector("#Kilonewton").value)
    {
        var op=ingresanumero/1000000000
        console.log(op)
        document.querySelector("#muestratexto").value=op;    
    }

    if (operation == document.querySelector("#Dina").value)
    {
        var op= ingresanumero/10
        console.log(op)
        document.querySelector("#muestratexto").value=op;    
    }

    if (operation == document.querySelector("#KilogramoFuerza").value)
    {
        var op= ingresanumero*0.00000010197
        console.log(op)
        document.querySelector("#muestratexto").value=op;    
    }

      
}
       

        



        

        
        











