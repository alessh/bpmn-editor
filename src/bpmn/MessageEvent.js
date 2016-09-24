import React, { Component } from 'react';
import Bpmn from './BPMN';

export default class MessageEvent extends Bpmn {
	constructor(props) {
		super(props);

		this.state = {
			rawPath: {
				d: 'm {mx},{my} l 0,{e.y1} l {e.x1},0 l 0,-{e.y1} z l {e.x0},{e.y0} l {e.x0},-{e.y0}',
				height: 36,
				width:  36,
				heightElements: [6, 14],
				widthElements: [10.5, 21]
		    }
		}
	}

	render() {

 		var path = this.getScaledPath(this.state.rawPath, {
			xScaleFactor: 10.9,
			yScaleFactor: 10.9,
			containerWidth: this.props.width,
			containerHeight: this.props.height,
			position: {
			  mx: 0.235,
			  my: 0.315
			}
		});

		var fill = this.propsisThrowing ? 'black' : 'white';
		var stroke = this.propsisThrowing ? 'white' : 'black';

		/*var messagePath = this.drawPath(p, pathData, {
			strokeWidth: 1,
			fill: fill,
			stroke: stroke
		})*/

		return(super.render(path));
	}
}