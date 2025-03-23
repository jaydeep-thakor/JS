let boxes = document.querySelectorAll(".box");
let turn = true;

let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {

    if (turn) {
      box.innerText = "X";
      turn = false;
    } else {
      box.innerText = "O";
      turn = true;
    }
    box.disabled = true;



    for(let patterns of winPatterns){

        let patternValue1 = boxes[patterns[0]].innerText;
        let patternValue2 = boxes[patterns[1]].innerText;
        let patternValue3 = boxes[patterns[2]].innerText;
        
        if(patternValue1 != "" && patternValue2 != "" && patternValue3 != ""){
            if(patternValue1 === patternValue2 && patternValue2 === patternValue3){
                alert("Winner")
            }
        }


        
    }


    
  });
});
