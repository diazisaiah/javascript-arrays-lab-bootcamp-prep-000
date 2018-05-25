const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(){
  kittens.push("Ralph")
}
function destructivelyPrependKitten(){
  kittens.unshift("Bob")
}
function destructivelyRemoveLastKitten(){
  kittens.pop("Garfield")
}
function destructivelyRemoveFirstKitten(){
  kittens.shift("Milo")
}
function appendKitten(){
  return [...kittens, "Broom"];
}
function prependKitten(){
  return ["Arnold", ...kittens]
}
function removeLastKitten(){
  return kittens.slice(-1)
}
function removeFirstKitten(){
  return kittens.splice(2,2)
}
