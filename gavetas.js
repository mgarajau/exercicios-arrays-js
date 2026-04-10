const gaveta = [
    {nome: 'camiseta 1', material: 'algodão'},
    {nome: 'camiseta 2', material: 'algodão'},
    {nome: 'camiseta 3', material: 'elastano'},
    {nome: 'camiseta 4', material: 'algodão'},
];

const gaveta2 = [
    'camiseta 1',
    'camiseta 2',
    'camiseta 3',
    'camiseta 4',
];

const camisa = gaveta2.find((item) => item === 'camiseta 12');

console.log(camisa)

const temElastano = gaveta.some((item) => {
    return item.material === 'elastano';
})

const naoTemElastano = gaveta.every((item) => {
    return item.material === 'elastano';
})

console.log(naoTemElastano);


