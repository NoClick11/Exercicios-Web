async function buscarUsuarios() {
  const url = "https://jsonplaceholder.typicode.com/users";
  try {
    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

    data.forEach((user) => {
      console.log(user.name);
      console.log(user.address.city);
    });
  } catch (error) {
    console.log("Deu erro", error)
  }
}

buscarUsuarios();
