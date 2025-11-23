


SkillBridge – Conexão entre Escolas Técnicas e o Mercado
Descrição

SkillBridge é uma plataforma digital que conecta estudantes de escolas técnicas a micro e pequenas empresas locais, facilitando o acesso a estágios, serviços técnicos e microprojetos. A solução utiliza inteligência artificial para realizar o match entre habilidades, localização e disponibilidade, promovendo empregabilidade prática e imediata.

Status do Projeto

*Em desenvolvimento (MVP em construção)

Sumário

*Sobre o Projeto

*Tecnologias Utilizadas

*Instalação

*Como Usar

*Estrutura de Pastas

*Endpoints e Rotas Principais

*Autores e Créditos

*Screenshots / Demonstração

*Contato

Sobre o Projeto

*  O SkillBridge surge para preencher a lacuna entre a formação técnica e o mercado de trabalho real, conectando estudantes a oportunidades locais de forma simples e eficiente. A plataforma atua como um marketplace educacional, onde empresas podem publicar vagas e os alunos podem se candidatar com base em compatibilidade gerada por inteligência artificial. O modelo de negócio é freemium, com planos pagos para empresas e taxa de intermediação por contrato fechado. O projeto também possui forte foco em impacto social, contribuindo para a redução das desigualdades e incentivo ao trabalho decente 

Tecnologias Utilizadas

Frontend:

*React + Vite

*TypeScript

*Tailwind CSS

Backend:

*Java com Quarkus

Banco de Dados:

*Oracle

IA e Chatbot:

*Python com Flask, Scikit-learn, Pandas e Joblib

*Hospedagem:

*Frontend: Vercel

*Backend e IA: Railway / Render

Versionamento:

*GitHub com GitFlow 

Instalação
Requisitos:

*Node.js

*Git

*JDK 17

*Oracle Database

Passos:

*Clone o repositório:

"git clone https://github.com/seu-repositorio/skillbridge.git"


*Instale as dependências:

"npm install"


*Inicie o projeto:

"npm run dev"


Configure o backend Java Quarkus e a conexão com o banco Oracle conforme o arquivo application.properties.

Como Usar

*Acesse a plataforma pelo navegador.

*Crie uma conta como aluno ou empresa.

*Alunos podem cadastrar seu perfil técnico e buscar oportunidades.

*Empresas podem publicar vagas e visualizar candidatos recomendados pela IA.

*Após o aceite, o contrato é gerado e avaliado ao final.

Estrutura de Pastas:
GS-2S/
├── Front_gs/
│   ├── public/
│   │   └── imagens/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   └── styles/
│   ├── index.html
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── package.json
└── README.md

Endpoints / Rotas Principais

Frontend:

/ -> Página inicial

/integrantes -> Equipe do projeto

/vagas -> Listagem de vagas

/login -> Autenticação

/dashboard -> Área do usuário

Backend (API REST):

/api/usuarios

/api/vagas

/api/match

/api/contratos

Autores e Créditos:

Projeto desenvolvido por alunos do curso de Análise e Desenvolvimento de Sistemas - FIAP:

*Gabriel Garcia – RM563298 1tdspk

*Filippo Tolone – RM562329 1tdspj

*Luan Peixoto – RM562258 tdspj

*Turma: 1º Ano ADS – SkillBridge 

Screenshots / Demonstração

Sistema de login e cadastro

Contato

E-mail luan.marins@outlook.com

Links:

--video: https://www.youtube.com/watch?v=JXlmbUxDIO0

--github:https://github.com/GS-Fiap-2sem/Gs-2s

--Api ultilisada:https://dashboard.render.com/web/srv-d4h574h5pdvs73913a10/deploys/dep-d4h8199r0fns73975m80?r=2025-11-23%4003%3A32%3A58~2025-11-23%4003%3A38%3A33