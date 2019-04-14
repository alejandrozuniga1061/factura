Vue.component("super-componente", {
  props: ["nombre"],
  data: function () {
    return {
      likes: 300
    };
  },
  methods: {
    addLike: function () {
      this.likes++;
    }
  },
  template: `<div style="border: 1px solid blue;" class="col-md-6">
          <h3>Soy un super componente y me llamo {{ nombre }} 🍉</h3>
          <button @click="addLike()">👍 Likes {{ likes }}</button>
      </div>`
});


Vue.component("agregar-cliente", {
  props: [],
  data: function () {
    return {
      likes: 300
    };
  },
  methods: {
    addLike: function () {
      this.likes++;
    }
  },
  template: `<div class="container register">
    <div class="row">
      <div class="col-md-3 register-left">
        <img src="./ferreteria.jpg" style="width: 100%;" alt="" />
        <h3>Reto Factura</h3>
      </div>
      <div class="col-md-9 register-right">
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <h3 class="register-heading">Agregar cliente</h3>
            <div class="row register-form">
              <div class="col-md-6">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Nombre *" value="" />
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Apellido *" value="" />
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" placeholder="Identificación *" value="" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input type="email" class="form-control" placeholder="Correo *" value="" />
                </div>
                <div class="form-group">
                  <input type="text" minlength="10" maxlength="10" name="txtEmpPhone" class="form-control"
                    placeholder="Celular *" value="" />
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Enter Your Answer *" value="" />
                </div>
                <input type="submit" class="btnRegister" value="Register" @click/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
});


Vue.component("v-select", VueSelect.VueSelect);
var app = new Vue({
  el: "#factura",
  data: {
    titulo: "Reto factura Vue",
    listaProductos : [

    ],
    estadosApp: {
      agregarCliente: false,
      editarCliente: false,
      agregarProducto: false,
      editarProducto: false,
      listaProductos: false,
      listaClientes:false,
      agregarFactura:false,
      listaFacturas: false,
      factura:false
    }
  },
  methods: {    
    cerrarTodo : function(){
      for(var key in this.estadosApp) {
        this.estadosApp[key] = false;
    }
    }
  }, beforeMount() {
    this.estadosApp.agregarCliente = true;
  },
});