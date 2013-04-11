NODE-XXXTREME
=============

When you `require('xxxtreme')`, you can use as many Xs in your source code
as you want. Please note that this is case-sensitive: the sequence of Xs in
`module.eXxXxXxXports` will not be collapsed. For example:

index.js:

    require('xxxtreme');
    var shouting = require('./shouting');
    shouting.xtreme_shout();

shouting.js:

    exxxxxxxxports.xxxtreme_shout = function() {
        console.log("XXXXXXXXXXXXXXTREME!");
    };

run it:

    $ node index.js
    XTREME!
