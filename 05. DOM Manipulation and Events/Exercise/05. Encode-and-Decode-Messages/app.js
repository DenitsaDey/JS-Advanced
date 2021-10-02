function encodeAndDecodeMessages() {
    const textAreas = Array.from(document.querySelectorAll('textarea'));
    const input = textAreas[0];
    const output = textAreas[1];

    let message = input.value;
    let encodedMessage = message.map(letter => Number(letter)+1).map(character => String.fromCharCode(character)).join(' ');
    console.log(encodedMessage);
}