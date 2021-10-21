//setup stage 1
var plases = ["forest", "underground"]; 
var plase = new Map(); 
var inventory = new Set(["axe"]);
var wood = 0; var stone = 0; var meat = 0; var money = 0; 
plase.set(plases[0]);

//setup stage 2
function mapChange(newPlace, map) { map.clear(); map.set(newPlace); };
function statUpgate() { document.querySelector(".statistics").innerHTML = `statistics: ${wood} wood, ${stone} stone, ${meat} meat, ${money} coins.`; };
function consoleWrite(text) { document.querySelector(".console").innerHTML = text; }

//setup stage 3
const random = (min, max) => { return Math.floor(Math.random() * (max - min + 1)) + min; }; return random(min, max);
statUpgate();

//code action
document.querySelector(".button1").addEventListener("click", function() {
    var action = document.querySelector(`[name='action-input']`).value;
    switch(action) {
        //chop action
        case `chop`: { 
            if(plase.has("forest") == true && inventory.has("axe") == true) {
                wood += 2; consoleWrite(`console: you have been get 2 wood!`); statUpgate(); 
            } else { 
                consoleWrite("console: you don`t have axe or you are not in forest!"); 
            }; break; 
        };
        //mine action
        case `mine`: { 
            if(plase.has("underground") == true && inventory.has("pickaxe") == true) {
                stone += 2; consoleWrite(`console: you have been get 2 stone!`); statUpgate(); 
            } else { 
                consoleWrite("console: you don`t have pickaxe or you are not in underground!"); 
            }; break; 
        };
        //mine action
        case `hunt`: { 
            if(inventory.has("sword") == true) { 
                var xRandom = random(0, 5); meat += xRandom;
                consoleWrite(`console: you have been get ${xRandom} meat!`); statUpgate(); 
            } else { 
                consoleWrite("console: you don`t have sword!"); 
            }; break; 
        };
        //if action not found
        default: { document.querySelector(".console").innerHTML = `console: action list -> chop, mine, hunt.`; }
    };
});

//code craft
document.querySelector(".button2").addEventListener("click", function() {
    var craft = document.querySelector(`[name='craft-input']`).value;
    switch(craft) {
        //to craft pickaxe
        case `pickaxe`: { 
            if(wood >= 20 && inventory.has("pickaxe") == false) {
                wood -= 20; statUpgate(); inventory.add("pickaxe"); consoleWrite("console: you crafted pickaxe!");
            } else if(wood >= 20 && inventory.has("pickaxe") == true) { 
                consoleWrite("you already have a pickaxe!"); 
            } else {
                consoleWrite("console: you don`t have enough wood!"); 
            }; break; 
        };
        //to craft shovel
        case `shovel`: { 
            if(wood >= 20 && inventory.has("shovel") == false) {
                wood -= 20; statUpgate(); inventory.add("shovel"); consoleWrite("console: you crafted shovel!");
            } else if(wood >= 20 && inventory.has("shovel") == true) { 
                consoleWrite("you already have a shovel!"); 
            } else {
                consoleWrite("console: you don`t have enough wood!"); 
            }; break; 
        };
        //to craft sword
        case `sword`: { if(wood >= 10 && stone >= 10 && inventory.has("sword") == false) {
            wood -= 10; stone -= 10; statUpgate(); inventory.add("sword"); consoleWrite("console: you crafted sword!");
        } else if(wood >= 10 && stone >= 10 && inventory.has("sword") == true) { consoleWrite("you already have a sword!"); } else {
            consoleWrite("console: you don`t have enough wood or stone!"); }; break; };
        //if craft not found
        default: { document.querySelector(".console").innerHTML = `console: items list -> shovel, sword, pickaxe.`; }
    };
});

//code go to plases
document.querySelector(".button3").addEventListener("click", function() {
    var xPlace = document.querySelector(`[name='xPlase']`).value;
    switch(xPlace) {
        //to go forest
        case `forest`: { 
            if(plase.has("underground") == true && inventory.has("shovel") == true) { 
                mapChange(plases[0], plase);
                consoleWrite(`you have been moved to ${plases[0]}`); 
            } else { 
                consoleWrite("you don`t have shovel or you are in forest!");
            }; break;
        };
        //to go underground
        case `underground`: { 
            if(plase.has("forest") == true && inventory.has("shovel") == true) { 
                mapChange(plases[1], plase);
                consoleWrite(`you have been moved to ${plases[1]}`); 
            } else { 
                consoleWrite("you don`t have shovel or you are in underground!");
            }; break;
        };
        //if plase not found
        default: { document.querySelector(".console").innerHTML = `console: locations list -> forest, underground.`; };
    }
});

//shop
document.querySelector(".button4").addEventListener("click", function() {
    var sell = document.querySelector(`[name='sell-input']`).value;
    switch(sell) {
        //1 wood = 1 coin
        case `wood`: {
            document.querySelector(".console2").innerHTML = `console: you sold ${wood} wood for ${wood} coins`;
            money += wood; wood = 0; statUpgate(); break; };
        
        //1 stone = 2 coin
        case `stone`: {
            document.querySelector(".console2").innerHTML = `console: you sold ${stone} stone for ${stone * 2} coins`;
            money += stone*2; stone = 0; statUpgate(); break; };
        
        //1 meat = 3 coin
        case `meat`: {
            document.querySelector(".console2").innerHTML = `console: you sold ${meat} stone for ${meat * 3} coins`;
            money += meat*3; meat = 0; statUpgate(); break; };

        default: { document.querySelector(".console2").innerHTML = `console: materials list -> wood, stone, meat.`; };
    }
});
