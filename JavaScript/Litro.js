
function operacion()
{
    var ingresanumero =parseFloat( document.querySelector("#ingresanumero").value);
    
    var operation = document.querySelector("#select").value;

    if (operation == document.querySelector("#L").value)
    {
        console.log("El resultado es: "+ingresanumero)
        document.querySelector("#muestratexto").value=ingresanumero;
        
    } 

    if (operation == document.querySelector("#Gal").value)
    {
        var op= ingresanumero*0.2642
        console.log(op)
        document.querySelector("#muestratexto").value=op;    
    } 

    if (operation == document.querySelector("#M3").value)
    {
      var op= ingresanumero/1000

         console.log(op)
         document.querySelector("#muestratexto").value=op;
    }
       
    if (operation == document.querySelector("#Ml").value)
    {
      var op= ingresanumero*1000
         console.log(op)
         document.querySelector("#muestratexto").value=op;
     
    }  

    if (operation == document.querySelector("#uL").value)
    {
      var op= ingresanumero*1000000
         console.log(op)
         document.querySelector("#muestratexto").value=op;
    }

    
      return false;


      
}
       

        



        

        
        











