const mainContainerWidth = 600;
const imgcontainerWidth = mainContainerWidth * 2;
let style = {
	root: {
		position: 'relative',
		top: 60,
		width: mainContainerWidth,
		height: 500,
		marginTop: 0,
		marginBottom: 0,
		marginLeft: 'auto',
		marginRight: 'auto',
		overflow: 'hidden'

	},
	imgcontainer: {
		position: 'absolute',
		sliderPosition: {
			left: 0
		},
		transitionProperty:'left',
		transitionDuration: '1s'
	},
	img: {
		float: 'left'
	},
	leftBtn: {
		position:'absolute',
		left:0,
		width:67,
		height:86,
		backgroundImage: "url('/images/arrow-left.png')",
		backgroundRepeat: 'no-repeat',
		backgroundSize:65,
		top: 145,
		cursor: 'pointer',
		visibility:'hidden',
		opacity: 0,
		unHideLeftBtn: {
			visibility: 'visible',
			opacity: 1
		},
		transitionProperty:'all',
		transitionDuration: '0.5s'
	},
	rightBtn: {
		position:'absolute',
		right:0,
		width:67,
		height:86,
		backgroundImage: "url('/images/arrow-right.png')",
		backgroundRepeat: 'no-repeat',
		backgroundSize:65,
		top: 145,
		cursor: 'pointer',
		visibility:'hidden',
		opacity: 0,
		unHideRightBtn: {
			visibility: 'visible',
			opacity: 1
		},
		transitionProperty:'all',
		transitionDuration: '0.5s'
	}
}
module.exports = style;