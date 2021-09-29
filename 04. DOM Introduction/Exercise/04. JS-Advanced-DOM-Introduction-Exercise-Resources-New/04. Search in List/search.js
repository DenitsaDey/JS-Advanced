function search() {
   let listTowns = document.querySelectorAll('#towns>li');
   let input = document.querySelector('input').value;
   let result = document.getElementById('result');

   let sum = 0;
   for (const li of listTowns) {
      if ((li.textContent).toLowerCase().includes(input.toLowerCase()) && input != '') {
         li.style.fontWeight = 'bold';
         li.style.textDecoration = 'underline';
         sum ++;
      }
      else {
         li.style.fontWeight = '';
         li.style.textDecoration = '';
      }
   }

   result.textContent = `${sum} matches found`;
}
