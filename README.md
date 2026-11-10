# banco-api-tests

Projeto de automação de testes de API REST desenvolvido em **JavaScript** para validar a API REST do projeto **Banco API** (disponível nos treinamentos do Julio de Lima).

## 🎯 Objetivo

Contribuindo com a qualidade, concorrência e integridade das rotas da API REST do Banco API por meio de testes automatizados de regressão, cobrindo fluxos de autenticação, transações e validações de contratos de requisição e resposta.

## 🛠️ Tech Stack & Dependências

* **[Node.js](https://nodejs.org/)** — Ambiente de execução JavaScript.
* **[Mocha](https://mochajs.org/)** — Framework de testes para estruturar os suítes e casos de teste (`describe`, `it`).
* **[SuperTest](https://github.com/ladjs/supertest)** — Abstração para requisições HTTP e asserções em APIs REST.
* **[Chai](https://www.chaijs.com/)** — Biblioteca de asserção BDD/TDD.
* **[dotenv](https://github.com/motdotla/dotenv)** — Carregamento de variáveis de ambiente a partir do arquivo `.env`.
* **[Mochawesome](https://github.com/adamgruber/mochawesome)** — Gerador de relatórios visuais e amigáveis em HTML/CSS.

## 📂 Estrutura do Projeto

```text
banco-api-tests/
├── fixtures/        # Dados estáticos e payloads de requisição para os testes
├── helpers/         # Funções utilitárias e métodos auxiliares para as chamadas HTTP
├── test/            # Arquivos contendo as suítes e cenários de teste automatizados
├── .env.example     # Modelo de configuração das variáveis de ambiente
├── .gitignore       # Arquivos e pastas ignorados pelo Git (.env, node_modules, mochawesome-report)
├── package.json     # Gerenciador de dependências e scripts de execução do projeto
└── README.md        # Documentação principal do projeto
```

## ⚙️ Configuração do Ambiente

### Pré-requisitos
* **Node.js** (versão 16 ou superior)
* **npm** ou **yarn**

### 1. Clonar o repositório
```bash
git clone https://github.com/adelsonmjunior/banco-api-tests.git
cd banco-api-tests
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Configurar variáveis de ambiente (`.env`)
Crie um arquivo `.env` na raiz do projeto com base no formato abaixo:

```env
BASE_URL=http://localhost:3000
```

> **Nota:** O arquivo `.env` contém configurações locais/sensíveis e é ignorado pelo Git. Certifique-se de preencher a variável `BASE_URL` com o endereço onde a API do Julio de Lima está rodando.

## 🧪 Execução dos Testes e Relatórios

### Executar os testes no terminal
Para rodar a suíte de testes padrão:
```bash
npm test
```

### Gerar relatório visual (Mochawesome)
Ao executar o comando de teste com suporte ao Mochawesome:
```bash
npm run test:report
```

Após a execução, um relatório interativo em HTML será gerado automaticamente no diretório:
```text
./mochawesome-report/mochawesome.html
```
Abra o arquivo `mochawesome.html` em qualquer navegador web para visualizar o detalhamento da execução dos cenários de teste.
