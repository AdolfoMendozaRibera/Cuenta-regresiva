//Se obtienen los elementos HTML con los ID "dias", "horas", "minutos" y "segundos" y se almacenan en variables correspondientes.
let dias=document.getElementById("dias");
let horas=document.getElementById("horas");
let minutos=document.getElementById("minutos");
let segundos=document.getElementById("segundos");

// Se crea un objeto Date que representa la fecha y hora de finalización de la cuenta regresiva 
// y se obtiene su valor en milisegundos con el método getTime().
let contador = new Date("March 30, 2025 15:34:00").getTime();

// Actualizar la cuenta regresiva cada segundo
var x=setInterval(()=>
{
    // Obtener la fecha y hora actual del sistema
    let actual=new Date().getTime();

    // Calcula la cantidad de tiempo restante hasta la fecha y hora de finalización
    let distancia=contador-actual;

    // Calcular días, horas, minutos y segundos restantes
    var dia = Math.floor(distancia / (1000 * 60 * 60 * 24));
    var hora = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minuto = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    var segundo = Math.floor((distancia % (1000 * 60)) / 1000);


    // Mostrar la cuenta regresiva en elementos HTML
    dias.innerHTML=dia;
    horas.innerHTML=hora;
    minutos.innerHTML=minuto;
    segundos.innerHTML=segundo;

    //Cuando la cuenta regrevisa llegue a 0, se detiene
    if (distancia<0)
    {
        clearInterval(x);
        dias.innerHTML=0;
        horas.innerHTML=0;
        minutos.innerHTML=0;
        segundos.innerHTML=0;
        document.getElementById("aviso").textContent="YA ESTA DISPONIBLE EL PRODUCTO"
    }
},1000);