
function operacion()
{
    var ingresanumero =parseFloat( document.querySelector("#ingresanumero").value);
    
    var operation = document.querySelector("#select").value;

    if (operation == document.querySelector("#Km_m3").value)
    {
        console.log("El resultado es: "+ingresanumero)
        document.querySelector("#muestratexto").value=ingresanumero;
        
    } 

    if (operation == document.querySelector("#g_mL").value)
    {
        var op= ingresanumero/1000
        console.log(op)
        document.querySelector("#muestratexto").value=op;    
    } 
    
    if (operation == document.querySelector("#Kg_L").value)
    {
        var op= ingresanumero/1000
        console.log(op)
        document.querySelector("#muestratexto").value=op;    
    }

    if (operation == document.querySelector("#g_L").value)
    {
      var op= ingresanumero*1
         console.log(op)
         document.querySelector("#muestratexto").value=op;
    }
       

      
}
       

        



        

        
        











