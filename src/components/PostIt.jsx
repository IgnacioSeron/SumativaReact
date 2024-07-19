import './Css.css'

//Se Crea la Estructura de la Nota y se Agrega el Botón Eliminar, de la Función que ya fué Creada
function PostIt({ nota, eliminarNota }) {
    return (
        <div className={`nota ${nota.importante ? 'importante' : ''}`}>
            <h2>{nota.titulo}</h2>
            <p>{nota.descripcion}</p>
            <button className="boton" onClick={eliminarNota}>x</button>
        </div>
    );
};

export default PostIt;