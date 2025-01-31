const cartModule = (function () {
    let cart = {};

    function addToCart(item) {
        cart[item] = (cart[item] || 0) + 1;
        updateCart();
    }

    function getCart() {
        return { ...cart };
    }

    function updateCart() {
        let cartTable = document.getElementById('cart');
        if (!cartTable) return;

        cartTable.innerHTML = `
            <tr>
                <td>Товар</td>
                <td>Кількість</td>
            </tr>
        `;

        let fragment = document.createDocumentFragment();

        for (let item in cart) {
            let row = document.createElement('tr');
            let itemName = document.createElement('td');
            let itemQuantity = document.createElement('td');

            itemName.textContent = item;
            itemQuantity.textContent = cart[item];

            row.appendChild(itemName);
            row.appendChild(itemQuantity);
            fragment.appendChild(row);
        }

        cartTable.appendChild(fragment);
    }

    return { addToCart, getCart };
})();
