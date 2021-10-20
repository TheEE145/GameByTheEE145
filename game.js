//setup stage 1
var plases = ["forest", "underground"]; var plase = new Map(); var inventory = new Set(["axe"]);
var wood = 0; var stone = 0; var meat = 0; var money = 0; plase.set(plases[0]);

//setup stage 2
function mapChange(newPlace, map) { map.clear(); map.set(newPlace); };
function statUpgate() { document.querySelector(".statistics").innerHTML = `statistics: ${wood} wood, ${stone} stone, ${meat} meat, ${money} coins.`; };
function consoleWrite(text) { document.querySelector(".console").innerHTML = text; }

//setup stage 3
function random(min, max) { 
    const random = (min, max) => { return Math.floor(Math.random() * (max - min + 1)) + min; }; return random(min, max); };
statUpgate();

//code action
document.querySelector(".button1").addEventListener("click", function() {
    var action = document.querySelector(`[name='action-input']`).value;
    switch(action) {
        case `chop`: { if(plase.has("forest") == true && inventory.has("axe") == true) {
            wood += 2; consoleWrite(`console: you have been get 2 wood!`); statUpgate(); 
            } else { consoleWrite("console: you don`t have axe or you are not in forest!"); }; break; };
        case `mine`: { if(plase.has("underground") == true && inventory.has("pickaxe") == true) {
            stone += 2; consoleWrite(`console: you have been get 2 stone!`); statUpgate(); 
            } else { consoleWrite("console: you don`t have pickaxe or you are not in underground!"); }; break; };
        case `hunt`: { if(inventory.has("sword") == true) { var xRandom = random(0, 5); meat += xRandom;
            consoleWrite(`console: you have been get ${xRandom} meat!`); statUpgate(); 
            } else { consoleWrite("console: you don`t have sword!"); }; break; };
        default: { document.querySelector(".console").innerHTML = `console: action list -> chop, mine, hunt.`; }
    };
});

//code craft
document.querySelector(".button2").addEventListener("click", function() {
    var craft = document.querySelector(`[name='craft-input']`).value;
    switch(craft) {
        case `pickaxe`: { if(wood >= 20 && inventory.has("pickaxe") == false) {
            wood -= 20; statUpgate(); inventory.add("pickaxe"); consoleWrite("console: you crafted pickaxe!");
        } else if(wood >= 20 && inventory.has("pickaxe") == true) { consoleWrite("you already have a pickaxe!"); } else {
            consoleWrite("console: you don`t have enough wood!"); }; break; };

        case `showel`: { if(wood >= 20 && inventory.has("showel") == false) {
            wood -= 20; statUpgate(); inventory.add("showel"); consoleWrite("console: you crafted showel!");
        } else if(wood >= 20 && inventory.has("showel") == true) { consoleWrite("you already have a showel!"); } else {
            consoleWrite("console: you don`t have enough wood!"); }; break; };

        case `sword`: { if(wood >= 10 && stone >= 10 && inventory.has("sword") == false) {
            wood -= 10; stone -= 10; statUpgate(); inventory.add("sword"); consoleWrite("console: you crafted sword!");
        } else if(wood >= 10 && stone >= 10 && inventory.has("sword") == true) { consoleWrite("you already have a sword!"); } else {
            consoleWrite("console: you don`t have enough wood or stone!"); }; break; };

        default: { document.querySelector(".console").innerHTML = `console: items list -> showel, sword, pickaxe.`; }
    };
});

//code go to plases
document.querySelector(".button3").addEventListener("click", function() {
    var xPlace = document.querySelector(`[name='xPlase']`).value;
    switch(xPlace) {
        case `forest`: { if(plase.has("underground") == true && inventory.has("showel") == true) { mapChange(plases[0], plase);
        consoleWrite(`you have been moved to ${plases[0]}`); } else { consoleWrite("you don`t have showel or you are in forest!");}; break;};
        
        case `underground`: { if(plase.has("forest") == true && inventory.has("showel") == true) { mapChange(plases[1], plase);
        consoleWrite(`you have been moved to ${plases[1]}`); } else { consoleWrite("you don`t have showel or you are in underground!");}; break;};
        
        default: { document.querySelector(".console").innerHTML = `console: locations list -> forest, underground.`; };
    }
});