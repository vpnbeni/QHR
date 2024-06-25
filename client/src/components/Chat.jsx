import { BsChatDots } from "react-icons/bs";

const Chat = () => {
  return (
    <div className="fixed bottom-4 right-4 flex items-center space-x-2  p-4 ">
      <div className="bg-white border-2 text-gray-700 px-4 py-2 rounded-full text-sm">
        Welcome to factoTime, How may I help you?
      </div>
      <div className="relative">
        <div className="bg-blue-500 text-white p-2 rounded-full flex items-center justify-center w-10 h-10">
        <BsChatDots  className="text-7xl"/>
        </div>
        <span className="absolute top-0 right-0 block h-3 w-3 bg-green-500 border-2 border-white rounded-full"></span>
      </div>
    </div>
  );
};

export default Chat;
