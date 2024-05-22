
    const products = [
      { image: './HeadPhone1.jpeg', name: 'Product 1', price: 10 },
      { image: './HeadPhone2.jpeg', name: 'Product 2', price: 20 },
      { image: './HeadPhone3.jpeg', name: 'Product 3', price: 30 },
      { image: './HeadPhone4.jpeg', name: 'Product 4', price: 40 }
    ];

    const container = document.getElementById('card-container');
    const priceInput = document.getElementById('price');
    const sortPrice = document.getElementById('sort-price');
    const cartItems = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');
    const averagePriceContainer = document.getElementById('average-price');

    let totalPrice = 0;
    const cart = {};

    function displayProducts(filteredProducts) {
      container.innerHTML = '';
      filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;

        const name = document.createElement('h2');
        name.textContent = product.name;

        const price = document.createElement('p');
        price.textContent = `$${product.price}`;

        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.addEventListener('click', () => {
          addToCart(product);
        });

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(addToCartButton);

        container.appendChild(card);
      });
    }

    function filterProductsByPrice(range) {
      const [minPrice, maxPrice] = range.split(' - ').map(price => Number(price.replace('$', '')));
      const filteredProducts = products.filter(product => product.price >= minPrice && product.price <= maxPrice);
      displayProducts(filteredProducts);
    }

    function addToCart(product) {
  if (cart[product.name]) {
    // If the product is already in the cart, update its quantity
    cart[product.name].quantity++;
    cart[product.name].totalPrice += product.price;
  } else {
    // Otherwise, add the product to the cart
    cart[product.name] = {
      price: product.price,
      quantity: 1,
      totalPrice: product.price
    };

    // Create a cart item element
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';

    // Create an image element
    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;
    productImage.style.width = '60px';
    productImage.style.width = '50px';

    // Create a paragraph for the name
    const itemName = document.createElement('p');
    itemName.textContent = product.name;
    itemName.style.marginLeft='12px'
    itemName.style.marginRight='12px'
    // Create a paragraph for the price
    const itemPrice = document.createElement('p');
    itemPrice.textContent = `$${product.price}`;
    itemPrice.style.marginLeft='8px'
    itemPrice.style.marginRight='8px'
    itemPrice.style.fontWeight='600'
    // Create a remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = '❌';
    removeButton.addEventListener('click', () => {
      removeProduct(product);
    });

    cartItem.appendChild(productImage); // Add the image element
    cartItem.appendChild(itemName);
    cartItem.appendChild(itemPrice);
    cartItem.appendChild(removeButton);

    cartItems.appendChild(cartItem);
  }

  // Update total price
  totalPrice += product.price;
  totalPriceContainer.textContent = `Total Price: $${totalPrice.toFixed(2)}`;

  // Calculate average price
  const numProducts = Object.keys(cart).length;
  const averagePrice = totalPrice / numProducts;
  averagePriceContainer.textContent = `Average Price: $${averagePrice.toFixed(2)}`;
}


    function removeProduct(product) {
  if (cart[product.name]) {
    // Update total price
    totalPrice -= cart[product.name].totalPrice;
    totalPriceContainer.textContent = `Total Price: $${totalPrice.toFixed(2)}`;

    // Calculate average price
    const numProducts = Object.keys(cart).length - 1; // Subtract 1 for the removed product
    const averagePrice = numProducts === 0 ? 0 : totalPrice / numProducts;
    averagePriceContainer.textContent = `Average Price: $${averagePrice.toFixed(2)}`;

    // Remove the product from the cart
    delete cart[product.name];

    // Remove the product from the cart display
    const cartItemToRemove = Array.from(cartItems.children).find(item => item.querySelector('p').textContent === product.name);
    cartItems.removeChild(cartItemToRemove);
  }
}


    function clearCart() {
      cartItems.innerHTML = '';
      totalPrice = 0;
      totalPriceContainer.textContent = '';
      averagePriceContainer.textContent = '';
      // Reset cart object
      for (const productName in cart) {
        delete cart[productName];
      }
    }

    function sortProducts(products, sortOrder) {
      return products.slice().sort((a, b) => {
        if (sortOrder === 'low-to-high') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
    }

    priceInput.addEventListener('input', (e) => {
      const range = e.target.value;
      filterProductsByPrice(range);
    });

    sortPrice.addEventListener('change', (e) => {
      const sortOrder = e.target.value;
      const displayedProducts = Array.from(container.children).map(card => {
        const name = card.querySelector('h2').textContent;
        return products.find(product => product.name === name);
      });
      const sortedProducts = sortProducts(displayedProducts, sortOrder);
      displayProducts(sortedProducts);
    });

    // Display all products by default
    displayProducts(products);
