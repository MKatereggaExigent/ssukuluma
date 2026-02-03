import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Send, MessageCircle, Clock, 
  Globe, Scissors, ArrowRight 
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Hello Ssukuluma Solutions!%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AService: ${formData.service}%0A%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/256782165686?text=${whatsappMessage}`, '_blank');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '+256 200 909 547', href: 'tel:+256200909547' },
    { icon: MessageCircle, label: 'WhatsApp', value: '+256 782 165 686', href: 'https://wa.me/256782165686' },
    { icon: Mail, label: 'Email', value: 'ssukulumasolutions@gmail.com', href: 'mailto:ssukulumasolutions@gmail.com' },
    { icon: MapPin, label: 'Address', value: 'Ssekajja Complex, Rm C17, Kajjansi T/C, Entebbe Road', href: '#' },
    { icon: Mail, label: 'P.O. Box', value: '105659, Kampala, Uganda', href: '#' },
    { icon: Clock, label: 'Hours', value: 'Mon - Sat: 8:00 AM - 6:00 PM', href: '#' },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="floating-orb w-80 h-80 bg-amber-500/20 top-20 -right-40" style={{ animationDelay: '1s' }} />
      <div className="floating-orb w-64 h-64 bg-purple-500/20 bottom-20 -left-32" style={{ animationDelay: '3s' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-card px-5 py-2 mb-6">
            <Send className="w-4 h-4 text-amber-500" />
            <span className="text-sm text-gray-300">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Start a Conversation</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ready to explore opportunities? Have questions about our services? 
            Reach out to us and let's discuss how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-10"
          >
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text" name="name" required value={formData.name} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email" name="email" required value={formData.email} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
                  <input
                    type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="+256 700 000 000"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Service Interest</label>
                  <select
                    name="service" value={formData.service} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-amber-500 focus:outline-none transition-colors"
                  >
                    <option value="" className="bg-slate-800">Select a service</option>
                    <option value="overseas-jobs" className="bg-slate-800">Overseas Jobs</option>
                    <option value="visa-processing" className="bg-slate-800">Visa Processing</option>
                    <option value="travel-services" className="bg-slate-800">Travel Services</option>
                    <option value="hr-consultancy" className="bg-slate-800">HR Consultancy</option>
                    <option value="fashion-fabrics" className="bg-slate-800">Fashion & Fabrics</option>
                    <option value="custom-tailoring" className="bg-slate-800">Custom Tailoring</option>
                    <option value="logistics" className="bg-slate-800">Logistics & Shipping</option>
                    <option value="other" className="bg-slate-800">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Your Message</label>
                <textarea
                  name="message" rows="4" required value={formData.message} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your needs..."
                />
              </div>
              <motion.button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-5 h-5" />
                Send via WhatsApp
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-5">
                {contactInfo.map((item, index) => (
                  <a key={index} href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                      <item.icon className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{item.label}</p>
                      <p className="text-white group-hover:text-amber-400 transition-colors">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

