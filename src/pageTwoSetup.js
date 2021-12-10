import menuImage from './menu-image.jpg';

const pageTwoSetup = () => {
    const div = document.querySelector('#content');

    //Create Header
    let title = document.createElement('H1');
    title.setAttribute('id', 'title');
    title.innerHTML = 'Menu';
    div.appendChild(title);

    //Create Image
    const myMainImg = new Image();
    myMainImg.src = menuImage;
    div.appendChild(myMainImg);

    //Create Description
    let para = document.createElement('P');
    para.setAttribute('id','description');
    para.innerHTML = 
        `Braised Short Rib braised boneless short rib / roasted king oyster mushroom / grilled broccolini / butternut squash & coconut puree / chili crisp 20 
        Blackened Salmon grilled chilean salmon / truffled grit cake / broccoli rabe / watercress 20
        BBQ Brisket mac n cheese / pickled pineapple, red onion, & jalapeño cornbread w/ whipped maple butter / dr. pepper bbq sauce 18`
    div.appendChild(para);
}

export { pageTwoSetup };