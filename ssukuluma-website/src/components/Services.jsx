import { motion } from 'framer-motion';
import { 
  Briefcase, FileText, Plane, Ship, Users, GraduationCap, 
  Globe, MapPin, Building, Truck, Calendar, Award
} from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'HR Consultancy',
    description: 'Expert guidance on human resource management, organizational development, and workforce planning for businesses of all sizes.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: FileText,
    title: 'Visa & Passport Processing',
    description: 'Comprehensive visa application support for various countries. We handle documentation, appointments, and follow-ups.',
    image: 'https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Users,
    title: 'Talent Acquisition & Recruitment',
    description: 'Identifying, hiring, and onboarding qualified staff to fill roles efficiently across multiple industries.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: GraduationCap,
    title: 'Training & Development',
    description: 'Enhancing employee skills and career development through customized training programs and talent management.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Award,
    title: 'Resume Development',
    description: 'Creating strong, ATS-friendly resumes that stand out. Professional 1-2 page documents tailored to your target industry.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Calendar,
    title: 'Travel Itinerary Management',
    description: 'Complete travel planning including flights, accommodation, and detailed itineraries for seamless journeys.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Plane,
    title: 'Flights & Accommodation',
    description: 'Booking flights and securing comfortable accommodation at competitive rates for individuals and groups.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Building,
    title: 'Group Bookings',
    description: 'Specialized services for corporate groups, tour groups, and organizations requiring coordinated travel arrangements.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Truck,
    title: 'Logistics & Transportation',
    description: 'Shipping Ugandan produce and products to overseas markets. Reliable logistics solutions for exporters.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="floating-orb w-72 h-72 bg-amber-500/30 -top-20 -right-20" />
      <div className="floating-orb w-56 h-56 bg-emerald-500/30 bottom-40 -left-20" style={{ animationDelay: '3s' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-card px-5 py-2 mb-6">
            <Globe className="w-4 h-4 text-amber-500" />
            <span className="text-sm text-gray-300">Overseas Jobs & Travel Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Your Complete <span className="gradient-text">Global Solutions</span> Partner
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            From finding your dream job overseas to handling all travel logistics, 
            we provide end-to-end services for your international journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card overflow-hidden group cursor-pointer"
            >
              {/* Service Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-amber-500/90 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Ready to start your international journey?</p>
          <motion.a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Free Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

