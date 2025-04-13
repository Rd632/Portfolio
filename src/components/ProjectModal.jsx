import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const ProjectModal = ({ isOpen, closeModal, project }) => {
  if (!project) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-xl bg-gray-800 p-6 shadow-xl transition-all">
            {/* Close Button */}
            <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl font-bold"
                aria-label="Close"
            >
                &times;
            </button>
            <Dialog.Title className="text-2xl font-bold mb-4 text-white">
              {project.title}
            </Dialog.Title>
            <Swiper
  modules={[Navigation, Pagination]}
  navigation
  pagination={{ clickable: true }}
  spaceBetween={10}
  slidesPerView={1}
  className="mb-4 rounded-lg overflow-hidden"
>
  {project.images.map((imgUrl, idx) => (
    <SwiperSlide key={idx}>
      <img
        src={imgUrl}
        alt={`${project.title} screenshot ${idx + 1}`}
        className="w-full h-64 object-cover"
      />
    </SwiperSlide>
  ))}
</Swiper>

<div className="flex flex-wrap gap-2 mb-4">
  {project.skills?.map((skill, idx) => (
    <span
      key={idx}
      className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium"
    >
      {skill}
    </span>
  ))}
</div>

            {(project.live || project.github) && (
  <div className="flex flex-wrap gap-3 mt-2">
    {project.live && (
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Live Preview
      </a>
    )}
    {project.github && (
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded"
      >
        GitHub
      </a>
    )}
  </div>
)}

          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProjectModal;
