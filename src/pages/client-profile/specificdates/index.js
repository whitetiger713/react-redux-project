import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class SpecificDates extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		return ( 
			<article className="clearfix">
				<h5>Specific Dates:</h5>
				<div className="col-xs-12">
					<div className="row col-tb">
						<div className="col-sm-2 d-inline-block">
							<span>Monday</span>
						</div>
						<div className="col-sm-2 d-inline-block">
							<span>May 05</span>
						</div>
						<div className="col-sm-2 d-inline-block">
							<span>8 -10</span>
						</div>
						<div className="col-sm-2 d-inline-block action">
							<a href="javascript:void(0);">
								<span className="fa fa-pencil-square-o"></span>
							</a>
							<a href="javascript:void(0);">
								<span className="text-danger fa fa-trash-o"></span>
							</a>
						</div>
						<div className="col-sm-2 d-inline-block">
							<a href="javascript:void(0);" className="btn btn-bordered-info">
								<span className="fa fa-plus"></span> Add
							</a>
						</div>
					</div>
					<div className="row col-tb">
						<div className="col-sm-2 d-inline-block">
							<span>Monday</span>
						</div>
						<div className="col-sm-2 d-inline-block">
							<span>May 05</span>
						</div>
						<div className="col-sm-2 d-inline-block">
							<span>8 -10</span>
						</div>
						<div className="col-sm-2 d-inline-block action">
							<a href="javascript:void(0);">
								<span className="fa fa-pencil-square-o"></span>
							</a>
							<a href="javascript:void(0);">
								<span className="text-danger fa fa-trash-o"></span>
							</a>
						</div>
						<div className="col-sm-2 d-inline-block">
							<a href="javascript:void(0);" className="btn btn-bordered-info">
								<span className="fa fa-plus"></span> Add
							</a>
						</div>
					</div>
				</div>
			</article>
		);
	}

}

export default SpecificDates;
