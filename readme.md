## Websockets and Urls

Here's a reference: http://stackoverflow.com/questions/17301269/can-websocket-addresses-carry-parameters

Basically, one websocket server can distinguish clients based on which URL they used when trying to connect to the server.

So one client could connect on `ws://blah.com/giraffe` and another on `ws://blah.com/elephant`. The server can choose to treat them the same, or choose to seperate them into, say, different chat rooms (if we were making a chat app).

`server.js` is an example of a server and `client.js` connects with unique URL.
