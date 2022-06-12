/* data loader */
const randomID = Math.floor(Math.random() * 89999999999) + 10000000000;
let player_data = {
    player: {
        id:     randomID,
        name:   `new_player`,
        avatar: 'assets/noavatar.png',
        lang:   'EN_eu'
    },

    data: {
        money:  0,
        income: 0,
        power:  1
    }
};

delete(randomID);
function saveData() {
    localStorage.setItem('GameByTheEE145.player_data', JSON.stringify(player_data));
};

function dataRenderer() {
    if(localStorage.getItem('GameByTheEE145.player_data') != null) {
        localStorage.setItem(
            'GameByTheEE145.player_data',
        
            JSON.stringify(
                player_data = Object.merge(
                    player_data, 
                    JSON.parse(localStorage.getItem('GameByTheEE145.player_data'))
                )
            )
        );
    };

    saveData();
    console.log(localStorage.getItem('GameByTheEE145.player_data'));
};

dataRenderer();
currentBundle = bundles[player_data.player.lang];

imgpack_other.avatar.src = player_data.player.avatar;

/* main scene */
const Menu = new class extends Scene {
    draw() {
        super.draw();

        ctx.drawImage(imgpack_other.avatar, 15, 15, 40, 40);
        
        ctx.font = '22px monospace';
        ctx.fillText(player_data.player.name, 65, 32);

        ctx.font = '11px monospace';
        ctx.fillStyle = '#141414';
        ctx.fillText(player_data.player.id, 65, 50);
    };

    tick() {
        super.tick();

        try {
            Menu.objects.get(2).text = `${currentBundle.money}: ${player_data.data.money}`;
            Menu.objects.get(3).text = `${currentBundle.income}: ${player_data.data.income}`;
            Menu.objects.get(4).text = `${currentBundle.power}: ${player_data.data.power}`;
        } catch {};
    };
};

Menu.objects.add(new CanvasRenderingObject(imgpack_other.space, 0, 0, 1400, 700));
Menu.objects.get(0).enable = false;

Menu.objects.add(new UIbuilder.button(0, 10, 300, 50));
Menu.objects.add(new UIbuilder.button(0, 70, 300, 50, '', 24)); 
Menu.objects.add(new UIbuilder.button(0, 130, 300, 50, '', 24));
Menu.objects.add(new UIbuilder.button(0, 190, 300, 50, '', 24));

const Clicker = new UIbuilder.button(600, 250, 200, 200);
Clicker.tick = function() {
    if(this.hover) {
        if(this.texture != imgpack_other.clicker_hover) {
            this.texture = imgpack_other.clicker_hover;
        };

        return;
    };

    if(this.texture != imgpack_other.clicker) {
        this.texture = imgpack_other.clicker;
    };
};

Clicker.onClick = function() {
    player_data.data.money += player_data.data.power;
    saveData();
};

Menu.objects.add(Clicker);
delete(Clicker);

const changeName = new UIbuilder.button(1200, 10, 200, 50, currentBundle.rename, 24);
changeName.onClick = function() {
    function changename() {
        const newname = prompt(currentBundle.newname);

        if(
            ((/\W+/).test(newname)) || 
            (newname.length < 4) || 
            (newname.length > 16)
        ) {
            alert(currentBundle.wrongname);
            changename();
            return;
        };

        player_data.player.name = newname;
        saveData();
        
        delete(newname);
    };

    changename();
};

Menu.objects.add(changeName);
delete(changeName);

const changeAvatar = new UIbuilder.button(1200, 70, 200, 50, currentBundle.revatar, 24);
changeAvatar.onClick = function() {
    document.getElementById('avatar').click();
};

Menu.objects.add(changeAvatar);
delete(changeAvatar);

const changeLanguage = new UIbuilder.button(1200, 120+10, 200, 50, 'set language', 24);
changeLanguage.onClick = function() {
    const number2l = prompt(currentBundle.newlanguage);

    if(bundles.hasOwnProperty(number2l)) {
        player_data.player.lang = number2l;
    } else {
        alert(currentBundle.wrlanguage);
    };

    saveData();
    window.location.reload();
    currentBundle = bundles[player_data.player.lang];
};

Menu.objects.add(changeLanguage);
delete(changeLanguage);

/* running game */
class Game {
    static currentScene = Menu;

    static startHoldX;
    static startHoldY;
    static hold = false;
    
    static Core = class {
        static mouseShowRadius = 0;

        static run() {
            ctx = (canvas = document.getElementById('main')).getContext('2d');

            ctx.canvas.height = 700;
            ctx.canvas.width = 1400;

            if(window.matchMedia("only screen and (max-width: 760px)").matches) {
                Game.mobile = true;
            };
        };

        static draw() {
            Game.currentScene.draw();

            if(Game.mobile) {
                return;
            };

            if(mouse == null) {
                return;
            };

            if(Game.hold) {
                ctx.strokeStyle = '#008CC8';
                ctx.fillStyle = '#3CAAC87A';

                ctx.fillRect(
                    Game.startHoldX, 
                    Game.startHoldY, 

                    mouse.x2 - Game.startHoldX, 
                    mouse.y2 - Game.startHoldY
                );
            };

            if(Game.Core.mouseShowRadius > 5) {
                ctx.beginPath();

                ctx.strokeStyle = '#8C8C8C';
                ctx.lineWidth = 5;

                ctx.arc(
                    mouse.x2, 
                    mouse.y2, 
                    Game.Core.mouseShowRadius, 
                    0, 
                    2 * Math.PI, 
                    false
                );

                ctx.stroke();
                Game.Core.mouseShowRadius -= 10;
            };

            ctx.drawImage(imgpack_other.mouse, mouse.x2 - 5, mouse.y2 - 5, 10, 10);
        };

        static mousePOS() {
            mouse.rect = canvas.getBoundingClientRect();
            
            mouse.x2 = (mouse.clientX - mouse.rect.left) * (canvas.width / mouse.rect.width);
            mouse.y2 = (mouse.clientY - mouse.rect.top) * (canvas.height / mouse.rect.height);
        };
    };
};

function hoverRenderer() {
    Game.currentScene.objects.forEach(block => {
        if(
            ((mouse.x2 > block.x) && (mouse.x2 < (block.x + block.w))) ||
            ((mouse.x2 < block.x) && (mouse.x2 > (block.x + block.w)))
        ) {
            if(
                ((mouse.y2 > block.y) && (mouse.y2 < (block.y + block.h))) ||
                ((mouse.y2 < block.y) && (mouse.y2 > (block.y + block.h)))
            ) {
                block.hover = true;
                return;
            };
        };

        block.hover = false;
    });
};

Game.Core.run();
setInterval(() => {
    Game.Core.draw();
    Game.currentScene.tick();
    
    if(Game.mobile) {
        try {
            hoverRenderer();
        } catch {};
    };
}, 22);

if(!Game.mobile) {
    document.querySelector('#main').addEventListener('mousemove', (e) => {
        mouse = e;
        Game.Core.mousePOS();
    
        hoverRenderer();
    }, false);
};

const C = new FileReader();

/* events */
window.addEventListener('mouseup', () => {
    Game.hold = false;
}, false);

window.addEventListener('mousedown', () => {
    if(!Game.hold) {
        Game.startHoldX = mouse.x2;
        Game.startHoldY = mouse.y2;
    };
    
    Game.hold = true;
}, false);

window.addEventListener('keyup', (e) => {
    if((e.code == 'ControlLeft') || (e.code == 'ControlRight')) {
        Game.Core.mouseShowRadius = 50;
    };
}, false);

window.addEventListener('click', (e) => {
    if(Game.mobile) {
        mouse = e;
        Game.Core.mousePOS();
    
        hoverRenderer();
    };

    Game.currentScene.clickEvent();

    if(Game.mobile) {
        mouse.x2 = 0;
        mouse.y2 = 0;
    };
}, false);

document.getElementById('avatar').addEventListener('change', function() {
    if (this.files.length > 0) {
        C.readAsDataURL(this.files[0]);
    };
});

C.addEventListener('loadend', () => {
    imgpack_other.avatar.src = player_data.player.avatar = C.result;
    saveData();

    console.log(player_data.player.avatar);
});