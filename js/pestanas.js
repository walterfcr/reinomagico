
let eventoGaleria1 = document.querySelector('#eventoGaleria1');
let eventoGaleria2 = document.querySelector('#eventoGaleria2');
let eventoGaleria3 = document.querySelector('#eventoGaleria3');
let eventoGaleria4 = document.querySelector('#eventoGaleria4');

function evento1() {
    document.getElementById("evento1").style.display = 'block';
    eventoGaleria1.classList.add("activo");
    document.getElementById("evento2").style.display = 'none';
    eventoGaleria2.classList.remove("activo");
    document.getElementById("evento3").style.display = 'none';
    eventoGaleria3.classList.remove("activo");
    document.getElementById("evento4").style.display = 'none';
    eventoGaleria4.classList.remove("activo");
}

function evento2(){
    document.getElementById("evento1").style.display = 'none';
    eventoGaleria1.classList.remove("activo");
    document.getElementById("evento2").style.display = 'block';
    eventoGaleria2.classList.add("activo");
    document.getElementById("evento3").style.display = 'none';
    eventoGaleria3.classList.remove("activo");
    document.getElementById("evento4").style.display = 'none';
    eventoGaleria4.classList.remove("activo");
}

function evento3(){
    document.getElementById("evento1").style.display = 'none';
    eventoGaleria1.classList.remove("activo");
    document.getElementById("evento2").style.display = 'none';
    eventoGaleria2.classList.remove("activo");
    document.getElementById("evento3").style.display = 'block';
    eventoGaleria3.classList.add("activo");
    document.getElementById("evento4").style.display = 'none';
    eventoGaleria4.classList.remove("activo");
}

function evento4(){
    document.getElementById("evento1").style.display = 'none';
    eventoGaleria1.classList.remove("activo");
    document.getElementById("evento2").style.display = 'none';
    eventoGaleria2.classList.remove("activo");
    document.getElementById("evento3").style.display = 'none';
    eventoGaleria3.classList.remove("activo");
    document.getElementById("evento4").style.display = 'block';
    eventoGaleria4.classList.add("activo");
}




