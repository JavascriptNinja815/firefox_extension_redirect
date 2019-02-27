
browser.webRequest.onHeadersReceived.addListener(
    function(info) {
        var headers = info.responseHeaders;
        for (var i=headers.length-1; i>=0; --i) {
            var header = headers[i].name.toLowerCase();
            if (header == 'x-frame-options' || header == 'frame-options') {
                headers.splice(i, 1); // Remove header
            }
        }
        return {responseHeaders: headers};
    },
    {
        urls: [ '*://*/*' ], // Pattern to match all http(s) pages
        types: [ 'sub_frame' ]
    },
    ['blocking', 'responseHeaders']
);




// window.fbAsyncInit = function() {
//                 // init the FB JS SDK
//                 FB.init({
//                     appId : '520072791816016', // App ID from the app dashboard
//                     status : true, // Check Facebook Login status
//                     xfbml : false // Look for social plugins on the page
//                 });

//             };

//             // Load the SDK asynchronously
//             (function(d, s, id) {
//                     var js, fjs = d.getElementsByTagName(s)[0];
//                     if (d.getElementById(id)) {
//                         return;
//                     }
//                     js = d.createElement(s);
//                     js.id = id;
//                     js.src = "https://connect.facebook.net/en_US/all.js";
//                     fjs.parentNode.insertBefore(js, fjs);
//                 }
//                 (document, 'script', 'facebook-jssdk'));







$(document).ready(function(){
$('#share_button').click(function(e){
e.preventDefault();

 function init() {
        FB.ui(
{
method: 'feed',
name: 'This is the content of the "name" field.',
link: 'http://jangooz.com/',
picture: 'http://www.groupstudy.in/img/logo3.jpeg',
caption: 'Top 3 reasons why you should care about your finance',
description: "What happens when you don't take care of your finances? Just look at our country -- you spend irresponsibly, get in debt up to your eyeballs, and stress about how you're going to make ends meet. The difference is that you don't have a glut of taxpayers…",
message: ""
});
    }

    window.fbAsyncInit = function() {
      FB.init({
        appId      : '2261591180784888',
        xfbml      : true,
        version    : 'v2.5'
      });

      init();
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


});
});





