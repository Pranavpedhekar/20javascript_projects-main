const shop = document.getElementById('shop');

// Retrieve data from local storage
let storedData = localStorage.getItem('data');

// Check if there is data in local storage
let basket = storedData ? JSON.parse(storedData) : [];

let generateShop = () => {
  shop.innerHTML = shopItemsData.map((x) => {
    let { id, name, price, desc, img } = x;

    return `
      <div class='shop_item'  id=prodcut-id-${id}>
        <img src='${img}' alt='' />
        <div class='product_info'>
          <h5>${name}</h5>
          <p class='price'> <span>$:</span> ${price} </p>
          <p>${desc}</p>
          <button onclick="add_to_cart('${id}','${name}','${price}','${img}')">Add to Cart </button>
        </div>
      </div>
    `;
  });
};

let add_to_cart = (id, name, price, img) => {
  basket.push({
    id: id,
    item: 1,
    name: name,
    price: price,
    img: img,
  });

  // Save updated basket to local storage
  localStorage.setItem('data', JSON.stringify(basket));

  calculate();
};

let calculate = () => {
  let cart_icon = document.getElementById('cart_amount');
  let cart_amount = basket.length;

  cart_icon.innerHTML = cart_amount;
};

calculate();
generateShop();
