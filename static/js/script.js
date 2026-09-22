document.addEventListener('DOMContentLoaded', () => {
    const btnTema = document.getElementById('btn-tema');

    const temaGuardado = localStorage.getItem('tema');
    if (temaGuardado === 'claro') {
        document.body.classList.add('modo-claro');
        btnTema.textContent = '🌙 Modo Oscuro';
    }

    btnTema.addEventListener('click', () => {
        document.body.classList.toggle('modo-claro');

        if (document.body.classList.contains('modo-claro')) {
            btnTema.textContent = '🌙 Modo Oscuro';
            localStorage.setItem('tema', 'claro');
        } else {
            btnTema.textContent = '☀️ Modo Claro';
            localStorage.setItem('tema', 'oscuro');
        }
    });

    const foto = document.getElementById('fotop');

    if (foto) {
        foto.addEventListener('mouseover', () => {
            foto.src = 'static/img/7767.png';
        });

        foto.addEventListener('mouseout', () => {
            foto.src = 'static/img/aura.png.png';
        });
    }
});