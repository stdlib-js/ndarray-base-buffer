"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=i(function(p,n){
var a=require('@stdlib/ndarray-base-dtype-resolve-str/dist'),f=require('@stdlib/ndarray-base-buffer-ctors/dist'),o=require('@stdlib/buffer-alloc-unsafe/dist'),v=require('@stdlib/array-base-zeros/dist'),c=require('@stdlib/array-base-fill/dist');function l(e){return c(o(e),0,0,e)}function s(e,r){var u=f(e);return u?new u(r):null}function q(e,r){var u=a(e);return u==="generic"?v(r):u==="binary"?l(r):s(e,r)}n.exports=q
});var b=t();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
