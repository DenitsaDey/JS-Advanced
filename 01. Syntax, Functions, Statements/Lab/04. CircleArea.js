function circle(input){
    let inputType = typeof(input);
    if(inputType != 'number'){
       console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
    else{
        let area = Math.PI * Math.pow(input,2);
        console.log(area.toFixed(2));
    }
}

circle(5);
circle('name');