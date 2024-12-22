import React, { useContext } from "react";
import recentavatar from "../../images/recentavatar.svg";
import recentstar from "../../images/recentstar.svg";
// import DOMPurify from "dompurify";
import { ThemeContext } from "../context/ThemeContext";
import { MessageContext } from "../context/MessageContext";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

function RecentFiles() {
  const { isDarkMode } = useContext(ThemeContext);
  const { messages, approveMessage, declineMessage } = useContext(MessageContext);
  const { currentUser } = useContext(UserContext); // Access currentUser from context

  const Preview = ({ content }) => {
    const limitedContent =
      content.split(" ").slice(0, 10).join(" ") +
      (content.split(" ").length > 4 ? "..." : "");
    return (
      <div>
        <div
          className="text-gray-500"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(limitedContent),
          }}
        />
      </div>
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
      <div className="text-gray-500 font-medium text-lg mt-2">Recent Files</div>
      <div className="flex justify-between items-center bg-white shadow-md p-3 rounded-md">
        <div className="flex items-center gap-4">
          <input type="checkbox" className="h-4 w-4" />
          <div className="text-sm text-gray-500">Username</div>
        </div>
        <div className="text-sm text-gray-500">Description</div>
      </div>
      <div
        className={`${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        } rounded-lg shadow-lg p-4 mt-4`}
      >
        {messages.length === 0 ? (
          <p className="text-gray-500">No recent files available.</p>
        ) : (
          <ul className="list-none w-full">
            {messages.map((message) => (
              <li key={message.id} className="mb-4">
                <Link to={`/pages/message/${message.id}`} className="block no-underline">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg shadow-md hover:bg-gray-100">
                    <div className="flex items-center gap-4">
                      <input type="checkbox" className="h-4 w-4" />
                      <img
                        src={recentstar}
                        alt="star"
                        className="w-4 h-4"
                      />
                      <div className="flex items-center gap-2">
                        <img
                          src={currentUser.profileImage}
                          alt="Avatar"
                          className="w-12 h-12 rounded-full border-2 border-white object-cover"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-700">{message.id}</div>
                          <div className="text-xs text-gray-500">
                            {currentUser.firstName} {currentUser.lastName}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      <div>{message.subject}</div>
                      <div className="text-xs text-gray-400">
                        <Preview content={message.body} />
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="block text-xs">
                        <span className="text-gray-500">Status: </span>
                        <b className={getStatusStyle(message.status)}>{message.status}</b>
                      </span>
                      <span className="text-xs text-gray-400">{message.date}</span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default RecentFiles;
