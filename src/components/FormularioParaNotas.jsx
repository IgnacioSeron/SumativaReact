//Import de Hook useState y de css
import { useState } from "react";
import './Css.css'

//Creación de Función para Agregar Notas y los Estados para Almacenarlas
function FormularioParaNotas ({ agregarNota }) {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [importante, setImportante] = useState(false);

    //Función que Maneja Envío de Formulario más preventDefault que Evita que se Envíe Automáticamente
    const handleSubmit = (e) => {
        e.preventDefault();
        //Si la Descripción no Está Vacía se Ejecita la Función agregarNota
        if(descripcion) {
            agregarNota({ titulo, descripcion, importante })
            //Se Reinician los Estados Iniciales de lo que se Debe Rellenar
            setTitulo('');
            setDescripcion('');
            setImportante(false);
        }
    };

    //Se Hace un Retorno con un Formulario para Agregar Las Notas y Se Llama a la Función "handleSubmit" 
    //Además de Introducir los Datos y Se Incluye "required" en la Descripción para Hacerlo Obligatorio
    //Y Cada vez que se Cambia un Valor se Actualiza el Estado de los input y se Actualiza el Valor
    return (
        <form onSubmit={handleSubmit}>
            <input className="Titulo" type="text" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
            <input className="Descripcion" type="text" placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required/>
            <input className="Check" type="checkbox" checked={importante} onChange={(e) => setImportante(e.target.checked)}/>
            <label>Importante!</label>
            <button className="Agregar" type="submit">Agregar</button>
        </form>
    )
};

export default FormularioParaNotas;