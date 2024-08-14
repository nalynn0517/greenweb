document.addEventListener("DOMContentLoaded", function() {
    const pointsElement = document.getElementById("points");
    const cartList = document.getElementById("cartList");
    const totalElement = document.getElementById("totalPrice");
    const emptyCartMessage = document.getElementById("emptyCartMessage");
    const deleteConfirmPopup = document.getElementById("deleteConfirmPopup");

    let points = parseInt(localStorage.getItem('gamePoints')) || 1000;
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let total = 0;

    pointsElement.innerHTML = `${points} P`;

    cartItems.forEach(item => addItemToCart(item));
    updateTotalPrice();

    document.getElementById("addItemButton").addEventListener("click", function() {
        const itemName = document.getElementById("itemName").value.trim();
        const itemPrice = parseInt(document.getElementById("itemPrice").value.trim());

        if (itemName && itemPrice > 0) {
            const newItem = { name: itemName, price: itemPrice };
            cartItems.push(newItem);
            addItemToCart(newItem);
            updateTotalPrice();
            saveCartItems();
        } else {
            alert("유효한 아이템 이름과 가격을 입력해주세요.");
        }
    });

    function addItemToCart(item) {
        const li = document.createElement("li");
        li.innerHTML = `${item.name} - ${item.price} P <button class="delete-button">삭제</button>`;
        cartList.appendChild(li);

        total += item.price;

        const deleteButton = li.querySelector(".delete-button");
        deleteButton.addEventListener("click", function() {
            showDeleteConfirmPopup(item, li);
        });
    }

    function showDeleteConfirmPopup(itemToDelete, itemElement) {
        deleteConfirmPopup.classList.remove("hidden");
        deleteConfirmPopup.classList.add("visible");

        document.getElementById("confirmDeleteButton").onclick = function() {
            cartList.removeChild(itemElement);
            cartItems = cartItems.filter(item => item !== itemToDelete);
            total -= itemToDelete.price;
            updateTotalPrice();
            saveCartItems();
            hideDeleteConfirmPopup();
        };

        document.getElementById("cancelDeleteButton").onclick = function() {
            hideDeleteConfirmPopup();
        };
    }

    function hideDeleteConfirmPopup() {
        deleteConfirmPopup.classList.remove("visible");
        deleteConfirmPopup.classList.add("hidden");
    }

    function updateTotalPrice() {
        totalElement.innerHTML = `${total} P`;

        if (total === 0) {
            emptyCartMessage.style.display = "block";
        } else {
            emptyCartMessage.style.display = "none";
        }
    }

    function saveCartItems() {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    document.getElementById("checkoutButton").addEventListener("click", function() {
        if (points >= total && total > 0) {
            points -= total;
            localStorage.setItem('gamePoints', points);
            pointsElement.innerHTML = `${points} P`;
            alert("결제가 완료되었습니다!");
            cartItems = [];
            cartList.innerHTML = '';
            total = 0;
            updateTotalPrice();
            saveCartItems();
        } else if (total === 0) {
            alert("결제할 아이템이 없습니다.");
        } else {
            alert("포인트가 부족합니다.");
        }
    });
});
