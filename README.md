# NLW
Next Level Week training by Rocketseat

its necessary to start: 

- To create a react template: npx create-react-app web --template=typescript 
    * check if your node is updated: choco upgrade nodejs-lts

- To create tables: 
npx knex migrate:latest --knexfile knexfile.ts migrate:latest

 execute sqlite extention ctrl + shift + p -> find sqlite + folder name.   

//Rota: Endereço completo da requisição (http://localhost:3333/users)
//Recurso: Qual entidade estamos acessando do sistema. = usuarios (/user)

// GET: Buscar uma ou masi informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end.
// DELETE: Remover uma informação do back-end

// POST http://localhost:3333/users = Criar usuário
// GET http://localhost:3333/users = Listar usuário
// GET http://localhost:3333/users/5 = Buscar dados do usuário com ID 5.

// Request param: Parametros que vem na propria rota que identificam um recurso.
// Query param: Parametros que vem na propria rota geralmente opcionais para filtros, paginação
// Request body: Parametros para cruação/atualização de informções.