
const me = require('./informations.js');

var cowsay = require("cowsay");

console.log(cowsay.say({
    text :`Hi ! im ${me.name} from the ${me.campus} campus`,
    e : "oO",
    T : "U "
}));