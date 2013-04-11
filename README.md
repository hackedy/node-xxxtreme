NODE-XXXTREME
=============

When you `require('xxxtreme')`, you can use as many `[Xx]`s in your source code
as you want. For example:

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
