function reversed(str){
    let reversed = '';
    for (let charc of str){
        // console.log(charc);
        reversed = charc + reversed;
        console.log(reversed) 
    } 
}

reversed('pope')