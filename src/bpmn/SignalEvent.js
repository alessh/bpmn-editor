import React, { Component } from 'react';
import Bpmn from './BPMN';

export default class SignalEvent extends Bpmn {
	constructor(props) {
		super(props);

		this.state = {
			rawPath: {
		      d: 'M {mx},{my} l {e.x0},{e.y0} l -{e.x1},0 Z',
		      height: 36,
		      width: 36,
		      heightElements: [18],
		      widthElements: [10, 20]
		    }
		}
	}

	render() {

 		var path = this.getScaledPath(this.state.rawPath, {
			xScaleFactor: 5,
			yScaleFactor: 5,
			containerWidth: this.props.width,
			containerHeight: this.props.height,
			position: {
			  mx: 5.235,
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