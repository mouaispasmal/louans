function clock() {
    let now = new Date();

    // Convertir l'heure en UTC+9 (Tokyo)
    let tokyoOffset = 9 * 60; // en minutes
    let localOffset = now.getTimezoneOffset(); // en minutes
    let totalOffset = tokyoOffset + localOffset;

    // Convertir en millisecondes
    let tokyoTime = new Date(now.getTime() + totalOffset * 60000);

    let h = tokyoTime.getHours();
    let m = tokyoTime.getMinutes();
    let s = tokyoTime.getSeconds();

    let ampm = h < 12 ? 'AM' : 'PM';

    // Format 12h si tu veux (sinon garde le 24h)
    // h = h % 12;
    // h = h ? h : 12;

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    

    document.getElementById('hours').innerHTML = h;
    document.getElementById('min').innerHTML = m;
    
    document.getElementById('ampm').innerHTML = ' ' + ampm;
}

setInterval(clock, 1000); // mise à jour chaque seconde
