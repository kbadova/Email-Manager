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
        <div className="mb-20">
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
                    <a className="pull-right btn btn-blue mt-10 mb-10">Виж</a>
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
