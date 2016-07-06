const Assert = require('assert')

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    var str;
    while( num > 9 ) {
        str = num + "";
        num = 0;
        for( var i = 0, j = str.length; i < j; i++ ) {
            num += str[i];
        }
    }
    return num;
};

Assert.equal(addDigits(38), 2)