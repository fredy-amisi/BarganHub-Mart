import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 text-white font-sans">
      <div className="max-w-2xl mx-auto flex flex-col items-center  justify-center">
        <h1 className="text-4xl font-bold mb-4 border-b border-black text-black pb-2">Contact Us</h1>
        <p className="mb-8 text-lg text-black text-center">
          Have questions or need support? Reach out to us and we'll be happy to help.
        </p>

        <form className="w-full space-y-6 bg-blue-400 bg-opacity-25 p-6 rounded-lg shadow-md backdrop-blur-md">
          <div>
            <label className="block mb-1 text-sm font-semibold text-black">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-2 rounded bg-white bg-opacity-20 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-black">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-2 rounded bg-white bg-opacity-20 text-white placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-black">Message</label>
            <textarea
              rows="5"
              placeholder="Your message..."
              className="w-full p-2 rounded bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-700 hover:bg-blue-800 rounded text-white font-bold"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-sm text-black">
          <p><strong>Phone:</strong> (+254) 781463185</p>
          <p><strong>Email:</strong> support@barganhub.com</p>
          <p><strong>Office Hours:</strong> Mon–Fri, 9am–6pm</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
