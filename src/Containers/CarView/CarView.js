import React, {Component} from "react";
import { Swipeable } from 'react-swipeable'

import CarCard from '../../Components/CarCard/CarCard';
import LoaderSkeletonCard from "../../Components/LoaderSkeletonCard/LoaderSkeletonCard";
import carDetails from "../../data/carsData.js";
import DescriptionViewCard from "../../Components/DescriptionView/DescriptionView";
// 012f3a
class CarView extends Component {

    constructor(props){
        super(props);
        this.state = {
            currentCarCard:{
                transform: `none`,
                transition: `none`,
                swipeSpeed:0,
                swipeDirection:"",
                deltaX:0,
                deltaY:0,
                opacity:1
            },
            carDetails:{
                id : 1234,
                carName : "...",
                dealerName : "...",
                dealerContact : "...",
                carImage : "...",
                Description: {
                  model:"...",
                  about:"..."
                }
            },
            nextCard:{
                isDescription:false
            }
        }
        this.carData =  [...carDetails];
    }

    
    
    componentDidMount() {
        this.loadData()
    }

    loadData( ){
        if(!this.carData.length){
            this.carData =  [...carDetails];
        }
        this.changeStateHandler({
            carDetails:{...this.carData[0]}
        })
        // console.log("loadData",this.state,this.carData[0]);
    }

    changeStateHandler ( newState) {
        this.setState ( (prevState, props) => {
            return newState
        })
    }

    onSwipeMove(event) {
        let transformEffect = null
        if(event.dir == "Right"){
            transformEffect = `translate( ${-event.deltaX}px,${-event.deltaY}px) rotate(10deg)`
        } else if (event.dir == "Left"){
            transformEffect = `translate( ${-event.deltaX}px,${-event.deltaY}px) rotate(-10deg)`
        }
        this.changeStateHandler({
            currentCarCard:{
                transform:  transformEffect,
                transition: "transform  ease-in-out",
                swipeSpeed: event.velocity,
                swipeDirection: event.dir,
                deltaX: -event.deltaX,
                deltaY: -event.deltaY,
                opacity:0.6
            }
        } )
    }
    
    onSwipeEnd(event) {
    // event.persist();
    // console.log(this.state.currentCarCard.swipeSpeed , Math.abs(this.state.currentCarCard.deltaX) , Math.abs(this.state.currentCarCard.deltaX))
    // if(this.state.currentCarCard.swipeSpeed==0 && Math.abs(this.state.currentCarCard.deltaX)==0 && Math.abs(this.state.currentCarCard.deltaX)==0){
    //     return;
    // }
    if(this.state.currentCarCard.swipeSpeed>=0.14 && Math.abs(this.state.currentCarCard.deltaX)>200 && Math.abs(this.state.currentCarCard.deltaX)>200){
        if(this.state.currentCarCard.swipeDirection=="Left"){
            if(this.state.nextCard.isDescription){
                this.rightSwipeHandler()
            } else{
                this.carData.shift()
                this.loadData()
                // console.log("leftswipe",this.state.carDetails)
            }
        } else if (this.state.currentCarCard.swipeDirection=="Right") {
            this.rightSwipeHandler()
        }
        this.changeStateHandler({
            currentCarCard:{
                opacity:0,
                transform:`translate(0px, -20px)`,
                transition: "transform  linear",
            }
        })
        this.loadCardAgainHandler()
     } else {
        this.loadCardAgainHandler()
        }
    }

    rightSwipeHandler(){
        if(this.state.nextCard.isDescription){
            this.carData.shift()
            this.loadData()
            // console.log(this.carData)
            this.loadData(false)
        }
        this.setState( (prevState, props) => {
           return {
                nextCard:{
                    isDescription: !prevState.nextCard.isDescription,
                }   
            }
        })
    }
    
    loadCardAgainHandler(){
        let ref = this
        setTimeout( function(){
            ref.changeStateHandler({
                currentCarCard:{
                    opacity:1,
                    transition: "1.5s",
                }
        })
        },200)
    }

    render ( ) {
        let loaderCss = {
            position:'absolute',
            top: "-320px"
        }

        let mediaStyle = {
            position: "relative",
            transform: this.state.currentCarCard.transform,
            transition: this.state.currentCarCard.transition,
            opacity: this.state.currentCarCard.opacity
        }

        let containerStyle = {
            position: "absolute",
            width: "100%",
            display: "flex",
            "justifyContent": "center",
            "alignItems": "center",
        }

        let nextCard = ( 
            <div style={loaderCss} >
                <LoaderSkeletonCard  />
            </div>
        )
        let currentCard = (
            <CarCard details={{...this.state.carDetails}} />
        )
        if(this.state.nextCard.isDescription){
            currentCard = (
                <DescriptionViewCard details={{...this.state.carDetails}}/>
            )
        }
        
        return (
           <div style={{...containerStyle}}>
               {nextCard}
               <Swipeable 
                style={{position:"absolute",maxHeight: "540px"}}
                onSwiping={this.onSwipeMove.bind(this)}
                preventDefaultTouchmoveEvent={true}
                trackMouse={true}
                onSwiped={this.onSwipeEnd.bind(this)}
                >
                    <div id="media-style" 
                        style={{...mediaStyle}}
                        // onMouseUp={ this.onSwipeEnd.bind(this)}
                        >
                        {currentCard}
                    </div>
                </Swipeable>
           </div> 
        )
    }
}

export default CarView