const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const button = document.getElementById("button")
const hexColor1 = document.getElementById("hexColor1")
const hexColor2 = document.getElementById("hexColor2")
const hexColor3 = document.getElementById("hexColor3")
const hexColor4 = document.getElementById("hexColor4")
const color1 = document.querySelector("#color1")
const color2 = document.querySelector("#color2")
const color3 = document.querySelector("#color3")
const color4 = document.querySelector("#color4")
var saveColor1 = document.getElementById("saveColor01")
var saveColor2 = document.getElementById("saveColor02")
var saveColor3 = document.getElementById("saveColor03")
var saveColor4 = document.getElementById("saveColor04")

button.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandom()]
  }
  if(saveColor1.checked==false){
  hexColor1.textContent = hexColor
  color1.style.backgroundColor = hexColor
  }
});
function getRandom() {
  return Math.floor(Math.random() * hex.length)
}

button.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandom()]
  }
  if(saveColor2.checked==false){
  
  hexColor2.textContent = hexColor
  color2.style.backgroundColor = hexColor
  }
});
function getRandom() {
  return Math.floor(Math.random() * hex.length)
}
button.addEventListener("click", function () {
  let hexColor = "#"
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandom()]
  }
  if(saveColor3.checked==false){
  hexColor3.textContent = hexColor
  color3.style.backgroundColor = hexColor
  }
});
function getRandom() {
  return Math.floor(Math.random() * hex.length)
}
button.addEventListener("click", function () {
  let hexColor = "#"
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandom()]
  }
  if(saveColor4.checked==false){
  hexColor4.textContent = hexColor
  color4.style.backgroundColor = hexColor
  }
})
function getRandom() {
  return Math.floor(Math.random() * hex.length)
}
console.log("hello")

function copyValue01(){
  var range= document.createRange()
  range.selectNode(document.getElementById("hexColor1"))
  window.getSelection().removeAllRanges()
  window.getSelection().addRange(range)
  document.execCommand('copy')
  window.getSelection().removeAllRanges()


}
function copyValue02(){
  var range= document.createRange()
  range.selectNode(document.getElementById("hexColor2"))
  window.getSelection().removeAllRanges()
  window.getSelection().addRange(range)
  document.execCommand('copy')
  window.getSelection().removeAllRanges()

}
function copyValue03(){
  var range= document.createRange()
  range.selectNode(document.getElementById("hexColor3"))
  window.getSelection().removeAllRanges()
  window.getSelection().addRange(range)
  document.execCommand('copy')
  window.getSelection().removeAllRanges()
  

}
function copyValue04(){
  var range= document.createRange()
  range.selectNode(document.getElementById("hexColor4"))
  window.getSelection().removeAllRanges()
  window.getSelection().addRange(range)
  document.execCommand('copy')
  window.getSelection().removeAllRanges()
 

}