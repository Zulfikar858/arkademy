const a = 'a';
const promiseku = new Promise((resolve, reject)=>{
    if (a === 'a') {
        resolve('berhasil');
    }else{
        reject('gagal');
    }
});

promiseku.then(res =>{
    console.log(res);
}).catch(err =>{
    console.log(err);
});