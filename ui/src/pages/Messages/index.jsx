import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import paths from '../../paths';
import {fetchMessages} from './actions';

import '../../base-styles.css';
import './styles.css';

class Messages extends React.Component {
  componentDidMount() {
    this.props.fetchMessages();
  }

  render() {
    const {messages} = this.props;
    return (
      <div>
          <div className="mb-20 mt-20">
          <div className="breadcrumb"><a className="active">Начало /</a></div>
          <Link to={paths.newMessage} className="pull-right btn btn-green">
            Създай
          </Link>
          <h1>Изпратени съобщения</h1>
        </div>

        <div>
          {messages &&
            messages.map(message => {
              return (
                <div className="msg" key="{message.id}">
                  <span className="msg-date pull-right">
                    {moment(message.sent_at).format('MMMM Do YYYY, h:mm:ss a')}
                  </span>
                  <span className="msg-title">{message.subject}</span>
                  <span className="msg-content">
                    {message.content}
                    <Link
                      to={`/view-message/#${message.id}`}
                      className="pull-right btn btn-blue mt-10 mb-10">
                      Виж
                    </Link>
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {messages: state.messages.all};
};

const mapDispatchToProps = {
  fetchMessages
};
export default connect(mapStateToProps, mapDispatchToProps)(Messages);
