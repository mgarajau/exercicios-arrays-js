const tarefasQuarto = [
   {descrição: 'Dobrar lençol',
    prioridade: 1, 
    status: 'pendente'},

   {descrição: 'Varrer o chão', 
    prioridade: 2, 
    status: 'pendente'},
];

const tarefasAtualizadas = [
...tarefasQuarto,
{
descricao: 'Tirar poeira',
prioridade: 3,
status: 'pendente'
}
];

const tarefasPendentes = tarefasAtualizadas.filter(({ status }) => status === 'pendente');

const tarefasConcluidas = tarefasPendentes.map(tarefa => ({ ...tarefa, status: 'concluído' }));

const prioridadeTarefas = [...tarefasAtualizadas].sort((prevTarefa, currentTarefa) => 
  prevTarefa.prioridade - currentTarefa.prioridade
);

const contarTarefasPendentes = tarefasAtualizadas.reduce((prev, next) => 
  next.status === 'pendente' ? prev + 1 : prev, 0
);

const tarefaSelecionada = tarefasAtualizadas.find(({ descricao }) => descricao === 'Varrer o chão');

const todasTarefasConcluidas = tarefasAtualizadas.every(({ status }) => status === 'concluído');



console.log("Original:", tarefasQuarto);
console.log("Pendentes:", tarefasPendentes);
console.log("Concluídas:", tarefasConcluidas);
console.log("Prioridade:", prioridadeTarefas);
console.log("Pendentes:", contarTarefasPendentes);
console.log("Tarefa Encontrada:", tarefaSelecionada);
console.log("Todas Concluídas?", todasTarefasConcluidas);