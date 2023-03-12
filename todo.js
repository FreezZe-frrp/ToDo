let input = document.getElementById("input");
let button = document.getElementById("button");
let output = document.getElementById("output");

// output.innerHTML = "<li> </li>"

button.addEventListener("click", () => {
  let value = input.value;
  let listInput = document.createElement("li");
  let del = document.createElement("button");
  del.innerText = "x";
  listInput.innerText = value + "  ";
  listInput.appendChild(del);
  output.appendChild(listInput);

  del.addEventListener("click", () => {
    output.removeChild(listInput);
  });

  input.value = "";
});
