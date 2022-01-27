# Backend

## Projeto finalizado! 🚀

### Features

- [x] Listagem dos planos telefonicos
- [x] Consulta de valores de tarifas

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [node](https://nodejs.org/pt-br/)
- [PostgreSQL](https://www.postgresql.org/download/)

Crie um banco de dados com o seguinte nome 'telzir' no seu SGBD.

O .env não está no arquivo .gitignore, então não precisa selecionar
nenhum tipo de configuração adicional.

```bash
# Endpoint disponível
http://127.0.0.1:3333/v1/operations?page=page&offset=offset - Lista todos os planos e valores 
http://127.0.0.1:3333/v1/operation/check?source=source&destination=destination&timer_minutes=timer_minutes&plain=plain - Consulta valores de ligações com o plano
```

### 🛠 Rodando o backend

```bash
# Vá para a pasta do projeto
# Instale as dependências
$ npm i

# Execute a aplicação em modo de desenvolvimento (Com o banco de dados já criado, esse comando rodará todas as migrations e as seeders)
$ npm run dev

# Rollback migrations rode o seguinte comando 
$ node ace migration:rollback
```

### 🛠 Tecnologias utilizadas

As seguintes tecnologias foram usadas na construção do projeto:

- [node](https://nodejs.org/pt-br/)
- [PostgreSQL](https://www.postgresql.org/download/)
- [AdonisV5](https://adonisjs.com/)

### Autor

---

# Marcos Santos

[GitHub](https://github.com/Marcos1710)
[linkedin](https://www.linkedin.com/public-profile/in/marcos-samuel-1710)