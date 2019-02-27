var check = false;
var score;
var certificate;
var result;
var id;
var e = document.getElementsByTagName('span')[21];
browser.storage.local.get(['id'], function (items) {
  id = items['id'];
});
// console.log(id);

//--- Dung ---//
window.postMessage({
  direction: "from-content-script",
  message: "Firefox extension installed"
}, "*");
//---------//

$(document).ready(function () {

  if (document.getElementById('facebook-share') != null) {
    document.getElementById('facebook-share').addEventListener('click', function (e) {

      var current_ex_id = browser.runtime.id;
      document.getElementById('back-btn').setAttribute("href", "/" + current_ex_id + "/popup.html");
      document.getElementById('logo-wrap-id').style.paddingRight = '10px';
      document.getElementById('back-btn').style.display = 'block';
      document.getElementById('post-test').style.display = "none";
      e.preventDefault();
      var iqScoreDetails = JSON.parse(localStorage.getItem("iqScoreDetails"));
      if (iqScoreDetails != null) {
        score = iqScoreDetails[0];
        certificate = iqScoreDetails[1];
        result = iqScoreDetails[2];
        id = iqScoreDetails[3];
      }


      var ifrm = document.createElement("iframe");
      ifrm.id = id;
      ifrm.setAttribute("src", 'https://www.facebook.com/dialog/feed?' +
        'app_id=520072791816016&' +
        'link=http://intelligenceinstitute.org/&' +
        'picture=http://fbrell.com/f8.jpg&' +
        'name=Facebook%20Dialogs&' +
        'caption=Reference%20Documentation&' +
        'description=Using%20Dialogs%20to%20interact%20with%20users.');
      // document.body.style.display = "block";
      ifrm.style.width = "430px";
      ifrm.style.height = "438px";
      var ahmad = '<div id="khalid">ahmad khalid</div>'
      document.body.appendChild(ifrm);
      localStorage.getItem("idOfIqss", id);

      ////////
      //   var elemDiv = document.createElement('div');
      // elemDiv.setAttribute("id", "Div1");

      /////////
      //       var elemDiv = document.createElement('div');
      //       elemDiv.setAttribute("id", "Div1");
      // elemDiv.innerHTML = id;
      // document.body.appendChild(elemDiv);
      // console.log(document.getElementsByTagName("IFRAME")[0].contentDocument.title);
      check = true;
      localStorage.setItem('check', true);
      // e = null;
    });

  }

});


$('iframe').ready(function () {

  // console.log(document.getElementById('facebook')+id);
  // console.log(document.getElementsByTagName("IFRAME")[0].getAttribute("id"));
  // var iqScoreDetails = JSON.parse(localStorage.getItem("iqScoreDetails"));
  //   localStorage.setItem( "id", "redd");
  // id = localStorage.getItem( "id");
  // console.log(id);

  var url = 'http://intelligenceinstitute.org/result/' + id;
  // document.getElementsByTagName("STYLE")[1].innerHTML = '';
  if (document.querySelectorAll("#facebook body style")[0] != null) {
    if (true) {
      var iframes = document.querySelectorAll('iframe');
      for (var i = 0; i < iframes.length; i++) {
        iframes[i].parentNode.removeChild(iframes[i]);
      }
      document.querySelectorAll("#facebook body style")[0].innerHTML = 'body* {display : block;}';
      // document.querySelectorAll('._5e9y')[0].style.margin = 'unset';
      document.querySelectorAll('._5e9y')[0].style.width = 'unset';
      document.querySelectorAll('._5e9y')[0].style.marginTop = '-25px';
      // document.querySelectorAll('._3eqw')[0].style.marginLeft = '-46px';
      document.querySelectorAll('._2pif')[0].style.paddingTop = 'unset';
      document.querySelectorAll('._2pif')[0].style.paddingLeft = '0px';
      document.querySelectorAll(".scaledImageFitWidth")[0].style.width = '390px';
      document.querySelectorAll(".scaledImageFitWidth")[0].style.height = '250px';
      document.querySelectorAll(".uiScaledImageContainer")[0].style.height = '214.644444px';

      // document.getElementById('u_0_1k').style.display = 'none';
      // alert(window.frameElement.id);
      var myEl = document.getElementById('u_0_1v');

      // change button to link
      var e = document.getElementsByTagName('span')[21];
      var e = document.getElementsByTagName('span')[21];

      // create link
      var aTag = document.createElement('a');
      aTag.setAttribute('href', 'https://www.facebook.com/dialog/feed?' +
        'app_id=520072791816016&' +
        'link=http://intelligenceinstitute.org/&' +
        'picture=http://fbrell.com/f8.jpg&' +
        'name=Facebook%20Dialogs&' +
        'caption=Reference%20Documentation&' +
        'description=Using%20Dialogs%20to%20interact%20with%20users.');
      aTag.setAttribute('target', "_blank");
      // aTag.innerHTML = "link text";

      // var d = document.createElement('div');
      aTag.innerHTML = e.innerHTML;
      aTag.style = 'text-decoration: none;background-color: #4267b2; border-color: #4267b2;color:white;';

      e.parentNode.insertBefore(aTag, e);
      e.parentNode.removeChild(e);
      document.getElementById("u_0_1u").disabled = true;

      var s = document.createElement('script');
      s.setAttribute('type', 'text/javascript');
      s.innerHTML = "window.onbeforeunload = function() {}";
      document.body.appendChild(s);


      // change button to link


      // console.log();
      // browser.runtime.sendMessage({callCopyFunc: "callstart"}, function(response) {
      //          console.log(response.callCopyFunc);
      //        });

      myEl.addEventListener('click', function (evt) {
        evt.preventDefault();

        if (document.getElementById('Div1') != null) {
          // id = document.getElementsByTagName("IFRAME")[0].getAttribute("id");
          alert(document.getElementById('Div1').innerHTML);
        }
        openNewWind();

      }, true);


    }
  }


});

function openNewWind() {
  // alert('ahmad');

  browser.runtime.sendMessage({
    greeting: "hello"
  }, function (response) {
    // console.log(response.farewell);
    // alert(response.farewell);
  });
  browser.storage.local.get(['foo', 'bar'], function (items) {
    id = items['id']
  });
  // id = localStorage.getItem("idOfIq");
  // alert(localStorage.idOfIq);
  window.open('https://www.facebook.com/dialog/feed?' +
    'app_id=520072791816016&' +
    'link=http://intelligenceinstitute.org/&' +
    'picture=http://fbrell.com/f8.jpg&' +
    'name=Facebook%20Dialogs&' +
    'caption=Reference%20Documentation&' +
    'description=Using%20Dialogs%20to%20interact%20with%20users.');
}

if (document.getElementById('u_0_1t') != null) {
  document.getElementById('u_0_1t').addEventListener('click', function (e) {
    e.preventDefault();
    // browser.runtime.reload();
    window.onbeforeunload = null;
    // window.location.reload();
    window.close();
  }, false);
}
// browser.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     console.log(sender.tab ?
//                 "from a content script:" + sender.tab.url :
//                 "from the extension");
//     if(localStorage.check)
//     {
//       if (request.greeting == "hello")
//     {
//       sendResponse({farewell: localStorage.check});
//       // return;

//     }else{
//       sendResponse({farewell: "false"});
//     }

//     }

//   });
browser.storage.local.get(['scoreData'], function (items) {
  if(!items['scoreData'])
    return;
  var scoreDisplay = document.createElement('div');
  scoreDisplay.innerHTML = atob(items['scoreData']);
  document.body.appendChild(scoreDisplay);
});


var ifrm = document.createElement("iframe");
// ifrm.id = id;
ifrm.setAttribute("src", 'https://www.facebook.com/dialog/feed?' +
  'app_id=520072791816016&' +
  'link=https://developers.facebook.com/docs/reference/dialogs/&' +
  'picture=http://fbrell.com/f8.jpg&' +
  'name=Facebook%20Dialogs&' +
  'caption=Reference%20Documentation&' +
  'description=Using%20Dialogs%20to%20interact%20with%20users.');
// document.body.style.display = "block";
ifrm.style.display = "none";
// ifrm.style.height = "505px";
var ahmad = '<div id="khalid">ahmad khalid</div>'
// document.body.appendChild(ifrm);

$('iframe').ready(function () {
  localStorage.setItem("id", "red");
});