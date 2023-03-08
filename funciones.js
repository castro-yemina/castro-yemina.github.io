document.getElementById("boton-datos").onclick =  function () {
    
    document.getElementById('mis-datos').style.display = 'block';
    }
    
    document.getElementById("boton-ocultar").addEventListener('click',  function () {
        
        
        document.getElementById('mis-datos').style.display = 'none';
    });
    
    document.getElementById("boton-enviar").onclick =  function () {
        
        document.getElementById('mensaje').style.display = 'block';
        }
    