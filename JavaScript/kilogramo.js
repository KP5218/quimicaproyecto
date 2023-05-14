
function operacion()
{
    var ingresanumero =parseFloat( document.querySelector("#ingresanumero").value);
    
    var operation = document.querySelector("#select").value;

    if (operation == document.querySelector("#K").value)
    {
        console.log("El resultado es: "+ingresanumero)
        document.querySelector("#muestratexto").value=ingresanumero;
        
    } 

    if (operation == document.querySelector("#Ton").value)
    {
        var op=parseFloat( ingresanumero/10000)
        console.log(op)
        document.querySelector("#muestratexto").value=op;    
    } 
       
    if (operation == document.querySelector("#Gr").value)
    {
      var op= parseFloat( ingresanumero*1000)
         console.log(op)
         document.querySelector("#muestratexto").value=op;
     
    }  
    
    if (operation == document.querySelector("#Mg").value)
    {
      var op= ingresanumero*1000000
         console.log(op)
         document.querySelector("#muestratexto").value=op;
    }

    if (operation == document.querySelector("#Ug").value)
    {
      var op= ingresanumero*1000000000
         console.log(op)
         document.querySelector("#muestratexto").value=op;
    }

    
      return false;


      
}
       

        



        

        
        











