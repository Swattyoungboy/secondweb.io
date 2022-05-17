const btnop1 = document.getElementById('op-1');
const btnop2 = document.getElementById('op-2');
const btnop3 = document.getElementById('op-3');

const op1Text = document.getElementById('op-1-text');
const op2Text = document.getElementById('op-2-text');
const op3Text = document.getElementById('op-3-text');

btnop1.onclick = function(){
    op1Text.style.display = "inline";
    op2Text.style.display = "none";
    op3Text.style.display = "none";

    btnop1.style.borderBottom = "5px solid #1f0000";
    btnop2.style.borderBottom = "none";
    btnop3.style.borderBottom = "none";
}

btnop2.onclick = function(){
    op1Text.style.display = "none";
    op2Text.style.display = "inline";
    op3Text.style.display = "none";

    btnop1.style.borderBottom = "none";
    btnop2.style.borderBottom = "5px solid #1f0000";
    btnop3.style.borderBottom = "none";
}

btnop3.onclick = function(){
    op1Text.style.display = "none";
    op2Text.style.display = "none";
    op3Text.style.display = "inline";

    btnop1.style.borderBottom = "none";
    btnop2.style.borderBottom = "none";
    btnop3.style.borderBottom = "5px solid #1f0000";
}