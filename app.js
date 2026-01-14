// ===========================
// DATA STORAGE
// ===========================

const PRODUCTS_DATA = [
    {
        id: 1,
        name: "Premium Ribeye Steak",
        category: "beef",
        cut: "Ribeye",
        price: 45.99,
        usage: ["steak", "bbq"],
        status: "fresh",
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
        recipe: "Pan-sear the ribeye for 4 minutes each side. Let it rest for 5 minutes before serving.",
        cookTime: "15 minutes",
        difficulty: "Easy"
    },
    {
        id: 2,
        name: "Grass-Fed Ground Beef",
        category: "beef",
        cut: "Minced",
        price: 18.99,
        usage: ["cooking", "curry"],
        status: "fresh",
        image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=300&fit=crop",
        recipe: "Brown the ground beef in a pan. Add onions, tomatoes, and your favorite spices for a delicious curry.",
        cookTime: "30 minutes",
        difficulty: "Easy"
    },
    {
        id: 3,
        name: "Chicken Breast Fillet",
        category: "chicken",
        cut: "Breast Fillet",
        price: 12.99,
        usage: ["cooking", "bbq"],
        status: "fresh",
        image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=400&h=300&fit=crop",
        recipe: "Marinate chicken breast with olive oil, lemon, and herbs. Grill for 6-7 minutes per side.",
        cookTime: "20 minutes",
        difficulty: "Easy"
    },
    {
        id: 4,
        name: "Chicken Thighs",
        category: "chicken",
        cut: "Thighs",
        price: 9.99,
        usage: ["cooking", "curry", "bbq"],
        status: "fresh",
        image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop",
        recipe: "Season chicken thighs and roast at 400°F for 35-40 minutes until golden and crispy.",
        cookTime: "45 minutes",
        difficulty: "Easy"
    },
    {
        id: 5,
        name: "Lamb Chops",
        category: "lamb",
        cut: "Chops",
        price: 38.99,
        usage: ["steak", "bbq"],
        status: "limited",
        image: "https://www.seriouseats.com/thmb/7krlJdfnpXB53aqHg-vBSHjiDPc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/perfectly-grilled-lamb-rib-or-loin-chops-recipe-hero-03-262fe2defc7c491688cb2d363dad3446.JPG",
        recipe: "Season lamb chops with rosemary and garlic. Grill for 3-4 minutes per side for medium-rare.",
        cookTime: "10 minutes",
        difficulty: "Medium"
    },
    {
        id: 6,
        name: "Lamb Leg",
        category: "lamb",
        cut: "Leg",
        price: 52.99,
        usage: ["cooking", "curry"],
        status: "fresh",
        image: "https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?w=400&h=300&fit=crop",
        recipe: "Slow roast lamb leg with vegetables at 325°F for 3-4 hours until tender.",
        cookTime: "4 hours",
        difficulty: "Medium"
    },
    {
        id: 7,
        name: "Fresh Salmon Fillet",
        category: "fish",
        cut: "Fillet",
        price: 28.99,
        usage: ["cooking", "steak"],
        status: "fresh",
        image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=400&h=300&fit=crop",
        recipe: "Bake salmon at 375°F for 12-15 minutes. Top with lemon butter and fresh dill.",
        cookTime: "15 minutes",
        difficulty: "Easy"
    },
    {
        id: 8,
        name: "Sea Bass",
        category: "fish",
        cut: "Whole",
        price: 35.99,
        usage: ["cooking", "bbq"],
        status: "fresh",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop",
        recipe: "Stuff sea bass with herbs and lemon. Grill or bake for 20-25 minutes.",
        cookTime: "25 minutes",
        difficulty: "Medium"
    },
    {
        id: 9,
        name: "T-Bone Steak",
        category: "beef",
        cut: "T-Bone",
        price: 42.99,
        usage: ["steak", "bbq"],
        status: "fresh",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop",
        recipe: "Season generously and grill T-bone for 5-6 minutes per side. Rest before slicing.",
        cookTime: "15 minutes",
        difficulty: "Easy"
    },
    {
        id: 10,
        name: "Chicken Wings",
        category: "chicken",
        cut: "Wings",
        price: 11.99,
        usage: ["bbq", "cooking"],
        status: "fresh",
        image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=300&fit=crop",
        recipe: "Toss wings in your favorite sauce. Bake at 425°F for 40-45 minutes, flipping halfway.",
        cookTime: "50 minutes",
        difficulty: "Easy"
    },
    {
        id: 11,
        name: "Beef Sirloin",
        category: "beef",
        cut: "Sirloin",
        price: 32.99,
        usage: ["steak", "cooking"],
        status: "frozen",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop",
        recipe: "Thaw sirloin overnight. Season and pan-sear for 4-5 minutes per side.",
        cookTime: "15 minutes",
        difficulty: "Easy"
    },
    {
        id: 12,
        name: "Lamb Shoulder",
        category: "lamb",
        cut: "Shoulder",
        price: 29.99,
        usage: ["cooking", "curry"],
        status: "fresh",
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop",
        recipe: "Slow cook lamb shoulder with spices for 6-8 hours for tender, flavorful meat.",
        cookTime: "8 hours",
        difficulty: "Hard"
    }
];

// ===========================
// STATE MANAGEMENT
// ===========================

let cart = [];
let filteredProducts = [...PRODUCTS_DATA];

// ===========================
// LOCAL STORAGE UTILITIES
// ===========================

const Storage = {
    save: (key, data) => {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    },
    
    load: (key) => {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Error loading from localStorage:', error);
            return null;
        }
    }
};

// ===========================
// CART MANAGEMENT
// ===========================

const Cart = {
    add: (product) => {
        const existingItem = cart.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        
        Cart.save();
        Cart.render();
        Cart.updateCount();
    },
    
    remove: (productId) => {
        cart = cart.filter(item => item.id !== productId);
        Cart.save();
        Cart.render();
        Cart.updateCount();
    },
    
    updateQuantity: (productId, newQuantity) => {
        const item = cart.find(item => item.id === productId);
        
        if (item) {
            if (newQuantity <= 0) {
                Cart.remove(productId);
            } else {
                item.quantity = newQuantity;
                Cart.save();
                Cart.render();
                Cart.updateCount();
            }
        }
    },
    
    getTotal: () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    
    getCount: () => {
        return cart.reduce((count, item) => count + item.quantity, 0);
    },
    
    save: () => {
        Storage.save('cart', cart);
    },
    
    load: () => {
        const savedCart = Storage.load('cart');
        if (savedCart) {
            cart = savedCart;
            Cart.updateCount();
        }
    },
    
    updateCount: () => {
        const countElement = document.getElementById('cartCount');
        if (countElement) {
            countElement.textContent = Cart.getCount();
        }
    },
    
    render: () => {
        const cartItemsContainer = document.getElementById('cartItems');
        const cartTotalElement = document.getElementById('cartTotal');
        
        if (!cartItemsContainer) return;
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
            cartTotalElement.textContent = '$0.00';
            return;
        }
        
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image"><img src="${item.image}" alt="${item.name}"></div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-controls">
                        <button class="btn-qty" onclick="Cart.updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span class="cart-item-quantity">${item.quantity}</span>
                        <button class="btn-qty" onclick="Cart.updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                        <button class="btn-remove" onclick="Cart.remove(${item.id})">Remove</button>
                    </div>
                </div>
            </div>
        `).join('');
        
        cartTotalElement.textContent = `$${Cart.getTotal().toFixed(2)}`;
    },
    
    open: () => {
        const cartDrawer = document.getElementById('cartDrawer');
        if (cartDrawer) {
            cartDrawer.classList.add('active');
            Cart.render();
        }
    },
    
    close: () => {
        const cartDrawer = document.getElementById('cartDrawer');
        if (cartDrawer) {
            cartDrawer.classList.remove('active');
        }
    },
    
    generateWhatsAppMessage: () => {
        if (cart.length === 0) {
            return "Hello! I'd like to place an order.";
        }
        
        let message = "Hello! I'd like to order:\n\n";
        
        cart.forEach(item => {
            message += `• ${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}\n`;
        });
        
        message += `\nTotal: $${Cart.getTotal().toFixed(2)}`;
        
        return encodeURIComponent(message);
    }
};

// ===========================
// PRODUCT RENDERING
// ===========================

const Products = {
    createCard: (product) => {
        const statusBadges = {
            fresh: { text: 'Fresh Today', class: '' },
            frozen: { text: 'Frozen', class: 'frozen' },
            limited: { text: 'Limited Stock', class: 'limited' }
        };
        
        const badge = statusBadges[product.status];
        
        return `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <span class="product-badge ${badge.class}">${badge.text}</span>
                </div>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-cut">${product.cut}</div>
                    <div class="product-usage">
                        ${product.usage.map(use => `<span class="usage-tag">${use}</span>`).join('')}
                    </div>
                    <div class="product-footer">
                        <div class="product-price">$${product.price.toFixed(2)}</div>
                        <button class="btn-add-cart" onclick="Cart.add(${JSON.stringify(product).replace(/"/g, '&quot;')})">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
    },
    
    renderFeatured: () => {
        const container = document.getElementById('featuredProducts');
        if (!container) return;
        
        const featured = PRODUCTS_DATA.slice(0, 6);
        container.innerHTML = featured.map(Products.createCard).join('');
    },
    
    renderFiltered: () => {
        const container = document.getElementById('filteredProducts');
        if (!container) return;
        
        if (filteredProducts.length === 0) {
            container.innerHTML = '<div class="cart-empty">No products found matching your criteria.</div>';
            return;
        }
        
        container.innerHTML = filteredProducts.map(Products.createCard).join('');
    }
};

// ===========================
// FILTERING SYSTEM
// ===========================

const Filters = {
    apply: () => {
        const search = document.getElementById('searchInput').value.toLowerCase();
        const category = document.getElementById('categoryFilter').value;
        const usage = document.getElementById('usageFilter').value;
        const priceRange = document.getElementById('priceFilter').value;
        
        filteredProducts = PRODUCTS_DATA.filter(product => {
            // Search filter
            const matchesSearch = product.name.toLowerCase().includes(search) ||
                                product.category.toLowerCase().includes(search) ||
                                product.cut.toLowerCase().includes(search);
            
            // Category filter
            const matchesCategory = category === 'all' || product.category === category;
            
            // Usage filter
            const matchesUsage = usage === 'all' || product.usage.includes(usage);
            
            // Price filter
            let matchesPrice = true;
            if (priceRange !== 'all') {
                const [min, max] = priceRange.split('-').map(Number);
                if (max) {
                    matchesPrice = product.price >= min && product.price <= max;
                } else {
                    matchesPrice = product.price >= min;
                }
            }
            
            return matchesSearch && matchesCategory && matchesUsage && matchesPrice;
        });
        
        Products.renderFiltered();
    },
    
    reset: () => {
        document.getElementById('searchInput').value = '';
        document.getElementById('categoryFilter').value = 'all';
        document.getElementById('usageFilter').value = 'all';
        document.getElementById('priceFilter').value = 'all';
        
        filteredProducts = [...PRODUCTS_DATA];
        Products.renderFiltered();
    },
    
    init: () => {
        const searchInput = document.getElementById('searchInput');
        const categoryFilter = document.getElementById('categoryFilter');
        const usageFilter = document.getElementById('usageFilter');
        const priceFilter = document.getElementById('priceFilter');
        const resetBtn = document.getElementById('resetFilters');
        
        if (searchInput) searchInput.addEventListener('input', Filters.apply);
        if (categoryFilter) categoryFilter.addEventListener('change', Filters.apply);
        if (usageFilter) usageFilter.addEventListener('change', Filters.apply);
        if (priceFilter) priceFilter.addEventListener('change', Filters.apply);
        if (resetBtn) resetBtn.addEventListener('click', Filters.reset);
    }
};

// ===========================
// SUGGESTION GENERATOR
// ===========================

const Suggestion = {
    generate: () => {
        const randomProduct = PRODUCTS_DATA[Math.floor(Math.random() * PRODUCTS_DATA.length)];
        
        const suggestionContent = document.getElementById('suggestionContent');
        if (!suggestionContent) return;
        
        suggestionContent.innerHTML = `
            <div class="suggestion-product">
                <div class="suggestion-image"><img src="${randomProduct.image}" alt="${randomProduct.name}"></div>
                <div class="suggestion-details">
                    <h4>${randomProduct.name}</h4>
                    <p><strong>Category:</strong> ${randomProduct.category}</p>
                    <p><strong>Cut:</strong> ${randomProduct.cut}</p>
                    <p><strong>Price:</strong> $${randomProduct.price.toFixed(2)}</p>
                    <p><strong>Perfect for:</strong> ${randomProduct.usage.join(', ')}</p>
                </div>
            </div>
            <div class="suggestion-recipe">
                <h4>Recipe Suggestion</h4>
                <p>${randomProduct.recipe}</p>
                <div class="recipe-meta">
                    <span><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle; margin-right: 4px;"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg> ${randomProduct.cookTime}</span>
                    <span><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle; margin-right: 4px;"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg> ${randomProduct.difficulty}</span>
                </div>
            </div>
            <button class="btn btn-primary btn-full mt-1" onclick="Cart.add(${JSON.stringify(randomProduct).replace(/"/g, '&quot;')}); Modal.close();">
                Add to Cart
            </button>
        `;
        
        Modal.open();
    }
};

// ===========================
// MODAL MANAGEMENT
// ===========================

const Modal = {
    open: () => {
        const modal = document.getElementById('suggestionModal');
        if (modal) modal.classList.add('active');
    },
    
    close: () => {
        const modal = document.getElementById('suggestionModal');
        if (modal) modal.classList.remove('active');
    }
};

// ===========================
// DARK MODE
// ===========================

const DarkMode = {
    toggle: () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        Storage.save('darkMode', isDark);
        
        const toggleBtn = document.getElementById('darkModeToggle');
        if (toggleBtn) {
            toggleBtn.querySelector('.icon').textContent = isDark ? '☀️' : '🌙';
        }
    },
    
    load: () => {
        const isDark = Storage.load('darkMode');
        if (isDark) {
            document.body.classList.add('dark-mode');
            const toggleBtn = document.getElementById('darkModeToggle');
            if (toggleBtn) {
                toggleBtn.querySelector('.icon').textContent = '☀️';
            }
        }
    }
};

// ===========================
// WHATSAPP INTEGRATION
// ===========================

const WhatsApp = {
    openChat: (message) => {
        const phoneNumber = '1234567890'; // Replace with your WhatsApp number
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, '_blank');
    },
    
    orderFromCart: () => {
        if (cart.length === 0) {
            alert('Your cart is empty. Please add some products first.');
            return;
        }
        
        const message = Cart.generateWhatsAppMessage();
        WhatsApp.openChat(message);
    },
    
    orderDirect: () => {
        const message = encodeURIComponent("Hello! I'd like to place an order.");
        WhatsApp.openChat(message);
    }
};

// ===========================
// EVENT LISTENERS
// ===========================

const EventListeners = {
    init: () => {
        // Cart drawer
        const cartBtn = document.getElementById('cartBtn');
        const cartClose = document.getElementById('cartClose');
        const cartOverlay = document.getElementById('cartOverlay');
        
        if (cartBtn) cartBtn.addEventListener('click', Cart.open);
        if (cartClose) cartClose.addEventListener('click', Cart.close);
        if (cartOverlay) cartOverlay.addEventListener('click', Cart.close);
        
        // Dark mode
        const darkModeToggle = document.getElementById('darkModeToggle');
        if (darkModeToggle) darkModeToggle.addEventListener('click', DarkMode.toggle);
        
        // Suggestion generator
        const suggestionBtn = document.getElementById('suggestionBtn');
        if (suggestionBtn) suggestionBtn.addEventListener('click', Suggestion.generate);
        
        // Modal
        const modalClose = document.getElementById('modalClose');
        const modalOverlay = document.getElementById('modalOverlay');
        if (modalClose) modalClose.addEventListener('click', Modal.close);
        if (modalOverlay) modalOverlay.addEventListener('click', Modal.close);
        
        // WhatsApp buttons
        const whatsappBtn = document.getElementById('whatsappBtn');
        const checkoutBtn = document.getElementById('checkoutBtn');
        if (whatsappBtn) whatsappBtn.addEventListener('click', WhatsApp.orderDirect);
        if (checkoutBtn) checkoutBtn.addEventListener('click', WhatsApp.orderFromCart);
        
        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }
};

// ===========================
// INITIALIZATION
// ===========================

const App = {
    init: () => {
        // Load saved data
        Cart.load();
        DarkMode.load();
        
        // Render products
        Products.renderFeatured();
        Products.renderFiltered();
        
        // Initialize filters
        Filters.init();
        
        // Initialize event listeners
        EventListeners.init();
        
        console.log('🥩 Smart Meat Shop initialized successfully!');
    }
};

// Start the application when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', App.init);
} else {
    App.init();
}
