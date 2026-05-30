# 🍰 Ateliê Ferdi Cakes — Confeitaria Artística de Luxo

Este repositório contém o código-fonte do novo site institucional e interativo da **Ferdi Cakes**, um ateliê de alta confeitaria artística comandado pela chef Fernanda Lima em **Belford Roxo - RJ**.

O projeto foi inteiramente desenhado para refletir o posicionamento de **alto valor e bolos elaborados**, unindo estética de luxo, interatividades fluidas e otimizações avançadas de **SEO Local** para campanhas de **Google Ads**.

---

## 🎨 Identidade Visual e Estilo *Haute Pâtisserie*

O site abandona o estilo genérico de construtores de sites tradicionais e adota um design system próprio inspirado na confeitaria fina francesa:

*   **Paleta de Cores HSL Harmoniosa**:
    *   `Creme / Champagne (#FCF9F5)` — Fundo suave e quente que evoca artesanalidade.
    *   `Cacau Profundo (#2A1F1D)` — Tipografia principal e contrastes luxuosos.
    *   `Rosa Chá (#C5A094)` — Elementos decorativos e subtons afetivos.
    *   `Ouro Velho / Bronze (#C5A880)` — Destaques, botões ativos e hovers premium.
*   **Tipografia Refinada**:
    *   **Títulos principais**: `Cormorant Garamond` (Serifa clássica inspirada em marcas de luxo).
    *   **Textos e botões**: `Outfit` (Sem serifa moderna, geométrica e extremamente legível).
*   **Efeitos Visuais**:
    *   `Glassmorphism` — Cabeçalho flutuante translúcido com desfoque de fundo (`backdrop-filter`).
    *   `Floating Shadows` — Cards de produtos e fotos com sombras ultra-suaves para um aspecto tridimensional.
    *   `Micro-interações` — Botões e seleções com transições animadas fluidas no hover.

---

## ⚡ Principais Funcionalidades

### 1. 📊 Calculadora e Estimador de Sonhos (app.js)
Uma ferramenta interativa que soluciona a principal fricção do cliente ao encomendar bolos de alto valor. O cliente seleciona de forma totalmente visual:
1.  **Tamanho do Bolo** (PP, P, M ou G).
2.  **Formato do Bolo** (Redondo ou formato de Coração).
3.  **Recheio Principal** (Brigadeiro Meio Amargo, Ninho, Beijinho, Maracujá, Doce de Leite, Café ou Caramelo Salgado).
4.  **Adicionais Premium** (Nutella ou Geleias).
5.  **Estilo de Decoração Artística** (Padrão, Vintage personalizada, Pulverização cor escura ou Papel de Arroz).

O preço é recalculado instantaneamente na tela. Ao clicar em **"Fazer Pedido no WhatsApp"**, o site gera automaticamente um link do WhatsApp com uma mensagem pré-formatada contendo todos os detalhes do pedido e o valor final estimado, agilizando drasticamente o atendimento da chef.

### 2. 🗂️ Cardápio Dinâmico por Abas
Organização dos produtos da marca em abas fluidas de transição rápida (Bolos Artísticos, Bento Cakes, Cupcakes/Doces) com fotos de alta definição reais do portfólio.

### 3. 🗺️ Cartão Logístico de Retirada & FAQ
*   Aviso de segurança rigoroso desaconselhando retiradas de bolos decorados por motos.
*   Instruções para retirada presencial em **Vilar Novo, Belford Roxo - RJ** ou Uber Flash/99Entregas (carro).
*   Perguntas Frequentes (FAQ) interativas em estilo acordeão sobre prazo de antecedência, conservação de chantininho no calor do Rio e técnica de pulverização de corantes.

---

## 🚀 Otimizações de SEO e Google Ads

Como o site será destino direto de campanhas de tráfego pago (**Google Ads**), foram aplicadas as melhores práticas técnicas de SEO:
*   **Mobile-First & Responsivo**: Totalmente adaptado para celulares (de onde vem mais de 90% do tráfego do Instagram).
*   **SEO Local Agressivo**: Meta-tags e cabeçalhos estrategicamente focados na região geográfica de atuação (**Belford Roxo, Nova Iguaçu, Mesquita, Nilópolis e São João de Meriti**).
*   **HTML5 Semântico**: Uso rigoroso de tags `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` e `<footer>`, o que aumenta a nota do índice de qualidade do Google Ads e reduz o custo por clique (CPC).
*   **Performance Excepcional**: Sem uso de frameworks pesados de JS ou Tailwind, mantendo o carregamento do site extremamente rápido com HTML, CSS e JS puros.

---

## 📂 Estrutura de Arquivos

```
Ferdi Cakes/
├── index.html          # Estrutura semântica e SEO
├── style.css           # Estilos e Design System premium
├── app.js              # Lógica da calculadora e interações
├── .gitignore          # Configuração de repositório Git
└── assets/
    └── images/         # Fotos originais e logotipo da marca
        ├── logo.png             # Logo vetorizada da Ferdi Cakes
        ├── background.jpg       # Imagem ambiental oficial
        ├── monster_cake.jpg     # Bolo temático de RPG/D&D
        ├── vintage_cherry.jpg   # Bolo Vintage (Hero Banner)
        ├── ocean_waves.jpg      # Bolo com acabamento de ondas
        ├── jujutsu_kaisen.jpg   # Bolo temático de Anime
        └── damon_salvatore.jpg   # Bolo temático Pop/TV
```

---

## 💻 Como Executar ou Hospedar

Como o projeto é construído em **Vanilla Web Stack** (HTML, CSS e JavaScript puros), ele não necessita de etapas de compilação ou servidores Node.js. 

### Para rodar localmente:
Basta abrir o arquivo `index.html` em qualquer navegador da web (Chrome, Firefox, Safari ou Edge) ou iniciar um servidor estático local de sua preferência (ex: extensão *Live Server* do VS Code).

### Para publicar na internet:
Você pode publicar o site de forma totalmente **gratuita** e em poucos segundos utilizando serviços modernos de hospedagem estática, tais como:
*   **GitHub Pages** (Basta ativar nas configurações deste repositório na aba *Pages*).
*   **Netlify**
*   **Vercel**
*   **Hospedagens Tradicionais** (Basta transferir os arquivos para a pasta pública `public_html` via FTP).

---

## 🤝 Créditos
*   **Conceito & Identidade Visual**: João Dutra Design (`@joaonaoestabem` no Instagram).
*   **Desenvolvimento & Engenharia de SEO**: Antigravity AI em pair programming com Everton.
