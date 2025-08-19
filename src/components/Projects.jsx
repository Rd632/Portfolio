// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useState } from 'react';
import ProjectModal from './ProjectModal';




const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'ML', 'Data Analysis'];

const allProjects = [
    {
      title: ' Real-Time Chat Application ',
      description: 'A real-time messaging platform using MERN stack (MongoDB, Express, React, Node.js) and Socket.io for instant communication.',
      skills: ['MongoDB', 'Express', 'React', 'NodeJS', 'JWT', 'Socketio', 'Zustand', 'TailwindCSS' ],
      images: [
        '/images/chat app.png'
      ],
      image: '/images/chat app.png', // replace with actual path
      category: 'Full Stack',
      github: 'https://github.com/yourusername/email-builder',
      live: 'https://email-builder.vercel.app',
    },
    {
      title: ' NextJS WeatherApp',
      description: 'A Next.js + Tailwind app with city search, filtering, and infinite scroll, integrated with OpenWeatherMap API to show real-time weather, maps, and dynamic backgrounds.',
      image: '/images/WeatherApp.png',
      images: [
        '/images/WeatherApp.png'
      ],
      category: 'Frontend',
      skills: ['NextJS', 'TailwindCSS', 'OpenWeatherMap API', 'MobX State Tree', 'Leaflet.js'],
      github: 'https://github.com/Rd632/WeatherApp',
      live: 'https://weatherapp-weld-one.vercel.app/'
    },
    {
      title: ' NextJS Dashboard',
      description: 'This project is an HR dashboard built entirely as a client-side frontend application using Next.js. It focuses on beautiful UI & responsive user interface.',
      image: '/images/Dashboard.png',
      images: [
        '/images/Dashboard.png'
      ],
      category: 'Frontend',
      skills: ['NextJS', 'TailwindCSS'],
      github: 'https://github.com/Rd632/HRdashboard',
      live: 'https://h-rdashboard.vercel.app/',
    },
    {
      title: ' MedicalData Visualization',
      description: 'A React-based web application that fetches and processes patient data from an API.',
      image: '/images/MedicalData.png',
      images: [
        '/images/MedicalData.png'
      ],
      skills: ['React', 'ChartJS', 'API'],
      category: 'Frontend',
      github: 'https://github.com/Rd632/MedicalData_ReactDashboard',
      
    },
    {
        title: ' Web Scraping Project',
        description: 'Scrape Sample IA’s and Sample EE’s from the Nailib website focusing on IB Math AI SL samples. Extract structured data, clean it, and store it in MongoDB on each run.',
        image: '/images/webscraping.png',
        images: [
            '/images/webscraping.png'
            
          ],
          skills: ['Python', 'BeautifulSoup', 'MongoDB'], 
        category: 'Backend',
        github: 'https://github.com/Rd632/ZuAI-backend-internship-task',
        
      },
    {
        title: ' ReactJS Cart App',
        description: 'A React-based cart application that allows to add items into cart and count the total amount',
        image: '/images/cart.png',
        images: [
          '/images/cart.png'
        ],
        category: 'Frontend',
        skills: ['React'], 
        github: 'https://github.com/Rd632/MyCart-ReactjsProject',
        
      },
      {
        title: ' Truss Analysis Web Application with Excel file as Input format',
        description: 'It is a truss analysis application using direct stiffness method using python language, Used to determine forces and deflected shapes for pin jointed truss structures.',
        image: '/images/TA1.png',
        images: [
            '/images/TA1.png',
            '/images/TA2.png',
            '/images/TA3.png',
            '/images/TA4.png'
            
          ],
        category: 'Backend',
        skills: ['Python', 'Pandas', 'Numpy', 'Matplotlib', 'Flask', 'Html', 'CSS'],
      },
       
    {
      title: ' Sales Data Analysis using Pandas',
      description: 'Data analysis of sales trends using Python, Pandas.',
      images: [
        '/images/DA1.png',
        '/images/DA2.png',
        '/images/DA3.png',
        '/images/DA4.png',
        '/images/DA5.png'
      ],
      image: '/images/DA1.png',
      category: 'Data Analysis',
      skills: ['Python', 'Pandas',  'Matplotlib'],
      github: 'https://github.com/Rd632/SalesAnalysis-using-Python-Pandas',
      
    },
    {
        title: ' MusicStore Data Analysis using SQL',
        description: 'Data analysis of music store using SQL',
        images: [
          '/images/DA21.png'
        ],
        image: '/images/DA21.png',
        category: 'Data Analysis',
        skills: ['SQL'],
        
      },
    {
      title: ' House Price Predictor',
      description: 'Random Forest regression model to predict housing prices with high accuracy.',
      images: [
        '/images/ML.png'
      ],
      image: '/images/ML.png',
      category: 'ML',
      skills: ['Python', 'Pandas', 'Numpy', 'Matplotlib', 'Scikit-learn'],
      github: 'https://github.com/Rd632/MLproject-BostonHousesPricePrediction',
      
    },
    {
        title: 'IPL Auction Data Analysis in PowerBI',
        description: 'Data analysis of IPL data in PowerBI',
        images: [
          '/images/Powerbi.png'
        ],
        image: '/images/Powerbi.png',
        category: 'Data Analysis',
        skills: ['PowerBI'],
      },
      {
        title: ' MoviesWebsite- [HTML, CSS, JS]',
        description: 'A movie database website where people can get refreshment.◦ Integrated with an external API-TMDB API to fetch movie information, including details, ratings, and trailers.',
        image: '/images/Movieapp1.png',
        images: [
            '/images/Movieapp1.png',
            '/images/Movieapp2.png',
            '/images/Movieapp3.png',
            '/images/Movieapp4.png'
            
          ],
        category: 'Frontend',
        github: 'https://github.com/Rd632/MoviesWebsite',
        skills: ['Html', 'Css','Javascript','TMDB Api'],
      },
  ];

  
  
  
const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);


  const filteredProjects =
    selectedCategory === 'All'
      ? allProjects
      : allProjects.filter((proj) => proj.category === selectedCategory);

  
      const containerVariants = {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15, // controls delay between each card
          },
        },
      };
      
      const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      };
      

  return (
    <motion.div
      key="projects"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      
    >
      <h2 className="text-2xl text-gray-300 font-bold mb-6 text-center">Projects</h2>

      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1 rounded-full text-sm font-medium  ${
              selectedCategory === cat
                ? 'bg-blue-600 text-black'
                : 'bg-gray-700 text-black hover:bg-gray-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project List */}
      

      <motion.ul
  className="grid md:grid-cols-3 gap-6"
  key={selectedCategory}
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {filteredProjects.map((project, index) => (
    <motion.li
    key={index}
    variants={cardVariants}
    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-xl cursor-pointer hover:scale-[1.03] transition-transform duration-300"
    onClick={() => openModal(project)}
  >
  
  
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-xl text-amber-100 font-semibold mb-1">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-3">
  {project.skills.map((skill, i) => (
    <span
      key={i}
      className="px-2 py-1 bg-pink-600 text-white text-xs rounded-full"
    >
      {skill}
    </span>
  ))}
</div>

      </div>
    </motion.li>
  ))}
</motion.ul>

<ProjectModal
  isOpen={isModalOpen}
  closeModal={closeModal}
  project={selectedProject}
/>



    </motion.div>
  );
};

export default ProjectsSection;
