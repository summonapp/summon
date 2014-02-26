var allEvents = require('../events.json');
var myEvents = require('../myEvents.json');
var people = require('../people.json');
var usernames = require('../usernames.json');

exports.eventInfo = function(req, res) {
	var eventIndex = findEvent(req.params.url);
	if(hasEvent(req.params.url) && eventIndex >= 0) {
    var people = choose();
    if(people==="" && (allEvents[findEvent(req.params.url)].attending.length >= 2)) {
      allEvents[findEvent(req.params.url)].attending.pop();
    }
    else if(people!=="" && (allEvents[findEvent(req.params.url)].attending.length <= 15)) {
      allEvents[findEvent(req.params.url)].attending.push(people);
    }
      
		if(req.body.respond) {
			allEvents[findEvent(req.params.url)].respond = req.body.respond;
			if(req.body.respond == 2)
				allEvents[findEvent(req.params.url)].attending = ["You"].concat(allEvents[findEvent(req.params.url)].attending);
			else if(req.body.respond == 3)
				allEvents[findEvent(req.params.url)].attending = allEvents[findEvent(req.params.url)].attending.splice(1);
		}
		res.render('event', allEvents[eventIndex]);
	}
	else
		res.render('event', {'respond':0});
};

exports.showCode = function(req, res) {
	var newURL = generateURL();
	var newEvent = {
		'respond':2,
		'url':newURL,
		'title':req.body.eventTitle,
		'what':req.body.what,
		'when':req.body.when,
		'where':req.body.where,
		'anythingElse':req.body.anythingElse,
		'attending':["you"]
	};
	allEvents.push(newEvent);
	myEvents.push(newURL);
	res.render('showCode', newEvent);
};

exports.createEvent = function(req, res) {
	var type = "placeholder";
	if(req.body.eventTitle)
		type = "value";
	res.render('createEvent', {
		'type':type,
		'eventTitle':req.body.eventTitle||"Title",
		'what':req.body.what||"What",
		'when':req.body.when||"When",
		'where':req.body.where||"Where",
		'anythingElse':req.body.anythingElse||"Anything Else?"
	});
};

exports.addCode = function(req, res) {
	res.render('addCode');
};

exports.signup = function(req, res) {
    console.log(usernames);
	res.render('signup', usernames);
};

exports.addEvent = function(req, res) {
	if(findEvent(req.body.eventCode) >= 0) {
		myEvents.push(req.body.eventCode);
		res.render('event',allEvents[findEvent(req.body.eventCode)]);
	}
	else {
		res.render('event', {'respond':0});
	}
};

exports.confirm = function(req, res) {
	res.render('confirm', {
		'eventTitle':req.body.eventTitle,
		'what':req.body.what,
		'when':req.body.when,
		'where':req.body.where,
		'anythingElse':req.body.anythingElse
	});
};

function hasEvent(url) {
	for(var i = 0; i < myEvents.length; i++)
		if(myEvents[i]==url) return true;
	return false;
}

function findEvent(url) {
	for(var i = 0; i < allEvents.length; i++)
		if(allEvents[i].url == url)
			return i;
			
	return -1;
}

function generateURL() {
	var url = "";
	var choices = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for(var i=0; i<7; i++)
		url += choices.charAt(Math.floor(Math.random() * choices.length));
		
	return url;
}

function choose() {
  var pull = Math.floor(Math.random() * 3);
  if(pull === 0) return "";
  return people[Math.floor(Math.random() * people.length)];
}

function checkNameExists () {
    alert("Entered function!");
    var name = document.getElementById("username").value;
    console.log(name);
    for (var i = 0; i < usernames.length; i++) {
        if (name == usernames[i]) {
            alert("This username is already taken! Please select another one.");
            document.getElementById("username").value = "";
        }
    }
}