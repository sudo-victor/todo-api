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

Item {
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

camelCase
PascalCase
snake_case
kebab-case
