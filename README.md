# TO-DO

## Entities

User {
  fullname    String
  email       String Unique
  password    String
}

List {
  title               String
  description         String
  banner_img          String?
  items_completed     Number
  user                User
  items               Item[]
}

Task {
  title   String
  status  String "pending" | "done"
  createdAt Date
}

## Usecases

[x] - Criar usuário
[x] - Logar com o usuário

[x] - Criar lista personalizada de tarefas
[x] - Excluir uma lista
[x] - Listar todas as listas personalizadas

[x] - Criar tarefa em uma lista
[x] - Completar uma tarefa
[x] - Editar o title de uma tarefa
[x] - Excluir uma tarefa

## Novas Funcionalidades

#### Atualizar status da tarefa

A funcionalidade consiste em registrar mudanças de estados nas tarefas, onde os estados são:

- pending: tarefa pendente, esperando ser iniciada
- doing: tarefa em processo, já iniciada
- done: tarefa concluida, finalizada
- canceled: tarefa cancelada

Porém, haverá uma mudança na entidade Task. O campo status deixará de ser um campo de texto e será uma outra entidade que registra o status e quando foi feito aquela mudança

Modelagem atualizada:


Task {
  title   String
  status  Status[]
  createdAt Date
}

Status {
  value 'pending' | 'doing' | 'done' | 'canceled'
  createdAt Date
}

#### Visualizar histórico de mudanças de uma tarefa

Visualizar o histórico dos estados de uma tarefa