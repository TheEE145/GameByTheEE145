var plases = ["forest", "underground"]; var plase = new Map(); var inventory = new Set(["axe"]);
var wood = 0; var stone = 0; var meat = 0; var money = 0; plase.set(plases[0]);
function mapChange(newPlace, map) { map.clear(); map.set(newPlace); };
function statUpgate() { document.querySelector(".statistics").innerHTML = `statistics: ${wood} wood, ${stone} stone, ${meat} meat, ${money} coins.`; };
function consoleWrite(text) { document.querySelector(".console").innerHTML = text; }
const random = (min, max) => { return Math.floor(Math.random() * (max - min + 1)) + min; }; statUpgate();
document.querySelector(".button1").addEventListener("click", function() {
    switch(document.querySelector(`[name='action-input']`).value) {
        case `chop`: { 
            if(plase.has("forest") == true && inventory.has("axe") == true) {
                wood += 2; statUpgate(); consoleWrite(`console: you have been get 2 wood!`); 
            } else { consoleWrite("console: you don`t have axe or you are not in forest!"); }; 
            break; 
        };
        case `mine`: { 
            if(plase.has("underground") == true && inventory.has("pickaxe") == true) {
                stone += 2; statUpgate(); consoleWrite(`console: you have been get 2 stone!`); 
            } else { consoleWrite("console: you don`t have pickaxe or you are not in underground!"); }; 
            break; 
        };
        case `hunt`: { 
            if(inventory.has("sword") == true) { 
                var xRandom = random(0, 5); meat += xRandom; consoleWrite(`console: you have been get ${xRandom} meat!`); statUpgate();; 
            } else { consoleWrite("console: you don`t have sword!"); }; 
            break; 
        };
        default: { document.querySelector(".console").innerHTML = `console: action list -> chop, mine, hunt.`; };
    };
});
document.querySelector(".button2").addEventListener("click", function() {
    switch(document.querySelector(`[name='craft-input']`).value) {
        case `pickaxe`: { 
            if(wood >= 20 && inventory.has("pickaxe") == false) {
                wood -= 20; statUpgate(); inventory.add("pickaxe"); 
                consoleWrite("console: you crafted pickaxe!");
            } else if(wood >= 20 && inventory.has("pickaxe") == true) { 
                consoleWrite("you already have a pickaxe!"); 
            } else { consoleWrite("console: you don`t have enough wood!"); }; 
            break; 
        };
        case `shovel`: { 
            if(wood >= 20 && inventory.has("shovel") == false) {
                wood -= 20; statUpgate(); inventory.add("shovel"); 
                consoleWrite("console: you crafted shovel!");
            } else if(wood >= 20 && inventory.has("shovel") == true) { 
                consoleWrite("you already have a shovel!"); 
            } else { consoleWrite("console: you don`t have enough wood!"); }; 
            break; 
        };
        case `sword`: { 
            if(wood >= 10 && stone >= 10 && inventory.has("sword") == false) {
                wood -= 10; stone -= 10; statUpgate(); inventory.add("sword"); 
                consoleWrite("console: you crafted sword!");
            } else if(wood >= 10 && stone >= 10 && inventory.has("sword") == true) { 
                consoleWrite("you already have a sword!"); 
            } else { consoleWrite("console: you don`t have enough wood or stone!"); }; 
            break; 
        };
        default: { document.querySelector(".console").innerHTML = `console: items list -> shovel, sword, pickaxe.`; }
    };
});
document.querySelector(".button3").addEventListener("click", function() {
    switch(document.querySelector(`[name='xPlase']`).value) {
        case `forest`: { 
            if(plase.has("underground") == true && inventory.has("shovel") == true) { 
                mapChange(plases[0], plase); consoleWrite(`you have been moved to ${plases[0]}`); 
            } else { consoleWrite("you don`t have shovel or you are in forest!"); }; 
            break;
        }; 
        case `underground`: { 
            if(plase.has("forest") == true && inventory.has("shovel") == true) { 
                mapChange(plases[1], plase); consoleWrite(`you have been moved to ${plases[1]}`); 
            } else { consoleWrite("you don`t have shovel or you are in underground!"); }; 
            break;
        };
        default: { document.querySelector(".console").innerHTML = `console: locations list -> forest, underground.`; };
    }
});
document.querySelector(".button4").addEventListener("click", function() {
    var sell = document.querySelector(`[name='sell-input']`).value;
    switch(sell) {
        case `wood`: {
            document.querySelector(".console2").innerHTML = `console: you sold ${wood} wood for ${wood} coins`;
            money += wood; wood = 0; statUpgate(); 
            break; 
        };
        case `stone`: {
            document.querySelector(".console2").innerHTML = `console: you sold ${stone} stone for ${stone * 2} coins`;
            money += stone*2; stone = 0; statUpgate(); 
            break; 
        };
        case `meat`: {
            document.querySelector(".console2").innerHTML = `console: you sold ${meat} stone for ${meat * 3} coins`;
            money += meat*3; meat = 0; statUpgate(); 
            break; 
        };
        default: { document.querySelector(".console2").innerHTML = `console: materials list -> wood, stone, meat.`; };
    }
});
