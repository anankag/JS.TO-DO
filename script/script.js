let deleteButton = document.createElement("button");
deleteButton.innerText = "Delete All";
const button = document.querySelector("#btn");
deleteButton.style.backgroundColor = "red";
deleteButton.setAttribute("id", "dlt");
document.body.appendChild(deleteButton);
const input = document.querySelector("#myInput");
button.addEventListener("click", (event) => {
  const value = document.querySelector("#myInput").value;
  const div = document.createElement("div");
  div.setAttribute("class", "box");
  const checkbox = document.createElement("input");
  const label = document.createElement("label");

  const deleteItem = document.createElement("button");
  deleteItem.innerText = "Delete Me";

  checkbox.setAttribute("type", "checkbox");
  div.appendChild(checkbox);
  div.appendChild(label);
  label.innerHTML = value;
  document.body.appendChild(div);
  div.append(deleteItem);
  div.addEventListener("click", (event) => {
    event.stopPropagation();
    div.classList.toggle("lineThrough");
  });
  const divBoxes = document.querySelectorAll(".box");
  deleteButton.addEventListener("click", () => {
    divBoxes.forEach((box) => {
      box.remove();
      deleteItem.remove();
    });
  });
  deleteItem.addEventListener("click", function () {
    divBoxes.forEach(function () {
      div.remove();
    });
  });

  input.value = ''

});
