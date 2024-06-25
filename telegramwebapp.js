window.Telegram.WebApp.ready();

    function expandWebApp() {
        window.Telegram.WebApp.expand();
    }

    setInterval(function() {
        if (!window.Telegram.WebApp.isExpanded) {
            expandWebApp();
        }
    }, 500); // Controleer elke 1000 ms (1 seconde)

    // Initiale expand bij het laden van de pagina
    expandWebApp();