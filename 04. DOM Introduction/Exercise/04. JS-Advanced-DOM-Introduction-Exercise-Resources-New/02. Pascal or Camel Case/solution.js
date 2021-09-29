function solve() {
  let text = document.getElementById('text').value;
  let naming = document.getElementById('naming-convention').value;
  let resultContainer = document.getElementById('result');

  let resultString = '';
  let textArr = text.toLowerCase().split(' ');

  if(naming === 'Pascal Case'){
    for(let i = 0 ; i < textArr.length; i++){
      resultString += textArr[i][0].toUpperCase() + textArr[i].slice(1, textArr[i].length);
    } 
    resultContainer.textContent = resultString;
  }
  else if(naming === 'Camel Case'){
    resultString += textArr[0];
    for(let i = 1 ; i < textArr.length; i++){
      resultString += textArr[i][0].toUpperCase() + textArr[i].slice(1, textArr[i].length);
    }
    resultContainer.textContent = resultString;
  }
  else{
    resultContainer.textContent = 'Error!';
  }
}