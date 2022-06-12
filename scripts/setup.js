const projectName = document.querySelector('.title').innerHTML = 'GameByTheEE145';
let canvas, ctx, mouse = null, currentBundle;

function typeTest(variable, nClass) {
    if(variable instanceof nClass) {
        return;
    };

    if((typeof variable) == nClass.name.toLowerCase()) {
        return;
    };

    if(variable.constructor == nClass) {
        return;
    };

    throw new TypeError(`type of ${typeof variable} is not ${nClass.name}`);
};

Object.merge = function(o1, o2) {
    typeTest(o1, Object);
    typeTest(o2, Object);

    for(let i in o2) {
        if(o2[i].constructor == Object) {
            o1[i] = Object.merge(
                (o1[i].constructor == Object ? o1[i] : {}), o2[i]
            );
            
            continue;
        };

        o1[i] = o2[i];
    };

    return o1;
};

class Any {};
class ArrayList {
    type = Any;
    length = 0;

    constructor(type = class {}) {
        this.type = type;
    };

    #test(element) {
        if(this.type != Any) {
            typeTest(element, this.type);
        };
    };

    #rangeTest(index) {
        typeTest(index, Number);

        if((index >= this.length) || (index < 0)) {
            throw new RangeError(`${index} out of range for length ${this.length}`);
        };
    };

    get(index) {
        typeTest(index, Number);
        
        this.#rangeTest(index);
        this.#test(this[index]);

        return this[index];
    };

    add(element) {
        this[this.length++] = element;
    };

    forEach(handler = new Function(element, index, array)) {
        typeTest(handler, Function);

        for(let i = 0; i < this.length; i++) {
            handler(this[i], i, this);
        };
    };
};

class Img extends Image {
    constructor(src) {
        super();

        try {
            typeTest(src, String);
            this.src = src;
        } catch {
            this.src = 'assets/error.png';
        };
    };
};

class CanvasRenderingObject {
    x; y; w; h;
    texture;
    enable = true;
    hover;

    constructor(t, x, y, w, h) {
        try {
            typeTest(t, Img);
            this.texture = t;
        } catch {
            try {
                typeTest(t, String);
                this.texture = new Img(t);
            } catch {
                this.texture = new Img();
            };
        };

        for(let i = 1; i < arguments.length; i++) {
            typeTest(arguments[i], Number);
        };

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    };

    showConduition = () => true;

    draw() {
        if(this.showConduition) {
            ctx.drawImage(this.texture, this.x, this.y, this.w, this.h);
        };
    };
};

class Scene {
    objects = new ArrayList(CanvasRenderingObject);

    tick() {
        this.objects.forEach(e => {
            if(!e.enable) {
                e.hover = false;
            };
            
            if(e.tick) {
                e.tick();
            };
        });
    };

    draw() {
        this.objects.forEach(e => { 
            e.draw();
        });
    };

    clickEvent() {
        this.objects.forEach(e => {
            if((e.hover) && (e.onClick)) {
                e.onClick();
            };
        });
    };
};

class imgpack_interface {
    static button = new Img('assets/UIbuilder/button.png');
    static button_hover = new Img('assets/UIbuilder/button-hover.png');
};

class imgpack_other {
    static space         = new Img('assets/space.png');
    static mouse         = new Img('assets/mouse.png');
    static clicker       = new Img('assets/clicker.png');
    static clicker_hover = new Img('assets/clicker-hover.png');
    static avatar        = new Img();
};

class UIbuilder {
    static button = class extends CanvasRenderingObject {
        fontSize;
        text;

        constructor(x, y, w, h, text, fontSize) {
            super(null, x, y, w, h);
            
            try {
                typeTest(text, String);
                this.text = text;
            } catch {
                this.text = '';
            };

            try {
                typeTest(fontSize, Number);
                this.fontSize = fontSize;
            } catch {
                this.fontSize = 20;
            };
        };

        tick() {
            if(this.hover) {
                if(this.texture != imgpack_interface.button_hover) {
                    this.texture = imgpack_interface.button_hover;
                };
    
                return;
            };
    
            if(this.texture != imgpack_interface.button) {
                this.texture = imgpack_interface.button;
            };
        };
        
        draw() { 
            super.draw();

            ctx.fillStyle = "#000000";
            ctx.font = `${this.fontSize}px monospace`;

            ctx.fillText(
                this.text, 
                this.x + 5,

                this.y + this.h/2 + this.fontSize/4, 
                this.w - 5
            );
        };
    };
};