import React,{Component} from 'react'

class Coleccion extends Component {
    render(){
        const {coleccionId} = this.props.match.params;
        const coleccion = this.props.colecciones.find(x=>coleccionId == x.Id)
        return (
            <div>
                {coleccion ? 
                 <h1>{JSON.stringify(coleccion)}</h1>
                    :
                <h1>{"Coleccion no Existe"}</h1>
                }
            </div>
        )
    }
}

export default Coleccion;