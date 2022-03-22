const renderMenuPage = (() => {
    //container
    const contentContainer = document.querySelector("#content");
    const menu = document.createElement("div");
    menu.setAttribute("id", "menu");
    menu.setAttribute("data-tab-content", "");
    menu.innerHTML = `
    <div class="hero">
    <h1>Menu</h1>
    <img src="./img/chef.png" alt="chef" width="50" height="50" />
  </div>
  <div class="menu-container">
    <div class="menu-item">
      <img src="./img/hamburger.png" alt="hamburguesa" />
      <div class="item-content">
        <h4>Hamburger: <span>$2.49</span></h4>
        <p>
        Pan, hamburguesa, tomate, cebolla, lechuga y nuestra secreta
        receta de familia.
        </p>
      </div>
    </div>
    <div class="menu-item">
      <img src="./img/cheeseburger.png" alt="hamburguesa con queso" />
      <div class="item-content">
        <h4>Cheeseburger: <span>$2.99</span></h4>
        <p>Similar a nuestra hamburguesa, pero con queso</p>
      </div>
    </div>
    <div class="menu-item">
      <img src="./img/double-cheeseburger.png" alt="doble queso" />
      <div class="item-content">
        <h4>Double Cheeseburger: <span>$3.49</span></h4>
        <p>Similar a nuestra hamburguesa con queso, pero con una hamburguesa extra.</p>
      </div>
    </div>
    <div class="menu-item">
      <img src="./img/steak.png" alt="filete" />
      <div class="item-content">
        <h4>Steak: <span>$11.99</span></h4>
        <p>Un bistec jugoso hecho como a ti te gusta.</p>
      </div>
    </div>
    <div class="menu-item">
      <img src="./img/ribs.png" alt="Barbacoa" />
      <div class="item-content">
        <h4>BBQ Ribs: <span>$8.99</span></h4>
        <p>Costillas a la barbacoa con complementos de su elección.</p>
      </div>
    </div>
    <div class="menu-item">
      <img src="./img/grilled-cheese.png" alt="Tostada" />
      <div class="item-content">
        <h4>Grilled Cheese Sandwich: <span>$4.99</span></h4>
        <p>
        Sándwich de queso tostado y grillado, bañado en nuestro especial
        salsa.
        </p>
      </div>
    </div>
    <div class="menu-item">
      <img src="./img/caesar-salad.png" alt="Ensalada" />
      <div class="item-content">
        <h4>Caesar Salad: <span>$7.99</span></h4>
        <p>
        Tu típica ensalada césar que viene con tu elección de
        aderezos.
        </p>
      </div>
    </div>
    <div class="menu-item">
      <img src="./img/french-fries.png" alt="Papas fritas" />
      <div class="item-content">
        <h4>French Fries: <span>$1.99</span></h4>
        <p>
        A veces no quieres comer tu hamburguesa solo, ¿por qué no agregar
        ¿algunas papas fritas?
        </p>
      </div>
    </div>
  </div>`;
  
    contentContainer.appendChild(menu);
  })();
  
  export { renderMenuPage };