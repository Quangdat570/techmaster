// let arr = ['to right', 'to left', ' to bottom', 'to top', 'to top right','to top left', 'to bottom right', 'to bottom left'];

// function ramdomDirection() {
    
//     return arr[Math.floor(Math.random()*arr.length)];
    
// }


// function ramdomHex() {
//     const color = '0123456789abcdef';

//     const result = [];

//     for (let i = 0; i < 6; i++) {
//         result.push(color[Math.floor(Math.random() * color.length)]);
        
//     }
//     return '#'.concat(result.join(""));
// }

// const btn = document.querySelector('.btn-change');
// const dir = ramdomDirection();
// const HEX = ramdomHex();
// const HEX2 = ramdomHex();
// const value = `linear-gradient(${dir},${HEX},${HEX2})`;
// btn.addEventListener('click', function(){
//     document.body.style.backgroundImage = value;
// });

// // let property = document.querySelector('.property');
// // property.textContent = `backgroundImage: ${value}`;



// function createFeedBack() {
//     const container = document.createElement('form');
//     container.classList.add('main');
//     const feedBack = document.createElement('div');
//     feedBack.classList.add('List-feedback');
//     const list = document.createElement('ul');
//     list.classList.add('list');
// }

// const app = document.getElementById('app');
// app.appendChild(createFeedBack());


document.forms.tip.addEventListener("submit", function(e) {
    e.preventDefault();

    const amount = this.elements.guest.value;
    const number = this.elements.number-guest.value;
    const sevice = this.elements.sevice.value;

    const tipPerEachGuest = ( amount * sevice) / number

    this.elements.result.innerHTML = `Tip <b>$${tipPerEachGuest}<b> each person`;
});




