<div align="center">

# 🧬 Demon Test  
### Sistema de Codificação Multicamadas • Interface Web

Um projeto experimental focado em **obfuscação**, **transformações determinísticas** e **estudo de codificação de strings**.  
Desenvolvido para servir como ferramenta prática de análise, testes e demonstração de pipelines de encoding.

---

### 🔎 Prévia
<img src="https://img.shields.io/badge/Status-Ativo-4CAF50?style=for-the-badge">
<img src="https://img.shields.io/badge/Plataforma-Web-blue?style=for-the-badge">
<img src="https://img.shields.io/badge/Reversível-100%25-9C27B0?style=for-the-badge">

</div>

---

## 🧭 Objetivo

O projeto demonstra como diferentes **camadas consecutivas de transformação** podem modificar radicalmente uma string, mantendo ainda assim a capacidade de recuperar o texto original.  
Não é criptografia: é um estudo claro de **encoding**, **substituição de alfabetos**, **XOR**, **Base64** e **caracteres invisíveis**.

---

## 🚀 Como Utilizar

1. Abra o `index.html` em qualquer navegador moderno.  
2. No campo principal, insira o texto desejado.  
3. Clique em **Code** para transformar o texto.  
4. Clique em **Decode** para obter o original.  
5. Clique em **Copy** para copiar o resultado gerado.

A aplicação roda totalmente no cliente, sem servidor.

---

## 🧩 Arquitetura do Sistema

O pipeline de codificação é composto por **5 etapas sequenciais**, todas reversíveis:

### 1. Substituição por Alfabeto Alternativo  
O alfabeto base (`π`) é mapeado para um conjunto de caracteres externo (`arcano`).  
Essa etapa reorganiza visualmente o texto.

### 2. Conversão para Base64  
Padroniza os bytes e facilita as transformações seguintes.

### 3. Substituição Base64 → Símbolos  
Cada caractere Base64 vira um símbolo correspondente do conjunto `sib`.  
Remove padrões comuns do Base64 e deixa a string menos reconhecível.

### 4. XOR Dinâmico  
Cada caractere recebe uma modificação baseada em uma função simples dependente do índice.  
Em seguida, novamente convertido para Base64.

### 5. Inserção de Caracteres Invisíveis  
Caractere zero-width é injetado em intervalos definidos, alterando a estrutura interna sem alterar a aparência.

A decodificação reverte exatamente todas essas etapas.

---

## 🧪 Exemplo de Uso

Entrada:

`hello world`

Saída (exemplo):

`4py54pqN4pyV4p264p2F4...`

→ **Decode** →

`hello world`

---

## 📁 Estrutura do Repositório

📦 Demon Test ┣ 📄 index.html     → Interface do usuário ┣ 📄 main.js        → Controle dos botões e interação ┗ 📄 coder.js       → Núcleo do sistema de codificação/decodificação

---

## 🎯 Aplicações

- Estudos de obfuscação e manipulação de strings  
- Demonstrações educacionais  
- Criação de pipelines customizados  
- Ferramenta para puzzles e desafios lógicos  
- Testes de reversibilidade e transformação de dados

---

## ⚠️ Limitações

- Serve como uma solução de segurança de criptografia básica. 
- Apenas deve ser usado para proteger informações comuns.  
- Alguns caracteres fora do conjunto base podem ser substituídos pelo índice 0.  
- Editores que removem caracteres invisíveis podem quebrar o decode.

## 🚫 Proibido
- Usar como criptografia de projetos comerciais ou públicos por questão de segurança.
- Não compartilhe criptografias sensíveis.
- Não use para criptografia de senhas, numero ou qualquer outras informações sensíveis.


## 📌 Não nos responsabilizamos por uso incorreto.
---

<div align="center">

## 🛠️ Tecnologias
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

---

## 🧷 Licença
Projeto aberto para estudo, modificação e aprimoramento.

</div>