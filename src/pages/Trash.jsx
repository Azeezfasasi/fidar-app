import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { ThemeContext } from "../assets/components/context/ThemeContext";
import DashMenu from "../assets/components/dashboard/DashMenu";
import DashHeader from "../assets/components/dashboard/DashHeader";
import { MessageContext } from "../assets/components/context/MessageContext";
import { UserContext } from "../assets/components/context/UserContext";
import DOMPurify from "dompurify";
import "react-quill/dist/quill.snow.css";
import recentstar from "../assets/images/recentstar.svg";

function Trash() {
  const { isDarkMode } = useContext(ThemeContext); // Access theme
  const { messages, deletedMessages, restoreMessage } = useContext(MessageContext);
  const { currentUser } = useContext(UserContext);

  const Preview = ({ content }) => {
    const limitedContent =
      content.split(" ").slice(0, 10).join(" ") + (content.split(" ").length > 10 ? "..." : "");
    return (
      <div
        className="text-gray-600"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(limitedContent) }}
      />
    );
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Approved":
        return "text-green-500";
      case "Declined":
        return "text-red-500";
      case "Pending":
        return "text-blue-500";
      default:
        return "";
    }
  };

  return (
    <>
    <Helmet>
    <title>Trash - Fidar</title>
    </Helmet>
    <div className='w-full flex flex-col md:flex-row items-start justify-start border border-solid'>
    {/* Menu Section */}
        <div className='w-full md:w-[fit-content] h-auto md:h-[1000px] border border-solid border-red-700'>
            <DashMenu />
        </div>
        
        {/* Main Dashboard */}
        <div className='w-full md:w-[100%] h-auto md:h-[1000px] border border-solid border-red-700 relative p-4 md:pl-[10px] md:pr-[10px]'>
            <div className="flex-1 p-6">
            <DashHeader />
                <div className="mt-8">
                    <h3 className="text-xl font-bold">Deleted Documents</h3>
                    {deletedMessages.length === 0 ? (
                    <p className="mt-4 text-gray-600">No deleted messages.</p>
                    ) : (
                    <ul className="mt-4 space-y-4">
                        {deletedMessages.map((message) => (
                        <li key={message.id} className="bg-white rounded-lg shadow p-4 flex items-start">
                            <div className="flex items-center space-x-4">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 border-gray-300 rounded"
                                />
                                <img
                                    className="w-5 h-5"
                                    src={recentstar}
                                    alt="Star"
                                />
                                <div className="flex items-center space-x-4">
                                    <img
                                    className="w-12 h-12 rounded-full"
                                    src={currentUser.profileImage}
                                    alt="User"
                                    />
                                    <div>
                                    <p className="text-sm font-medium">{currentUser.firstName} {currentUser.lastName}</p>
                                    <p className="text-xs text-gray-500">{message.id}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-8 flex-1">
                                <h4 className="font-semibold">{message.subject}</h4>
                                <Preview content={message.body} />
                            </div>
                            <div className="text-right space-y-2">
                                <button
                                    className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                                    onClick={() => restoreMessage(message.id)}
                                >
                                    Restore
                                </button>
                                <div className="text-sm">
                                    <span className="font-semibold">Status: </span>
                                    <b className={getStatusStyle(message.status)}>{message.status}</b>
                                </div>
                                <span className="text-xs text-gray-400">{message.date}</span>
                            </div>
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

export default Trash;
