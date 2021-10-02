function create(words) {
   const content = document.getElementById('content');
   // delegate eventListener to parent to avoid creating one for each child
   // content.addEventListener('click', reveal);
   for (let word of words) {

      let div = document.createElement('div');
      let para = document.createElement('p');
      para.textContent = word;
      para.style.display = 'none';
      div.appendChild(para);

      // in case of delegation, remove the line below
      div.addEventListener('click', reveal);

      content.appendChild(div);
   }
   function reveal(e) {
      e.currentTarget.children[0].style.display = '';

      //in case of delegation
      // if(e.target.tagName == 'DIV' && e.target != content){
         //e.target.children[0].style.display ='';
         //}
   }
}