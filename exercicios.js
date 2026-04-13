const frutas = ['banana', 'maçã']

frutas.unshift('laranja')

console.log(frutas)

//-----------------//

const numeros = [1, 2, 3, 4, 5]

numeros.pop()

console.log(numeros)

//-----------------//

const nums = [1, 2, 3, 4]

const dobrados = nums.map((num) => num * 2);

console.log(dobrados)

//-----------------//

const valores = [5, 12, 8, 20]

const filtrados = valores.filter((valor) => valor > 10);

console.log(filtrados)

//-----------------//

const lista = [10, 20, 30]

const temNumeroMaiorQue10 = lista.some((num) => num > 10);

console.log(temNumeroMaiorQue10)

//-----------------//

const numeros2 = [10, 20, 30]

const soma = numeros2.reduce((acumulador, num) => acumulador + num, 0);

console.log(soma)

//-----------------//

const pessoas = [
    { nome: 'Alice', idade: 17 },
    { nome: 'Bob', idade: 20 },
    { nome: 'Charlie', idade: 15 }
];

const nomes = pessoas.map((pessoa) => pessoa.nome);

console.log(nomes)

//-----------------//

const maiorDeIdade = pessoas.filter((pessoa) => pessoa.idade >= 18 );

console.log(maiorDeIdade)

//-----------------//

const todosSaoMaioresDeIdade = pessoas.every((pessoa) => pessoa.idade >= 18);

console.log(todosSaoMaioresDeIdade)

const listaNumerica = [1, 2, 3, 4, 5]

listaNumerica.push(6)

console.log(listaNumerica)