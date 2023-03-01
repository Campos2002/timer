function relogio() {

    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            timeZone: 'UTC'
        });
    };

    const relogio = document.querySelector('.relogio');

    let segundos = 0
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000)
    }

    document.addEventListener('click', function (e) {

        const element = e.target

        if (element.classList.contains('iniciar')) {
            relogio.classList.remove('pause');
            clearInterval(timer)
            iniciaRelogio();
        };

        if (element.classList.contains('pausar')) {
            relogio.classList.add('pause');
            clearInterval(timer);
        };

        if (element.classList.contains('reiniciar')) {
            relogio.classList.remove('pause');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        };

    });

};

relogio();

