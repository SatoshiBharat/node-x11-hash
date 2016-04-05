const x11 = require('./../');
const assert = require('assert');

// actual header for block 000007d91d1254d60e2dd1ae580383070a4ddffa4c64c2eeb4a2f9ecc0414343 in Dash
const data = new Buffer('02000000b67a40f3cd5804437a108f105533739c37e6229bc1adcab385140b59fd0f0000a71c1aade44bf8425bec0deb611c20b16da3442818ef20489ca1e2512be43eef814cdb52f0ff0f1edbf70100', 'hex');
var hashed = x11.digest(data); //returns a 32 byte buffer

/* Debug output */

console.log("data: ", data);
console.log("hashed: ", hashed);
console.log("hashed(hex): ", hashed.toString('hex'));
// data:  <Buffer 02 00 00 00 b6 7a 40 f3 cd 58 04 43 7a 10 8f 10 55 33 73 9c 37 e6 22 9b c1 ad ca b3 85 14 0b 59 fd 0f 00 00 a7 1c 1a ad e4 4b f8 42 5b ec 0d eb 61 1c ... >
// hashed:  <Buffer 43 43 41 c0 ec f9 a2 b4 ee c2 64 4c fa df 4d 0a 07 83 03 58 ae d1 2d 0e d6 54 12 1d d9 07 00 00>
// hashed(hex):  434341c0ecf9a2b4eec2644cfadf4d0a07830358aed12d0ed654121dd9070000

/* Test result vs known one */

// 000007d91d1254d60e2dd1ae580383070a4ddffa4c64c2eeb4a2f9ecc0414343 reversed = 434341c0ecf9a2b4eec2644cfadf4d0a07830358aed12d0ed654121dd9070000
assert(
    hashed.toString('hex') === '434341c0ecf9a2b4eec2644cfadf4d0a07830358aed12d0ed654121dd9070000',
    "Hashes do not match!"
);


/* Test illegal function calls */

// You must provide exactly one argument.
assert.throws(
    function() {
        x11.digest();
    },
    /You must provide exactly one argument\./,
    "Failed to throw error on less then 1 arguments"
);
assert.throws(
    function() {
        x11.digest(data, data);
    },
    /You must provide exactly one argument\./,
    "Failed to throw error on more than 1 arguments"
);

// Argument should be a buffer object.
assert.throws(
    function() {
        x11.digest("some string");
    },
    /Argument should be a buffer object\./,
    "Failed to throw error on non-buffer argument"
);

/* Everything is fine */

console.log("\nAll tests \033[32mPASSED\033[0m!\n");
