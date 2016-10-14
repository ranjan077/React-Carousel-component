import React from 'react';
import ReactDom from 'react-dom';
var Radium = require('radium');

const style = require('../css/carouselAPP.js')
class ImageComponent extends React.Component{
	render() {
		return <img key={this.props.path}style={style.img} src={this.props.path}/>
	}
}
class CarouselApp extends React.Component {
	constructor() {
		super();

		
		this.state = {
			images: ['images/img1.jpg','images/img2.jpg', 'images/img3.jpg', 'images/img4.jpg'],
			leftBtnIsActive: false,
			rightBtnIsActive: true,
			imageIndex: 0,
			sliderPosition: style.imgcontainer.sliderPosition,
			mainContainerWidth: style.root.width,
			hoverState: false
		}
		style.imgcontainer.width = style.root.width * this.state.images.length;
	}
	slideImageRight() {
		let imageIndex = this.state.imageIndex + 1;
		if(imageIndex < this.state.images.length) {
			this.setState(function(previousState, currentProps) {
				previousState.imageIndex = imageIndex;
				previousState.leftBtnIsActive = true;
				if(imageIndex === this.state.images.length -1) {
					previousState.leftBtnIsActive = true;
					previousState.rightBtnIsActive = false;
				}
				previousState.sliderPosition = {
					left: 0 - 600 * imageIndex
				}
		  		return previousState;
			})
		}
	}
	slideImageLeft() {
		let imageIndex = this.state.imageIndex - 1;
		if(imageIndex >= 0) {
			this.setState(function(previousState, currentProps) {
				previousState.imageIndex = imageIndex;
				previousState.rightBtnIsActive = true;
				if(imageIndex === 0) {
					previousState.leftBtnIsActive = false;
					previousState.rightBtnIsActive = true;
				}

				previousState.sliderPosition = {
					left: 0 - 600 * imageIndex
				}
		  		return previousState;
			})
		}
	}
	onHovered() {
		this.setState(function(previousState, currentProps) {
			previousState.hoverState = true;
			return previousState;
		})
	}
	onMouseout() {
		this.setState(function(previousState, currentProps) {
			previousState.hoverState = false;
			return previousState;
		})
	}
	render() {
		return (
			<div style={style.root}  onMouseOver={this.onHovered.bind(this)} onMouseOut={this.onMouseout.bind(this)}>
				<div style={[style.imgcontainer, this.state.sliderPosition]}>
					{this.state.images.map(function(path){
						return <ImageComponent path={path}  key={path}/>
					})}
				</div>
				<div style={[style.leftBtn,this.state.leftBtnIsActive && this.state.hoverState ?  style.leftBtn.unHideLeftBtn : '']} onClick={this.slideImageLeft.bind(this)}></div>
				<div style={[style.rightBtn,this.state.rightBtnIsActive && this.state.hoverState ?  style.rightBtn.unHideRightBtn : '']} onClick={this.slideImageRight.bind(this)}></div>
			</div>
		);
	}
}
CarouselApp = Radium(CarouselApp);

ReactDom.render(<CarouselApp/>, document.getElementById('reactApp'));