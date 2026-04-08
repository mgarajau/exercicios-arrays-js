const armario = [
    'camisa',
    'calça',
    'meias',
    'cueca',
]

//[inicio, meio, fim].pop() => [inicio,meio]
const itemFinalRemovido = armario.pop(); 
armario.pop();


// [inicio, meio, fim].unshift(novoItem) => [novoItem, inicio, meio, fim]
armario.unshift('jaqueta'); 


// [inicio, meio ,fim].shift() => [meio, fim]
//const itemRemovidoInicio = armario.shift(); 


armario.push('sapatos');
armario.push('meias');

const novoArmario = armario.map((itemArmario) => ({
    name: itemArmario,
    isDurty : itemArmario === 'meias',
}))
 


console.log(novoArmario);
