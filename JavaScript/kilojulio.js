
function operacion()
{
    var ingresanumero =parseFloat( document.querySelector("#ingresanumero").value);
    
    var operation = document.querySelector("#select").value;

    if (operation == document.querySelector("#Kilojulio").value)
    {
        console.log("El resultado es: "+ingresanumero)
        document.querySelector("#muestratexto").value=ingresanumero;
        
    } 

    if (operation == document.querySelector("#Kilocaloria").value)
    {
        var op= ingresanumero/4.184
        console.log(op)
        document.querySelector("#muestratexto").value=op;    
    } 

       

      
}
       

        



        

        
        











