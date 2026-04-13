const tarefasQuarto = [
   {descrição: 'Dobrar lençol',
    prioridade: '1', 
    status: 'pendente'},

   {descrição: 'Varrer o chão', 
    prioridade: '2', 
    status: 'pendente'},
];

tarefasQuarto.push({descrição: 'Tirar poeira', 
                    prioridade: '3', 
                    status: 'pendente'});

const tarefasPendentes = tarefasQuarto.filter(({ status }) => status === 'pendente');

const tarefasConcluidas = tarefasPendentes.map(tarefa => ({ ...tarefa, status: 'concluído' }));

// Corrigido o erro de digitação e adicionado o spread [...] para não mutar o original
const prioridadeTarefas = [...tarefasQuarto].sort((prevTarefa, currentTarefa) => 
  prevTarefa.prioridade - currentTarefa.prioridade
);

const contarTarefasPendentes = tarefasQuarto.reduce((prev, next) => 
  next.status === 'pendente' ? prev + 1 : prev, 0
);

const tarefaSelecionada = tarefasQuarto.find(({ descrição }) => descrição === 'Varrer o chão');

const todasTarefasConcluidas = tarefasQuarto.every(({ status }) => status === 'concluído');



console.log("Original:", tarefasQuarto);
console.log("Pendentes:", tarefasPendentes);
console.log("Concluídas:", tarefasConcluidas);
console.log("Prioridade:", prioridadeTarefas);
console.log("Pendentes:", contarTarefasPendentes);
console.log("Tarefa Encontrada:", tarefaSelecionada);
console.log("Todas Concluídas?", todasTarefasConcluidas);