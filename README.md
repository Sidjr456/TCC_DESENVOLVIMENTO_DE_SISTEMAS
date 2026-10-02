# GERENCIAMENTO PERSONALIZADO DE ESTOQUE: Restaurante

> **Trabalho de Conclusão de Curso (TCC)**  
> **Instituição:** ETEC de Poá — MTEC Desenvolvimento de Sistemas  
> **Ano:** 2026  
> **Orientadoras:** Profa. Cíntia e Profa. Carla  
> **Autores:** Guilherme Crispim de Lima, Gustavo Soares da Costa, Leonardo Almeida Canto, Pedro Morgado Rossi, Sidnei da Silva Junior

---

## 📌 Sobre o Projeto

O **Gerenciamento Personalizado de Estoque** é uma plataforma web desenvolvida para otimizar o controle e monitoramento de insumos em restaurantes. O sistema conecta compras, produção, logística e vendas, automatizando o controle de entrada e saída de insumos alimentícios e fornecendo dados financeiros estratégicos para a tomada de decisões.

### 🎯 Principais Objetivos
* **Controle de Estoque:** Monitorar a entrada e saída de insumos alimentícios de forma precisa.
* **Inteligência Financeira:** Apresentar infográficos e estimativas de lucros e investimentos com base em relatórios consolidados.
* **Controle de Validade (PEPS):** Notificar o vencimento de itens e aplicar o método "Primeiro que Entra, Primeiro que Sai" para evitar desperdícios.
* **Gestão Dinâmica:** Atualizar o cardápio em tempo real removendo pratos cujos ingredientes estejam esgotados.
* **Acessibilidade e Usabilidade:** Interface intuitiva desenvolvida em conformidade com as diretrizes WCAG.

---

## 🛠️ Tecnologias Utilizadas

### Linguagens e Frontend
* **HTML5:** Estruturação das páginas web no ambiente Visual Studio.
* **CSS3:** Estilização, design responsivo e padrão de layout.
* **JavaScript:** Interatividade no cliente e suporte a gráficos dinâmicos.
* **PHP:** Linguagem server-side para regras de negócio e processamento de dados.

### Banco de Dados e Servidores Local
* **MariaDB / MySQL:** Sistema gerenciador de banco de dados relacional.
* **phpMyAdmin:** Interface web para administração das tabelas e consultas SQL.
* **WampServer (WAMP):** Pacote com Apache, PHP e MariaDB para o ambiente local de testes no Windows.

### Ferramentas de Apoio
* **Visual Studio Code:** Editor de código-fonte principal.
* **HTML5 Canvas:** Renderização de gráficos e elementos visuais interativos.
* **Claude Code:** Ferramenta de apoio baseada em IA para desenvolvimento via terminal.

---

## 🗄️ Arquitetura do Banco de Dados

O banco de dados foi estruturado com base em 6 tabelas principais:
* `USUARIO`: Gerencia perfis de acesso (`CLIENTE` e `ADMINISTRADOR`).
* `FORNECEDOR`: Cadastro de fornecedores de insumos.
* `CATEGORIA`: Organização dos materiais por grupos (Carnes, Laticínios, Hortifrúti, etc.).
* `INSUMO`: Armazena saldos, estoque mínimo, preços médios, classificação na Curva ABC e datas de validade.
* `MOVIMENTACAO_ESTOQUE`: Registra entradas (compras/reposição) e saídas (uso na cozinha/perdas).
* `REGISTRO_FINANCEIRO`: Consolida receitas e despesas operacionais para a geração dos relatórios gráficos.

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
* **WampServer** (ou XAMPP) instalado no Windows.
* **Git** instalado.

### Passo a Passo

1. **Clonar o Repositório**
   Abra o terminal e execute o comando abaixo para clonar o projeto para o seu perfil:
   ```bash
   git clone https://github.com/Sidjr456/TCC_DESENVOLVIMENTO_DE_SISTEMAS.git