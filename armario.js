const armario = [
    {gaveta1: 'camisa'},
    {gaveta2: 'calça'},
    {gaveta3: 'meias'},
    {gaveta4: 'cueca'},
]

//[inicio, meio, fim].pop() => [inicio,meio]
const itemFinalRemovido = armario.pop(); 
armario.pop();


// [inicio, meio, fim].unshift(novoItem) => [novoItem, inicio, meio, fim]
armario.unshift(); 


// [inicio, meio ,fim].shift() => [meio, fim]
//const itemRemovidoInicio = armario.shift(); 


armario.push({gaveta6: 'sapatos'});
armario.push({gaveta7: 'meias'});

const novoArmario = armario.map((itemArmario) => {
  const valor = Object.values(itemArmario)[0];

  return {
    name: valor,
    isDurty: valor === 'meias',
  };
});

// [itemArmario, isDurty] => {name: itemArmario, isDurty: true/false}
const armarioFiltrado = novoArmario.filter((itemArmario) => itemArmario.isDurty)

const descricaoTodosItens = novoArmario.reduce((prev, next) => {
    if(!prev.length) return next.name
    return ` ${prev}, ${next.name}`;
}, '')

const armarioEtiquetado = armario.map((item, position) => {
    return ({...item, color: position === 2 ? 'vermelho' : 'azul'})
})


console.log(armarioEtiquetado.find((item) => item.color === 'azul'));
