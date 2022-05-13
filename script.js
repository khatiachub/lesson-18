let arrowLeft = document.getElementById('arrow-left');
let arrowRight = document.getElementById('arrow-right');
let sliderContent = document.getElementById('slider-content');
let linesList = document.getElementsByClassName('line');

let data=[
    {
        id:1,
        img: 'https://media.architecturaldigest.com/photos/571e97c5741fcddb16b559c9/2:1/w_5127,h_2563,c_limit/modernist-decor-inspiration-01.jpg'
    },
    {
        id:2,
        img:'https://images.unsplash.com/photo-1618219740975-d40978bb7378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80'
    },
    {
        id:3,
        img:'https://images.unsplash.com/photo-1633505899118-4ca6bd143043?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
    },
    {
        id:4,
        img:'https://thumbs.dreamstime.com/b/modern-house-interior-living-room-kitchen-light-colors-made-scandinavian-style-modern-house-interior-scandinavian-138813796.jpg'
    },
    {
        id:5,
        img:'https://thumbs.dreamstime.com/b/modern-house-interior-scandinavian-style-d-rendering-living-room-kitchen-light-colors-made-138818617.jpg'
    },
    {
        id:6,
        img:'https://thumbs.dreamstime.com/b/modern-house-interior-living-room-kitchen-beige-green-colors-scandinavian-style-141549160.jpg'
    },
];
let indexElement=0;
function createDiv(item){
    // sliderContent.style.backgroundImage = `url('../img/${item.img}')`;
    sliderContent.style.backgroundImage = 'url('+ item.img +')';
    sliderContent.classList.add('imgdiv');
}
function createH2(item){
    let h2Tag=document.createElement('h2');
    h2Tag.innerText=item.id;
    // h2Tag.classList.add('none');
    sliderContent.appendChild(h2Tag);
    return h2Tag
}
function createLine(){
    let lines=document.createElement('div');
    lines.classList.add('lines');
    data.forEach( (element) => {
        let line = document.createElement('div');
        line.classList.add('line');
        line.setAttribute('data-id', element.id-1);

        line.onclick = function(event) {
            let id = event.target.getAttribute('data-id');
            indexElement = id;
            slider();
        }
        lines.appendChild(line);
    })

    return lines;
}
function slider(){
    sliderContent.innerHTML='';
    createDiv(data[indexElement]);
    createH2(data[indexElement]);
    let liness=createLine();
    sliderContent.appendChild(liness);
    currentLine();

}
function currentLine(){
    linesList[indexElement].classList.add('active');
}

arrowLeft.addEventListener('click',clickLeftArrow);
arrowRight.addEventListener('click',clickRightArrow);

function clickLeftArrow(){
    if(indexElement<=0){
        indexElement=data.length-1;
        slider();
        return
    }
    indexElement--;
    slider();
}
function clickRightArrow(){
    if(indexElement>=data.length-1){
        indexElement=0;
        slider();
        return
    }
    indexElement++;
    slider();
}
setInterval(()=>{
    clickRightArrow();
},4000);

slider();