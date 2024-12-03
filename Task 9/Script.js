let cart = {};
function addToCart(item) {
    if(cart[item]) {
        cart[item]++;
    }else{
        cart[item] = 1;
    }
    updateCart();
}
function updateCart() {
    let cartTable = document.getElementById('cart');
    cartTable.innerHTML = `
        <tr>
            <td>Товар</td>
            <td>Кількість</td>
        </tr>
    `;
    for (let item in cart) {
        let row = document.createElement('tr');
        let itemName = document.createElement('td');
        let itemQuantity = document.createElement('td');

        itemName.textContent = item;
        itemQuantity.textContent = cart[item];

        row.appendChild(itemName);
        row.appendChild(itemQuantity);
        cartTable.appendChild(row);
    }
}