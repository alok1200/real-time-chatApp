import SlideBar from '../component/slideBar';
import ChatContainer from '../component/chatContainer';
import RightSlideBar from '../component/rightSlideBar';

const HomePage = () => {
  return (
    <div className="border w-full h-screen sm:px-[15%] sm: py-[5%]">
      <div className="blackdrop-blue-xl border-2 border-gray-600 rounder-2xl overflow-hidden h-full grid grid-cols-1 relative">
        <SlideBar />
        <ChatContainer />
        <RightSlideBar />
      </div>
    </div>
  );
};

export default HomePage;
