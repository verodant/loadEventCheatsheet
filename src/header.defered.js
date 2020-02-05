log(`CARGO EL ARCHIVO :: header defered`);
const target = document.body;
if (!target) log('no puedo seguir porque no tengo acceso al dom', 'grey')
else target.querySelectorAll('div h1').forEach(console.count);

const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        console.group('caaaambio! ', mutation.type)
        if (mutation.type == 'attributes') console.log('soy un cambio de atributo');
        console.groupEnd();
    });
});
const config = {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: ['ogt']
};
observer.observe(document.body, config);
log('empiezo a escuchar el dom', 'yellow')