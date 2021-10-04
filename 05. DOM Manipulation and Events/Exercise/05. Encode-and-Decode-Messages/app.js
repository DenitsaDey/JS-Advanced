function encodeAndDecodeMessages() {
    const textAreas = Array.from(document.querySelectorAll('textarea'));
    const buttons = Array.from(document.querySelectorAll('button'));
    const input = textAreas[0];
    const output = textAreas[1];

    const map = {
        encode:{
            textarea: input,
            btn: buttons[0],
            func: (char) => String.fromCharCode(char.charCodeAt(0)+1)
        },
        decode:{
            textarea: output,
            btn: buttons[1],
            func: (char) => String.fromCharCode(char.charCodeAt(0)-1)
        }
    };

    document.getElementById('main').addEventListener('click', onConvert);

    function onConvert(e){
        if(e.target.tagName !== 'BUTTON'){
            return;
        }

        const type = e.target.textContent.toLowerCase().trim().includes('encode') ? 'encode' : 'decode';

        const message = map[type].textarea.value.split('').map(map[type].func).join('');

        map.encode.textarea.value = '';
        map.decode.textarea.value = message;
    }
    
}