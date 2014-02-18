var allEvents = require('../events.json');
var myEvents = require('../myEvents.json');

exports.show = function(req, res) {
	var events = [];
	for(var i=0; i < myEvents.length; i++) {
		var eventIndex = findEvent(myEvents[i]);
		if(allEvents[eventIndex])
			events.push(allEvents[eventIndex]);
	}
	res.render('main', {'events':events});
};

function findEvent(url) {
	for(var i = 0; i < allEvents.length; i++)
		if(allEvents[i].url == url)
			return i;

	return -1;
}