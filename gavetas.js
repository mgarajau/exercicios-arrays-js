const gaveta = [
    {nome: 'camiseta 1', material: 'algodão'},
    {nome: 'camiseta 2', material: 'algodão'},
    {nome: 'camiseta 3', material: 'elastano'},
    {nome: 'camiseta 4', material: 'algodão'},
];

const temElastano = gaveta.some((item) => {
    return item.material === 'elastano';
})

const naoTemElastano = gaveta.every((item) => {
    return item.material === 'elastano';
})

console.log(naoTemElastano);


