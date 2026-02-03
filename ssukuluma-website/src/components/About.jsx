import { motion } from 'framer-motion';
import { CheckCircle, Globe, Scissors, Heart, Target, Users } from 'lucide-react';

const About = () => {
  const features = [
    'Personalized service tailored to your needs',
    'Experienced team with global connections',
    'Transparent and honest communication',
    'End-to-end support throughout your journey',
    'Competitive and fair pricing',
    'Trusted by hundreds of satisfied clients',
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="floating-orb w-96 h-96 bg-amber-500/20 -bottom-48 -left-48" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 glass-card px-5 py-2 mb-6">
              <Heart className="w-4 h-4 text-amber-500" />
              <span className="text-sm text-gray-300">About Us</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Two Passions, <span className="gradient-text">One Vision</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Ssukuluma Solutions Limited is a dynamic Ugandan company with two distinct 
              but complementary business divisions. We are passionate about connecting 
              people to opportunities — whether it's finding your dream job overseas or 
              expressing your unique style through fashion.
            </p>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Our overseas jobs and travel division helps individuals navigate the 
              complexities of international employment, visa processing, and travel 
              logistics. Meanwhile, our fashion and design division celebrates African 
              creativity through premium fabrics and custom-made clothing shipped worldwide.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Visual Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Division Cards */}
            <div className="glass-card overflow-hidden border-amber-500/20 hover:border-amber-500/40 transition-all">
              <div className="relative h-32 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Professional team working"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-transparent" />
                <div className="absolute inset-0 flex items-center p-6">
                  <div className="w-14 h-14 rounded-xl bg-amber-500/90 flex items-center justify-center mr-4">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Overseas Jobs & Travel</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400">
                  HR consultancy, visa processing, recruitment, travel management,
                  and logistics for international opportunities.
                </p>
              </div>
            </div>

            <div className="glass-card overflow-hidden border-emerald-500/20 hover:border-emerald-500/40 transition-all">
              <div className="relative h-32 overflow-hidden">
                <img
                  src="/images/fashion/fashion-12.jpeg"
                  alt="Fashion design and tailoring"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-transparent" />
                <div className="absolute inset-0 flex items-center p-6">
                  <div className="w-14 h-14 rounded-xl bg-emerald-500/90 flex items-center justify-center mr-4">
                    <Scissors className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Fashion & Design</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400">
                  Premium fabrics, custom tailoring, ready-to-wear fashion,
                  and worldwide shipping of African-inspired designs.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="glass-card p-8 bg-gradient-to-r from-amber-500/5 to-emerald-500/5">
              <div className="flex items-center gap-4 mb-4">
                <Target className="w-6 h-6 text-amber-500" />
                <h3 className="text-lg font-semibold">Our Mission</h3>
              </div>
              <p className="text-gray-400 italic">
                "To empower individuals and businesses by providing world-class
                services that bridge opportunities across borders and celebrate
                African excellence in fashion and design."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

