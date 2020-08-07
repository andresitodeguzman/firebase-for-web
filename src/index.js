import './app';

window.addEventListener('load', () => {
    if(!localStorage.getItem('user') && window.location.pathname !== '/login') window.location.replace(['/login']);
});