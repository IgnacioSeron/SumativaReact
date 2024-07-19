//Import de Hook useState y de css
import { useState } from "react";
import './Css.css'

//Creación de Función para Agregar Notas y los Estados para Almacenarlas
function FormularioParaNotas ({ agregarNota }) {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [importante, setImportante] = useState(false);

    //Función que Maneja Envío de Formulario más preventDefault que Evita que se Envíe Automáticamente
    const EnvioFormulario = (e) => {
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
}

export default FormularioParaNotas;