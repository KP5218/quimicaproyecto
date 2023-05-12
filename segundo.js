
function operacion()
{
    var ingresanumero =parseFloat( document.querySelector("#ingresanumero").value);
    
    var operation = document.querySelector("#select").value;

    if (operation == document.querySelector("#s").value)
    {
        console.log("El resultado es: "+ingresanumero)
        document.querySelector("#muestratexto").value=ingresanumero;
        
    } 

    if (operation == document.querySelector("#min").value)
    {
        var op= ingresanumero*0.016666667
        console.log(op)
        document.querySelector("#muestratexto").value=op;    
    } 
    
    if (operation == document.querySelector("#Hora").value)
    {
        var op= ingresanumero/3600
        console.log(op)
        document.querySelector("#muestratexto").value=op;    
    }

      
}
       

        



        

        
        











