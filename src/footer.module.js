log(`CARGO EL ARCHIVO :: footer`);
const target = document.body;
if (!target) log('no puedo seguir porque no tengo acceso al dom', 'grey')
else target.querySelectorAll('div h1').forEach(console.count);