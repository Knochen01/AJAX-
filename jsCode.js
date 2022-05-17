// XMLHTTP Requests-------------------------------------

// let XHR = new XMLHttpRequest();
// XHR.onreadystatechange = function() {
//     if ( XHR.readyState == 4 && XHR.status == 200) {
//         console.log(XHR.responseText)
//     }
//     else {
//         console.log('there was a problem!')
//     }
// }
// XHR.open("GET", 'https://api.github.com/zen');
// XHR.send();


//  Radnom Dog Picture AJAX------------------------------

let btn = document.querySelector('#clickme')
let img = document.querySelector('img');


btn.addEventListener('click', function(){

let XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function() {
        if ( XHR.readyState == 4 && XHR.status == 200) {
            let data = JSON.parse(XHR.responseText).message
            img.src = data
    }
}
    XHR.open("GET",'https://dog.ceo/api/breeds/image/random' )
    XHR.send();
})

