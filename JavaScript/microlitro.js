
function operacion()
{
    var ingresanumero =parseFloat( document.querySelector("#ingresanumero").value);
    
    var operation = document.querySelector("#select").value;

    if (operation == document.querySelector("#uL").value)
    {
        console.log("El resultado es: "+ingresanumero)
        document.querySelector("#muestratexto").value=ingresanumero;
        
    } 

    if (operation == document.querySelector("#Gal").value)
    {
        var op= ingresanumero*2.64172
        console.log(op)
        document.querySelector("#muestratexto").value=op;    
    } 

    if (operation == document.querySelector("#M3").value)
    {
      var op= ingresanumero* 0.000000001

         console.log(op)
         document.querySelector("#muestratexto").value=op;
    }
       
    if (operation == document.querySelector("#L").value)
    {
      var op= ingresanumero*0.000001
         console.log(op)
         document.querySelector("#muestratexto").value=op;
     
    }  

    if (operation == document.querySelector("#mL").value)
    {
      var op= ingresanumero/1000
         console.log(op)
         document.querySelector("#muestratexto").value=op;
    }

    
      return false;


      
}
       

        



        

        
        











