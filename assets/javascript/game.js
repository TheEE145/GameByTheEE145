var plases = ["forest", "underground"]; 
var plase = new Map(); 
var inventory = new Set(["axe"]);

var wood = { count: 0, id: "wood" };
var stone = { count: 0, id: "stone" }; 
var meat = { count: 0, id: "meat" }; 
var money = { count: 0, id: "money" }; 

plase.set(plases[0]);

function mapChange(newPlace, map) { 
    map.clear(); 
    map.set(newPlace); 
};

let sword = { wood: 10, stone: 10, id: "sword" };
let shovel = { wood: 20, stone: 0, id: "shovel" };
let pickaxe = { wood: 20, stone: 0, id: "pickaxe" };

function statUpgate() { 
    document.querySelector(".statistics").innerHTML = `statistics: ${wood.count} wood, ${stone.count} stone, ${meat.count} meat, ${money.count} coins.`; 
};

function consoleWrite(text) { 
    document.querySelector(".console").innerHTML = text; 
}

const random = (min, max) => { 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}; 
statUpgate();

function itemCheck(item) {
    if(wood.count >= item.wood && stone.count >= item.stone) {
        inventory.add(item.id);
        wood.count -= item.wood;
        stone.count -= item.stone;
        consoleWrite(`console: you crafted ${item.id}`);
        statUpgate();
    } else { 
        consoleWrite("console: you don`t have enough resourses");
        console.log(item.wood);
        console.log(item.stone);
    }
}

function actionCheck(mapHas, setHas, map, set, mat, matC) {
    if(map.has(mapHas) == true && set.has(setHas) == true) {
        mat.count += matC;
        consoleWrite(`console: you got ${matC} ${mat.id}`);
        statUpgate();
    }
}

document.querySelector(".button1").addEventListener("click", function() {
    switch(document.querySelector(`[name='action-input']`).value) {
        case `chop`: { actionCheck(plases[0], "axe", plase, inventory, wood, 2); break; };
        case `mine`: { actionCheck(plases[1], "pickaxe", plase, inventory, stone, 2); break; };
        case `hunt`: { actionCheck(plases[1], "sword", plase, inventory, meat, random(0, 5)); break; };
        default: { document.querySelector(".console").innerHTML = `console: action list -> chop, mine, hunt.`; };
    };
});
document.querySelector(".button2").addEventListener("click", function() {
    switch(document.querySelector(`[name='craft-input']`).  value) {
        case `pickaxe`: { itemCheck(pickaxe); break; };
        case `shovel`: { itemCheck(shovel); break; };
        case `sword`: { itemCheck(sword); break; };
        default: { document.querySelector(".console").innerHTML = `console: items list -> shovel, sword, pickaxe.`; }
    };
});
document.querySelector(".button3").addEventListener("click", function() {
    switch(document.querySelector(`[name='xPlase']`).value) {
        case `forest`: { 
            if(plase.has("underground") == true && inventory.has("shovel") == true) { 
                mapChange(plases[0], plase); 
                consoleWrite(`you have been moved to ${plases[0]}`); 
            } else { 
                consoleWrite("you don`t have shovel or you are in forest!"); 
            }; 
            break;
        }; 
        case `underground`: { 
            if(plase.has("forest") == true && inventory.has("shovel") == true) { 
                mapChange(plases[1], plase); 
                consoleWrite(`you have been moved to ${plases[1]}`); 
            } else { 
                consoleWrite("you don`t have shovel or you are in underground!"); 
            }; 
            break;
        };
        default: { 
            document.querySelector(".console").innerHTML = `console: locations list -> forest, underground.`; 
        };
    }
});
document.querySelector(".button4").addEventListener("click", function() {
    switch(document.querySelector(`[name='sell-input']`).value) {
        case `wood`: {
            document.querySelector(".console2").innerHTML = `console: you sold ${wood.count} wood for ${wood.count} coins`;
            money.count += wood.count; 
            wood.count = 0; 
            statUpgate(); 
            break; 
        };
        case `stone`: {
            document.querySelector(".console2").innerHTML = `console: you sold ${stone.count} stone for ${stone.count * 2} coins`;
            money.count += stone.count*2; 
            stone.count = 0; 
            statUpgate(); 
            break; 
        };
        case `meat`: {
            document.querySelector(".console2").innerHTML = `console: you sold ${meat.count} stone for ${meat.count * 3} coins`;
            money.count += meat.count*3; 
            meat.count = 0; 
            statUpgate(); 
            break; 
        };
        default: { 
            document.querySelector(".console2").innerHTML = `console: materials list -> wood, stone, meat.`; 
        };
    }
});