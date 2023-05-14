
function operacion()
{
    var ingresanumero =parseFloat( document.querySelector("#ingresanumero").value);
    
    var operation = document.querySelector("#select").value;

    if (operation == document.querySelector("#Gal").value)
    {
        console.log("El resultado es: "+ingresanumero)
        document.querySelector("#muestratexto").value=ingresanumero;
        
    } 

    if (operation == document.querySelector("#M3").value)
    {
        var op= ingresanumero/ 264.2
        console.log(op)
        document.querySelector("#muestratexto").value=op;    
    } 

    if (operation == document.querySelector("#L").value)
    {
      var op= ingresanumero*3.785411784

         console.log(op)
         document.querySelector("#muestratexto").value=op;
    }
       
    if (operation == document.querySelector("#Ml").value)
    {
      var op= ingresanumero*3785.411784
         console.log(op)
         document.querySelector("#muestratexto").value=op;
     
    }  

    if (operation == document.querySelector("#uL").value)
    {
      var op= ingresanumero*3.785411
         console.log(op)
         document.querySelector("#muestratexto").value=op;
    }

    
      return false;


      
}
       

        



        

        
        











