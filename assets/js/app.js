

let cat = document.getElementById('cat');
let walk = 0; 
let area = window.innerWidth;
let turning = true; 


catWalk = () => {
console.log("Ich funktioniere")
setInterval(() => {
    if (walk > area - 300) {
        turning = false;
    }  if (turning) {
    cat.style.left = walk + "px";
    cat.style.transform = "rotate(0deg)";
    walk += 15;
    } else if (!turning){
        if (walk <=0) {
            turning = true;
        } walk -=15;
        cat.style.left = walk + "px";
        cat.style.transform = "rotateY(180deg)";
    }

}, 350);
}


pause = () => {
    clearInterval();
}


turn = () => {
 turning = !turning;   
}


catSpeed = () => {
    catWalk(200);
}
