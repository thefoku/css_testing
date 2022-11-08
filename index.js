// document.body.onload = addElement;

function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

// const h1 = document.querySelector('h1');

// // create a new paragraph element
// const btn = document.createElement('button');
// btn.innerText = 'Test button created after';

// // insert the paragraph after the heading
//  h1.after(btn);


 function test(){
 const price = document.querySelector('.product-details__product-price')

 const p = document.createElement('p')
 p.textContent = 'Timer 00 : 00 : 00'

 price.after(p)}


const h1 = document.querySelector('h1');

// create a new paragraph element
let btn = document.createElement('div');

btn.innerHTML = `<p id='testP'>Test text</>`
btn.className = 'azibumbum'
btn.setAttribute("id", "Div1");
// btn.innerText = 'Test button created after';

// insert the paragraph after the heading
 h1.after(btn);

 console.log(btn)

