// window.addEventListener('load', solve);

function solve() {
    let modelElement = document.getElementById('model');
    let yearElement = document.getElementById('year');
    let descriptionElement = document.getElementById('description');
    let priceElement = document.getElementById('price');
    let addBtn = document.getElementById('add');
    let furnitureList = document.querySelector('#furniture-list');
    let totalPriceElement = document.querySelector('.total-price');

    addBtn.addEventListener('click', addToTable);

    function addToTable(event) {
        event.preventDefault();

        const model = modelElement.value.trim();
        const year = Number(yearElement.value.trim());
        const description = descriptionElement.value.trim();
        const price = Number(priceElement.value.trim());

        if (model == '' || description == ''
            || price < 0 || year < 0) {
            return;
        }

        // const moreBtn = e('button', {className: 'moreBtn'}, 'More Info');
        // const buyBtn = e('button', {className: 'buyBtn' }, 'Buy it');
        // const tableRow = e('tr', {className: 'info' },
        //     e('td', {}, model),
        //     e('td', {}, price.toFixed(2)),
        //     e('td', {}, moreBtn, buyBtn));
        // const moreDetails = e('tr', {className: 'hide'},
        //     e('td', {}, `Year: ${year}`),
        //     e('td', {colspan: '3'}, `Description: ${description}`));

        // moreBtn.addEventListener('click', showDetails);
        // buyBtn.addEventListener('click', addRevenue);

        //function createElement(type, className, attr, event, ...content)
        const moreBtn = createElement('button', 'moreBtn', null, {bame: 'click', func: showDetails}, 'More Info');
        const buyBtn = e('button', 'buyBtn' , null, {name: 'click', func: addRevenue},'Buy it');
        const tableRow = createElement('tr', 'info', null, null,
            createElement('td', null, null, null, model),
            e('td', null, null, null, price.toFixed(2)),
            e('td', null, moreBtn, buyBtn));

        const moreDetails = createElement('tr', 'hide', null, null,
            createElement('td', null, null, null, `Year: ${year}`),
            createElement('td', null, {colspan: '3'}, {}, `Description: ${description}`));

        

        furnitureList.appendChild(tableRow);
        furnitureList.appendChild(moreDetails);

        modelElement.value = '';
        yearElement.value = '';
        descriptionElement.value = '';
        priceElement.value = '';


    }

    function showDetails(event) {
        const moreInfoTr = event.target.parentElement.parentElement.nextElementSibling;

        if(event.target.textContent == 'More Info'){
            event.target.textContent = 'Less Info';
            moreInfoTr.style.display = 'contents';
        } else{
            event.target.textContent = 'More Info';
            moreInfoTr.style.display = 'none';
        }
    }

    function addRevenue(event){
        const row = event.target.parentElement.parentElement;
        const hideRow = row.nextElementSibling;

        hideRow.parentElement.removeChild(hideRow);

        const price = Number(row.querySelectorAll('td')[1].textContent);
        totalPriceElement.textContent = (Number(totalPriceElement.textContent) + price).toFixed(2);

        row.parentElement.removeChild(row);
    }

    // extended from Victor and Hristomir
    function createElement(type, className, attr, event, ...content){
        const element = document.createElement(type);

        if(className){
            element.classList.add(className);
        }

        if(attr){
            attr.forEach((prop) => element.setAttribute(prop, attr[prop]))
        }

        if(event){
            element.addEventListener(event.name, event.func);
        }

        for(let item of content){
            if(typeof item == 'string' || typeof item == 'number'){
                item = document.createTextNode(item);
            }
            element.appendChild(item);
        }
         return element;
    }

    //by Victor Kostadinov
    function e(type, attr, ...content){
        const element = document.createElement(type);

        for(let prop in attr){
            element[prop] = attr[prop];
            //element.classList.add(attr[prop]);
            //element.setAttribute(prop, attr[prop]);
        }

        for(let item of content){
            if(typeof item == 'string' || typeof item == 'number'){
                item = document.createTextNode(item);
            }
            element.appendChild(item);
        }
         return element;
    }

    //by Hristomir Asenov
    function element(type, className, textContent, attr, event){
        let element = document.createElement(type);

        if(className){
            element.classList.add(className);
        }

        if(textContent){
            element.textContent = textContent;
        }

        if(attr){
            attr.forEach((prop) => element.setAttribute(prop, attr[prop]))
        }

        if(event){
            element.addEventListener(event.name, event.func);
        }

        return element;
    }

}
