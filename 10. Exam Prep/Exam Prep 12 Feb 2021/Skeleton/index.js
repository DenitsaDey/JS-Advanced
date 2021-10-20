function solve() {
    let lectureNameElem = document.querySelector('input[name="lecture-name"]');
    let lectureDateElem = document.querySelector('input[name="lecture-date"]');
    let lectureModuleElem = document.querySelector('select[name="lecture-module"]');
    let trainings = document.querySelector('.modules');
    let courses = [];

    const addBtnElement = document.querySelector('.admin-view .action button');
    addBtnElement.addEventListener('click', addModule);

    function addModule(event){
        event.preventDefault();

        let name = lectureNameElem.value.trim();
        let date = lectureDateElem.value;
        let module = lectureModuleElem.value.trim();

        
        if(!name || !date || module == 'Select module'){
            return;
        }

        if(!courses[module]){
            courses[module] = [];
        }

        courses[module].push({name: name, date: formatDate(date)});
        courses[module].sort((a, b) => a.date.localeCompare(b.date));
        
        const delBtn = e('button', {class: 'red'}, 'Del');

        let lectureList = [];
        for(const subject in courses[module]){
            let currLiElem = e('li', {class: 'flex'}, 
            e('h4', {}, `${subject.name} - ${subject.date}`), delBtn);
            lectureList.push(currLiElem);
        }
        
        // let lectureList = courses[module].forEach(({name, date})=> {
        // `e('li', {class: 'flex'}, 
        // e('h4', {}, ${name} - ${date}), delBtn)`});
        //let lectureListAsLiElem = lectureList.join(', ');
        console.log(lectureList.join('\n'));
        //console.log(lectureListAsLiElem);

        let lecture = e('div', {class: 'module'},
                            e('h3', {}, `${module.toUpperCase()}-MODULE`),
                            e('ul', {}, 'test'));
        
        delBtn.addEventListener('click', delModules);

        trainings.appendChild(lecture);
        lectureNameElem.value = '';
        lectureDateElem.value = '';
        lectureModuleElem.value = 'Select module'

        function delModules(){
            console.log('TODO');
        }

    }

    function formatDate(dateInput) {
        //2021-06-08T06:55
        let [date, time] = dateInput.split('T');
        date = date.replace(/-/g, '/');

        return `${date} - ${time}`;
    }

    function e(type, attr, ...content){
        const element = document.createElement(type);

        for(let prop in attr){
            //element[prop] = attr[prop];
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
};