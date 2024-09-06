
import "../css/lists.css"

const Lists = () => {
    return(
        <section>
            <div>
                <div>
                    <ul className="a">
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Coca Cola</li>
                    </ul>
                </div>
                <div>
                    <ul className="b">
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Coca Cola</li>
                    </ul>
                </div>
                <div>
                    <ol className="c">
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Coca Cola</li>
                    </ol>

                </div>
                <div>
                    <ol className="d">
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Coca Cola</li>
                    </ol>
                </div>
                <div>
                    <ul className="imag">
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Coca Cola</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Lists