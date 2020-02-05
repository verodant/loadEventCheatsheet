const log = (message, color = 'white') => console.log("%c" + message, "color:" + color);
log(`CARGO EL ARCHIVO :: header`);
const target = document.body;
if (!target) log('no puedo seguir porque no tengo acceso al dom', 'grey')
else target.querySelectorAll('div h1').forEach(console.count);

document.querySelectorAll('div h1').forEach(console.count)
window.addEventListener('load', () => {
    log('onload', 'green');
})
window.addEventListener('DOMContentLoaded', () => {
    log('DOMContentLoaded', 'orange');
})