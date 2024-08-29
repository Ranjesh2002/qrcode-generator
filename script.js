const qrtext = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const genbtn = document.getElementById('generatebtn');
const downbtn = document.getElementById('downloadbtn');
const color = document.getElementById('favcolor');
const qrbody = document.querySelector('.body');

let size = sizes.value;
let colors = color.value;

genbtn.addEventListener('click', (e) =>{
    e.preventDefault();
    empty();
});

sizes.addEventListener('change', (e) =>{
    size = e.target.value;
    empty();
})

downbtn.addEventListener('click', () =>{
    let img = document.querySelector('.body img');
    if(img !== null){
        let imgAttr = img.getAttribute('src');
        downbtn.setAttribute("href", imgAttr);
    }
    else{
        downbtn.setAttribute("href", `${document.querySelector('canvas'.toDataURL())}`);
    }
});

color.addEventListener('change', ()=>{
    colors = colorLight.value;
    generateQrCode();
})

function empty(){
    if(qrtext.value.length > 0){
        generateQrCode();
    }else{
        alert("enter text or url")
    }
}

function generateQrCode(){
    qrbody.innerHTML = "";
    new QRCode (qrbody, {
        text : qrtext.value,
        height : size,
        width : size,
        colorLight : "rgb(255,255,255)",
        colorDark : "rgb(0,0,0)"
    })
}

