document.addEventListener("DOMContentLoaded", function() {
    const cartIcon = document.getElementById("cart-icon");
    const cartPopup = document.getElementById("cart-popup");
    const closeCart = document.getElementById("close-button");
    const shoppingCartDisplay = document.getElementById("shopping-cart-items");
    const shopping_cart_total = document.getElementById("shopping-cart-total-text"); 
    const amountOfItems = document.getElementById("cart-count");
    const tiles = document.querySelectorAll(".add-to-cart-btn"); // Target all add-to-cart buttons
   
    let cartItems = []; // Array to store items in the cart
    let subtotal = 0; // Variable to store the subtotal amount

    // Show the cart popup when cart icon is clicked
    cartIcon.addEventListener("click", function(event) {
        event.preventDefault();
        cartPopup.style.display = "block";
        displayCartItems(); // Update the display with current cart items
        updateSubtotal(); // Update subtotal when the cart is opened
    });

    // Close the cart popup when close button is clicked
    closeCart.addEventListener("click", function() {
        cartPopup.style.display = "none";
    });

    // Function to update the subtotal display
    function updateSubtotal() {
        subtotal = cartItems.reduce((sum, item) => sum + item.price, 0); // Calculate subtotal
        shopping_cart_total.textContent = `Subtotal: €${subtotal.toFixed(2)}`; // Update subtotal text
    }

    // Function to update the shopping cart display
    function displayCartItems() {
        shoppingCartDisplay.innerHTML = ""; // Clear current display
        cartItems.forEach(item => {
            // Create a container for each item
            const itemContainer = document.createElement("div");
            itemContainer.classList.add("cart-item");

            // Create an img element for the product image
            const itemImage = document.createElement("img");
            itemImage.src = item.pic;
            itemImage.alt = item.name;
            itemImage.classList.add("cart-item-image"); // Add a class for styling

            // Create a span element for the product name and price
            const itemText = document.createElement("span");
            itemText.textContent = `${item.name} - €${item.price}`;

            // Add image and text to the item container
            itemContainer.appendChild(itemImage);
            itemContainer.appendChild(itemText);

            // Append the item container to the cart display
            shoppingCartDisplay.appendChild(itemContainer);
        });
    }

    // Event listener for add-to-cart buttons
    tiles.forEach(tile => {
        tile.addEventListener("click", function() {
            const itemData = JSON.parse(tile.getAttribute("data-item"));
            cartItems.push({ name: itemData.name, price: itemData.price, pic: itemData.pic }); // Add the item data to cartItems
            displayCartItems(); // Update display after adding an item
            updateSubtotal(); // Update subtotal after adding an item
            amountOfItems.textContent = cartItems.length; // Update cart count
        });
    });
});
