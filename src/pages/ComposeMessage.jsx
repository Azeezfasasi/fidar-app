import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../assets/components/context/ThemeContext';
import DashHeader from '../assets/components/dashboard/DashHeader';
import DashMenu from '../assets/components/dashboard/DashMenu';
import { Helmet } from 'react-helmet';
import { MessageContext } from '../assets/components/context/MessageContext';
import { UserContext } from '../assets/components/context/UserContext';
import minimize from '../assets/images/minimize.svg';
import maximize from '../assets/images/maximize.svg';
import messageclose from '../assets/images/messageclose.svg';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ComposeMessage = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const { sendMessage } = useContext(MessageContext);
  const { users, currentUser } = useContext(UserContext);
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [recipient, setRecipient] = useState('');

  const handleSubmit = () => {
    const newMessage = {
      id: Date.now(),
      subject,
      body,
      sender: currentUser.email,
      replies: [],
    };

    sendMessage(newMessage, recipient);
    setSubject('');
    setRecipient('');
    setBody('');
  };

  return (
    <>
      <Helmet>
        <title>Compose Message - Fidar</title>
      </Helmet>
      <div className='w-full flex flex-col md:flex-row items-start justify-start border border-solid'>
       {/* Menu Section */}
       <div className='w-full md:w-[fit-content] h-auto md:h-[1000px] border border-solid border-red-700'>
          <DashMenu />
        </div>
        
        {/* Main Dashboard */}
        <div className='w-full md:w-[100%] h-auto md:h-[1000px] border border-solid border-red-700 relative p-4 md:pl-[10px] md:pr-[10px]'>
            <div className="flex-grow">
                <DashHeader />
                <div className="w-full">
                    <div className="p-6">
                        <form className="bg-white shadow-lg rounded-lg p-6">
                            <div className="flex justify-between items-center border-b pb-3">
                            <h2 className="text-sm font-medium text-gray-500">New Message</h2>
                            <div className="flex space-x-2">
                                <Link to="">
                                <img className="w-5 h-5" src={minimize} alt="Minimize" />
                                </Link>
                                <Link to="">
                                <img className="w-5 h-5" src={maximize} alt="Maximize" />
                                </Link>
                                <Link to="/pages/document">
                                <img className="w-5 h-5" src={messageclose} alt="Close" />
                                </Link>
                            </div>
                            </div>
                            <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700">To</label>
                            <input
                                type="email"
                                value={recipient}
                                onChange={(e) => setRecipient(e.target.value)}
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                                placeholder="Recipient email"
                            />
                            </div>
                            <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700">Subject</label>
                            <input
                                type="text"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                                placeholder="Subject"
                            />
                            </div>
                            <div className="mt-4">
                            <ReactQuill
                                theme="snow"
                                value={body}
                                onChange={setBody}
                                className="bg-gray-50 h-64"
                            />
                            </div>
                            <div className="flex justify-end mt-4">
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                                Send
                            </button>
                            </div>
                            <div className="mt-6 text-sm text-gray-500">
                            The privacy and security of your Bank Account details are important to us.
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default ComposeMessage;
