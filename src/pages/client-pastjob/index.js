import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ContactUs from '../../components/contactus';
import SideBar from '../../components/sidebar';

import * as jobActions from '../../actions/job';

import default_img from '../../styles/images/default.png';
import './style.scss';

const mapDispatchToProps = (dispatch) => {
	return ({
		actions: bindActionCreators({...jobActions}, dispatch),
	});
}

const mapStateToProps = (state) => {
	return ({
		user: state.auth.user,
		completedJobs: state.job.completedJobs,
	});
}


class ClientPastJob extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

	componentWillMount() {
		let obj = {
			user_id: this.props.user.id
		}
		this.props.actions.getPastJobs(obj).then((res) => {
			if (res) {
				toastr["success"]("Getting completed Jobs success.");
			} else {
				toastr["warning"]("Completed Jobs not found.");
			}
		}).catch((err) => {
			toastr["error"]("Getting completed Jobs error.");
		});
	}

	render() {
		return ( 
			<div id="client-pastjob-content">
				<section className="my-gray">
					<div className="container profile-setting">
						<div className="row">
							<div className="col-sm-4 form-group">
								<SideBar />
							</div>
							<div className="col-sm-8">
								<div className="well bg-svg box-shadow m-0">
									<h4 className="header">Post Jobs <span className="text-muted">({this.props.completedJobs.length})</span></h4>
									<div className="panel-body px-0">
										{
											this.props.completedJobs.map((job, index) => {
												return (
													<div key={index} className="well well-lg white-bg">
														<div className="jobs">
															<img src={ job.profile_picture || default_img} className="img-responsive" alt="default-image"/>
															<div className="detail">
																<h4>{ job.job_title }</h4>
																<div className="company-name">{ job.employer.clinic_name }</div>
																<div className="street">
																	<span className="fa fa-map-marker"></span> { job.employer.office_location }
																</div>
																<div className="date">
																	<strong>
																		<span className="fa fa-calendar"></span> { job.skills_required } { job.job_location }
																	</strong>
																</div>
																<button className="btn btn-bordered-info">Post Reviews</button>
																<button className="btn btn-bordered-info">Confirm Hours</button>
															</div>
														</div>
													</div>
												);
											})
										}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<ContactUs />
			</div>
		);
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(ClientPastJob);