$ = document.querySelector.bind(document)

alert("welcome to the GameByTheEE145. you goal is make a super sword and kill boss. good luck!")
let libraly = {
    inventory: new Set(),
    
    location: {
        locationList: ["forest", "underground"],
        locationNow: ""
    },

    materials: {
        wood: { 
            id: "wood", 
            count: 10
        },
        stone: { 
            id: "stone", 
            count: 0
        },
        food: { 
            id: "food", 
            count: 0 
        },
        gold: { 
            id: "gold", 
            count: 0 
        },
        crystal: { 
            id: "crystal", 
            count: 0 
        }
    },

    items: {
        sword: { 
            name: "sword", 
            need: { 
                wood: 10, 
                stone: 10, 
                food: 0, 
                gold: 0, 
                crystal: 0 
            } 
        },
        axe: { 
            name: "axe", 
            need: { 
                wood: 10, 
                stone: 0, 
                food: 0, 
                gold: 0, 
                crystal: 0 
            } 
        },
        pickaxe: { 
            name: "pickaxe", 
            need: { 
                wood: 10, 
                stone: 0, 
                food: 0, 
                gold: 0, 
                crystal: 0 
            } 
        },
        shovel: { 
            name: "shovel", 
            need: { 
                wood: 10, 
                stone: 0, 
                food: 0, 
                gold: 0, 
                crystal: 0 
            } 
        },
        megaPickaxe: { 
            name: "megaPickaxe", 
            need: { 
                wood: 50, 
                stone: 50, 
                food: 50, 
                gold: 1000, 
                crystal: 0 
            } 
        },
        superSword: { 
            name: "superSword", 
            need: { 
                wood: 100, 
                stone: 100, 
                food: 100, 
                gold: 100000, 
                crystal: 100 
            } 
        }
    }
}
libraly.location.locationNow = libraly.location.locationList[0]

let statText = `statistic -> | wood: ${libraly.materials.wood.count} | stone: ${libraly.materials.stone.count} | food: ${libraly.materials.food.count} | gold: ${libraly.materials.gold.count} | crystal: ${libraly.materials.crystal.count} |`
function consoletxt(text) {
    $('.console').innerHTML = text
    $('#consoleModal1').innerHTML = text
}

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "gray";
ctx.fillRect(0, 0, 100, 500);

var background = new Image();
background.onload = function(){
    for (var i=0;i<14;i++){
        for (var j=0;j<22;j++){
            ctx.drawImage(background,j*50 + 100,i*38,50,38);
        };
    };
};
background.src = "assets/img/grass.png";

var logo = new Image();
logo.addEventListener("load", function() { ctx.drawImage(logo, 5, 5, 90, 100); }, false);
logo.src = 'assets/img/icon.png';

var statistiKaIgPU = new Image();
statistiKaIgPU.addEventListener("load", function() { ctx.drawImage(statistiKaIgPU, 5, 395, 90, 100); }, false);
statistiKaIgPU.src = 'assets/img/statistic.png';

var sellAll = new Image();   
sellAll.addEventListener("load", function() { ctx.drawImage(sellAll, 5, 275, 90, 100); }, false);
sellAll.src = 'assets/img/sellAll.png';

var tree = new Image();
tree.addEventListener("load", function() { ctx.drawImage(tree, 150, 5, 200, 200); }, false);
tree.src = 'assets/img/tree.png';

var stone = new Image();
stone.addEventListener("load", function() { ctx.drawImage(stone, 350, 5, 200, 200); }, false);
stone.src = 'assets/img/stone.png';

var bush = new Image();
bush.addEventListener("load", function() { ctx.drawImage(bush, 600, 5, 200, 200); }, false);
bush.src = 'assets/img/bush.png';

var crystal = new Image();
crystal.addEventListener("load", function() { ctx.drawImage(crystal, 850, 5, 200, 200); }, false);
crystal.src = 'assets/img/crystal.png';

var underground = new Image();
underground.addEventListener("load", function() { ctx.drawImage(underground, 850, 235, 200, 200); }, false);
underground.src = 'assets/img/uderground.png';

var forest = new Image();   
forest.addEventListener("load", function() { ctx.drawImage(forest, 600, 235, 200, 200); }, false);
forest.src = 'assets/img/foret.png';

function KursorPosition(ctx, mouse) {
    var object = ctx.getBoundingClientRect();
    return {
        x: mouse.clientX - object.left,
        y: mouse.clientY - object.top
    };
};

var KorsorPositiyaClicked = 0;
function check() {
    if(KorsorPositiyaClicked == 1) {
        KorsorPositiyaClicked = 0;
        $(".commandLine").innerHTML = "";
        console.log("-> close statistic [true]");
    } else if(KorsorPositiyaClicked == 0) { 
        KorsorPositiyaClicked = 1;
        $(".commandLine").innerHTML = statText;
        console.log("-> opening statistic [false]");
    } else { console.log(`FATAL ERROR --> KorsorPositiyaClicked == ${KorsorPositiyaClicked}`); }
};

canvas.addEventListener('click', function(mouse) {
    var KorsorPositiya = KursorPosition(canvas, mouse);
    if(KorsorPositiya.x >= 16 && KorsorPositiya.y <= 480) {
        if(KorsorPositiya.x <= 88 && KorsorPositiya.y >= 404) {
            console.log("statistic checking...");
            check();
        };
    };
}, false);

canvas.addEventListener('click', function(mouse) {
    var KorsorPositiya = KursorPosition(canvas, mouse);
    if(KorsorPositiya.x >= 16 && KorsorPositiya.y <= 480-120) {
        if(KorsorPositiya.x <= 88 && KorsorPositiya.y >= 404-120) {
            var promSella = prompt('what material do you want to sell?', "wood");
            switch (promSella) {
                case "wood": {
                    alert(`you sell ${libraly.materials.wood.count} wood and get ${libraly.materials.wood.count} gold!`)
                    libraly.materials.gold.count += libraly.materials.wood.count
                    libraly.materials.wood.count = 0
                    break;
                }

                case "stone": {
                    alert(`you sell ${libraly.materials.stone.count} stone and get ${libraly.materials.stone.count*2} gold!`)
                    libraly.materials.gold.count += libraly.materials.stone.count*2
                    libraly.materials.stone.count = 0
                    break;
                }

                case "food": {
                    alert(`you sell ${libraly.materials.food.count} food and get ${libraly.materials.food.count*3} gold!`)
                    libraly.materials.gold.count += libraly.materials.food.count*3
                    libraly.materials.food.count = 0
                    break;
                }

                case "crystal": {
                    alert(`you sell ${libraly.materials.crystal.count} crystal and get ${libraly.materials.crystal.count*4} gold!`)
                    libraly.materials.gold.count += libraly.materials.crystal.count*4
                    libraly.materials.crystal.count = 0
                    break;
                }

                default: {
                    alert(`resourse not found! resoures list -> wood, stone, food, crystal`)
                    break;
                }
            }
            statText = `statistic -> | wood: ${libraly.materials.wood.count} | stone: ${libraly.materials.stone.count} | food: ${libraly.materials.food.count} | gold: ${libraly.materials.gold.count} | crystal: ${libraly.materials.crystal.count} |`
            if(KorsorPositiyaClicked == 1) { document.querySelector(".commandLine").innerHTML = statText; }
        }
    }
}, false);

var AnvilCanvas = document.getElementById("craftCanvasManuForGame");
var AnvilCtx = AnvilCanvas.getContext("2d");

AnvilCtx.fillStyle = "gray";
AnvilCtx.fillRect(0, 0, 100, 300);
AnvilCtx.fillStyle = "lightgray";
AnvilCtx.fillRect(100, 0, 700, 30);

AnvilCtx.font = '20pt Terminal';
AnvilCtx.fillStyle = 'black';
AnvilCtx.fillText("CRAFT MENU", 325, 25);

var logoAnvil = new Image();
logoAnvil.addEventListener("load", function() { AnvilCtx.drawImage(logoAnvil, 5, 5, 90, 100); }, false);
logoAnvil.src = 'assets/img/anvil.png';

var floor = new Image();
floor.onload = function(){
    for (var i=0;i<11;i++){
        for (var j=0;j<25;j++){
            AnvilCtx.drawImage(floor,j*25 + 100,i*25 + 30,25,25);
        };
    };
};
floor.src = "assets/img/floor.png";

var slot = new Image();
slot.addEventListener("load", function() { 
    for (var i=0;i<2;i++){
        for (var j=0;j<5;j++){
            AnvilCtx.drawImage(slot, j*120 + 110, i*120 + 50, 100, 100);
        };
    };
}, false);
slot.src = 'assets/img/slot.png';

var axe = new Image();
axe.addEventListener("load", function() { AnvilCtx.drawImage(axe, 120, 50, 100, 100); }, false);
axe.src = 'assets/img/items/axe.png';

var sword = new Image();
sword.addEventListener("load", function() { AnvilCtx.drawImage(sword, 120*2, 50, 100, 100); }, false);
sword.src = 'assets/img/items/sword.png';

var shovel = new Image();
shovel.addEventListener("load", function() { AnvilCtx.drawImage(shovel, 120*3, 50, 100, 100); }, false);
shovel.src = 'assets/img/items/shovel.png';

var pickaxe = new Image();
pickaxe.addEventListener("load", function() { AnvilCtx.drawImage(pickaxe, 120*4, 50, 100, 100); }, false);
pickaxe.src = 'assets/img/items/pickaxe.png';

var megaPickaxe = new Image();
megaPickaxe.addEventListener("load", function() { AnvilCtx.drawImage(megaPickaxe, 120*5, 50, 100, 100); }, false);
megaPickaxe.src = 'assets/img/items/megaPickaxe.png';

var superSword = new Image();
superSword.addEventListener("load", function() { AnvilCtx.drawImage(superSword, 120, 50*3+20, 100, 100); }, false);
superSword.src = 'assets/img/items/superSword.png';

var notfound = new Image();
notfound.addEventListener("load", function() { 
    for(i = 0; i < 4; i++) {
        AnvilCtx.drawImage(notfound, 120*i+(120*2), 50*3+20, 90, 100); 
    }
}, false);
notfound.src = 'assets/img/items/notfound.png';

console.log(libraly)
function itemcheck(item) {
    if(libraly.materials.wood.count >= item.need.wood) {
        if(libraly.materials.stone.count >= item.need.stone) {
            if(libraly.materials.food.count >= item.need.food) {
                if(libraly.materials.gold.count >= item.need.gold) {
                    if(libraly.materials.crystal.count >= item.need.crystal) {
                        libraly.materials.wood.count -= item.need.wood
                        libraly.materials.stone.count -= item.need.stone
                        libraly.materials.food.count -= item.need.food
                        libraly.materials.gold.count -= item.need.gold
                        libraly.materials.crystal.count -= item.need.crystal

                        libraly.inventory.add(item.name)

                        statText = `statistic -> | wood: ${libraly.materials.wood.count} | stone: ${libraly.materials.stone.count} | food: ${libraly.materials.food.count} | gold: ${libraly.materials.gold.count} | crystal: ${libraly.materials.crystal.count} |`
                        if(KorsorPositiyaClicked == 1) { document.querySelector(".commandLine").innerHTML = statText; }
                        consoletxt(`console: you got ${item.name}!`)
                    } else { consoletxt(`console: you dont have enought crystal, you have: ${libraly.materials.crystal.count}/${item.need.crystal}`) }
                } else { consoletxt(`console: you dont have enought gold, you have: ${libraly.materials.gold.count}/${item.need.gold}`) }
            } else { consoletxt(`console: you dont have enought food, you have: ${libraly.materials.food.count}/${item.need.food}`) }
        } else { consoletxt(`console: you dont have enought stone, you have: ${libraly.materials.stone.count}/${item.need.stone}`) }
    } else { consoletxt(`console: you dont have enought wood, you have: ${libraly.materials.wood.count}/${item.need.wood}`) }
}


//axeCraft
AnvilCanvas.addEventListener("click", function(mouse) {
    var PositiaKursoraVrkaftMenu = KursorPosition(AnvilCanvas, mouse);
    if(PositiaKursoraVrkaftMenu.x >= 120 && PositiaKursoraVrkaftMenu.y <= 140) {
        if(PositiaKursoraVrkaftMenu.x <= 120+100 && PositiaKursoraVrkaftMenu.y >= 140-100) {
            itemcheck(libraly.items.axe)
        }
    }
}, false);

//swordCraft
AnvilCanvas.addEventListener("click", function(mouse) {
    var PositiaKursoraVrkaftMenu = KursorPosition(AnvilCanvas, mouse);
    if(PositiaKursoraVrkaftMenu.x >= 120*2 && PositiaKursoraVrkaftMenu.y <= 140) {
        if(PositiaKursoraVrkaftMenu.x <= (120+100)*2 && PositiaKursoraVrkaftMenu.y >= 140-100) {
            itemcheck(libraly.items.sword)
        }
    }
}, false);

//pickaxeCraft
AnvilCanvas.addEventListener("click", function(mouse) {
    var PositiaKursoraVrkaftMenu = KursorPosition(AnvilCanvas, mouse);
    if(PositiaKursoraVrkaftMenu.x >= 120*4 && PositiaKursoraVrkaftMenu.y <= 140) {
        if(PositiaKursoraVrkaftMenu.x <= (120+100)*4 && PositiaKursoraVrkaftMenu.y >= 140-100) {
            itemcheck(libraly.items.pickaxe)
        }
    }
}, false);

//megaPickaxeCraft
AnvilCanvas.addEventListener("click", function(mouse) {
    var PositiaKursoraVrkaftMenu = KursorPosition(AnvilCanvas, mouse);
    if(PositiaKursoraVrkaftMenu.x >= 120*5 && PositiaKursoraVrkaftMenu.y <= 140) {
        if(PositiaKursoraVrkaftMenu.x <= (120+100)*5 && PositiaKursoraVrkaftMenu.y >= 140-100) {
            itemcheck(libraly.items.megaPickaxe)
        }
    }
}, false);

//shovelCraft
AnvilCanvas.addEventListener("click", function(mouse) {
    var PositiaKursoraVrkaftMenu = KursorPosition(AnvilCanvas, mouse);
    if(PositiaKursoraVrkaftMenu.x >= 120*3 && PositiaKursoraVrkaftMenu.y <= 140) {
        if(PositiaKursoraVrkaftMenu.x <= (120+100)*3 && PositiaKursoraVrkaftMenu.y >= 140-100) {
            itemcheck(libraly.items.shovel)
        }
    }
}, false);

//superSwordCraft
AnvilCanvas.addEventListener("click", function(mouse) {
    var PositiaKursoraVrkaftMenu = KursorPosition(AnvilCanvas, mouse);
    if(PositiaKursoraVrkaftMenu.x >= 120 && PositiaKursoraVrkaftMenu.y <= 140+100) {
        if(PositiaKursoraVrkaftMenu.x <= 120+100 && PositiaKursoraVrkaftMenu.y >= 140-100+100) {
            itemcheck(libraly.items.superSword)
            alert("great job! you made a super sword and defeated the boss and that is how you beat the game. If you want to continue play click OK")
        }
    }
}, false);

//tree
canvas.addEventListener("click", function(mouse) {
    var PositiaKursoraVrkaftMenu = KursorPosition(canvas, mouse);
    if(PositiaKursoraVrkaftMenu.x >= 154 && PositiaKursoraVrkaftMenu.y <= 197) {
        if(PositiaKursoraVrkaftMenu.x <= 154+200 && PositiaKursoraVrkaftMenu.y >= 197-200) {
            if(libraly.inventory.has("axe") == true && libraly.location.locationNow == "forest") {
                libraly.materials.wood.count += 2

                statText = `statistic -> | wood: ${libraly.materials.wood.count} | stone: ${libraly.materials.stone.count} | food: ${libraly.materials.food.count} | gold: ${libraly.materials.gold.count} | crystal: ${libraly.materials.crystal.count} |`
                consoletxt(`you get 2 wood! now you have: ${libraly.materials.wood.count} wood!`)
                if(KorsorPositiyaClicked == 1) { 
                    $(".commandLine").innerHTML = statText; 
                } else { console.log(`${KorsorPositiyaClicked}`) }
            }   else if(libraly.inventory.has("axe") == false) {
                consoletxt("console: you don`t have axe!");
            } else { consoletxt("console: you are not in forest!"); }
        } else { console.log(`is 2 if: ${PositiaKursoraVrkaftMenu.x >= 120 && PositiaKursoraVrkaftMenu.y <= 140-100}`) }
    } else { console.log(`is 1 if: ${PositiaKursoraVrkaftMenu.x >= 120 && PositiaKursoraVrkaftMenu.y <= 140-100}`) }
}, false);

//stone
canvas.addEventListener("click", function(mouse) {
    var PositiaKursoraVrkaftMenu = KursorPosition(canvas, mouse);
    if(PositiaKursoraVrkaftMenu.x >= 154+150 && PositiaKursoraVrkaftMenu.y <= 197) {
        if(PositiaKursoraVrkaftMenu.x <= 154+200+150 && PositiaKursoraVrkaftMenu.y >= 197-200) {
            if(libraly.inventory.has("pickaxe") == true && libraly.location.locationNow == "underground") {
                libraly.materials.stone.count += 2

                statText = `statistic -> | stone: ${libraly.materials.wood.count} | stone: ${libraly.materials.stone.count} | food: ${libraly.materials.food.count} | gold: ${libraly.materials.gold.count} | crystal: ${libraly.materials.crystal.count} |`
                consoletxt(`you get 2 stone! now you have: ${libraly.materials.stone.count} stone!`)
                if(KorsorPositiyaClicked == 1) { 
                    $(".commandLine").innerHTML = statText; 
                } else { console.log(`${KorsorPositiyaClicked}`) }
            }   else if(libraly.inventory.has("pickaxe") == false) {
                consoletxt("console: you don`t have pickaxe!");
            } else { consoletxt("console: you are not in underground!"); }
        } else { console.log(`is 2 if: ${PositiaKursoraVrkaftMenu.x >= 120 && PositiaKursoraVrkaftMenu.y <= 140-100}`) }
    } else { console.log(`is 1 if: ${PositiaKursoraVrkaftMenu.x >= 120 && PositiaKursoraVrkaftMenu.y <= 140-100}`) }
}, false);

//bush
canvas.addEventListener("click", function(mouse) {
    var PositiaKursoraVrkaftMenu = KursorPosition(canvas, mouse);
    if(PositiaKursoraVrkaftMenu.x >= 154+(150*2+100) && PositiaKursoraVrkaftMenu.y <= 197) {
        if(PositiaKursoraVrkaftMenu.x <= 154+200+(150*2+50) && PositiaKursoraVrkaftMenu.y >= 0) {
            if(libraly.inventory.has("sword") == true) {
                libraly.materials.food.count += 2

                statText = `statistic -> | wood: ${libraly.materials.wood.count} | stone: ${libraly.materials.stone.count} | food: ${libraly.materials.food.count} | gold: ${libraly.materials.gold.count} | crystal: ${libraly.materials.crystal.count} |`
                consoletxt(`you get 2 food! now you have: ${libraly.materials.food.count} food!`)
                if(KorsorPositiyaClicked == 1) { 
                    $(".commandLine").innerHTML = statText; 
                } else { console.log(`${KorsorPositiyaClicked}`) }
            }   else if(libraly.inventory.has("sword") == false) {
                consoletxt("console: you don`t have sword!");
            } else {}
        } else { console.log(`bush is 2 if: ${PositiaKursoraVrkaftMenu.x >= 120 && PositiaKursoraVrkaftMenu.y <= 140-100}`) }
    } else { console.log(`bush is 1 if: ${PositiaKursoraVrkaftMenu.x >= 120 && PositiaKursoraVrkaftMenu.y <= 140-100}`) }
}, false);

//crystal
canvas.addEventListener("click", function(mouse) {
    var PositiaKursoraVrkaftMenu = KursorPosition(canvas, mouse);
    if(PositiaKursoraVrkaftMenu.x >= 154+(150*3+100*2) && PositiaKursoraVrkaftMenu.y <= 197) {
        if(PositiaKursoraVrkaftMenu.x <= 154+200+(150*3+100*2) && PositiaKursoraVrkaftMenu.y >= 0) {
            if(libraly.inventory.has("megaPickaxe") == true) {
                libraly.materials.crystal.count += 2

                statText = `statistic -> | wood: ${libraly.materials.wood.count} | stone: ${libraly.materials.stone.count} | food: ${libraly.materials.food.count} | gold: ${libraly.materials.gold.count} | crystal: ${libraly.materials.crystal.count} |`
                consoletxt(`you get 2 crystal! now you have: ${libraly.materials.crystal.count} crystal!`)
                if(KorsorPositiyaClicked == 1) { 
                    $(".commandLine").innerHTML = statText; 
                } else { console.log(`${KorsorPositiyaClicked}`) }
            }   else if(libraly.inventory.has("megaPickaxe") == false) {
                consoletxt("console: you don`t have megaPickaxe!");
            } else {}
        } else { console.log(`crystal is 2 if: ${PositiaKursoraVrkaftMenu.x >= 120 && PositiaKursoraVrkaftMenu.y <= 140-100}`) }
    } else { console.log(`ctystal is 1 if: ${PositiaKursoraVrkaftMenu.x >= 120 && PositiaKursoraVrkaftMenu.y <= 140-100}`) }
}, false);

//underground
canvas.addEventListener("click", function(mouse) {
    var PositiaKursoraVrkaftMenu = KursorPosition(canvas, mouse);
    if(PositiaKursoraVrkaftMenu.x >= 887 && PositiaKursoraVrkaftMenu.y <= 425) {
        if(PositiaKursoraVrkaftMenu.x <= 1041 && PositiaKursoraVrkaftMenu.y >= 254) {
            if(libraly.inventory.has("shovel") == true && libraly.location.locationNow == "forest") {
                libraly.location.locationNow = libraly.location.locationList[1]
                consoletxt(`you moved to underground`)
            } else if(libraly.inventory.has("shovel") == false) {
                consoletxt("console: you don`t have shovel!");
            } else { consoletxt("console: you are not in forest!"); }
        } else { console.log(`un is 2 if: ${PositiaKursoraVrkaftMenu.x >= 120 && PositiaKursoraVrkaftMenu.y <= 140-100}`) }
    } else { console.log(`un is 1 if: ${PositiaKursoraVrkaftMenu.x >= 120 && PositiaKursoraVrkaftMenu.y <= 140-100}`) }
}, false);

//forest
canvas.addEventListener("click", function(mouse) {
    var PositiaKursoraVrkaftMenu = KursorPosition(canvas, mouse);
    if(PositiaKursoraVrkaftMenu.x >= 887-300 && PositiaKursoraVrkaftMenu.y <= 425) {
        if(PositiaKursoraVrkaftMenu.x <= 1041-300 && PositiaKursoraVrkaftMenu.y >= 254) {
            if(libraly.inventory.has("shovel") == true && libraly.location.locationNow == "underground") {
                libraly.location.locationNow = libraly.location.locationList[0]
                consoletxt(`you moved to forest`)
            } else if(libraly.inventory.has("shovel") == false) {
                consoletxt("console: you don`t have shovel!");
            } else { consoletxt("console: you are not in underground!"); }
        } else { console.log(`fo is 2 if: ${PositiaKursoraVrkaftMenu.x >= 120 && PositiaKursoraVrkaftMenu.y <= 140-100}`) }
    } else { console.log(`fo is 1 if: ${PositiaKursoraVrkaftMenu.x >= 120 && PositiaKursoraVrkaftMenu.y <= 140-100}`) }
}, false);

canvas.addEventListener("click", function(mouse) {
    var a = KursorPosition(canvas, mouse);
    console.log(a)
})
