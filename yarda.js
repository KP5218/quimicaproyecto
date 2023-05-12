
function operacion()
{
    var ingresanumero =parseFloat( document.querySelector("#ingresanumero").value);
    
    var operation = document.querySelector("#select").value;

    if (operation == document.querySelector("#yarda").value)
    {
        console.log("El resultado es: "+ingresanumero)
        document.querySelector("#muestratexto").value=ingresanumero;
        
    } 

    if (operation == document.querySelector("#m").value)
    {
        var op= ingresanumero/1.0936
        console.log(op)
        document.querySelector("#muestratexto").value=op;    
    } 

    if (operation == document.querySelector("#Pulgada").value)
    {
      var op= ingresanumero*36
         console.log(op)
         document.querySelector("#muestratexto").value=op;
    }
       
    if (operation == document.querySelector("#cm").value)
    {
      var op= ingresanumero*91.44
         console.log(op)
         document.querySelector("#muestratexto").value=op;
     
    }  

    if (operation == document.querySelector("#K").value)
    {
      var op= ingresanumero/1093.6
         console.log(op)
         document.querySelector("#muestratexto").value=op;
    }

    if (operation == document.querySelector("#mm").value)
    {
      var op= ingresanumero/0.0010936
         console.log(op)
         document.querySelector("#muestratexto").value=op;
    }



      
}
       

        



        

        
        











