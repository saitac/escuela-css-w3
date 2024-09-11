
import "../css/position.css"

const Position = () => {
    return (
        <div>
            <div>
                <h1>**** POSITION ****</h1>
                <p className="estatico">Estatico</p>
                <p className="relativo">Relativo</p>
                <p className="fijo">Fijo</p>
                <div className="absoluto1">DIV externo
                    <div className="absoluto2">DIV absoluto interno</div>
                </div>
                <div className="sticky">Sticky</div>  
            </div>
        </div>
    )
}

export default Position