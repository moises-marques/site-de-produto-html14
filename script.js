document.addEventListener('DOMContentLoaded', () => {

    // Centralizando as variáveis de contato para fácil edição
    const whatsappNumber = '5592981067373'; // Substitua pelo seu número
    const instagramUsername = 'seu-instagram-aqui'; // Substitua pelo seu nome de usuário
    const emailAddress = 'seu-email@example.com'; // Substitua pelo seu e-mail

    // --- Lógica dos Botões de Contato (Whatsapp, Instagram, Email) ---
    const contactButtons = document.querySelectorAll('.contact-button');

    contactButtons.forEach(button => {
        if (button.classList.contains('whatsapp')) {
            button.href = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de mais informações sobre seus produtos.`;
        } else if (button.classList.contains('email')) {
            button.href = `mailto:${emailAddress}?subject=Contato pelo Site&body=Olá! Gostaria de entrar em contato.`;
        } else if (button.classList.contains('instagram')) {
            button.href = `https://www.instagram.com/${instagramUsername}`;
            button.target = '_blank'; // Abre em uma nova aba
        }
    });

    // --- Lógica do Botão de Compra no Cabeçalho (Hero) ---
    const heroBuyButton = document.querySelector('header .buy-button');

    if (heroBuyButton) {
        heroBuyButton.addEventListener('click', (event) => {
            event.preventDefault();
            const message = `Olá! Gostaria de mais informações sobre o produto em destaque.`;
            window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        });
    }

    // --- Dados dos Produtos ---
    const products = [
        { id: 1, name: 'Fone de Ouvido Sem Fio', description: 'Áudio de alta fidelidade com cancelamento de ruído.', price: 299.90, image: 'image/fone.jpg', category: 'eletronicos' },
        { id: 2, name: 'Smartwatch Esportivo', description: 'Monitora sua saúde e atividades físicas.', price: 549.50, image: 'image/smartwatch.jpg', category: 'eletronicos' },
        { id: 3, name: 'Câmera Profissional', description: 'Fotos e vídeos em 4K com lente intercambiável.', price: 1800.00, image: 'image/camera.jpg', category: 'eletronicos' },
        { id: 4, name: 'Livro: O Caminho do Mago', description: 'Uma jornada de autoconhecimento e magia.', price: 45.90, image: 'image/livro1.jpg', category: 'livros' },
        { id: 5, name: 'Livro: A Era Digital', description: 'Entenda como a tecnologia molda o mundo.', price: 65.00, image: 'image/livro2.jpg', category: 'livros' },
        { id: 6, name: 'Mochila Urbana', description: 'Design moderno e compartimentos inteligentes.', price: 120.00, image: 'image/mochila.jpg', category: 'acessorios' },
        { id: 7, name: 'Óculos de Sol', description: 'Proteção UV400 e estilo para o dia a dia.', price: 89.90, image: 'image/oculos.jpg', category: 'acessorios' },
        { id: 8, name: 'Mouse Gamer', description: 'Precisão e conforto para longas sessões de jogo.', price: 150.00, image: 'image/mouse.jpg', category: 'eletronicos' },
        { id: 9, name: 'Teclado Mecânico', description: 'Resistência e resposta tátil para digitação.', price: 320.00, image: 'image/teclado.jpg', category: 'eletronicos' },
        { id: 10, name: 'Livro: Ficção Científica', description: 'Uma aventura no futuro distante.', price: 55.50, image: 'image/livro3.jpg', category: 'livros' },
        { id: 11, name: 'Capa para Celular', description: 'Proteção extra e design exclusivo.', price: 35.00, image: 'image/capa.jpg', category: 'acessorios' },
        { id: 12, name: 'Power Bank 20000mAh', description: 'Carregue seus dispositivos em qualquer lugar.', price: 99.90, image: 'image/powerbank.jpg', category: 'eletronicos' },
        { id: 13, name: 'Headset para Jogos', description: 'Som imersivo com microfone de alta qualidade.', price: 280.00, image: 'image/headset.jpg', category: 'eletronicos' },
        { id: 14, name: 'Livro: O Mistério da Mansão', description: 'Um suspense que vai te prender do início ao fim.', price: 39.90, image: 'image/livro4.jpg', category: 'livros' },
        { id: 15, name: 'Carteira de Couro', description: 'Elegância e durabilidade para seu dia a dia.', price: 75.00, image: 'image/carteira.jpg', category: 'acessorios' },
        { id: 16, name: 'Smart TV 50 polegadas', description: 'Resolução 4K e sistema operacional intuitivo.', price: 2500.00, image: 'image/smarttv.jpg', category: 'eletronicos' },
        { id: 17, name: 'Fone Esportivo', description: 'Resistente a suor e com ajuste perfeito.', price: 180.00, image: 'image/fone_esportivo.jpg', category: 'eletronicos' },
        { id: 18, name: 'Kindle Paperwhite', description: 'Leia por horas sem cansar a vista.', price: 499.00, image: 'image/kindle.jpg', category: 'eletronicos' },
        { id: 19, name: 'Livro: Receitas Saudáveis', description: 'Descubra pratos deliciosos e nutritivos.', price: 30.00, image: 'image/livro5.jpg', category: 'livros' },
        { id: 20, name: 'Luminária de Mesa', description: 'Iluminação ajustável para seu escritório.', price: 110.00, image: 'image/luminaria.jpg', category: 'acessorios' },
        { id: 21, name: 'Tablet Pro', description: 'Alto desempenho para trabalho e entretenimento.', price: 1200.00, image: 'image/tablet.jpg', category: 'eletronicos' },
        { id: 22, name: 'Caixa de Som Bluetooth', description: 'Portátil e com som potente.', price: 160.00, image: 'image/caixa_som.jpg', category: 'eletronicos' },
        { id: 23, name: 'Livro: Biografia de Elon Musk', description: 'A história do visionário da Tesla e SpaceX.', price: 70.00, image: 'image/biografia.jpg', category: 'livros' },
        { id: 24, name: 'Pulseira Fitness', description: 'Monitore passos, sono e calorias.', price: 130.00, image: 'image/pulseira.jpg', category: 'acessorios' },
        { id: 25, name: 'Drones com Câmera', description: 'Explore o mundo de uma nova perspectiva.', price: 900.00, image: 'image/drone.jpg', category: 'eletronicos' },
        { id: 26, name: 'Projetor Portátil', description: 'Leve a experiência do cinema para qualquer lugar.', price: 650.00, image: 'image/projetor.jpg', category: 'eletronicos' },
        { id: 27, name: 'Livro: O Poder do Hábito', description: 'Mude sua vida entendendo como os hábitos funcionam.', price: 49.90, image: 'image/habito.jpg', category: 'livros' },
        { id: 28, name: 'Óculos de Realidade Virtual', description: 'Imersão total em jogos e vídeos.', price: 850.00, image: 'image/vr.jpg', category: 'eletronicos' },
        { id: 29, name: 'Caneta Stylus', description: 'Precisão e fluidez para telas touch.', price: 50.00, image: 'image/stylus.jpg', category: 'acessorios' },
        { id: 30, name: 'Relógio de Pulso', description: 'Clássico e elegante, um acessório indispensável.', price: 200.00, image: 'image/relogio.jpg', category: 'acessorios' },
    ];

    // --- Dados de Blog ---
    const blogPostsData = [
        { title: 'Dicas para Escolher seu Novo Fone', summary: 'Saiba o que observar antes de comprar.', image: 'image/blog1.jpg' },
        { title: 'Tecnologia Vestível: Tendência ou Futuro?', summary: 'Explorando o mundo dos smartwatches e pulseiras.', image: 'image/blog2.jpg' },
        { title: 'Guia Completo de Drones para Iniciantes', summary: 'Tudo o que você precisa saber para começar a voar.', image: 'image/blog3.jpg' },
    ];

    // --- Elementos do DOM ---
    const productsContainer = document.getElementById('products-catalog');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchBar = document.getElementById('search-bar');
    const blogContainer = document.getElementById('blog-posts');
    const scheduleForm = document.getElementById('schedule-form');
    const scheduleMessage = document.getElementById('schedule-message');
    const budgetForm = document.getElementById('budget-form');
    const productOptions = document.querySelector('.product-options');
    const totalValueSpan = document.getElementById('total-value');
    const whatsappButton = document.querySelector('.fixed.bottom-6.right-6');

    // --- Funções de Renderização ---
    function renderProducts(filteredProducts) {
        productsContainer.innerHTML = '';
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card bg-white/50 backdrop-blur-lg rounded-xl shadow-2xl p-6 w-full max-w-xs transform transition-all duration-300 ease-in-out hover:scale-105';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="w-full h-40 object-cover rounded-lg mb-4">
                <h3 class="text-xl font-bold text-gray-800 mb-2">${product.name}</h3>
                <p class="text-gray-600 text-sm mb-4">${product.description}</p>
                <div class="flex items-center justify-between">
                    <span class="text-2xl font-extrabold text-green-600">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
                    <button class="buy-whatsapp-btn bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out hover:bg-green-700" data-product-id="${product.id}">WhatsApp</button>
                </div>
            `;
            productsContainer.appendChild(productCard);
        });
    }

    function renderBlogPosts() {
        blogContainer.innerHTML = '';
        blogPostsData.forEach(post => {
            const postCard = document.createElement('div');
            postCard.className = 'blog-card bg-white rounded-xl shadow-lg p-6 max-w-sm text-center transform transition-all duration-300 ease-in-out hover:scale-105';
            postCard.innerHTML = `
                <img src="${post.image}" alt="${post.title}" class="w-full h-48 object-cover rounded-lg mb-4">
                <h3 class="text-2xl font-bold text-gray-800 mb-2">${post.title}</h3>
                <p class="text-gray-600 text-base mb-4">${post.summary}</p>
                <a href="#" class="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300">Leia Mais</a>
            `;
            blogContainer.appendChild(postCard);
        });
    }

    // --- Lógica de Eventos ---

    // Renderização inicial
    renderProducts(products);
    renderBlogPosts();

    // Lógica para o formulário de Agendamento
    if (scheduleForm) {
        scheduleForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;

            const message = `Olá, gostaria de agendar um horário.\n\nNome: ${name}\nTelefone: ${phone}\nData: ${date}\nHorário: ${time}`;
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

            window.open(whatsappUrl, '_blank');
            if (scheduleMessage) {
                scheduleMessage.textContent = 'Seu agendamento foi enviado para o WhatsApp!';
                scheduleMessage.style.color = 'green';
            }
            this.reset();
        });
    }

    // Lógica para o botão de Compra via WhatsApp (delegação de eventos)
    if (productsContainer) {
        productsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('buy-whatsapp-btn')) {
                const productId = e.target.getAttribute('data-product-id');
                const product = products.find(p => p.id == productId);

                if (product) {
                    const message = `Olá, gostaria de saber mais sobre o produto: *${product.name}* (R$ ${product.price.toFixed(2).replace('.', ',')}).`;
                    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                }
            }
        });
    }

    // Lógica para o formulário de Orçamento
    if (budgetForm) {
        let selectedItems = {};

        function populateBudgetForm() {
            if (productOptions) {
                productOptions.innerHTML = '';
                products.forEach(product => {
                    const itemHtml = `
                        <div class="flex items-center justify-between">
                            <label for="product-${product.id}" class="text-gray-800">${product.name} (R$ ${product.price.toFixed(2).replace('.', ',')})</label>
                            <input type="checkbox" id="product-${product.id}" name="product-${product.id}" data-price="${product.price}" data-name="${product.name}" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
                        </div>
                    `;
                    productOptions.innerHTML += itemHtml;
                });
            }
        }
        populateBudgetForm();

        if (productOptions) {
            productOptions.addEventListener('change', (e) => {
                if (e.target.type === 'checkbox') {
                    const price = parseFloat(e.target.dataset.price);
                    const name = e.target.dataset.name;
                    if (e.target.checked) {
                        selectedItems[e.target.id] = { name: name, price: price };
                    } else {
                        delete selectedItems[e.target.id];
                    }
                    updateTotal();
                }
            });
        }

        function updateTotal() {
            let total = 0;
            for (const key in selectedItems) {
                total += selectedItems[key].price;
            }
            if (totalValueSpan) {
                totalValueSpan.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
            }
        }

        budgetForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let message = 'Olá, gostaria de um orçamento para os seguintes itens:\n\n';
            let total = 0;
            for (const key in selectedItems) {
                message += `* ${selectedItems[key].name}\n`;
                total += selectedItems[key].price;
            }
            message += `\nTotal: R$ ${total.toFixed(2).replace('.', ',')}`;

            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    }

    // Lógica de Filtragem
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            let filteredProducts = products;
            if (category !== 'todos') {
                filteredProducts = products.filter(product => product.category === category);
            }
            renderProducts(filteredProducts);
        });
    });

    // Lógica de Busca
    searchBar.addEventListener('keyup', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
        renderProducts(filteredProducts);
    });

    // Animação de Fade-in
    const fadeInElements = [
        ...document.querySelectorAll('#products-section'),
        ...document.querySelectorAll('#schedule-section'),
        ...document.querySelectorAll('#budget-section'),
        ...document.querySelectorAll('#blog-section'),
        ...document.querySelectorAll('#video-section'),
        ...document.querySelectorAll('#benefits-section'),
        ...document.querySelectorAll('#testimonials-section'),
        ...document.querySelectorAll('.testimonial-card'),
        ...document.querySelectorAll('.benefit-card')
    ];

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeInElements.forEach(element => {
        element.classList.add('opacity-0', 'transition-opacity', 'duration-1000');
        observer.observe(element);
    });

    // Script para o botão de WhatsApp flutuante
    if (whatsappButton) {
        whatsappButton.querySelector('a').href = `https://wa.me/${whatsappNumber}`;
    }
});