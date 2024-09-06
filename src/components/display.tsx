import { useState } from "react"
import "../css/display.css"

const Display = () => {

    const [muestra, setMuestra] = useState(false);

    return(
        <section>
            <div className="principal">
                <div className="titulo" onClick={()=>setMuestra(!muestra)}>
                    <p>Click para <span>mostrar el panel</span></p>
                </div>
                <div className={"contenido" + (muestra ? " muestra" : " no_muestra")}>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum inventore, maiores doloribus tempore cumque dolore excepturi quo vero iste ipsa hic quos? Recusandae temporibus quod assumenda repellat culpa nesciunt necessitatibus?</p>
                </div>
            </div>
        </section>
    )
}

export default Display