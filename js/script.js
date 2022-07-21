function openNav() {
    var open = document.getElementsByClassName('menu-mobile')[0];
    var openBtn = document.getElementById('open-btn');

    open.style.width = '75%';
    // openBtn.style.display = 'none';
}
function closeNav() {
    var close = document.getElementsByClassName('menu-mobile')[0];
    var openBtn = document.getElementById('open-btn');

    close.style.width = '0';
    // openBtn.style.display = 'block';
}