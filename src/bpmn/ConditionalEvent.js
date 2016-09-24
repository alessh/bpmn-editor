import React, { Component } from 'react';
import Bpmn from './BPMN';

export default class ConditionalEvent extends Bpmn {
	constructor(props) {
		super(props);

		this.state = {
			rawPath: {
				d: 'M {e.x0},{e.y0} l {e.x1},0 l 0,{e.y2} l -{e.x1},0 Z ' +
					'M {e.x2},{e.y3} l {e.x0},0 ' +
					'M {e.x2},{e.y4} l {e.x0},0 ' +
					'M {e.x2},{e.y5} l {e.x0},0 ' +
					'M {e.x2},{e.y6} l {e.x0},0 ' +
					'M {e.x2},{e.y7} l {e.x0},0 ' +
					'M {e.x2},{e.y8} l {e.x0},0 ',
				height: 36,
				width:  36,
				heightElements: [8.5, 14.5, 18, 11.5, 14.5, 17.5, 20.5, 23.5, 26.5],
				widthElements:  [10.5, 14.5, 12.5]
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
	         	mx: 5.5,
	          	my: 0.222
	        }
      	});

		/*var messagePath = this.drawPath(p, pathData, {
			strokeWidth: 1
		})*/

		return(super.render(path));
	}
}