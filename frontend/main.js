import "./style.css";

const app = document.querySelector("#app");

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

btn1.addEventListener("click", () => {
  fetch("http://127.0.0.1:3000/message", {
    method: "GET",
    // credentials: "include",
  })
    .then((response) => response.json())
    .then(
      (data) =>
        (app.innerHTML = `
        <div>
          <h1>${data.message}</h1>
        </div>
      `)
    )
    .catch(
      () =>
        (app.innerHTML = `
        <div>
          <h1>u shall not pass</h1>
        </div>
      `)
    );
});

btn2.addEventListener("click", () => {
  fetch("http://127.0.0.1:3000/delete", { method: "DELETE" })
    .then((response) => response.json())
    .then(
      (data) =>
        (app.innerHTML = `
        <div>
          <h1>${data.message}</h1>
        </div>
      `)
    )
    .catch(
      () =>
        (app.innerHTML = `
        <div>
          <h1>delete is not allowed</h1>
        </div>
      `)
    );
});
