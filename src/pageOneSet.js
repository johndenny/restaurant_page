import mainImage from './the-dover-brick-house.jpg';

const pageOneSetup = () => {
    const div = document.querySelector('#content');

    //Create Header
    let title = document.createElement('H1');
    title.setAttribute('id', 'title');
    title.innerHTML = 'Restaurant';
    div.appendChild(title);

    //Create Image
    const myMainImg = new Image();
    myMainImg.src = mainImage;
    div.appendChild(myMainImg);

    //Create Description
    let para = document.createElement('P');
    para.setAttribute('id','description');
    para.innerHTML = 'Comfy eatery/bar with refined comfort food & cocktails in a warm ambiance with exposed-brick walls.'
    div.appendChild(para);
}

export { pageOneSetup };