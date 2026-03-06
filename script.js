const input = document.getElementById("input");

function check(){
  const value = input.value;
  const upsideDown = value.split("").reverse().join("");

  if(value === upsideDown){
  alert(value + " is a Palindrome");
} else{
  alert(value + " is not a Palindrome")
 }
}