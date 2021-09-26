function extract(content) {
     const text = document.getElementById(content).textContent;

     const regex = /\((.+?)\)/gm;

     let result = [];

    let match = regex.exec(text);
    while(match != null){
        result.push(match);
        match = regex.exec(text);
    }

    return result.join('; ');
}