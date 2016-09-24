import React, { Component } from 'react';

export default class BPMN extends Component {

	getScaledPath(rawPath, param) {

		// positioning
		// compute the start point of the path
		var mx, my;

		if (param.abspos) {
		  mx = param.abspos.x;
		  my = param.abspos.y;
		} else {
		  mx = param.containerWidth * param.position.mx;
		  my = param.containerHeight * param.position.my;
		}

		var coordinates = {}; //map for the scaled coordinates
		if (param.position) {

		  // path
		  var heightRatio = (param.containerHeight / rawPath.height) * param.yScaleFactor;
		  var widthRatio = (param.containerWidth / rawPath.width) * param.xScaleFactor;


		  //Apply height ratio
		  for (var heightIndex = 0; heightIndex < rawPath.heightElements.length; heightIndex++) {
		    coordinates['y' + heightIndex] = rawPath.heightElements[heightIndex] * heightRatio;
		  }

		  //Apply width ratio
		  for (var widthIndex = 0; widthIndex < rawPath.widthElements.length; widthIndex++) {
		    coordinates['x' + widthIndex] = rawPath.widthElements[widthIndex] * widthRatio;
		  }
		}


	    var tokenRegex = /\{([^\}]+)\}/g,
	        objNotationRegex = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, // matches .xxxxx or ["xxxxx"] to run over object properties
	        replacer = function (all, key, obj) {
	            var res = obj;
	            key.replace(objNotationRegex, function (all, name, quote, quotedName, isFunc) {
	                name = name || quotedName;
	                if (res) {
	                    if (name in res) {
	                        res = res[name];
	                    }
	                    typeof res == "function" && isFunc && (res = res());
	                }
	            });
	            res = (res == null || res == obj ? all : res) + "";
	            return res;
	        };


		var params = {
			mx: mx,
			my: my,
			e: coordinates
		};

		var path = rawPath.d.replace(tokenRegex, function (all, key) {
            return replacer(all, key, params);
        });

		return path;
	}

	drawPath(p, d, attrs) {

	    attrs = computeStyle(attrs, [ 'no-fill' ], {
	      strokeWidth: 2,
	      stroke: 'black'
	    });

	    return p.path(d).attr(attrs);
	}

	render(path) {

		return (
			
		    <g stroke={this.props.stroke || '#000000'} fill={this.props.fill || '#ffffff'} >
		        <path d={this.props.path} style={{strokeWidth: this.props.strokeWidth || 1}}  />
		    </g>

		);
	}	
	
}