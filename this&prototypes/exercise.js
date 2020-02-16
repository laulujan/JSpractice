const factura = {
    sucursal: "oblatos",
    vendedor: "pedro",
    precioTotal : function(){
        return this.articulos.map((x) => x.precio * x.cantidad)
        .reduce((current, x) => current + x, 0);
        
    },
    liquidar: function(balance){
        return balance - this.precioTotal();

    },
    mostrarTotal : function(){
        return `$${this.precioTotal().toFixed(2)}`
    }
}
const Electronico = function (obj) {
    return{
        id: obj.id || 0,
        nombre: obj.nombre || "",
        precio: obj.precio || 0,
        cantidad: obj.cantidad || 0,
    }
}
const Comestibles = function(obj){
    return{
        id: obj.id || 0,
        nombre: obj.nombre || "",
        precio: obj.precio || 0,
        cantidad: obj.cantidad || 0,
        frescura: obj.frescura || 0,
        calidad: obj.calidad || 0
    }
}

const getItemsElec= function(cantidad){
    const array = [];
    for(let i = 0; i < cantidad; i++){
        array.push(new Electronico({
            id: i + 1,
            nombre: `FacElec ${i+1}`,
            precio: parseFloat((Math.random()*(200 - 1) + 1).toFixed(2), 2),
            cantidad: parseInt(Math.random()*(20 - 1) + 1)
        }))
        
    }
    return array;
}

let facturaElectronicos = function(id, nombre){
    let item = Object.create(factura);
    item.id = id;
    item.nombre = nombre;
    item.articulos = getItemsElec(10) 
    return item;
}
const facturaEneroElec = new facturaElectronicos(1,"enero");
console.log(facturaEneroElec.liquidar(1000));



const getItemsComes = function(cantidad){
    const array = [];
    for(let i = 0; i < cantidad; i++){
        array.push(new Comestibles({
            id: i + 1,
            nombre: `FacComes ${i+1}`,
            precio: parseFloat((Math.random()*(200 - 1) + 1).toFixed(2), 2),
            cantidad: parseInt(Math.random()*(20 - 1) + 1),
            calidad: parseInt(Math.random()*(5-1) +1),
            frescura: parseInt(Math.random()*(5-1) +1),
        })
        );
    }
    return array;
}
const FacturaComes = function(id, nombre){
    let item = Object.create(factura);
    item.id = id;
    item.nombre = nombre;
    item.articulos = getItemsComes(10);
    item.indiceCalidad = function (){
        const x = this.articulos.reduce((current, y) => {
            return(current ={
                frescura: current.frescura + y.frescura,
                calidad: current.calidad + y.calidad,
            })
        }, 
        {frescura: 0, calidad: 0});
        return Math.ceil(x.frescura + x.calidad) / 2/this.articulos.length;
    }
    return item;
}

const facturaEneroComes = new FacturaComes(1, "enero");
console.log(facturaEneroComes.indiceCalidad());