const pertambahan = (num1,num2) => {
    return num1+num2;
}

const perkalian = (num1,num2) =>{
    return num1*num2;

}

const pembagian = (num1,num2) =>{
    return num1/num2;
}

const luasAlasSegitiga = (a,t) =>{
    return 0.5*a*t;
}

const luasLingkaran = (r) =>{
    return 3.14*r*r;
}


const siswa = [
    {
        "nama":"Achmad Zulfikar",
        "kelas":"XI-RPL-1"
        
    },
    {
        "nama":"Akmal Widad",
        "kelas":"XI-RPL-1"
    
    },
    {
        "nama":"Nanda riansyah",
        "kelas":"XI-RPL-1"
        
    },
    {
        "nama":"Vanya Amany",
        "kelas":"XI-RPL-1"
        
    },
    {
        "nama":"Muhammad Azis",
        "kelas":"XI-RPL-1"
        
    },
    {
        "nama":"Ananda Zidane",
        "kelas":"XI-RPL-1"
        
    },
    {
        "nama":"Wisman Ndraha",
        "kelas":"XI-RPL-1"
        
    },
    {
        "nama":"Muhammad Akmal",
        "kelas":"XI-RPL-1"
        
    },
    {
        "nama":"Rendi Fadillah",
        "kelas":"XI-RPL-1"
        
    }, 
    {
        "nama":"Rizal Nurul",
        "kelas":"XI-RPL-1"
        
    },
];

let x;

for(x in siswa){
    let namaSiswa = siswa[x].nama
    let kelasSiswa =siswa[x].kelas
    let divider = "<div><span class='nama-siswa'>"+namaSiswa+"</span><span class='kelas-siswa'>"+kelasSiswa+"<span></div>";
    document.getElementById('siswa-rpl').innerHTML += divider
                     
}

