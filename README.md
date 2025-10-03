## Sobre o Projeto

O Pet Shop Full Stack é uma aplicação web que permite gerenciar informações de pets de forma simples e intuitiva. O sistema oferece funcionalidades completas de CRUD (Create, Read, Update, Delete) para o cadastro de pets, incluindo informações como nome, tipo (cachorro ou gato), raça, tutor e data de nascimento.

### Funcionalidades

- **Cadastro de pets** com informações completas
- **Visualização** de todos os pets cadastrados
- **Edição** de dados dos pets existentes
- **Exclusão** de registros de pets
- **Interface intuitiva** e responsiva
- **Feedback em tempo real** com notificações toast

## Tecnologias Utilizadas

### Backend (API)

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **TypeScript** - Linguagem de programação tipada
- **Prisma** - ORM para banco de dados
- **SQLite** - Banco de dados
- **CORS** - Middleware para requisições cross-origin

### Frontend

- **React.js** - Biblioteca JavaScript para UI
- **TypeScript** - Linguagem de programação tipada
- **Styled Components** - Estilização CSS-in-JS
- **Axios** - Cliente HTTP para requisições
- **React Icons** - Biblioteca de ícones
- **React Toastify** - Notificações toast
- **Date-fns** - Manipulação de datas

## Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Backend (API)

1. Navegue até o diretório da API:

```bash
cd api
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

```bash
cp .env.example .env
```

4. Configure o banco de dados:

```bash
npx prisma migrate dev
```

5. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

A API estará rodando em `http://localhost:3333`

### Frontend

1. Em um novo terminal, navegue até o diretório do frontend:

```bash
cd frontend
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

## Banco de Dados

O projeto utiliza **SQLite** como banco de dados e **Prisma** como ORM. O schema define a entidade `Pet` com os seguintes campos:

- `id` - Identificador único (CUID)
- `name` - Nome do pet
- `type` - Tipo do pet (cachorro ou gato)
- `tutorName` - Nome do tutor
- `breed` - Raça do pet
- `dateOfBirth` - Data de nascimento
- `createdAt` - Data de criação do registro
- `updatedAt` - Data da última atualização

## API Endpoints

| Método | Endpoint  | Descrição                 |
| ------ | --------- | ------------------------- |
| GET    | `/`       | Lista todos os pets       |
| POST   | `/post`   | Cria um novo pet          |
| PATCH  | `/patch`  | Atualiza um pet existente |
| DELETE | `/delete` | Remove um pet             |

## Interface do Usuário

A interface foi desenvolvida com foco na experiência do usuário, apresentando:

- **Design moderno e limpo** com Styled Components
- **Formulários intuitivos** para cadastro e edição
- **Cards informativos** para exibição dos pets
- **Feedback visual** com notificações toast
- **Layout responsivo** que se adapta a diferentes dispositivos
