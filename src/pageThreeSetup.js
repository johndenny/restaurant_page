import contactImage from './contact-image.jpg';

const pageThreeSetup = () => {
    const div = document.querySelector('#content');

    //Create Header
    let title = document.createElement('H1');
    title.setAttribute('id', 'title');
    title.innerHTML = 'Contact';
    div.appendChild(title);

    //Create Image
    const myMainImg = new Image();
    myMainImg.src = contactImage;
    div.appendChild(myMainImg);

    //Create Description
    let para = document.createElement('P');
    para.setAttribute('id','description');
    para.innerHTML = 
        `328 Central Ave, Dover, NH 03820
        (603) 343 4332`
    div.appendChild(para);
}

export { pageThreeSetup };