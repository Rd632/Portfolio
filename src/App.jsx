import RightSection from "./components/RightSection";
import ProfileCard from './components/ProfileCard';
import './App.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function App() {
  
  return (
    <>
       <div className="flex flex-col md:flex-row min-h-screen">

       <div className="w-full md:w-1/3 lg:w-1/4">
  <div className="md:p-8 sticky top-4 h-fit self-start">
    <ProfileCard />
  </div>
</div>

          <div className="  overflow-auto"></div>
            <RightSection />
          </div>
      
    </>
  )
}

export default App



