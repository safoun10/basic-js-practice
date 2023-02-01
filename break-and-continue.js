for(let i = 30; i <= 86; i++){
    console.log(i);
    if(i == 44){
        break;
    }
}


let books = [100, 150, 320, 200, 140, 250, 520, 420, 220]

for(let i = 0 ; i < books.length; i++){
    let price = books[i]
    if(price > 200){
        continue
    }
    console.log(price);
}