//window.addEventListener('load', solve);

function solve() {
    let genreField = document.getElementById('genre');
    let nameField = document.getElementById('name');
    let authorField = document.getElementById('author');
    let dateField = document.getElementById('date');
    let addBtn = document.getElementById('add-btn');

    let hitsField = document.querySelector('.all-hits-container');
    let savedField = document.querySelector('.saved-container');
    let totalLikesField = document.querySelector('.likes p');

    addBtn.addEventListener('click', addSong);

    function addSong(event) {
        event.preventDefault();

        let genre = genreField.value.trim();
        let name = nameField.value.trim();
        let author = authorField.value.trim();
        let date = dateField.value.trim();

        console.log(genre, name, author, date);
        if(!genre || !name || !author || !date){
            return;
        }

        let saveBtn = e('button', {className: 'save-btn'}, 'Save song');
        let likeBtn = e('button', {className: 'like-btn'}, 'Like song');
        let delBtn = e('button', {className: 'delete-btn'}, 'Delete');
        let imgEl = document.createElement('img');
        imgEl.setAttribute("src","./static/img/img.png");

        let newSong = e('div', {className: 'hits-info'}, 
                            imgEl,
                            e('h2', {}, `Genre: ${genre}`), 
                            e('h2', {}, `Name: ${name}`),
                            e('h2', {}, `Author: ${author}`),
                            e('h3', {}, `Date: ${date}`),
                            saveBtn, likeBtn, delBtn);

        saveBtn.addEventListener('click', addToSaved.bind(null, newSong));
        likeBtn.addEventListener('click', likeSong);
        delBtn.addEventListener('click', delSong.bind(null, newSong));
        hitsField.appendChild(newSong);

        genreField.value = '';
        nameField.value = '';
        authorField.value = '';
        dateField.value = '';
    }

    function addToSaved(newSong){
        newSong.querySelector('.save-btn').remove();
        newSong.querySelector('.like-btn').remove();
        savedField.appendChild(newSong);

    }

    function likeSong(event){
        let currLikes = Number(totalLikesField.textContent.split(': ')[1]);
        currLikes ++;
        totalLikesField.textContent = `Total Likes: ${currLikes}`;
        event.target.disabled = true;
    }

    function delSong(newSong){
        newSong.remove();
    }

    function e(type, attr, ...content){
        const element = document.createElement(type);

        for(let prop in attr){
            //element[prop] = attr[prop];
            //element.setAttribute(prop, attr[prop]);
            element.classList.add(attr[prop]);
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