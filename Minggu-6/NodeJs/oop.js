class Mobil{
    constructor(type, color){
        this.type = type
        this.color = color
        this.engineStatus = 'off'
    }
    engineStart(){
        this.engineStatus = 'off'
        console.log('engine start, mobilnya warna merah'+this.color+"typenya:"+this.type+" status meisn: "+this.engineStatus)
    }
    static isEngineOn (mobil) {
        if (mobil.engineStatus === 'on'){
            console.log('Engine On')
        }else{
            console.log('Engine Off')
        }
    }
}

const m = new Mobil('Phanter', 'Hitam');

// m.engineStop();

Mobil.isEngineOn(m);

//WITHOUT SET & GET
class Car {
    constructor(color){
    this._color = color;
    }
}

let a = new Car('merah')
console.log(a._color);

//WITH SET & GET
class Car2 {
    constructor(){
        this._color = null
    }
    get color () {
        return`Warna Mobilnya adalah ${this._color}`
    }

    set color (color) {
        this._color =`${color} keren`
       }
}

const car2 = new Car2()

car2.color = 'merah'
console.log(car2.color)