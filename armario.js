const armario = [
    {gaveta1: 'camisa'},
    {gaveta2: 'calça'},
    {gaveta3: 'meias'},
    {gaveta4: 'cueca'},
];


//[inicio, meio, fim].pop() => [inicio,meio]
const itemFinalRemovido = armario.pop(); 
armario.pop();


// [inicio, meio, fim].unshift(novoItem) => [novoItem, inicio, meio, fim]
armario.unshift(); 


// [inicio, meio ,fim].shift() => [meio, fim]
//const itemRemovidoInicio = armario.shift(); 


armario.push({gaveta6: 'sapatos'});
armario.push({gaveta7: 'meias'});


// [itemArmario, isDurty] => {name: itemArmario, isDurty: true/false}
const armarioFiltrado = armario.filter((itemArmario) => itemArmario.isDurty)

//reduce => [itemArmario, itemArmario2, itemArmario3] => {gaveta1: itemArmario, gaveta2: itemArmario2, gaveta3: itemArmario3}
const armarioobj = armario.reduce((acc, itemArmario) => {
    return {...acc, ...itemArmario}
}, {})

const armarioEtiquetado = armario.map((item, position) => {
    return ({...item, color: position === 2 ? 'vermelho' : 'azul'})
})


console.log(armarioobj);
