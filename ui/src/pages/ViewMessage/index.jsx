import React from 'react';
import {connect} from 'react-redux';

import {fetchMessage} from './actions';

import '../../base-styles.css';
import './styles.css';

class ViewMessage extends React.Component {
	componentDidMount() {
		const id = parseInt(location.hash.split('#')[1]);
		this.props.fetchMessage({id: id});
	}
	render() {
		const {message} = this.props;

		return (
			<div>
				<div className="mb-20 mt-10">
                   <div className="breadcrumb">
            <a href="/messages">Начало /</a>
            <a className="active"> Преглед на съобщение</a>
          </div>
					<h1>Преглед на ново съобщение</h1>
					<div>
						<span className="recipients">Получатели:</span>
						{message &&
							message.students &&
							message.students.map(rec => {
								return (
									<span className="recipient" key="{rec.id}">
										{rec.email}
									</span>
								);
							})}
					</div>
					<div className="view-msg">
						<h4>{message ? message.subject : ''}</h4>
						<div>{message ? message.content : ''}</div>
					</div>
					<div>
						<a className="pull-right btn btn-blue">Изпрати</a>
						<a className="pull-right btn btn-default mr-10">Редактирай</a>
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		message: state.fetchMessage.message
	};
};

const mapDispatchToProps = {
	fetchMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewMessage);
