import React from "react"
import { connect } from "react-redux";

const Titulares = ({titulares, quitarTitular}) => (
    <section>
        <h2>¡Gracias por su seleccion!</h2>
        <br></br>
        <br></br>
        <div className="cancha" >
            {
                titulares.map(j => (
                    <article className="titular" key={j.id}>
                        <div>
                            <img src={j.foto} alt={j.nombre}/>
                            <button onClick={() => quitarTitular(j)}>X</button>
                        </div>
                        <p>{j.nombre}</p>
                    </article>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = state => ({
    titulares: state.titulares
})

const mapDispatchToProps = dispatch => ({
    quitarTitular(jugador) {
        dispatch({
            type: "QUITAR",
            jugador
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Titulares)