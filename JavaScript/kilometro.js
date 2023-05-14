
function operacion()
{
    var ingresanumero =parseFloat( document.querySelector("#ingresanumero").value);
    
    var operation = document.querySelector("#select").value;

    if (operation == document.querySelector("#K").value)
    {
        console.log("El resultado es: "+ingresanumero)
        document.querySelector("#muestratexto").value=ingresanumero;
        
    } 

    if (operation == document.querySelector("#yarda").value)
    {
        var op= ingresanumero*1093.6
        console.log(op)
        document.querySelector("#muestratexto").value=op;    
    } 

    if (operation == document.querySelector("#Pulgada").value)
    {
      var op= ingresanumero*39370.079
         console.log(op)
         document.querySelector("#muestratexto").value=op;
    }
       
    if (operation == document.querySelector("#m").value)
    {
      var op= ingresanumero*1000
         console.log(op)
         document.querySelector("#muestratexto").value=op;
     
    }  

    if (operation == document.querySelector("#cm").value)
    {
      var op= ingresanumero*100000

         console.log(op)
         document.querySelector("#muestratexto").value=op;
    }

    if (operation == document.querySelector("#mm").value)
    {
      var op= ingresanumero*1000000
         console.log(op)
         document.querySelector("#muestratexto").value=op;
    }



      
}
       

        



        

        
        











