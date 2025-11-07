let hs=0
let gs=0
document.getElementById("hnumber").textContent=0
document.getElementById("gnumber").textContent=0
function h1() {
    hs+=1
    document.getElementById("hnumber").textContent=hs
}
function h2() {
    hs+=2
    document.getElementById("hnumber").textContent=hs
}
function h3() {
    hs+=3
    document.getElementById("hnumber").textContent=hs
}
function g1() {
    gs+=1
    document.getElementById("gnumber").textContent=gs
}
function g2() {
    gs+=2
    document.getElementById("gnumber").textContent=gs
}
function g3() {
    gs+=3
    document.getElementById("gnumber").textContent=gs
}
function newgame(){
    hs=0
    gs=0
    document.getElementById("gnumber").textContent=gs
    document.getElementById("hnumber").textContent=hs
}
document.getElementById("endcredits").textContent="done by Maniharan chary "