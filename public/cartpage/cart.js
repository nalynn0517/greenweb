document.addEventListener("DOMContentLoaded", function () {
    const pointsElement = document.getElementById("points");
    const cartList = document.getElementById("cartList");
    const totalElement = document.querySelector('.total .amount');

    let points = parseInt(localStorage.getItem('gamePoints')) || 0;
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    pointsElement.textContent = `${points.toLocaleString()} P`;

    // 장바구니 초기화
    function updateCart() {
        cartList.innerHTML = '';  // 기존 항목들을 모두 삭제하고 다시 추가

        cartItems.forEach(item => {
            addItemToDOM(item); // DOM에 아이템을 추가
        });

        updateTotalPrice();
    }

    // DOM에 아이템 추가
    function addItemToDOM(item) {
        const listItem = document.createElement("div");
        listItem.classList.add('cart-item');
        listItem.dataset.itemName = item.name;
        listItem.innerHTML = `
            <img src="https://via.placeholder.com/100" alt="제품 이미지">
            <div class="info">
                <h3>${item.name}</h3>
                <p>가격: ${item.price.toLocaleString()}P</p>
                <div class="quantity-control">
                    <button class="decrease-qty" data-name="${item.name}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="increase-qty" data-name="${item.name}">+</button>
                </div>
            </div>
            <button class="remove-item" data-name="${item.name}">삭제</button>
        `;
        cartList.appendChild(listItem);

        // 수량 증가/감소 및 삭제 버튼 이벤트 핸들러 추가
        listItem.querySelector(".remove-item").addEventListener("click", function () {
            removeItemFromCart(item.name);
        });

        listItem.querySelector(".increase-qty").addEventListener("click", function () {
            updateItemQuantity(item.name, 1);
        });

        listItem.querySelector(".decrease-qty").addEventListener("click", function () {
            updateItemQuantity(item.name, -1);
        });
    }

    // 아이템 수량 업데이트
    function updateItemQuantity(itemName, change) {
        const item = cartItems.find(i => i.name === itemName);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                removeItemFromCart(itemName);
            } else {
                saveCartItems();
                updateCart(); // 변경된 수량을 반영하기 위해 장바구니를 다시 업데이트
            }
        }
    }

    // 장바구니에서 아이템 삭제
    function removeItemFromCart(itemName) {
        cartItems = cartItems.filter(item => item.name !== itemName);
        saveCartItems();
        updateCart();
    }

    // 총 가격 업데이트
    function updateTotalPrice() {
        total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        totalElement.textContent = `${total.toLocaleString()}원`;
    }

    // 로컬 스토리지에 장바구니 항목 저장
    function saveCartItems() {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }

    // 상품 추가 버튼 클릭 이벤트
    document.getElementById("addItemButton").addEventListener("click", function () {
        const itemName = document.getElementById("itemName").value.trim();
        const itemPrice = parseInt(document.getElementById("itemPrice").value.trim());

        if (itemName && itemPrice > 0) {
            const existingItem = cartItems.find(item => item.name === itemName);

            if (existingItem) {
                // 기존 항목의 수량만 증가시킴
                updateItemQuantity(itemName, 1);
            } else {
                // 새로운 항목 추가
                const newItem = { name: itemName, price: itemPrice, quantity: 1 };
                cartItems.push(newItem);
                addItemToDOM(newItem);
            }

            updateTotalPrice();
            saveCartItems();
        } else {
            alert("유효한 아이템 이름과 가격을 입력해주세요.");
        }
    });

    // 초기 장바구니 상태 업데이트
    updateCart();
});
