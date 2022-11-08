 function test(){
 const bread = document.querySelector('.ec-breadcrumbs')

 const div = document.createElement('div')
 div.innerHTML = `<p class='roma-timer'>Timer 00 : 00 : 00</p>`
 div.className = 'azi'
 
 bread.after(div)

console.log('Button is clicked')}
 window.onload = test;
