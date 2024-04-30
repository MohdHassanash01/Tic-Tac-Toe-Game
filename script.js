let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset")
let newGameBtn = document.querySelector('.newGame')

let container = document.querySelector(".container")

let msgContainer = document.querySelector(".message")

let msg = document.querySelector("#msg")

console.log(reset);
// console.log(msg);
// console.log(msgContainer);
// console.log(newGameBtn);



// console.log(boxes);
let turn0 = true  // player 0

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [6,7,8],
    [3,4,5]
]

boxes.forEach(function(ele){
    ele.addEventListener('click',function(){

        if (turn0) {
            ele.innerText = 'O'
            ele.style.color = 'black'
            turn0 = false
            
        }else{
            ele.innerText = 'X'
            ele.style.color = 'red'

            turn0 = true
        }
        ele.disabled = true
        chechWinner()
    })

  
})



function chechWinner(){
    for (let  pattern of winPattern) {

        // console.log(pattern[0],pattern[1],pattern[2]);

        // console.log(
        //     boxes[pattern[0]].innerHTML,
        //     boxes[pattern[1]].innerHTML,
        //     boxes[pattern[2]].innerHTML
        // );

        let pos1val =  boxes[pattern[0]].innerHTML

        let pos2val =  boxes[pattern[1]].innerHTML

        let pos3val = boxes[pattern[2]].innerHTML

if (pos1val != '' && pos2val != ''  && pos3val != '') {
    if (pos1val === pos2val && pos2val===pos3val) {
        // console.log('winner',pos3val);

        showWinner(pos1val)
    }
}

    }
}


function showWinner(winner){
    msg.innerHTML = `Congratulation, winner is ${winner}`
    msgContainer.classList.remove("hide");
    disabledboxes()
    resetbtn.disabled = true

   setTimeout(function(){
    container.style.display = 'none'
   },1500)

   resetbtn.style.display = 'none'

}


function disabledboxes(){
    for (const box of boxes) {
        box.disabled = true
    }
}



function resetfunct(){
    turn0 = true
    enabledboxes()
    msgContainer.classList.add('hide')
    resetbtn.disabled = false

}

function enabledboxes(){
    for (const box of boxes) {
        box.disabled = false
        box.innerHTML = ''
    }
}

newGameBtn.addEventListener('click',resetfunct)
resetbtn.addEventListener("click",resetfunct)


newGameBtn.addEventListener('click',function(){
   resetbtn.style.display = 'inline'
   container.style.display = 'flex'


})



//+++++++++++++++++++++++++

// practice


// const boxes = document.querySelectorAll(".box")

// const reset = document.querySelector("#reset")

// console.log(reset);
// console.log(boxes);

// let turn = true

// let winPattern = [
//         [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
//     [6,7,8],
//     [3,4,5]
// ]


// boxes.forEach(function(box){
//     box.addEventListener('click', function(){
//         if (turn) {
//             box.innerHTML = 'X'
//             turn = false
//         }else{
//             box.innerHTML = 'O'
//             turn = true
//         }

//         box.disabled = true

//         checkWinner()
//     })
// })

// function checkWinner(){
//     for (const pattern of winPattern) {
//     //     console.log(pattern);

//     //     console.log(
//     //         boxes[pattern[0]].innerHTML,
//     //         boxes[pattern[1]].innerHTML,
//     //         boxes[pattern[2]].innerHTML);


//     let pos1 =  boxes[pattern[0]].innerHTML
//     let pos2 =  boxes[pattern[1]].innerHTML
//     let pos3  = boxes[pattern[2]].innerHTML

//     if (pos1 != '' && pos2 != '' && pos3 != '') {
//         if (pos1 === pos2 && pos2 === pos3) {
//             console.log('winner');
//             showwinner(pos1)
//         }
        
//     }

//     }

// }

// let winermsg = document.querySelector('#msg')
// let messageContainer = document.querySelector('.message')

// function showwinner(winner){

// messageContainer.classList.remove('hide')
// winermsg.innerHTML = `winner is ${winner}`
// disabledboxes()


// }

// function disabledboxes(){
//     for (const box of boxes) {
//         box.disabled = true
//     }
// }

// function resetfunct(){
//     turn = true
//     enabledbox()
// messageContainer.classList.add('hide')


// }

// function enabledbox(){
//     for (const box of boxes) {
//         box.disabled = false
//         box.innerHTML = ''
//     }
// }

// reset.addEventListener("click",resetfunct)