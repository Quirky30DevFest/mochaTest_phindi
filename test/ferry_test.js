var assert = require('assert');
var ferry = require ("../ferry.js")
describe('ferry kata', function(){
 it('should create a ferry', function(Done){
     var Theferry = new ferry (6, 6);
     //console.log(Theferry);//
     assert.equal (Theferry.numberOfcars, 6);
     assert.equal(Theferry.numberOfpeople, 6);
   Done();
 });
})