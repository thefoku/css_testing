var Ecwid;

//  function test(){
//  const bread = document.querySelector('.ec-breadcrumbs')

//  const div = document.createElement('div')
//  div.innerHTML = `<p class='roma-timer'>Timer 00 : 00 : 00</p>`
//  div.className = 'azi'
 
//  bread.after(div)

// console.log('Button is clicked')}
//  window.onload = test;

function add(){
 const bread = document.querySelector('.ec-likely')
 const div = document.createElement('div')
 div.innerHTML =  `<div class="additional-text" style="margin-top:20px;">
 <p data-mce-fragment="1">
 <i data-mce-fragment="1"></i>
 <i data-mce-fragment="1">Prata kiteutrustning med ett proffs</i>
 <br data-mce-fragment="1">
 <strong>BESÖK VÅR BUTIK. MITT I CITY</strong>
 <br data-mce-fragment="1">Vanadisvägen 21, Vasastan<br data-mce-fragment="1">
 <strong>Måndag-Fredag:</strong>
 <span data-mce-fragment="1"> </span>11.00 - 15.30. Kvällstid efter ö.k<br data-mce-fragment="1">
 <strong>Lördag - Söndag:</strong><span data-mce-fragment="1">
  </span>Boka besök<br data-mce-fragment="1">070 046 40 42 | 072 183 02 75<br data-mce-fragment="1"><a rel="nofollow" href="mailto:info@kiteboardcenter.se" data-mce-fragment="1" data-mce-href="mailto:info@kiteboardcenter.se" target="_blank">info@kiteboardcenter.se</a>
</p>
</div>`
 div.className = 'added-text'
 bread.after(div)
console.log('Add function has loaded')
};


//Ecwid.OnPageLoaded.add(function() {
//    console.log('test onload')
//});

document.addEventListener('DOMContentLoaded', function() {
     console.log('test onload with DOM')
}, false);


Ecwid.OnAPILoaded.add(() => {
    Ecwid.OnPageLoaded.add(page => {
        console.log(page);
        if (page.type === `PRODUCT`) {
            add();
        }
    });
});


var this_url = encodeURIComponent(window.location.host);
var ecomecwid = document.querySelector('#my-store-44275760')
if (this_url == 'https://ecwid-test-navigation-menu.netlify.app/')
{
    ecomecwid.style = "display:none;"
}
