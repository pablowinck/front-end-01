const btn = document.getElementById("btn");
const titulo = document.getElementById("title");
const subtitulo = document.getElementById("subtitle");

btn.addEventListener("click", (e) => {
  const container = document.createElement("div");

  container.classList.add("container");

  container.innerHTML = ` 
        <div class="div-container">
            <h1 class="container-title">${titulo.value}</h1>
            <h2 class="container-subtitle">${subtitulo.value}</h2>
        </div>
      `;

  document.body.appendChild(container);
});
