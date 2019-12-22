import React, {Component, Fragment} from 'react';

import './Main.css'
import CarView from '../CarView/CarView';
import Backdrop from "../../Components/BackDrop/BackDrop";

class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            backDrop: true,
            blur:`blur(5px)`
        }
    }

    closeBackDropHandler(){
        this.setState( (prevState, props) => {
            return {
                backDrop: false,
                blur:"none"
            }
        })
    }
    render () {
        let blurCss = {
            filter: this.state.blur
        }
        return (
            <Fragment>
                <Backdrop show={this.state.backDrop} clicked = {this.closeBackDropHandler.bind(this)} />
                <div style={{...blurCss}}  className= "Main">
                    <CarView />
                </div>
            </Fragment>
        );
    }
}

export default Main;