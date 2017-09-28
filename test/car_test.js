var assert = require('assert');
var car = require ("../car.js")
describe('ferry kata', function(){
 it('should create a car', function(Done){
     var Thecar = new car ("white", 6);
     //console.log(Thecar);//
     assert.equal (Thecar.color, "white");
     assert.equal(Thecar.numberofpassengers, 6);
   Done();
 });
})