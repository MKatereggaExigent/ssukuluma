import { motion } from 'framer-motion';
import { Scissors, Palette, Package, Shirt, Sparkles, Globe } from 'lucide-react';

const fashionServices = [
  {
    icon: Palette,
    title: 'Premium Fabrics',
    description: 'Curated collection of high-quality fabrics from local and international sources. African prints, silk, cotton, and more.',
    image: '/images/fashion/fashion-2.jpeg',
  },
  {
    icon: Scissors,
    title: 'Custom Tailoring',
    description: 'Bespoke clothing made to your exact measurements. From traditional African attire to modern contemporary designs.',
    image: '/images/fashion/fashion-11.jpeg',
  },
  {
    icon: Shirt,
    title: 'Ready-to-Wear',
    description: 'Stylish ready-made clothing featuring unique African-inspired designs. Perfect for any occasion.',
    image: '/images/fashion/fashion-14.jpeg',
  },
  {
    icon: Sparkles,
    title: 'Fashion Design',
    description: 'Creative design services for individuals and brands. We bring your fashion vision to life.',
    image: '/images/fashion/fashion-15.jpeg',
  },
  {
    icon: Package,
    title: 'International Shipping',
    description: 'We ship our fabrics and finished garments worldwide. Order online and receive at your doorstep.',
    image: '/images/fashion/fashion-6.jpeg',
  },
  {
    icon: Globe,
    title: 'Online Orders',
    description: 'Browse our collection and place orders from anywhere in the world. Easy, secure, and convenient.',
    image: '/images/fashion/fashion-3.jpeg',
  },
];

const Fashion = () => {
  return (
    <section id="fashion" className="section-padding relative overflow-hidden">
      {/* Background with different gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-emerald-900/20" />
      
      {/* Floating Orbs */}
      <div className="floating-orb w-80 h-80 bg-purple-500/30 top-20 -left-40" style={{ animationDelay: '1s' }} />
      <div className="floating-orb w-64 h-64 bg-pink-500/30 bottom-20 -right-32" style={{ animationDelay: '4s' }} />
      
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
            <Scissors className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-gray-300">Fashion & Design Division</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            African <span className="gradient-text-emerald">Fashion Excellence</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Discover our exquisite collection of fabrics and custom-made clothing. 
            We blend traditional African craftsmanship with contemporary design.
          </p>
        </motion.div>

        {/* Fashion Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {fashionServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card overflow-hidden group cursor-pointer border-emerald-500/10 hover:border-emerald-500/30"
            >
              {/* Service Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-emerald-500/90 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Our <span className="gradient-text-emerald">Collection Gallery</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[4, 5, 7, 8, 9, 10, 13, 1].map((num, index) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer"
              >
                <img
                  src={`/images/fashion/fashion-${num}.jpeg`}
                  alt={`Fashion collection ${num}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 text-center bg-gradient-to-r from-emerald-500/10 via-purple-500/10 to-pink-500/10"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ship Worldwide from Uganda
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Whether you're in the USA, UK, Europe, or anywhere else in the world,
            we deliver our beautiful African fabrics and custom-made garments right to your doorstep.
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold px-8 py-4 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Package className="w-5 h-5" />
            Inquire About Orders
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Fashion;

