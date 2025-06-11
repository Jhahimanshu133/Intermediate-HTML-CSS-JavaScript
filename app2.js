
document.getElementById("contactForm").addEventListener("submit", function(e) {
  const email = document.getElementById("email").value;
  const emailPattern =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    alert("done and sussuful");
    e.preventDefault();
  }
  
});

function addTask() {
  const input = document.getElementById("taskInput");
  const imageInput = document.getElementById("imageInput");
  const task = input.value.trim();

  if (task === "") return;

  const li = document.createElement("li");
  li.textContent = task;

  const file = imageInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      li.appendChild(img);
    };
    reader.readAsDataURL(file);
  }

  const btn = document.createElement("button");
  btn.textContent = "Delete";
  btn.onclick = () => li.remove();

  li.appendChild(btn);
  document.getElementById("taskList").appendChild(li);

  input.value = "";
  imageInput.value = "";
}



