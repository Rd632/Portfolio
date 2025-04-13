import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 px-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>

      <div className="flex flex-col items-center space-y-6">
        {/* Email */}
        <a
          href="mailto:robbadivija@gmail.com"
          className="flex items-center gap-3 text-lg transition"
        >
          <FaEnvelope className="text-xl text-white" />
          robbadivija@gmail.com
        </a>

        {/* Social Links */}
        <div className="flex gap-6 mt-4">
          <a
            href="https://linkedin.com/in/divija-robba-550330247t"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform text-2xl"
          >
            <FaLinkedin className="text-white " />
          </a>
          <a
            href="https://github.com/Rd632"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform text-2xl"
          >
            <FaGithub className="text-white" />
          </a>
          <a
            href="https://wa.me/919390465988" // Replace with your real number
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform text-2xl"
          >
            <FaWhatsapp className="text-white" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
