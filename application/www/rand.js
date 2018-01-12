function Rand(app, id)
	{
	var self = this;

	var rdiv = document.getElementById(id);

	// The required service
	var service = null;
	var serviceName = "spaceify.org/services/random";

	// This method is called if connection to the app was succesfull
	self.start = function()
		{
		// Get the service and call "get" RPC method of the app
		service = app.getRequiredService(serviceName);
		service.callRpc("get", [], self, got);

		// Call "get" every five seconds
		setInterval(function()
			{
			if(service)
				service.callRpc("get", [], self, got);
			}, 5000);
		}

	// This method is called if connecting to the app failed
	self.fail = function()
		{
		var node = document.createTextNode("Failed to connect to the app.");
		rdiv.appendChild(node);
		}

	// Print the response from the get RPC call
	var got = function(err, response)
		{
		rdiv.removeChild(rdiv.lastChild);

		var node = document.createTextNode(err ? err.message : response);
		rdiv.appendChild(node);
		}
	}