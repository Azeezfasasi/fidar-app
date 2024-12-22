import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import DashHeader from '../assets/components/dashboard/DashHeader';
import DashMenu from '../assets/components/dashboard/DashMenu';
import { ThemeContext } from '../assets/components/context/ThemeContext';
import { MessageContext } from '../assets/components/context/MessageContext';
import { UserContext } from '../assets/components/context/UserContext';
// import DOMPurify from 'dompurify';

import pencil from '../assets/images/pencil.svg';
import addphoto from '../assets/images/addphoto.svg';
import more from '../assets/images/more.svg';
import recentstar from '../assets/images/recentstar.svg';

function Document() {
  const { isDarkMode } = useContext(ThemeContext);
  const { messages } = useContext(MessageContext);
  const { currentUser } = useContext(UserContext);

  const Preview = ({ content }) => {
    const limitedContent = content.split(' ').slice(0, 10).join(' ') + (content.split(' ').length > 4 ? '...' : '');
    return (
      <div
        className="text-gray-500"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(limitedContent) }}
      />
    );
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Approved':
        return 'text-green-500';
      case 'Declined':
        return 'text-red-500';
      case 'Pending':
        return 'text-blue-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <>
      <Helmet>
        <title>Document - Fidar</title>
      </Helmet>
      <div className={`flex ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} min-h-screen`}>
        {/* <div className="hidden lg:block w-1/4"> */}
          <DashMenu />
        {/* </div> */}
        <div className="flex-grow">
          <DashHeader />
          <div className="p-4 lg:ml-64">
            {/* Mobile Top Bar */}
            <div className="lg:hidden flex items-center mb-4">
              <Link to="/pages/dashboard" className="flex items-center gap-2">
                <i className="fas fa-chevron-left" />
                <span>Back</span>
              </Link>
              <h1 className="ml-4 text-lg font-bold">Chat</h1>
            </div>

            {/* Inbox Top Bar */}
            <div className="hidden lg:flex items-center justify-between bg-white shadow px-4 py-2 rounded-md">
              <div className="flex items-center gap-4">
                <input type="checkbox" className="form-checkbox" />
                <span>Username</span>
              </div>
              <span>Description</span>
              <img src={more} alt="More options" className="w-6 h-6" />
            </div>

            {/* Compose Button */}
            <div className="fixed right-10 top-1/2 flex flex-col items-center gap-4 bg-white p-4 rounded-full shadow-lg z-50">
              <Link to="/pages/composemessage">
                <img src={pencil} alt="Compose" className="w-8 h-8" />
              </Link>
              <Link to="/pages/composemessage">
                <img src={addphoto} alt="Add Photo" className="w-8 h-8" />
              </Link>
            </div>

            {/* Message List */}
            <div className="mt-4 bg-white shadow rounded-md p-4">
              {messages.length === 0 ? (
                <p>No messages available.</p>
              ) : (
                <ul className="space-y-4">
                  {messages.map((message) => (
                    <li key={message.id} className="border-b last:border-none">
                      <Link
                        to={`/pages/message/${message.id}`}
                        className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-md"
                      >
                        <input type="checkbox" className="form-checkbox" />
                        <img src={recentstar} alt="Star" className="w-6 h-6" />
                        <img
                          src={currentUser.profileImage}
                          alt="Avatar"
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-grow">
                          <h3 className="font-bold">{message.subject}</h3>
                          <Preview content={message.body} />
                        </div>
                        <div className="text-right">
                          <div className={`font-bold ${getStatusStyle(message.status)}`}>
                            {message.status}
                          </div>
                          <div className="text-sm text-gray-400">{message.date}</div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Document;
