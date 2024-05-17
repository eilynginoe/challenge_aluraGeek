export const conexionAPI = {
    listarProductos, enviarProducto, eliminarProducto 
}

//async function listarProductos(){
    //const conexion = await fetch("http://localhost:3001/productos");
    //const conexionConvertida = conexion.json();
    //consol.log(conexionConvertida);
    //return conexionConvertida

//}

async function listarProductos() {
    try {
        const conexion = await fetch("http://localhost:3001/productos");
        const conexionConvertida = await conexion.json();
        //console.log(conexionConvertida);
        return conexionConvertida;
    } catch (error) {
        console.error("Error al listar productos:", error);
    }
}


async function enviarProducto(nombre,precio,imagen){
    const conexion = await fetch ("http://localhost:3001/productos",{
        method: "POST",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify({
            nombre:nombre,
            precio: `${precio}`,
            imagen:imagen,
        })
    })

    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

// Añadir la función para eliminar producto
async function eliminarProducto(id) {
    const conexion = await fetch(`http://localhost:3001/productos/${id}`, {
        method: "DELETE"
    });

    if (!conexion.ok) {
        throw new Error("Error al eliminar el producto");
    }
}