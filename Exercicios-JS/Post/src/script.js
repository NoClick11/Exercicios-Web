const titulo = document.getElementById("tituloPost");
const texto = document.getElementById("textoPost");
const button = document.getElementById("btnPublicar");
const msgDiv = document.getElementById("mensagem");

async function criarPost() {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";

    const dados = {
      title: titulo.value,
      body: texto.value,
      userId: 1,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    });

    if (!response.ok) {
      throw new Error("Erro ao enviar");
    }

    const data = await response.json();

    console.log(data);

    msgDiv.innerText = `Sucesso! Post criado com ID: ${data.id}`;
    msgDiv.style.display = "block";
    msgDiv.style.backgroundColor = "#d4edda";
    msgDiv.style.color = "#155724";

    titulo.value = "";
    texto.value = "";

  } catch (error) {
    console.error("Erro:", error);
    alert("Falha ao postar.");

    msgDiv.innerText = "Falha ao criar o post.";
    msgDiv.style.display = "block";
    msgDiv.style.backgroundColor = "#f8d7da";
    msgDiv.style.color = "#721c24";
  }
}

button.addEventListener("click", async function () {
  if (titulo.value && texto.value) {
      await criarPost();
  } else {
      alert("Preencha todos os campos!");
  }
});
