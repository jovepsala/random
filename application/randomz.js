var spaceify = require("/var/lib/spaceify/code/spaceifyapplication.js");

function RandomZ()
	{
	var self = this;

	// The provided service
	var service = null;
	var serviceName = "spaceify.org/services/randomz";

	// This method is called if app is started succesfully
	self.start = function()
		{
		// Get the provided service and expose the RPC method
		service = spaceify.getProvidedService(serviceName);
		service.exposeRpcMethod("get", self, get);
		}

	// This method is called if starting the app fails
	self.fail = function()
		{
		}

	// Send random integer to the caller of this RPC method
	var get = function(name, callObj, callback)
		{
		var sign = (Math.random() >= 0.5 ? 1 : -1);
		var number = Math.floor(Math.random() * 1024) * sign;

		callback(null, number);
		}
	}

// Start the app
var randomZ = new RandomZ();
spaceify.start(randomZ, {webservers: {http: true, https: true}});
