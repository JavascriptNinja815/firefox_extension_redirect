// send the page title as a  message

var current_url = window.location.href;
var check_url = 'http://intelligenceinstitute.org/result';

//Loading the variable
var mystr = current_url;

//Splitting it with : as the separator
var myarr = mystr.split("/");
var report = {};
//Then read the values from the array where 0 is the first
//Since we skipped the first element in the array, we start at 1
var myvar = myarr[0] + "//" + myarr[2] + "/" + myarr[3];

// Show the resulting value
// 'TEMP:data'

//if (check_url == myvar) 
{

	var scoreInfo = document.getElementById('scoreReport');

	if(scoreInfo && scoreInfo.tagName.toLowerCase() == "img")
	{
  	report = scoreInfo.src.replace("data:image/png;base64,",'');
  	}

	var get_id = current_url.split('/');
	var score = document.getElementById('score').innerHTML;
	var get_links = document.querySelectorAll('.entry-content a');
	var certificate = get_links[0].href;
	var result = get_links[1].href;
	var id = get_id[4];
	var list = [];
	list.push(score); /*index 0 = score*/
	list.push(certificate); /*index 1 = certificate*/
	list.push(result); /*index 2 = result*/
	list.push(id); /*index 3 = id*/
	var value = [score, certificate, result, id];
	localStorage.setItem("iqScoreDetails", JSON.stringify(value));
	localStorage.setItem("idOfIq", id);
	 browser.storage.local.set({'id': id ,'scoreData':report}, function() {
      // console.log('Settings saved');
    });
	browser.runtime.sendMessage(list);
}

