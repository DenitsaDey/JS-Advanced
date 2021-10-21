class Forum{
    constructor(){
        this._users = [];
        this._questions = [];
        this._id = 1;
    }

    set id(value){
        this._id += value;
    }

    register(username, password, repeatPassword, email){
        if(!username || !password || !repeatPassword || !email){
            throw new Error("Input can not be empty");
        }
        if(password !== repeatPassword){
            throw new Error("Passwords do not match");
        }
        let currUser = this._users.find(u => u.username === username || u.password === password);
        if(currUser){
            throw new Error("This user already exists!");
        } else {
            this._users.push({username, password, repeatPassword, email, loggedIn: false});
            return `${username} with ${email} was registered successfully!`
        }
    }

    login(username, password){
        let currUser = this._users.find(u => u.username === username);
        if(!currUser){
            throw new Error("There is no such user");
        } else if(currUser.password === password){
            currUser.loggedIn = true;
            return `Hello! You have logged in successfully`;
        }
    }

    logout(username, password){
        let currUser = this._users.find(u => u.username === username);
        if(!currUser){
            throw new Error("There is no such user");
        } else if(currUser.password === password){
            currUser.loggedIn = false;
            return `You have logged out successfully`;
        }
    }

    postQuestion(username, question){
        let currUser = this._users.find(u => u.username === username);
        if(!currUser || !currUser.loggedIn){
            throw new Error("You should be logged in to post questions");
        } 
        if(question == ''){
            throw new Error("Invalid question");
        } else {
            this._questions.push({question, username, id: this._id, answers: []});
            this._id++;
            return "Your question has been posted successfully";
        }
    }

    postAnswer(username, questionId, answer){
        let currUser = this._users.find(u => u.username === username);
        if(!currUser || !currUser.loggedIn){
            throw new Error("You should be logged in to post answers");
        }
        if(answer == ''){
            throw new Error("Invalid answer");
        } 
        let questionToBeAnswered = this._questions.find(q => q.id === questionId);
        if(!questionToBeAnswered){
            throw new Error("There is no such question");
        }
        questionToBeAnswered.answers.push({username, answer});
        return "Your answer has been posted successfully";
    }

    showQuestions(){
        let result = []; 
        for(let question of this._questions){
            result.push(`Question ${question.id} by ${question.username}: ${question.question}`)
            question.answers.forEach(a => {
                result.push(`---${a.username}: ${a.answer}`);
            })
        }
        return result.join("\n");
    }
}

let forum = new Forum();

forum.register('Jonny', '12345', '12345', 'jonny@abv.bg');
forum.register('Peter', '123ab7', '123ab7', 'peter@gmail@.com');
forum.login('Jonny', '12345');
forum.login('Peter', '123ab7');

forum.postQuestion('Jonny', "Do I need glasses for skiing?");
forum.postAnswer('Peter',1, "Yes, I have rented one last year.");
forum.postAnswer('Jonny',1, "What was your budget");
forum.postAnswer('Peter',1, "$50");
forum.postAnswer('Jonny',1, "Thank you :)");

console.log(forum.showQuestions());


// forum.register('Michael', '123', '123', 'michael@abv.bg');
// forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com');
// forum.login('Michael', '123');
// forum.login('Stoyan', '123ab7');

// forum.postQuestion('Michael', "Can I rent a snowboard from your shop?");
// forum.postAnswer('Stoyan',1, "Yes, I have rented one last year.");
// forum.postQuestion('Stoyan', "How long are supposed to be the ski for my daughter?");
// forum.postAnswer('Michael',2, "How old is she?");
// forum.postAnswer('Michael',2, "Tell us how tall she is.");

// console.log(forum.showQuestions());

