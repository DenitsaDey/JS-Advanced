function solve() {
    let taskField = document.getElementById('task');
    let descriptionField = document.getElementById('description');
    let dateField = document.getElementById('date');
    let addBtn = document.getElementById('add');

    let openSection = document.querySelector('.orange');
    let inProgressSection = document.querySelector('.yellow');
    let finishSection = document.querySelector('.green');

    addBtn.addEventListener('click', addTask);

    function addTask(event) {
        event.preventDefault();

        let task = taskField.value.trim();
        let description = descriptionField.value.trim();
        let date = dateField.value.trim();

        if(!task || !description || !date) {
            retrun;
        }

        let startBtn = e('button', {}, 'Start');
        /*
        startBtn.className += 'green';
        startBtn.classList.add('green');
        startBtn.setAttribute('className', 'green');
        */
        startBtn.classList.add('green');
        let deleteBtn = e('button', {className: 'red'}, 'Delete');
        let btnSection = e('div', {className: 'flex'}, startBtn, deleteBtn)

        let newTask = e('article', {}, 
                            e('h3', {}, `${task}`),
                            e('p', {}, `Description: ${description}`),
                            e('p', {}, `Due Date: ${date}`));
        newTask.appendChild(btnSection);
        
        startBtn.addEventListener('click', inProgress.bind(null, newTask));
        deleteBtn.addEventListener('click', deleteTask.bind(null, newTask));

        openSection.parentElement.appendChild(newTask);

        taskField.value = '';
        descriptionField.value = '';
        dateField.value = '';
    }

    function inProgress(newTask) {
        newTask.querySelector('.flex').remove();
        let deleteBtn = e('button', {className: 'red'}, 'Delete');
        let finishBtn = e('button', {className: 'orange'}, 'Finish');
        let btnSection = e('div', {className: 'flex'}, deleteBtn, finishBtn);        
        
        newTask.appendChild(btnSection);
        
        deleteBtn.addEventListener('click', deleteTask.bind(null, newTask));
        finishBtn.addEventListener('click', finish.bind(null, newTask));

        inProgressSection.parentElement.appendChild(newTask);
    }

    function finish(newTask){
        newTask.querySelector('.flex').remove();
        finishSection.parentElement.appendChild(newTask);
    }

    function deleteTask(newTask){
        newTask.remove();
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