const sidenav = document.querySelector('#sidenav-open');
const closenav = document.querySelector('#sidenav-close');
const opennav = document.querySelector('#sidenav-button');

sidenav.addEventListener('keyup', e => {
    if (e.code === 'Escape') {
        document.location.hash = '';
    }
});

sidenav.addEventListener('transitionend', e => {
    if (e.propertyName !== 'transform') {
        return;
    }

    const isOpen = document.location.hash === '#sidenav-open';

    isOpen ? closenav.focus() : opennav.focus();
});
