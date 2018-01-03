# Example application

This example implements an application that exposes RPC method that returns random integer. The example also implements an active tile. The mechanism in the tile calls the RPC method every five seconds and outputs the result to the tile. As a bonus feature this example also implements application web page. Clicking the tile opens the web page into a window of its own (see window.open).

**Installing the application**

spm install https://github.com/jovepsala/randomz
