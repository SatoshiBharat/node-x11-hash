node-x11-hash
===============

X11 hashing function for node.js.

Usage
-----

Install

    # install node, check updated script at https://github.com/nodesource/distributions
    curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
    sudo apt-get install -y nodejs

    # if you previously installed node-gyp via apt-get - remove it
    # sudo apt-get remove node-gyp

    # install proper version of node-gyp via npm
    sudo npm i -g node-gyp

    # install git and build tools
    sudo apt-get install git python make g++

    # clone this repo and go to that folder
    # ...

    # install dependencies
    sudo npm i

    # configure and build
    sudo node-gyp configure
    sudo node-gyp build

Test

    npm test

See test/test.js for usage example.

Credits
-------

* Uses scrypt.c written by Colin Percival
* [Neisklar](https://github.com/Neisklar/quarkcoin-hash-python) for the python module this is based off of
