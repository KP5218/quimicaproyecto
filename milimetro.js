
function operacion()
{
    var ingresanumero =parseFloat( document.querySelector("#ingresanumero").value);
    
    var operation = document.querySelector("#select").value;

    if (operation == document.querySelector("#mm").value)
    {
        console.log("El resultado es: "+ingresanumero)
        document.querySelector("#muestratexto").value=ingresanumero;
        
    } 

    if (operation == document.querySelector("#yarda").value)
    {
        var op= ingresanumero/914.4
        console.log(op)
        document.querySelector("#muestratexto").value=op;    
    } 

    if (operation == document.querySelector("#Pulgada").value)
    {
      var op= ingresanumero/25.4
         console.log(op)
         document.querySelector("#muestratexto").value=op;
    }
       
    if (operation == document.querySelector("#m").value)
    {
      var op= ingresanumero/1000
         console.log(op)
         document.querySelector("#muestratexto").value=op;
     
    }  

    if (operation == document.querySelector("#cm").value)
    {
      var op= ingresanumero/10
         console.log(op)
         document.querySelector("#muestratexto").value=op;
    }

    if (operation == document.querySelector("#K").value)
    {
      var op= ingresanumero/1000000
         console.log(op)
         document.querySelector("#muestratexto").value=op;
    }



      
}
       

        



        

        
        











