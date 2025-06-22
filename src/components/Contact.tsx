
const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Let's <span className="text-gray-500">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to bring your design vision to life? Let's discuss your next project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">@</span>
                  </div>
                  <div>
                    <div className="font-medium text-black">Email</div>
                    <div className="text-gray-600">ibrahim.alian@example.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">#</span>
                  </div>
                  <div>
                    <div className="font-medium text-black">Phone</div>
                    <div className="text-gray-600">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">⌘</span>
                  </div>
                  <div>
                    <div className="font-medium text-black">Location</div>
                    <div className="text-gray-600">New York, NY</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-black mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <button className="w-12 h-12 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-sm font-bold">in</span>
                </button>
                <button className="w-12 h-12 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-sm font-bold">ig</span>
                </button>
                <button className="w-12 h-12 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-sm font-bold">tw</span>
                </button>
                <button className="w-12 h-12 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-sm font-bold">be</span>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-200"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-200"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-black mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-200"
                  placeholder="john.doe@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-black mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-200"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-black mb-2">Message</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
