import React, { Component } from 'react';
import Bpmn from './BPMN';

export default class CompensateEvent extends Bpmn {
	constructor(props) {
		super(props);

		this.state = {
			rawPath: {
		      d: 'm {mx},{my} {e.x0},-{e.y0} 0,{e.y1} z m {e.x1},-{e.y2} {e.x2},-{e.y3} 0,{e.y1} -{e.x2},-{e.y3} z',
		      height: 36,
		      width: 36,
		      heightElements: [6.5, 13, 0.4, 6.1],
		      widthElements: [9, 9.3, 8.7]
		    }
		}
	}

	render() {

 		var path = this.getScaledPath(this.state.rawPath, {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: this.props.width,
        containerHeight: this.props.height,
        position: {
          mx: 0.22,
          my: 0.5
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