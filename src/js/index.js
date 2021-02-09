import '../css/style.css'

const layout = () => {
    const el = document.createElement('h1');
    el.innerHTML = 'Webpack traisdsning';
    el.classList.add('title')
    return el;
}

document.body.appendChild(layout())