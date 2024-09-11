
import "../css/zindex.css";

const Zindex = () => {
    return(
        <div className="div-base">
            <div>
                <h1>Prueba de z-index / stack order elementos</h1>
                <img className="tree" src="img_tree.png"/>
                <p>Dado que la imagen tiene un z-index de -1, aparece detrás del texto</p>
            </div>
            <div>
                <div className="div-1">Caja negra z-index: 1</div>
                <div className="div-2">Caja gris z-index: 3</div>
                <div className="div-3">Caja verde z-index: 2</div>
            </div>
            
        </div>
    )
}

export default Zindex