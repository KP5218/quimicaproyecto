
function operacion()
{
    var ingresanumero =parseFloat( document.querySelector("#ingresanumero").value);
    
    var operation = document.querySelector("#select").value;

    if (operation == document.querySelector("#Pa").value)
    {
        console.log("El resultado es: "+ingresanumero)
        document.querySelector("#muestratexto").value=ingresanumero;
        
    } 

    if (operation == document.querySelector("#mmHg").value)
    {
        var op= ingresanumero*0.007501
        console.log(op)
        document.querySelector("#muestratexto").value=op;    
    } 
    
    if (operation == document.querySelector("#Atm").value)
    {
        var op= ingresanumero/101300

        console.log(op)
        document.querySelector("#muestratexto").value=op;    
    }

    if (operation == document.querySelector("#Psi").value)
    {
      var op= ingresanumero* 0.000145037738007
         console.log(op)
         document.querySelector("#muestratexto").value=op;
    }
    if (operation == document.querySelector("#Torr").value)
    {
      var op= ingresanumero*0.007501
         console.log(op)
         document.querySelector("#muestratexto").value=op;
    }
       

      
}
       

        



        

        
        











