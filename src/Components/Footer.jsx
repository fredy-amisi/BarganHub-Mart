import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-400 to-red-500 text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1: Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Bargain Hub</h2>
          <p className="mb-2 flex items-center"><FaMapMarkerAlt className="mr-2" /> Mombasa, Tudor</p>
          <p className="mb-2 flex items-center"><FaPhoneAlt className="mr-2" /> +254 781463185</p>
          <p className="mb-2 flex items-center"><FaEnvelope className="mr-2" /> support@bargainhub.com</p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/reviews" className="hover:underline">Reviews</a></li>
            <li><a href="/faqs" className="hover:underline">FAQs</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-200"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-blue-200"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-blue-200"><FaInstagram size={24} /></a>
          </div>
          <p className="mt-6 text-sm">&copy; {new Date().getFullYear()} Bargain Hub. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
