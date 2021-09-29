function toggle() {
    const button = document.querySelector('.button');
    const divExtra = document.querySelector('#extra');

    const isHidden = button.textContent =='More';
    divExtra.style.display = isHidden ? 'block' : 'none';
    button.textContent = isHidden ? 'Less' : 'More';
}