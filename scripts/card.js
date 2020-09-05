import Modal from "./modal.js";

export default function initCard(modalOne) {
  const form1 = document.querySelector(".js_form_1");
  const name = document.querySelector(".js_name");
  const age = document.querySelector(".js_age");
  const phone = document.querySelector(".js_phone");
  const country = document.querySelector(".js_country");
  const description = document.querySelector(".js_description");
  const photo = document.querySelector(".js_photo")
  form1.onsubmit = function (e) {
    e.preventDefault();
    console.log("submit!!!");
    insertDomCard(
      createCard({
        name: name.value,
        age: age.value,
        phone: phone.value,
        country: country.value,
        description: description.value,
        photo: photo.value,
      })
    );
    form1.reset();
    modalOne.close();
  };
}

function createCard(values) {
  const { name, age, phone, country, description, photo } = values;
  const card = document.createElement("article");
  card.classList.add('card')
  card.innerHTML = `
        <figure><img src="${photo}" alt=""></figure>
        <h2> ${name}</h2>
        <div class="d-flex justify-center">
          <h3> ${age}</h3>
          <span> | </span>
          <h3> ${phone}</h3>
        </div>
        <h3> ${country}</h3>
        <div> ${description}</div><br>
        <div class="d-flex justify-center">
          <button class="js_card_edit button">Editar</button>
          <button class="js_card_delete button">Eliminar</button>
        </div>
    `;

  card.querySelector(".js_card_edit").onclick = () => {
    editCard(card, values);
  };

  card.querySelector(".js_card_delete").onclick = () => {
    card.remove();
  };

  return card;
}

function editCard(card, values) {
  const form1 = document.querySelector(".js_form_1");
  const name = document.querySelector(".js_name");
  const age = document.querySelector(".js_age");
  const phone = document.querySelector(".js_phone");
  const country = document.querySelector(".js_country");
  const description = document.querySelector(".js_description");
  const photo = document.querySelector(".js_photo")
  name.value = values.name;
  age.value = values.age;
  phone.value = values.phone;
  country.value = values.country;
  description.value = values.description;
  photo.value = values.photo;

  const modal = new Modal(document.querySelector(".js_modal_1"), {
    accept: function () {
      form1.onsubmit = (e) => {
        e.preventDefault();
        const name = document.querySelector(".js_name");
        const age = document.querySelector(".js_age");
        const phone = document.querySelector(".js_phone");
        const country = document.querySelector(".js_country");
        const description = document.querySelector(".js_description");
        const photo = document.querySelector(".js_photo")
        console.log("aceptar desde el editar!!", card, values);
        card.innerHTML = `
          <figure><img src="${photo.value}" alt=""></figure>
          <h2> ${name.value}</h2>
          <div class="d-flex justify-center">
            <h3> ${age.value}</h3>
            <span> | </span>
            <h3> ${phone.value}</h3>
          </div>
          <h3> ${country.value}</h3>
          <div> ${description.value}</div><br>
          <div class="d-flex justify-center">
            <button class="js_card_edit button">Editar</button>
            <button class="js_card_delete button">Eliminar</button>
          </div>
        </div>  
           `;

        card.querySelector(".js_card_edit").onclick = () => {
          editCard(card, values);
        };

        card.querySelector(".js_card_delete").onclick = () => {
          card.remove();
        };
        modal.close();
      };
    },
    cancel: function () {
      console.log("cancelar!!");
      modal.close();
    },
  });
  modal.open();
}

function insertDomCard(node) {
  const container = document.getElementById("container");
  container.appendChild(node);
}
