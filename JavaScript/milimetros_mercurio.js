
function operacion()
{
    var ingresanumero =parseFloat( document.querySelector("#ingresanumero").value);
    
    var operation = document.querySelector("#select").value;

    if (operation == document.querySelector("#mmHg").value)
    {
        console.log("El resultado es: "+ingresanumero)
        document.querySelector("#muestratexto").value=ingresanumero;
        
    } 

    if (operation == document.querySelector("#Atm").value)
    {
        var op= ingresanumero*0.00131578966099
        console.log(op)
        document.querySelector("#muestratexto").value=op;    
    } 
    
    if (operation == document.querySelector("#Pa").value)
    {
        var op= ingresanumero*133.3223874 
        console.log(op)
        document.querySelector("#muestratexto").value=op;    
    }

    if (operation == document.querySelector("#Psi").value)
    {
      var op= ingresanumero*0.0193367774942
         console.log(op)
         document.querySelector("#muestratexto").value=op;
    }
    if (operation == document.querySelector("#Torr").value)
    {
      var op= ingresanumero*1
         console.log(op)
         document.querySelector("#muestratexto").value=op;
    }
       

      
}
       

        



        

        
        











