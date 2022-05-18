document.getElementById('icon-moon').addEventListener('click', cambiarModo);
document.getElementById('icon-sun').addEventListener('click', cambiarModo);

var modo = 'light';

function cambiarModo() {
    if (modo == 'light') {
        document.getElementById('icon-moon').style.display = 'none';
        document.getElementById('icon-sun').style.display = 'block';
        document.body.classList.toggle('dark-theme');
        document.getElementById('logo').innerHTML='<img class="img-logo" src="img/logo-light.png" alt="" />';
        modo = 'dark';
    } else if (modo == 'dark') {
        document.body.classList.toggle('dark-theme');
        document.getElementById('icon-sun').style.display = 'none';
        document.getElementById('icon-moon').style.display = 'block';
        modo = 'light';
        document.getElementById('logo').innerHTML='<img src="img/logo-dark.png" alt="" />';
    }
}