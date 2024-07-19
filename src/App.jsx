import React, { useState } from 'react';
import './components/Css.css'
import FormularioParaNotas from './components/FormularioParaNotas';
import PostIt from './components/PostIt';

function App() {
    //Dentro del Componente App se Hacen Funciones para Eliminar y Agregar las Notas
    const [notas, setNotas] = useState([]);
    const agregarNota = (nota) => {
        setNotas([...notas, nota]);
    };
    const elimianarNota = (index) => {
        const nuevaNota = notas.filter((_,i) => i !==index);
        setNotas(nuevaNota)
    }
    return(
        //Se pasa la Función de Agregar Notas y se Usa el prop agregarNota
        //Como ya se Estructuró la Nota se puede Ejecutar la Función de Eliminar y Renderizar la Nota
        //Se usa index Para Identificar Cada Nota
        <div className="Main">
            <h1 className="h1">Post It Simulator!</h1>
            <FormularioParaNotas agregarNota={agregarNota} />
                <div className="ContenedorNotas">
                    <div className="ListaNotas">
                        {notas.map((nota, index) => (
                            <PostIt key={index} nota={nota} eliminarNota={() => elimianarNota(index)} />
                        ))}
                    </div>
                </div>
        </div>
    );
};
export default App;