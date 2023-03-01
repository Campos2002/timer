function timer() {

    function getHour(secs) {
        const data = new Date(secs * 1000);
        return data.toLocaleTimeString('pt-BR', {
            timeZone: 'UTC'
        });
    };

    const relogio = document.querySelector('.relogio');

    let second = 0
    let timer;

    function startTimer() {
        timer = setInterval(function () {
            second++
            relogio.innerHTML = getHour(second);
        }, 1000)
    }

    document.addEventListener('click', function (e) {

        const element = e.target

        if (element.classList.contains('iniciar')) {
            relogio.classList.remove('pause');
            clearInterval(timer)
            startTimer();
        };

        if (element.classList.contains('pausar')) {
            relogio.classList.add('pause');
            clearInterval(timer);
        };

        if (element.classList.contains('reiniciar')) {
            relogio.classList.remove('pause');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            second = 0;
        };

    });

};

timer();

