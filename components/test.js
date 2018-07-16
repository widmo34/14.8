var GIPHY_PUB_KEY = 'qQteLldC6e5Gu8eePBMBx8cQEyvMK32B';
var GIPHY_API_URL  = 'http://api.giphy.com';

var searchingText = 'cat';



 var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;  // 2.
 var xhr = new XMLHttpRequest();  // 3.
 xhr.open('GET', url);
 xhr.onload = function() {
     if (xhr.status === 200) {
         console.log(xhr.response);
     }else{
         alert('error');
     }
    }
    xhr.send();    