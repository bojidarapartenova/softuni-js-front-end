document.addEventListener('DOMContentLoaded', solve);

function solve() {
   let products = new Set();
   let totalPrice = 0;

   const allAddButtons = document.querySelectorAll('.add-product');
   const resultTextareaEl = document.querySelector('textarea');
   const checkoutBtnEl = document.querySelector('.checkout');

   for (const addBtnEl of allAddButtons) {
      addBtnEl.addEventListener('click', handleAddProduct);
   }

   checkoutBtnEl.addEventListener('click', handleCheckoutProducts);

   function handleAddProduct(e) {
      const fullProductDivEl = e.target.parentElement.parentElement;

      const productTitleDivEl = fullProductDivEl.querySelector('.product-title');
      const productTitle = productTitleDivEl.textContent;
      products.add(productTitle);

      const priceDivEl = fullProductDivEl.querySelector('.product-line-price');
      const price = Number(priceDivEl.textContent);
      totalPrice += price;

      resultTextareaEl.value += `Added ${productTitle} for ${price.toFixed(2)} to the cart.\n`;
   }

   function handleCheckoutProducts() {
      const productsArr = Array.from(products);
      resultTextareaEl.value += `You bought ${productsArr.join(', ')} for ${totalPrice.toFixed(2)}.`;

      checkoutBtnEl.disabled = true;
      for (const addBtnEl of allAddButtons) {
         addBtnEl.disabled = true;
      }
   }
}
