const button = document.getElementById("btnGerar");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const pais = document.getElementById("pais");
const avatar = document.getElementById("avatar");

async function dadosUsuario() {
  const url = "https://randomuser.me/api/";
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Erro ao gerar");
    }

    const data = await response.json();

    console.log(data);
    console.log(data.results[0].name.first);
    const primeiroNome = data.results[0].name.first;
    const ultimoNome = data.results[0].name.last;

    nome.innerText = `${primeiroNome} ${ultimoNome}`;
    email.innerText = data.results[0].email;
    pais.innerText = data.results[0].location.country;
    avatar.src = data.results[0].picture.large
  } catch (error) {
    console.error("Deu erro", error);
    alert("Erro, visualize no console");
  }
}

button.addEventListener("click", async function () {
  dadosUsuario();
});
