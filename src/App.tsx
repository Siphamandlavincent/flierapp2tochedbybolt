import React, { useState } from 'react';
import { Menu, X, Monitor, Smartphone, Laptop, Shield, Database, Code, Mail, Phone, MapPin, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init('ljlCfMvfp-UGXC5g9');

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const services = [
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "PC Repair",
      description: "Expert diagnostics and repair for desktop computers"
    },
    {
      icon: <Laptop className="w-12 h-12" />,
      title: "Laptop Repair",
      description: "Professional laptop repair and maintenance services"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Phone Repair",
      description: "Specialized smartphone and tablet repair solutions"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Virus Removal",
      description: "Comprehensive malware and virus removal services"
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Data Recovery",
      description: "Professional data recovery from all storage devices"
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Software Solutions",
      description: "Custom software development and troubleshooting"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <img src="Spha Apps [Logo].png" alt="SPHA Solutions" className="h-16 w-16 object-contain" />
              <span className="ml-3 text-xl font-bold text-gray-800">SPHA Solutions</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-green-500">Services</a>
              <button onClick={() => setShowAbout(true)} className="text-gray-700 hover:text-green-500">About</button>
              <a href="#contact" className="text-gray-700 hover:text-green-500">Contact</a>
              <a href="contact-form.html" className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors">
                Get Help
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-green-500">Services</a>
              <button onClick={() => setShowAbout(true)} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-500">About</button>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-green-500">Contact</a>
              <a href="contact-form.html" className="block px-3 py-2 text-green-500 font-medium">Get Help</a>
            </div>
          </div>
        )}
      </nav>

      {/* About Modal */}
      {showAbout && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">About Us</h2>
              <button onClick={() => setShowAbout(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-600 text-lg">
              Spha Solutions offers comprehensive IT project management services to ensure the successful planning, execution, and completion of your IT initiatives.
            </p>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-green-400 to-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Expert Tech Solutions
          </h1>
          <p className="text-xl text-white mb-8">
            Professional PC, Phone, and Laptop Repair Services
          </p>
          <a href="contact-form.html" className="inline-block bg-white text-green-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <a 
                key={index} 
                href="contact-form.html" 
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="text-green-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* CEO Contact */}
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-green-500 text-xl font-bold mb-4">CEO</h3>
              <div className="text-white space-y-2">
                <p className="font-semibold">Spha Khumalo</p>
                <p>+27 61 079 3813</p>
                <p>v.khumalo@yahoo.com</p>
              </div>
            </div>

            {/* Graphics Development Contact */}
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-green-500 text-xl font-bold mb-4">Graphics Development</h3>
              <div className="text-white space-y-2">
                <p className="font-semibold">Sibusiso Ngwalase</p>
                <p>+27 84 0800 234</p>
                <p>business@welovemzansi.co.za</p>
              </div>
            </div>
          </div>

          {/* Visit Us Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-4">
              <h3 className="text-green-500 text-xl font-bold mb-4">Visit Us</h3>
              <p>Our main operational center is in Utrecht, South Africa. We welcome visits by appointment to observe our programs in action and discuss potential partnerships or contributions.</p>
              <div className="mt-6">
                <h4 className="text-green-500 font-semibold mb-2">Office Hours:</h4>
                <p>Monday to Friday, 8:00 AM - 4:00 PM</p>
              </div>
              <div className="mt-4">
                <h4 className="text-green-500 font-semibold mb-2">Community Programs:</h4>
                <p>Saturdays, 9:00 AM - 2:00 PM</p>
              </div>
            </div>
            
            <div className="w-full h-[400px] rounded-lg overflow-hidden">
              <img 
                src="/ed4a58db-7fa9-4efc-abcf-a9cc8a4cfd85.png" 
                alt="Location Map" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 SPHA Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;