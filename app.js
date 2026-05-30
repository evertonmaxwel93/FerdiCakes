/**
 * =========================================
 * LÓGICA DE INTERATIVIDADE E ESTIMADOR
 * Cliente: Ferdi Cakes (Fernanda)
 * Desenvolvido para Alta Performance e SEO
 * =========================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Efeito do Header no Scroll ---
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- 2. Menu Mobile Toggle ---
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // --- 3. Abas do Cardápio (Tabs) ---
  const tabBtns = document.querySelectorAll('.tab-btn');
  const menuPanels = document.querySelectorAll('.menu-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remover active de todos os botões e painéis
      tabBtns.forEach(b => b.classList.remove('active'));
      menuPanels.forEach(p => p.classList.remove('active'));

      // Adicionar active no botão clicado
      btn.classList.add('active');

      // Mostrar o painel correspondente
      const targetPanel = btn.getAttribute('data-tab');
      document.getElementById(targetPanel).classList.add('active');
    });
  });

  // --- 4. FAQ Accordion ---
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');

      // Fechar todos os itens do FAQ
      document.querySelectorAll('.accordion-item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.accordion-body').style.maxHeight = null;
      });

      // Se não estava ativo, abre
      if (!isActive) {
        item.classList.add('active');
        const body = item.querySelector('.accordion-body');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });

  // --- 5. Calculadora de Bolos Interativa ---
  // Tabelas de Preços e Regras da Ferdi Cakes (Extraídas do Wix)
  const cakePrices = {
    // Base: { PP: 80, P: 160, M: 200, G: 270 }
    sizeBase: {
      pp: 80,
      p: 160,
      m: 200,
      g: 270
    },
    // Adicional de Formato Coração: R$ 15
    shapeHeart: 15,
    // Adicionais com valor médio destacado
    extraNutella: 20,
    artVintage: 20,
    artDark: 20,
    // Papel de Arroz: R$ 15 fixo
    artRicePaper: 15
  };

  const calcForm = {
    size: 'p', // Padrão: P
    shape: 'round', // Padrão: Redondo
    filling: '',
    extra: 'none',
    art: 'standard'
  };

  // Elementos do DOM da Calculadora
  const sizeCards = document.querySelectorAll('.size-option');
  const shapeCards = document.querySelectorAll('.shape-option');
  const extraCards = document.querySelectorAll('.extra-option');
  const artCards = document.querySelectorAll('.art-option');
  const fillingSelect = document.getElementById('calc-filling');

  // Elementos do DOM do Resumo e Preço
  const resSize = document.getElementById('res-size');
  const resShape = document.getElementById('res-shape');
  const resFilling = document.getElementById('res-filling');
  const resExtra = document.getElementById('res-extra');
  const resArt = document.getElementById('res-art');
  const totalPriceEl = document.getElementById('calc-total-price');
  const btnOrder = document.getElementById('btn-whatsapp-order');

  // Inicializar seletor de recheio
  if (fillingSelect) {
    fillingSelect.addEventListener('change', (e) => {
      calcForm.filling = e.target.value;
      updateCalculator();
    });
  }

  // Adicionar eventos para Rádios Visuais (Cards de Seleção)
  setupVisualOption(sizeCards, 'size', updateCalculator);
  setupVisualOption(shapeCards, 'shape', updateCalculator);
  setupVisualOption(extraCards, 'extra', updateCalculator);
  setupVisualOption(artCards, 'art', updateCalculator);

  function setupVisualOption(elements, key, callback) {
    elements.forEach(card => {
      card.addEventListener('click', () => {
        elements.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        
        // Ativar o input interno
        const input = card.querySelector('input');
        if (input) {
          input.checked = true;
          calcForm[key] = input.value;
        }
        callback();
      });
    });
  }

  // Função Principal de Cálculo e Atualização
  function updateCalculator() {
    let base = cakePrices.sizeBase[calcForm.size] || 0;
    let extraCost = 0;
    
    // Nomes amigáveis para exibição no resumo
    let sizeName = '';
    let shapeName = '';
    let extraName = '';
    let artName = '';

    // 1. Tamanho
    switch(calcForm.size) {
      case 'pp': sizeName = 'PP (10cm - 5 fatias)'; break;
      case 'p': sizeName = 'P (15cm - 15 fatias)'; break;
      case 'm': sizeName = 'M (20cm - 28 fatias)'; break;
      case 'g': sizeName = 'G (25cm - 45 fatias)'; break;
    }

    // 2. Formato
    if (calcForm.shape === 'heart') {
      extraCost += cakePrices.shapeHeart;
      shapeName = 'Coração (+R$ 15)';
    } else {
      shapeName = 'Redondo (Incluso)';
    }

    // 3. Adicionais (Nutella / Geleia)
    if (calcForm.extra === 'nutella') {
      const cost = cakePrices.extraNutella;
      extraCost += cost;
      extraName = `Nutella/Geleia (+R$ ${cost})`;
    } else {
      extraName = 'Nenhum';
    }

    // 4. Arte / Decoração
    if (calcForm.art === 'vintage') {
      const cost = cakePrices.artVintage;
      extraCost += cost;
      artName = `Vintage Customizada (+R$ ${cost})`;
    } else if (calcForm.art === 'dark') {
      const cost = cakePrices.artDark;
      extraCost += cost;
      artName = `Pintura Cor Escura (+R$ ${cost})`;
    } else if (calcForm.art === 'ricepaper') {
      extraCost += cakePrices.artRicePaper;
      artName = `Papel de Arroz (+R$ 15)`;
    } else {
      artName = 'Padrão Clássico (Inclusa)';
    }

    // 5. Total
    const finalPrice = base + extraCost;

    // Atualizar Resumo Visual
    if (resSize) resSize.textContent = sizeName;
    if (resShape) resShape.textContent = shapeName;
    if (resFilling) {
      resFilling.textContent = calcForm.filling ? calcForm.filling : 'Selecione abaixo';
    }
    if (resExtra) resExtra.textContent = extraName;
    if (resArt) resArt.textContent = artName;
    if (totalPriceEl) totalPriceEl.textContent = `R$ ${finalPrice.toFixed(2).replace('.', ',')}`;

    // Configurar URL do WhatsApp Dinamicamente
    if (btnOrder) {
      const phone = '5521970637287'; // WhatsApp Oficial da Ferdi Cakes
      const fillingText = calcForm.filling ? calcForm.filling : '(A alinhar)';
      
      const message = `Olá, Fernanda! Montei um orçamento de bolo personalizado no seu site e gostaria de fazer o pedido:

🍰 *BOLO PERSONALIZADO*
* *Tamanho:* ${sizeName}
* *Formato:* ${shapeName}
* *Recheio Escolhido:* ${fillingText}
* *Adicionais:* ${extraName}
* *Estilo de Arte:* ${artName}

💰 *Valor Estimado:* R$ ${finalPrice.toFixed(2).replace('.', ',')}

_(Gostaria de confirmar a disponibilidade de data e os detalhes de retirada!)_`;

      const encodedMessage = encodeURIComponent(message);
      btnOrder.setAttribute('href', `https://wa.me/${phone}?text=${encodedMessage}`);
    }
  }

  // Executar primeiro cálculo ao carregar a página
  updateCalculator();
});
