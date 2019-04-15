const encontrarIdentificacion = ({identificacion}, identificacionBusqueda) => identificacion === identificacionBusqueda;

Vue.component("v-select", VueSelect.VueSelect);
Vue.component("agregar-cliente", {
  props: {lista: Array},
  data: function () {
    return {
      cliente: {
        nombre: '',
        apellido: '',
        correo: '',
        identificacion: '',
        celular: ''
      }
    }
  },
  methods: {
    guardarCliente: function () {
      if(this.validarCampos() && this.validarCedula()){
        this.lista.push(this.cliente);
        this.limpiarCampos();
        alert("Cliente guardado con éxito!")
      } 
      else alert('Recuerde no se puede registrar la misma identificación y todos los datos son obligatorios.')
    },
    validarCampos: function () {
      for (var key in this.cliente) {
        if(this.cliente[key]==='') return false;
      }
      return true;
    },
    validarCedula: function () {
      return this.lista.filter(clienteEvaluar => encontrarIdentificacion(clienteEvaluar, this.cliente.identificacion).length === 0);
    },
    limpiarCampos:function () {
      for (var key in this.cliente) {
        this.cliente[key]='';
      }
    }
  },
  template: '#agregar-cliente'
});


var app = new Vue({
  el: "#factura",
  data: {
    titulo: "Reto factura Vue",
    listaProductos: [
      {
        nombre: 'Tornillos',
        stock: 20,
        precio: 300
      },
      {
        nombre: 'Clavos',
        stock: 30,
        precio: 200
      },
      {
        nombre: 'Tubo',
        stock: 40,
        precio: 500
      }
    ],
    estadosApp: {
      agregarCliente: false,
      editarCliente: false,
      agregarProducto: false,
      editarProducto: false,
      listaProductos: false,
      listaClientes: false,
      agregarFactura: false,
      listaFacturas: false,
      factura: false
    },
    listaClientes: [
      {
        nombre: 'Pacho',
        apellido: 'Cifuentes',
        correo: 'pacho@gmail.com',
        identificacion: '11',
        celular: '320111'
      },
      {
        nombre: 'Andres',
        apellido: 'Pelaez',
        correo: 'andre@gmail.com',
        identificacion: '22',
        celular: '3222'
      }
    ],
    clienteFactura:{}
  },
  methods: {
    cerrarTodo: function () {
      for (var key in this.estadosApp) {
        this.estadosApp[key] = false;
      }
    }
  }, beforeMount() {
    this.estadosApp.factura = true;
  },
});