import React, { Component } from 'react';
import Bpmn from './BPMN';

export default class LinkEvent extends Bpmn {
	constructor(props) {
		super(props);

		this.state = {
			rawPath: {
		      d: 'm {mx},{my} 0,{e.y0} -{e.x1},0 0,{e.y1} {e.x1},0 0,{e.y0} {e.x0},-{e.y2} -{e.x0},-{e.y2} z',
		      height: 36,
		      width: 36,
		      heightElements: [4.4375, 6.75, 7.8125],
		      widthElements: [9.84375, 13.5]
		    }
		}
	}

	render() {

 		var path = this.getScaledPath(this.state.rawPath, {
        xScaleFactor: 10,
        yScaleFactor: 10,
        containerWidth: this.props.width,
        containerHeight: this.props.height,
        position: {
          mx: 10.57,
          my: 0.263
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