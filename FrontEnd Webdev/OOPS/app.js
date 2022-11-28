//example of few prototypes Objects
//Array.prototype --> shows all the template method for array.
//String.prototype --> template methods for strings.

//We can add our own method to the template Object.
String.prototype.myNewFun = function() {
    //console.log(this.toUpperCase());
    return `Converted to Uppercase: ${this.toUpperCase()}`;
}


//factory function example
const makeColor = function(r, g, b) {
    const color ={}; //empty object that i will retrun at the end
    
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function() {
        const{r,g,b} = this;  //destructuring an object;
        return `rgb{${r},${g},${b}}`;
    }
    color.hex = function() {
        const{r,g,b} = this;  //destructuring an object;
        return '#'+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
    }
    return color;
}

//using constructor function and new keyword.
const Color = function(r, g, b) {
    this.r = r;  //here this will point to the newObj created by 'new' keyword.
    this.g = g;
    this.b = b;
};

//now this function will be added as a prototype method.
Color.prototype.rgb = function() {
    const{r,g,b} = this;  //destructuring an object;
    return `rgb(${r}, ${g}, ${b})`;
}
Color.prototype.hex = function() {
    const{r,g,b} = this;  //destructuring an object;
    return '#'+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
}

//this will return an obj.
//also the functions are now under prototype so they are not created everytime during declaration.
const newColor = new Color(221,40,90); 

//JS Classes
class ColorClass {
    constructor(r, g, b, name) {
        this.r= r;
        this.g= g;
        this.b= b;
        this.name= name;
        this.calcHSL();  //calling the below function inside the constructor itself.
    }
    whatColor() {
        console.log(`The color name is: ${this.name}`);
    }
    innerRGB() {
        const{r, g, b} = this;
        return `${r}, ${g}, ${b}`;
    }
    //rgb color construction
    rgb() {
        return(`rgb(${this.innerRGB()})`);
    }
    rgba(a=1) {
        return(`rgba(${this.innerRGB()}, ${a})`);
    }
    //hsl color construction
    hsl() {
        let{h, s, l} = this;
        return `hsl(${h}, ${s}%, ${l}%)`;
    }
    oppositeColor() {
        let{h, s, l} = this;
        let newh = (h+180)%360;
        return `hsl(${newh}, ${s}%, ${l}%)`;
    }
    fullsaturation() {
        let{h, s, l} = this;
        return `hsl(${h}, 100%, ${l}%)`;
    }
    fullLightness() {
        let{h, s, l} = this;
        return `hsl(${h}, ${s}%, 100%)`;
    }
    //somewhere from the net converts rgb to hsl vlaue.
    calcHSL() {
		let { r, g, b } = this;
		// Make r, g, and b fractions of 1
		r /= 255;
		g /= 255;
		b /= 255;

		// Find greatest and smallest channel values
		let cmin = Math.min(r, g, b),
			cmax = Math.max(r, g, b),
			delta = cmax - cmin,
			h = 0,
			s = 0,
			l = 0;
		if (delta == 0) h = 0;
		else if (cmax == r)
			// Red is max
			h = ((g - b) / delta) % 6;
		else if (cmax == g)
			// Green is max
			h = (b - r) / delta + 2;
		else
			// Blue is max
			h = (r - g) / delta + 4;

		h = Math.round(h * 60);

		// Make negative hues positive behind 360°
		if (h < 0) h += 360;
		// Calculate lightness
		l = (cmax + cmin) / 2;

		// Calculate saturation
		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

		// Multiply l and s by 100
		s = +(s * 100).toFixed(1);
		l = +(l * 100).toFixed(1);
		this.h = h;
		this.s = s;
		this.l = l;
	}
}

//creating a new obj with the above class.
const colClass = new ColorClass(34,40,100,'someColor');
const colClass2 = new ColorClass(255,0,255,'redAndGreen');


//Inheritance in JS --> use of extends and super keyword

class Pet {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    call() {
        return `${this.name} is called !`;
    }
}

//cat class
class Cat extends Pet {
    //now if i want to add some additional info for cat
    //we can use super
    constructor(name, age, lifeLeft=9) {
        super(name, age);  //this will refer to the constructor of the parent class
        this.lifeLeft = lifeLeft;
    }
    meow() {
        return "This is from Cat Family";
    }
}

//dog class
class Dog extends Pet {
    bark() {
        return "This is from Dog Family";
    }
}

const cat = new Cat('monty', 9);
const dog = new Dog('wofy', 10);
