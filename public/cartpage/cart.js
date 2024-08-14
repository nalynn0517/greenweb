document.addEventListener("DOMContentLoaded", function() {
    // 로컬 스토리지에서 포인트 및 장바구니 항목을 가져옵니다
    const points = localStorage.getItem('gamePoints') || 0;
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    const pointsElement = document.getElementById('points');
    const cartList = document.getElementById("cartList");
    const totalElement = document.getElementById("totalPrice");
    const emptyCartMessage = document.getElementById("emptyCartMessage");

    let total = 0;
    let cartItems = savedCartItems;

    // 포인트 표시
    pointsElement.innerHTML = `${points} P`;

    // 장바구니에 아이템 추가 기능
    document.getElementById("addItemButton").addEventListener("click", function() {
        const itemName = document.getElementById("itemName").value;
        const itemPrice = parseInt(document.getElementById("itemPrice").value);
        
        if (itemName && itemPrice) {
            const item = { name: itemName, price: itemPrice };
            cartItems.push(item);
            addItemToCart(item);
            updateTotalPrice();
            saveCartItems();
        }
    });

    // 저장된 장바구니 아이템을 UI에 추가
    cartItems.forEach(item => addItemToCart(item));

    function addItemToCart(item) {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price} P`;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "삭제";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", function() {
            cartList.removeChild(li);
            cartItems = cartItems.filter(i => i !== item);
            total -= item.price;
            updateTotalPrice();
            saveCartItems();
        });

        li.appendChild(deleteButton);
        cartList.appendChild(li);

        total += item.price;
    }

    function updateTotalPrice() {
        totalElement.textContent = `총 합계: ${total} P`;

        // 장바구니가 비었을 때 메시지 표시
        if (total === 0) {
            emptyCartMessage.style.display = "block";
        } else {
            emptyCartMessage.style.display = "none";
        }
    }

    function saveCartItems() {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    // 결제 기능
    document.getElementById("checkoutButton").addEventListener("click", function() {
        if (points >= total && total > 0) {
            const newPoints = points - total;
            localStorage.setItem('gamePoints', newPoints);
            pointsElement.innerHTML = `${newPoints} P`;
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

    updateTotalPrice();
});
