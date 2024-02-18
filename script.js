let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".resetBtn");
let result = document.querySelector(".winMsg");
let turn = true;
const winCond = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((indx) => {
    let pos=0;
    indx.addEventListener("click",()=>{
        indx.innerText = turn?"X":"O";
        turn = turn?false:true;
        indx.disabled = true;
        for (cond of winCond) {
            let pos1 = boxes[cond[0]].innerText;
            let pos2 = boxes[cond[1]].innerText;
            let pos3 = boxes[cond[2]].innerText;
            if (pos1 != "" && pos2 != "" && pos3 != ""){
                if (pos1 == pos2 && pos2 == pos3){
                    if (pos1 == "X"){
                        result.innerText = "Player 1 wins";
                        boxes.forEach((btn) => btn.disabled = true);
                    }
                    else if (pos1 == "O"){
                        result.innerText = "Player 2 wins";
                        boxes.forEach((btn) => btn.disabled = true);
                    }
                }
            };
        };
    });
});
reset.addEventListener("dblclick",() => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    })
    result.innerText = "";
});