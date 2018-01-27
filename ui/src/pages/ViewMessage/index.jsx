import React from 'react';
import {connect} from 'react-redux';

import {fetchAlbums} from './actions';

import '../../base-styles.css';
import './styles.css';

class ViewMessage extends React.Component {
	render() {
		const message = {
			id: 0,
			from: '',
			to: [
				{id: 1, email: 'slaviana@gmail.com'},
				{id: 2, email: 'krasi@gmail.com'},
				{id: 3, email: 'ruzha@gmail.com'}
			],
			subject: 'Устен изпит',
			sent_at: '07.01.2018 15:30',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aperiam laudantium aliquam reiciendis pariatur minus natus repellendus, corrupti totam ad, perspiciatis modi beatae numquam laboriosam harum, ullam nisi sapiente voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aperiam laudantium aliquam reiciendis pariatur minus natus repellendus, corrupti totam ad, perspiciatis modi beatae numquam laboriosam harum, ullam nisi sapiente voluptatum?'
		};

		console.log(message);

		return (
			<div>
				<div className="mb-20">
					<h1>Преглед на ново съобщение</h1>
					<div>
						<span className="recipients">Получатели:</span>
						{message.to &&
							message.to.map(rec => {
								return (
									<span className="recipient" key="{rec.id}">
										{rec.email}
									</span>
								);
							})}
					</div>
					<div className="view-msg">
						<h4>{message.subject}</h4>
						<div>{message.content}</div>
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

export default ViewMessage;
