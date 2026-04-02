# Calculadora React

## 📱 Introdução

Esta é uma **calculadora básica** desenvolvida com **React** e **Vite**. Permite realizar operações matemáticas simples como soma, subtração, multiplicação, divisão, porcentagem, além de funcionalidades como limpar (AC), trocar sinal (+/-) e calcular resultado (=).

O projeto usa `eval()` para processar expressões matemáticas com tratamento de erros básico.

## ✨ Funcionalidades

- **Dígitos**: 0-9 e vírgula (.)
- **Operadores**: +, -, *, /, %
- **AC**: Limpa o display (reseta para '0')
- **+/-**: Troca sinal (implementação via concatenação)
- **=**: Calcula o resultado da expressão
- **Tratamento de erros**: Exibe 'erro' para expressões inválidas
- **Interface responsiva**: Estilo simples com CSS

## 🛠️ Tecnologias Utilizadas

- **React** 19.2.4
- **Vite** 8.0.1 (bundler e dev server)
- **ESLint** para linting
- **JavaScript** moderno (hooks como useState)



- Acesse: http://calculadora-thiagobatista5-projects.vercel.app/
- Clique nos botões para usar a calculadora.

## 📁 Estrutura do Projeto

```
calculadora/
├── public/           # Assets públicos
├── src/
│   ├── App.jsx       # Componente principal (renderiza Display)
│   ├── pages/
│   │   ├── Display.jsx  # Tela da calculadora (useState + botões)
│   │   └── Calculator.jsx # Funções lógicas (Ac, Numero, etc.)
│   ├── assets/       # Imagens (background.jpg, img.jpeg)
│   ├── index.css     # Estilos globais
│   └── main.jsx      # Entry point React
├── package.json      # Dependências e scripts
├── vite.config.js    # Config Vite + React plugin
├── README.md         # Este arquivo!
└── TODO.md           # Progresso das tarefas
```

### Principais Arquivos

- **Display.jsx**: Gerencia estado do display com `useState('0')`. Renderiza botões e chama funções.
- **Calculator.jsx**:
  - `Ac(setDisplay)`: Reset para '0'
  - `Numero(n, setDisplay)`: Adiciona dígito (substitui se '0')
  - `Operador(op, setDisplay)`: Concatena operador
  - `Somar(display, setDisplay)`: `eval(display)` com try-catch
- **App.jsx**: Simplesmente renderiza `<Tela />`.


## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

**Desenvolvido com ❤️ por [Thiago]**

