import "../css/display.css"

const Display = () => {
    return(
        <section>
            <div className="principal muestra">
                <div className="titulo" onClick={()=>console.log("OK!")}>
                    <p>Click para <span>mostrar el panel</span></p>
                </div>
                <div className="contenido">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum inventore, maiores doloribus tempore cumque dolore excepturi quo vero iste ipsa hic quos? Recusandae temporibus quod assumenda repellat culpa nesciunt necessitatibus?</p>
                </div>
            </div>
        </section>
    )
}

export default Display