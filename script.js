<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {

    // Dados de contato e mensagem
    const whatsappNumber = '5592981067373'; // Substitua pelo seu número
    const instagramUsername = 'seu-instagram-aqui'; // Substitua pelo seu nome de usuário
    const emailAddress = 'seu-email@example.com'; // Substitua pelo seu e-mail

    // Fazendo os botões de contato funcionarem
    const contactButtons = document.querySelectorAll('.contact-button');

    contactButtons.forEach(button => {
        if (button.classList.contains('whatsapp')) {
            // Usa o formato universal de link para WhatsApp
            button.href = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de mais informações sobre seus produtos.`;
        } else if (button.classList.contains('email')) {
            button.href = `mailto:${emailAddress}?subject=Contato pelo Site&body=Olá! Gostaria de entrar em contato.`;
        } else if (button.classList.contains('instagram')) {
            button.href = `https://www.instagram.com/${instagramUsername}`;
            button.target = '_blank'; // Abre em uma nova aba
        }
    });

    // Fazendo os botões de compra funcionarem (cada um com uma mensagem específica)
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const productName = card.querySelector('h3').textContent;
        const productPrice = card.querySelector('.price').textContent;
        const buyButton = card.querySelector('.buy-button');

        // Adiciona um evento de clique para cada botão
        buyButton.addEventListener('click', (event) => {
            event.preventDefault(); // Impede que o link vá para #
            const message = `Olá! Tenho interesse no produto: *${productName}*, no valor de ${productPrice}.`;
            // Usa o formato universal de link para WhatsApp
            window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        });
    });

    // Botão de compra no cabeçalho (hero)
    const heroBuyButton = document.querySelector('header .buy-button');

    if (heroBuyButton) {
        heroBuyButton.addEventListener('click', (event) => {
            event.preventDefault(); // Impede que o link vá para #
            const message = `Olá! Gostaria de mais informações sobre o produto em destaque.`;
            // Usa o formato universal de link para WhatsApp
            window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        });
    }

=======
document.addEventListener('DOMContentLoaded', () => {

    // Dados de contato e mensagem
    const whatsappNumber = '5592981067373'; // Substitua pelo seu número
    const instagramUsername = 'seu-instagram-aqui'; // Substitua pelo seu nome de usuário
    const emailAddress = 'seu-email@example.com'; // Substitua pelo seu e-mail

    // Fazendo os botões de contato funcionarem
    const contactButtons = document.querySelectorAll('.contact-button');

    contactButtons.forEach(button => {
        if (button.classList.contains('whatsapp')) {
            // Usa o formato universal de link para WhatsApp
            button.href = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de mais informações sobre seus produtos.`;
        } else if (button.classList.contains('email')) {
            button.href = `mailto:${emailAddress}?subject=Contato pelo Site&body=Olá! Gostaria de entrar em contato.`;
        } else if (button.classList.contains('instagram')) {
            button.href = `https://www.instagram.com/${instagramUsername}`;
            button.target = '_blank'; // Abre em uma nova aba
        }
    });

    // Fazendo os botões de compra funcionarem (cada um com uma mensagem específica)
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const productName = card.querySelector('h3').textContent;
        const productPrice = card.querySelector('.price').textContent;
        const buyButton = card.querySelector('.buy-button');

        // Adiciona um evento de clique para cada botão
        buyButton.addEventListener('click', (event) => {
            event.preventDefault(); // Impede que o link vá para #
            const message = `Olá! Tenho interesse no produto: *${productName}*, no valor de ${productPrice}.`;
            // Usa o formato universal de link para WhatsApp
            window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        });
    });

    // Botão de compra no cabeçalho (hero)
    const heroBuyButton = document.querySelector('header .buy-button');

    if (heroBuyButton) {
        heroBuyButton.addEventListener('click', (event) => {
            event.preventDefault(); // Impede que o link vá para #
            const message = `Olá! Gostaria de mais informações sobre o produto em destaque.`;
            // Usa o formato universal de link para WhatsApp
            window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        });
    }

>>>>>>> af6caea (Forçando o navegador a atualizar o JS)
});