
function operacion()
{
    var ingresanumero =parseFloat( document.querySelector("#ingresanumero").value);
    
    var operation = document.querySelector("#select").value;

    if (operation == document.querySelector("#Psi").value)
    {
        console.log("El resultado es: "+ingresanumero)
        document.querySelector("#muestratexto").value=ingresanumero;
        
    } 

    if (operation == document.querySelector("#mmHg").value)
    {
        var op= ingresanumero*51.714
        console.log(op)
        document.querySelector("#muestratexto").value=op;    
    } 
    
    if (operation == document.querySelector("#Atm").value)
    {
        var op= ingresanumero/14.696

        console.log(op)
        document.querySelector("#muestratexto").value=op;    
    }

    if (operation == document.querySelector("#Pa").value)
    {
      var op= ingresanumero* 6894.75728
         console.log(op)
         document.querySelector("#muestratexto").value=op;
    }
    if (operation == document.querySelector("#Torr").value)
    {
      var op= ingresanumero*51.714
         console.log(op)
         document.querySelector("#muestratexto").value=op;
    }
       

      
}
       

        



        

        
        











