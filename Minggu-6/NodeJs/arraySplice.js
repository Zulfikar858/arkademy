//Menambahkan Value ke Array
let bulan = ['januari', 'februari', 'maret', 'juni'];
bulan.splice(3, 0, 'april');
console.log(bulan);

//Replace value array berdasarkan index yang dipilih
bulan.splice(4, 1, 'mei');
console.log(bulan);

//delete Value Array berdasarkan index yang dipilih
bulan.splice(4, 1);
console.log(bulan);

//Delete semua elemen setelah index ke 1
bulan.splice(1);
console.log(bulan);

//Replace 3 elemen dari index ke 0 dengan value baru
let myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
let removed = myFish.splice(0, 3, 'parrot', 'anemone', 'blue');
console.log(myFish);