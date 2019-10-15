// const tambah = (satu,dua)=>{
//     return satu+dua

// }
// module.exports = {
//      fungsiTambah : (satu,dua)=>{
//          return satu+dua
//      }
// }

class Mobil{
    constructor(tipe,warna){
        this.tipe = tipe
        this.warna = warna
    }
    jalankan(){
        return ("jalankan mobil "+this.tipe+" yang warnanya"+ this.warna)
    }
    berhenti(kondisi){
        if (kondisi == "berhenti"){
        return " mobil "+this.tipe+" yang warnanya "+this.warna+" sudah berhenti"
        }else{
            return " mobil "+this.tipe+" yang warnanya "+ this.warna+" masih jalan"
        }
    }
}

const classMobil = new Mobil ("Jip","Merah")
console.log(classMobil.jalankan())