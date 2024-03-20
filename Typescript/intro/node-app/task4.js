"use strict";
function delayedCall(fn) {
    setTimeout(fn, 1000);
}
delayedCall(function () {
    console.log('hello');
});
