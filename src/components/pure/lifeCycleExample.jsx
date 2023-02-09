/**
 * Ejemplo de compoente de tipo clase que dispone de los
 * metodos de ciclo de vida
 */
import React, { Component } from "react";
import PropTypes from "prop-types"

class LifeCycleExample extends Component{
    constructor(props) {
        super(props)
        console.log("Constructor: Cuando se instancia el componente")
    }

    componentWillMount(){
        console.log("WILLMOUNT: Antes del montaje del componente")
    }

    componentDidMount(){
        console.log("DIDMOUNT: Justo al acabar de montar el componente antes de renderizarlo")
    }

    componentWillReceiveProps(nextProps){
        console.log("WillReceiveProps: Si va arecibir nuevas props")
    }

    shouldComponentUpdate(nextProps, nextState){
        // return true o false 
        // Controlar si el componente debe o no actualizarse
    }

    componentWillUpdate(nextProps, nextState){
        console.log("WillUpdate: Justo antes de actualizarse")
    }

    componentDidUpdate(nextProps, nextState){
        console.log("WillUpdate: Justo despues de actualizarse")
    }

    componentWillUnmount(){
        console.log("WillUnmount: Justo antes de desaparecer")
    }
    
    render(){
        return(
            <div>

            </div>
        )
    }
}