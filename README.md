# The Sandbox Sandbox

This repository is a "sandbox" for sandboxed iframes to help one gain an understanding of the various permissions and security concerns associated with using iframes.

## How it Works

To simulate executing code from a different origin, two different node servers are used - one which is calledl the host and second which we will call the client. We can do this using node's http library to listen to and serve from two different ports. These servers are configured to serve HTML and JS files and will 404 on anything else.

The various scenarios of using iframes are demostrated by embedding the client index.html in the host's. This will be done multiple times, each with a different sandbox configuration.

## Requirements

This demo was written on node v8.6.0. There are no other requirements for running this demo.

## Getting Started

To get the demo running, clone this repo and then install the dependencies:

```
npm install
```

Then, start the server with:

```
node server.js
```
