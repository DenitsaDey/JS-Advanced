function solve() {
   let inputFields = document.querySelectorAll('#add-new input');
   let nameField = inputFields[0];
   let quantityField = inputFields[1];
   let priceField = inputFields[2];
   let addBtn = document.querySelector('#add-new button');
   let availProdSection = document.querySelector('#products ul');
   let filterField = document.getElementById('filter');
   let filterBtn = document.querySelector('.filter button');
   let totalPrice = 0;
   let totalField = document.querySelectorAll('h1')[1];
   let myProdSection = document.querySelector('#myProducts ul');
   let buyBtn = document.querySelector('#myProducts button');
   
   addBtn.addEventListener('click', addProduct);
   filterBtn.addEventListener('click', filter);
   buyBtn.addEventListener('click', buy);

   function addProduct(event) {
      event.preventDefault();

      let name = nameField.value.trim();
      let quantity = Number(quantityField.value.trim());
      let price = Number(priceField.value.trim());

      let addToClientBtn = e('button', {}, "Add to Client's List");
      let tableRow = e('li', {}, 
                        e('span', {}, `${name}`), 
                        e('strong', {}, `Available: ${quantity}`), 
                        e('div', {}, 
                           e('strong', {}, `${price.toFixed(2)}`), 
                           addToClientBtn));
      
      addToClientBtn.addEventListener('click', addToClient);
      
      availProdSection.appendChild(tableRow);
      
      nameField.value = '';
      quantityField.value = '';
      priceField.value = '';
   }

   function filter(){
      let searchInput = filterField.value.toLowerCase().trim();
      Array.from(availProdSection.children).forEach(el => {
         let productName = el.querySelector('span').textContent.toLowerCase();
         if(productName.includes(searchInput) || !searchInput){
            el.style.display = 'block';
         } else{
            el.style.display = 'none';
         }
      })

      filterField.value = '';
   }

   function addToClient(event){
      if(event.target.tagName.toLowerCase = 'button'){
         let productName = event.target.parentElement.parentElement.querySelector('span').textContent;
         let productPrice = Number(event.target.parentElement.querySelector('strong').textContent);
         let basketElement = e('li', {}, `${productName}`, e('strong', {}, `${productPrice.toFixed(2)}`));
         myProdSection.appendChild(basketElement);
         
         totalPrice += productPrice;
         totalField.textContent = `Total Price: ${totalPrice.toFixed(2)}`;

         let productQnty = event.target.parentElement.parentElement.querySelector('strong');
         let availableProdCount = Number(productQnty.textContent.split(': ')[1])         
         productQnty.textContent = `Available: ${availableProdCount - 1}`;
         if(availableProdCount <= 1){
            event.target.parentElement.parentElement.remove();
         }
      }
   }

   function buy(){
      myProdSection.innerHTML = '';

      totalPrice = 0;
      totalField.textContent = `Total Price: ${totalPrice.toFixed(2)}`;
   }

   function e(type, attr, ...content){
      const element = document.createElement(type);

      for(let prop in attr){
          element[prop] = attr[prop];
      }

      for(let item of content){
          if(typeof item == 'string' || typeof item == 'number'){
              item = document.createTextNode(item);
          }
          element.appendChild(item);
      }
       return element;
  }
}