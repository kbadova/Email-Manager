import React from 'react';
import { connect } from 'react-redux';

import { fetchAlbums } from './actions';

import '../../base-styles.css';
import './styles.css';


class Messages extends React.Component {

  render() {
    const messages = [{
      id: 0,
      subject: 'Устен изпит',
      sent_at: '07.01.2018 15:30',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aperiam laudantium aliquam reiciendis pariatur minus natus repellendus, corrupti totam ad, perspiciatis modi beatae numquam laboriosam harum, ullam nisi sapiente voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aperiam laudantium aliquam reiciendis pariatur minus natus repellendus, corrupti totam ad, perspiciatis modi beatae numquam laboriosam harum, ullam nisi sapiente voluptatum?',
    },
    {
      id: 1,
      subject: 'Пректи - защити',
      sent_at: '03.01.2018 15:30',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aperiam laudantium aliquam reiciendis pariatur minus natus repellendus, corrupti totam ad, perspiciatis modi beatae numquam laboriosam harum, ullam nisi sapiente voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aperiam laudantium aliquam reiciendis pariatur minus natus repellendus, corrupti totam ad, perspiciatis modi beatae numquam laboriosam harum, ullam nisi sapiente voluptatum?',
    },
    {
      id: 2,
      subject: 'Нанасяне на оценки',
      sent_at: '07.01.2018 15:30',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aperiam laudantium aliquam reiciendis pariatur minus natus repellendus, corrupti totam ad, perspiciatis modi beatae numquam laboriosam harum, ullam nisi sapiente voluptatum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aperiam laudantium aliquam reiciendis pariatur minus natus repellendus, corrupti totam ad, perspiciatis modi beatae numquam laboriosam harum, ullam nisi sapiente voluptatum?',
    }
    ];
    console.log(messages);

    return (
      <div>
        <div className="mb-20">
          <a className="pull-right btn btn-green">Създай</a>
          <h1>Изпратени съобщения</h1>
        </div>

        <div>
          {messages &&
            messages.map(message => {
              return <div className="msg" key="{message.id}">
                <span className="msg-date pull-right">{message.sent_at}</span>
                <span className="msg-title">{message.subject}</span>
                <span className="msg-content">
                  {message.content}
                  <a className="pull-right btn btn-blue mt-10 mb-10">Виж</a>
                </span>
              </div>;
            })}

          {/* {albums ? albums.albums : 'Nqma albumi'} */}
          {/* {albums &&
          albums.map(album => {
            return <div key={album.id}>{album.name}</div>;
          })} */}
        </div>
      </div>
    );
  }
}


export default Messages;