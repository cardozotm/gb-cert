# Gerador de Certificados de Graduação BJJ

Aplicação web para gerar certificados de graduação de Jiu-Jitsu Brasileiro (BJJ) usando imagens de faixas.

## 🚀 Funcionalidades

- Geração de certificados em PNG no navegador (sem backend necessário)
- Pré-visualização em tempo real
- Suporte para múltiplas faixas: Azul, Roxa, Marrom, Verde, Amarela, Cinza
- Customização de nome e data
- Interface simples e intuitiva

## 📦 Instalação

```bash
npm install
```

## 🏃 Executando Localmente

```bash
npm start
```

Acesse: `http://localhost:3000`

## 🌐 Deploy

### Vercel (Recomendado)

1. Instale a CLI: `npm i -g vercel`
2. Execute: `vercel`
3. Ou conecte o repositório GitHub no [Vercel Dashboard](https://vercel.com)

### Render

1. Conecte seu repositório GitHub no [Render Dashboard](https://render.com)
2. Selecione "Web Service"
3. Use os seguintes comandos:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. O arquivo `render.yaml` já está configurado

## 🧪 Testes

```bash
npm test
```

## 📁 Estrutura

```
├── public/
│   └── index.html      # Aplicação cliente
├── templates/          # Imagens de template e faixas
├── fonts/             # Fontes customizadas
├── server.js           # Servidor Express (serve arquivos estáticos)
└── layout.json         # Configuração de layout
```

## 📝 Licença

ISC
