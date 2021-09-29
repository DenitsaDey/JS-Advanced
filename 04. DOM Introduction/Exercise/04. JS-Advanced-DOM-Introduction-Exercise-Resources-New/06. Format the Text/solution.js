function solve() {
  let input = document.getElementById('input').value;
  let splittedText = input.split('.').filter((el) => el != '');
  let output = document.getElementById('output');

  ;
  let numberofP = Math.ceil(splittedText.length/3);
  

  for(let i = 0; i < numberofP; i++){
    let result = [];
    if(splittedText.length >= 3){
      result.push(splittedText.slice(0, 3).join('. '));
      splittedText.splice(0, 3);
    }
    else{
      result.push(splittedText.slice().join('. '));
    }  
    let paragraph = result.join('. ') + '.';
  output.innerHTML += `<p>${paragraph}</p>`;
  }

  
}