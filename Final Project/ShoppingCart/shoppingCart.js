// Variables
let shopping_cart_list = [];

// Function to handle tile click
function handleTileClick(event) {
    const itemData = JSON.parse(event.target.getAttribute("data-item"));

    if (!shopping_cart_list.some(item => item.name === itemData.name)) {
        shopping_cart_list.push(itemData);
        console.log(`${itemData.name} added to shopping cart.`);
        updateShoppingCartDisplay();
    } else {
        console.log(`${itemData.name} is already in the shopping cart.`);
    }
}

// Function to update the shopping cart display
function updateShoppingCartDisplay() {
    const displayDiv = document.getElementById("shopping-cart-display");
    displayDiv.innerHTML = "";

    shopping_cart_list.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");

        const itemIndex = document.createElement("span");
        itemIndex.classList.add("item-index");
        itemIndex.textContent = `${index + 1}. `;

        const itemName = document.createElement("span");
        itemName.classList.add("item-name");
        itemName.textContent = item.name;

        const itemPrice = document.createElement("span");
        itemPrice.classList.add("item-price");
        itemPrice.textContent = ` - $${item.price}`;

        const itemCategory = document.createElement("span");
        itemCategory.classList.add("item-category");
        itemCategory.textContent = ` - Category: ${item.category}`;

        itemDiv.appendChild(itemIndex);
        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemPrice);
        itemDiv.appendChild(itemCategory);
        
        displayDiv.appendChild(itemDiv);
    });
}

// Function to open the cart popup
function handleCartIconClick(e) {
    e.preventDefault(); // Prevent default anchor behavior
    const cartPopup = document.getElementById("cart-popup");
    cartPopup.style.display = "flex"; // Show the popup
}

// Function to close the cart popup
function handleCloseCartClick() {
    const cartPopup = document.getElementById("cart-popup");
    cartPopup.style.display = "none"; // Hide the popup
}

// Initialize event listeners after the DOM has loaded
document.addEventListener("DOMContentLoaded", () => {
    const cartIcon = document.getElementById("cart-icon");
    const closeCart = document.getElementById("close-cart");

    // Listener for the cart icon
    cartIcon.addEventListener("click", handleCartIconClick);
   
    // Listener for the close button in the cart popup
    closeCart.addEventListener("click", handleCloseCartClick);

    // Select all elements with the class "tile" and attach click listeners
    document.querySelectorAll(".tile").forEach(tile => {
        tile.addEventListener("click", handleTileClick);
    });

    // Close the popup when clicking outside the popup content
    window.addEventListener("click", (e) => {
        const cartPopup = document.getElementById("cart-popup");
        if (e.target === cartPopup) {
            cartPopup.style.display = "none";
        }
    });
});
