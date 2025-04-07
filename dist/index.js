"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=u(function(h,t){
function o(e){var r;for(r=0;r<e.length;r++)e[r]=0;return e}t.exports=o
});var a=u(function(y,f){
var c=require('@stdlib/ndarray-base-buffer-ctors/dist'),s=require('@stdlib/buffer-alloc-unsafe/dist'),v=i();function b(e){var r,n;for(r=[],n=0;n<e;n++)r.push(0);return r}function l(e){return v(s(e))}function q(e,r){var n=c(e);return n?new n(r):null}function g(e,r){return e==="generic"?b(r):e==="binary"?l(r):q(e,r)}f.exports=g
});var p=a();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
