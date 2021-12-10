import { pageOneSetup } from './pageOneSet';
import { pageTwoSetup } from './pageTwoSetup';
import { pageThreeSetup } from './pageThreeSetup';
import './style.css';

const tabPrint = (e) => {
    const page = e.target.getAttribute('data-btn');
    const container = document.querySelector('#content');
    removeAllChildNodes(container);
    switch (page) {
        case 'about': 
            pageOneSetup();
            break;
        case 'menu':
            pageTwoSetup();
            break;
        case 'contact':
            pageThreeSetup();
            break;
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const buttons = document.querySelectorAll('button');
for (let i=0; i < 3; i++) {
    buttons[i].addEventListener('click', tabPrint)
}

pageOneSetup();