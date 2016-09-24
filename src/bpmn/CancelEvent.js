import React, { Component } from 'react';
import Bpmn from './BPMN';

export default class CancelEvent extends Bpmn {
	constructor(props) {
		super(props);

		this.state = {
			rawPath: {
		      d: 'm {mx},{my} -{e.x1},0 0,{e.x0} {e.x1},0 0,{e.y1} {e.x0},0 ' +
		        '0,-{e.y1} {e.x1},0 0,-{e.y0} -{e.x1},0 0,-{e.y1} -{e.x0},0 z',
		      height: 36,
		      width: 36,
		      heightElements: [4.75, 8.5],
		      widthElements: [4.75, 8.5]
		    }
		}
	}

	render() {

 		var path = this.getScaledPath(this.state.rawPath, {
        xScaleFactor: 1.0,
        yScaleFactor: 1.0,
        containerWidth: this.props.width,
        containerHeight: this.props.height,
        position: {
          mx: 0.638,
          my: -0.055
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