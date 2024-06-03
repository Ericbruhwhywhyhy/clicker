let pressednumb = 0
let pressHighscore = 0
let beyond16 = new Howl ({
  src : ["./sfx/combo_16.ogg"],
  preload: true
})
let click = new Howl({
  src: ["./sfx/harddrop.ogg"],
  preload: true
})
beyond16.once("load", function(){
document.querySelector("#load").remove()
})
function iclicked(){
	pressednumb += 1
	let combo = new Howl({
	  src: ["./sfx/combo_" + pressednumb + ".ogg"]
	})
	if (pressednumb > localStorage.pressHighscore) {
	  document.querySelector("#youdidit").innerHTML = "YOU BROKE YOUR HIGH SCORE :D"
	  pressHighscore = pressednumb
	  localStorage.pressHighscore = pressednumb
	}
document.getElementById("clicknum").innerHTML = pressednumb
combo.play()
click.play()
if (pressednumb > 16){
beyond16.play()
combo.stop()
combo.unload()
}
}
document.querySelector("#highscore").innerHTML = localStorage.getItem("pressHighscore")

window.onload = function(){
  if (pressHighscore > 0) {
  pressHighscore = localStorage.getItem("pressHighscore")
  }
}
async function yes(){
}
yes()