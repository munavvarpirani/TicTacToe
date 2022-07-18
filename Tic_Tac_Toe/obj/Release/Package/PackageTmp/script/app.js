let turn = "X"
let gameover = false;
let Xwin = "Player X is Win !";
let Ywin = "Player 0 is Win !";
let audioTurn = new Audio("ting.mp3")
let resetboard = 0;

const changeTurn = () => {
    return turn == "X" ? "0" : "X"
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText == '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkwin();
        }
    })
})

reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    gameover = false;
    document.getElementById("winstatus").innerHTML = "";

    if (resetboard == 1) {
        document.getElementById('Boxline1').style.backgroundColor = '#11213a';
        document.getElementById('Boxline2').style.backgroundColor = '#11213a';
        document.getElementById('Boxline3').style.backgroundColor = '#11213a';
        document.getElementById('Boxline4').style.backgroundColor = '#11213a';
        document.getElementById('Boxline5').style.backgroundColor = '#11213a';
        document.getElementById('Boxline6').style.backgroundColor = '#11213a';
        document.getElementById('Boxline7').style.backgroundColor = '#11213a';
        document.getElementById('Boxline8').style.backgroundColor = '#11213a';
        document.getElementById('Boxline9').style.backgroundColor = '#11213a';

        document.getElementById('Boxes').style.pointerEvents = 'auto';
    }
});

function checkwin() {
    if (document.getElementById('1').innerHTML == "X" && document.getElementById('2').innerHTML == "X" && document.getElementById('3').innerHTML == "X" ||
        document.getElementById('4').innerHTML == "X" && document.getElementById('5').innerHTML == "X" && document.getElementById('6').innerHTML == "X" ||
        document.getElementById('7').innerHTML == "X" && document.getElementById('8').innerHTML == "X" && document.getElementById('9').innerHTML == "X" ||
        document.getElementById('1').innerHTML == "X" && document.getElementById('4').innerHTML == "X" && document.getElementById('7').innerHTML == "X" ||
        document.getElementById('2').innerHTML == "X" && document.getElementById('5').innerHTML == "X" && document.getElementById('8').innerHTML == "X" ||
        document.getElementById('3').innerHTML == "X" && document.getElementById('6').innerHTML == "X" && document.getElementById('9').innerHTML == "X" ||
        document.getElementById('1').innerHTML == "X" && document.getElementById('5').innerHTML == "X" && document.getElementById('9').innerHTML == "X" ||
        document.getElementById('3').innerHTML == "X" && document.getElementById('5').innerHTML == "X" && document.getElementById('7').innerHTML == "X") {
        document.getElementById("winstatus").innerHTML = Xwin;
        Xbgcolors();
        document.getElementById('Boxes').style.pointerEvents = 'none';
    }
    else if (document.getElementById('1').innerHTML == "0" && document.getElementById('2').innerHTML == "0" && document.getElementById('3').innerHTML == "0" ||
        document.getElementById('4').innerHTML == "0" && document.getElementById('5').innerHTML == "0" && document.getElementById('6').innerHTML == "0" ||
        document.getElementById('7').innerHTML == "0" && document.getElementById('8').innerHTML == "0" && document.getElementById('9').innerHTML == "0" ||
        document.getElementById('1').innerHTML == "0" && document.getElementById('4').innerHTML == "0" && document.getElementById('7').innerHTML == "0" ||
        document.getElementById('2').innerHTML == "0" && document.getElementById('5').innerHTML == "0" && document.getElementById('8').innerHTML == "0" ||
        document.getElementById('3').innerHTML == "0" && document.getElementById('6').innerHTML == "0" && document.getElementById('9').innerHTML == "0" ||
        document.getElementById('1').innerHTML == "0" && document.getElementById('5').innerHTML == "0" && document.getElementById('9').innerHTML == "0" ||
        document.getElementById('3').innerHTML == "0" && document.getElementById('5').innerHTML == "0" && document.getElementById('7').innerHTML == "0") {
        document.getElementById("winstatus").innerHTML = Ywin;
        Ybgcolors();
        document.getElementById('Boxes').style.pointerEvents = 'none';
    }
}

function Xbgcolors() {
    if (document.getElementById('1').innerHTML == "X" && document.getElementById('4').innerHTML == "X" && document.getElementById('7').innerHTML == "X") {
        document.getElementById('Boxline1').style.backgroundColor = 'red';
        document.getElementById('Boxline4').style.backgroundColor = 'red';
        document.getElementById('Boxline7').style.backgroundColor = 'red';
        resetboard = 1;
    }
    else if (document.getElementById('2').innerHTML == "X" && document.getElementById('5').innerHTML == "X" && document.getElementById('8').innerHTML == "X") {
        document.getElementById('Boxline2').style.backgroundColor = 'red';
        document.getElementById('Boxline5').style.backgroundColor = 'red';
        document.getElementById('Boxline8').style.backgroundColor = 'red';
        resetboard = 1;
    }
    else if (document.getElementById('3').innerHTML == "X" && document.getElementById('6').innerHTML == "X" && document.getElementById('9').innerHTML == "X") {
        document.getElementById('Boxline3').style.backgroundColor = 'red';
        document.getElementById('Boxline6').style.backgroundColor = 'red';
        document.getElementById('Boxline9').style.backgroundColor = 'red';
        resetboard = 1;
    }
    else if (document.getElementById('1').innerHTML == "X" && document.getElementById('2').innerHTML == "X" && document.getElementById('3').innerHTML == "X") {
        document.getElementById('Boxline1').style.backgroundColor = 'red';
        document.getElementById('Boxline2').style.backgroundColor = 'red';
        document.getElementById('Boxline3').style.backgroundColor = 'red';
        resetboard = 1;
    }
    else if (document.getElementById('4').innerHTML == "X" && document.getElementById('5').innerHTML == "X" && document.getElementById('6').innerHTML == "X") {
        document.getElementById('Boxline4').style.backgroundColor = 'red';
        document.getElementById('Boxline5').style.backgroundColor = 'red';
        document.getElementById('Boxline6').style.backgroundColor = 'red';
        resetboard = 1;
    }
    else if (document.getElementById('7').innerHTML == "X" && document.getElementById('8').innerHTML == "X" && document.getElementById('9').innerHTML == "X") {
        document.getElementById('Boxline7').style.backgroundColor = 'red';
        document.getElementById('Boxline8').style.backgroundColor = 'red';
        document.getElementById('Boxline9').style.backgroundColor = 'red';
        resetboard = 1;
    }
    else if (document.getElementById('1').innerHTML == "X" && document.getElementById('5').innerHTML == "X" && document.getElementById('9').innerHTML == "X") {
        document.getElementById('Boxline1').style.backgroundColor = 'red';
        document.getElementById('Boxline5').style.backgroundColor = 'red';
        document.getElementById('Boxline9').style.backgroundColor = 'red';
        resetboard = 1;
    }
    else if (document.getElementById('3').innerHTML == "X" && document.getElementById('5').innerHTML == "X" && document.getElementById('7').innerHTML == "X") {
        document.getElementById('Boxline3').style.backgroundColor = 'red';
        document.getElementById('Boxline5').style.backgroundColor = 'red';
        document.getElementById('Boxline7').style.backgroundColor = 'red';
        resetboard = 1;
    }
}
function Ybgcolors() {
    if (document.getElementById('1').innerHTML == "0" && document.getElementById('4').innerHTML == "0" && document.getElementById('7').innerHTML == "0") {
        document.getElementById('Boxline1').style.backgroundColor = 'red';
        document.getElementById('Boxline4').style.backgroundColor = 'red';
        document.getElementById('Boxline7').style.backgroundColor = 'red';
        resetboard = 1;
    }
    else if (document.getElementById('2').innerHTML == "0" && document.getElementById('5').innerHTML == "0" && document.getElementById('8').innerHTML == "0") {
        document.getElementById('Boxline2').style.backgroundColor = 'red';
        document.getElementById('Boxline5').style.backgroundColor = 'red';
        document.getElementById('Boxline8').style.backgroundColor = 'red';
        resetboard = 1;
    }
    else if (document.getElementById('3').innerHTML == "0" && document.getElementById('6').innerHTML == "0" && document.getElementById('9').innerHTML == "0") {
        document.getElementById('Boxline3').style.backgroundColor = 'red';
        document.getElementById('Boxline6').style.backgroundColor = 'red';
        document.getElementById('Boxline9').style.backgroundColor = 'red';
        resetboard = 1;
    }
    else if (document.getElementById('1').innerHTML == "0" && document.getElementById('2').innerHTML == "0" && document.getElementById('3').innerHTML == "0") {
        document.getElementById('Boxline1').style.backgroundColor = 'red';
        document.getElementById('Boxline2').style.backgroundColor = 'red';
        document.getElementById('Boxline3').style.backgroundColor = 'red';
        resetboard = 1;
    }
    else if (document.getElementById('4').innerHTML == "0" && document.getElementById('5').innerHTML == "0" && document.getElementById('6').innerHTML == "0") {
        document.getElementById('Boxline4').style.backgroundColor = 'red';
        document.getElementById('Boxline5').style.backgroundColor = 'red';
        document.getElementById('Boxline6').style.backgroundColor = 'red';
        resetboard = 1;
    }
    else if (document.getElementById('7').innerHTML == "0" && document.getElementById('8').innerHTML == "0" && document.getElementById('9').innerHTML == "0") {
        document.getElementById('Boxline7').style.backgroundColor = 'red';
        document.getElementById('Boxline8').style.backgroundColor = 'red';
        document.getElementById('Boxline9').style.backgroundColor = 'red';
        resetboard = 1;
    }
    else if (document.getElementById('1').innerHTML == "0" && document.getElementById('5').innerHTML == "0" && document.getElementById('9').innerHTML == "0") {
        document.getElementById('Boxline1').style.backgroundColor = 'red';
        document.getElementById('Boxline5').style.backgroundColor = 'red';
        document.getElementById('Boxline9').style.backgroundColor = 'red';
        resetboard = 1;
    }
    else if (document.getElementById('3').innerHTML == "0" && document.getElementById('5').innerHTML == "0" && document.getElementById('7').innerHTML == "0") {
        document.getElementById('Boxline3').style.backgroundColor = 'red';
        document.getElementById('Boxline5').style.backgroundColor = 'red';
        document.getElementById('Boxline7').style.backgroundColor = 'red';
        resetboard = 1;
    }
}

