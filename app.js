const leftTextArea = document.querySelector("#leftTextArea")
const rightTextArea = document.querySelector("#rightTextArea")
const encodeButton = document.querySelector("#encodeButton")
const decodeButton = document.querySelector("#decodeButton")
const cleanButton = document.querySelector("#cleanButton")

runEventListeners()
function runEventListeners(){
  encodeButton.addEventListener("click",encode)
  decodeButton.addEventListener("click",decode)
  cleanButton.addEventListener("click",clean)
}

function encode(){
    // let password = leftTextArea.value
    // let encodedPassword = window.btoa(password)
    // rightTextArea.value = encodedPassword
    if(leftTextArea.value==''){
        alert("enter a password")
        return;
    }
    rightTextArea.value = btoa(leftTextArea.value)
    leftTextArea.value=''
    // console.log(encodedPassword)
}

function decode(){
    leftTextArea.value = atob(rightTextArea.value)
    rightTextArea.value=''
}
function clean(){
    leftTextArea.value=""
    rightTextArea.value=""
}