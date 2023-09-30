'use extrict';

window.addEventListener('load', init, false);

function init() {
    let email = document.getElementById('inscriptionTxt');
    let btnEnviar = document.getElementById('btnSend');
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    let alerta = document.getElementById('mensajeAlert');

    btnEnviar.onclick = function() {
        email = inscriptionTxt.value;

        if (email === '') {
            alerta.textContent = 'El campo email esta vacio';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');          
        } else if (expressionEmail.test(email) === false) {
            alerta.textContent = 'Email invalido';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde'); 
        } else {
            alerta.textContent = 'Su registro fue exitoso';
            alerta.classList.add('alertaVerde');
            alerta.classList.remove('alertaRoja'); 

            emailjs.sendForm('service_btf6n9i', 'template_icrvcbh', '#inscription', 'qN-p7-a_B_nYK6lhm');
            cleanInputs();
        }
    }

    function cleanInputs(){
        inscriptionTxt.value = '';
    }
}