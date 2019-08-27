let todo = [
{
    title:"Rendang",
    description:"Rendang atau randang adalah masakan daging dengan bumbu rempah-rempah yang berasal dari Minangkabau."
},
{
    title:"Sup buntut",
    description:"Sup buntut dibuat dengan ekor sapi. Sedikitnya ada lima versi sup buntut yang populer di seluruh dunia:"
},
{
    title:"Kepiting saus Padang",
    description:"Kepiting saus Padang atau kepiting Padang adalah sebuah hidangan makanan laut Indonesia yang terdiri dari kepiting yang disajikan dengan saus Padang yang panas dan pedas."
},
{
    title:"Kerak telor",
    description:"Kerak telur adalah makanan asli daerah Jakarta, dengan bahan-bahan beras ketan putih, telur ayam, ebi yang disangrai kering ditambah bawang merah goreng,"
},
{
    title:"Ramen",
    description:"Ramen adalah masakan mi kuah Jepang yang berasal dari China. Orang Jepang juga menyebut ramen sebagai chuka soba atau shina soba karena soba atau o-soba dalam bahasa Jepang sering juga berarti mi."
},
]

class TodoList{
    item = document.getElementById('todo-list')
    content = document.getElementById('todo-description')

    listItem = ()=>{
       for(let x in todo){
       this.item.innerHTML+='<div class="list-item">'+todo[x].title+'</div>'
       }
    }
    setDisplay = (n=0)=>{
      this.content.innerHTML = '<div class="title">'+todo[n].title+'</div>\
      <div class="container">'+todo[n].description+'</div>'
    }
}

const todoList = new TodoList()