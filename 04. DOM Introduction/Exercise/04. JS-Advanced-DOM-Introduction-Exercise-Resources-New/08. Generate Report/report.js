function generateReport() {
    const output = document.getElementById('output');
    const values = Array.from(document.querySelectorAll('tbody tr'));
    const columns = Array.from(document.querySelectorAll('thead tr th'));
    let result = [];
 
    for (let i = 0; i < values.length; i++) {
        let currentObject = {}; 
        for (let j = 0; j < columns.length; j++) {
            if (columns[j].firstElementChild.checked) {
                currentObject[columns[j].firstElementChild.name] = values[i].children[j].textContent;
            }
        }
 
        if (currentObject){
            result.push(currentObject);
        }
    }
    output.innerHTML = JSON.stringify(result);
}