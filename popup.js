
var iqScoreDetails = JSON.parse(localStorage.getItem("iqScoreDetails"));
if (iqScoreDetails != null) {
	if (document.getElementById('pre-test') != null) {
		document.getElementById('pre-test').style.display = "none";
	}
	if (document.getElementById('post-test') != null) {
		document.getElementById('post-test').style.display = "block";
	}
} else {
	if (document.getElementById('pre-test') != null) {
		document.getElementById('pre-test').style.display = "block";
	}
	if (document.getElementById('post-test') != null) {
		document.getElementById('post-test').style.display = "none";
	}
}
if (iqScoreDetails != null) {
	// console.log('for testing');
	if (document.getElementById('score')) {
		document.getElementById('score').innerHTML = iqScoreDetails[0];

	}
	if (document.getElementById('certificate')) {
		document.getElementById('certificate').href = iqScoreDetails[1];

	}
	if (document.getElementById('results')) {
		document.getElementById('results').href = iqScoreDetails[2];
	}

}
// if(document.getElementById('pre-test') != null)
// { document.getElementById('pre-test').style.display = "none"; }
// if(document.getElementById('post-test') != null)
// { document.getElementById('post-test').style.display = "block"; }


// Inject the payload.js script into the current tab after the popout has loaded

//window.addEventListener('load', function (evt) {
	browser.tabs.query({}, function (tabs) {
		for(idx in tabs){
			var tab = tabs[idx];
			var current_url = tab.url;
			if(!current_url)
				return;
		// var current_url = window.location.href;
			var check_url = 'intelligenceinstitute.org';

		//Loading the variable
		var mystr = current_url;

		//Splitting it with : as the separator
		var myarr = mystr.split("/");

		//Then read the values from the array where 0 is the first
		//Since we skipped the first element in the array, we start at 1
		var myvar = myarr[0] + "//" + myarr[2] ;//+ "/" + myarr[3];
		// console.log('current_url');
		// console.log();
		
		if (current_url.indexOf(check_url) != -1)
		{
			browser.extension.getBackgroundPage().browser.tabs.executeScript(tab.id, {
				file: 'payload.js'
			},function(){if(browser.runtime.lastError);});;
		}
	}

	});


//});
// }


// Listen to messages from the payload.js script and write to popout.html
browser.runtime.onMessage.addListener(function (message) {
	// console.log('ahmadkhalidmughal');
	if (document.getElementById('score') != null) {
		// if(document.getElementById('score').innerHTML == ''){

		var score = message[0]; /*getting score*/
		var certificate = message[1] /*getting certificate*/
		var result = message[2]; /*getting result*/
		var id = message[3]; /*getting id*/ 
		document.getElementById('score').innerHTML = score;
		document.getElementById('certificate').href = certificate;
		document.getElementById('results').href = result;
		// var iqScoreDetails = JSON.parse(localStorage.getItem("iqScoreDetails"));
		if (document.getElementById('pre-test') != null) {
			document.getElementById('pre-test').style.display = "none";
		}
		if (document.getElementById('post-test') != null) {
			document.getElementById('post-test').style.display = "block";
		}

		var value = [score, certificate, result, id]
		localStorage.setItem("iqScoreDetails", JSON.stringify(value));
		localStorage.setItem("idOfIq", id);
		browser.storage.local.set({'idOfIq':id});
		browser.storage.local.set({'id': id}, function() {
      // console.log('Settings saved');
    });


		if (document.getElementById('u_0_1v') != null) {
			var myEl = document.getElementById('u_0_1v');

			// browser.runtime.sendMessage({callCopyFunc: "callstart"}, function(response) {
			//          console.log(response.callCopyFunc);
			//        });


			myEl.addEventListener('click', function (evt) {
				evt.preventDefault();
				window.open('https://www.facebook.com/dialog/feed?' +
					'app_id=520072791816016&' +
					'link=http://intelligenceinstitute.org/result/' + id + '/&' +
					'picture=http://fbrell.com/f8.jpg&' +
					'name=Facebook%20Dialogs&' +
					'caption=Reference%20Documentation&' +
					'description=Using%20Dialogs%20to%20interact%20with%20users.');
			}, true);
		}


		// }
		// console.log(message);		
	}


});

browser.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
    	window.close();
      sendResponse({farewell: 'document.title'});
  });




/////////



 // browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
 //    browser.tabs.executeScript(tabs[0].id, {file: "src/content_script.js"});
 //  });

  //    if(document.getElementById('back-btn-id') != null)
  //    {
  // browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //   browser.tabs.executeScript(tabs[0].id, {file: "popoup.html"});
  // });
  //  }