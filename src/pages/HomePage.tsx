import { Link } from 'react-router-dom';
import { ArrowRight, Droplet, Wrench, Sparkles, Waves, CheckCircle, Star, Play } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { motion } from 'motion/react';
import { useState } from 'react';

export function HomePage() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: Droplet,
      title: 'Custom Pool Design',
      description: 'Bespoke pool designs tailored to your vision and property.',
      image: 'https://images.unsplash.com/photo-1612318983888-562dbee7119f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZpbml0eSUyMHBvb2wlMjBzdW5zZXR8ZW58MXx8fHwxNzY3OTY3NzU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Waves,
      title: 'Pool Installation',
      description: 'Expert construction using premium materials and techniques.',
      image: 'https://images.unsplash.com/photo-1672576488191-0db5354a0e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwY29uc3RydWN0aW9uJTIwd29ya3xlbnwxfHx8fDE3Njc0NjI2ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Wrench,
      title: 'Maintenance & Repairs',
      description: 'Comprehensive service plans to keep your pool pristine.',
      image: 'https://images.unsplash.com/photo-1766302524567-36ec1759fef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwbWFpbnRlbmFuY2UlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY3NTUxMDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Sparkles,
      title: 'Water Features',
      description: 'Elegant fountains, waterfalls, and custom features.',
      image: 'https://images.unsplash.com/photo-1761435466049-c3bc89aeec87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwd2F0ZXJmYWxsJTIwZmVhdHVyZXxlbnwxfHx8fDE3Njc5Njc3NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const featuredProjects = [
    {
      title: 'Miami Infinity Pool',
      location: 'Miami Beach, FL',
      image: 'https://images.unsplash.com/photo-1612318983888-562dbee7119f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZpbml0eSUyMHBvb2wlMjBzdW5zZXR8ZW58MXx8fHwxNzY3OTY3NzU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Infinity Edge',
    },
    {
      title: 'Modern Tropical Oasis',
      location: 'Fort Lauderdale, FL',
      image: 'https://images.unsplash.com/photo-1643215328534-8b0c1ce83f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHBvb2wlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzY3OTY3NzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Resort Style',
    },
    {
      title: 'Geometric Masterpiece',
      location: 'Palm Beach, FL',
      image: 'https://images.unsplash.com/photo-1645341175590-8de5742aec9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjBwb29sJTIwZGVzaWdufGVufDF8fHx8MTc2Nzk2Nzc1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Contemporary',
    },
    {
      title: 'Luxury Estate Pool',
      location: 'Boca Raton, FL',
      image: 'https://images.unsplash.com/photo-1716801408923-c2149294dad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwb29sJTIwYWVyaWFsJTIwdmlld3xlbnwxfHx8fDE3Njc5Njc3NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Estate Pool',
    },
  ];

  const testimonials = [
    {
      name: 'Michael Thompson',
      location: 'Miami, FL',
      text: 'Southern Pool Group transformed our backyard into a luxury resort. Their attention to detail and craftsmanship is unmatched.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1661333587575-25c87c14f398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzd2ltbWluZyUyMHBvb2x8ZW58MXx8fHwxNzY3NTUxMDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Jennifer Martinez',
      location: 'Fort Lauderdale, FL',
      text: 'From design to completion, the team was professional and delivered exactly what we wanted. Our pool is stunning!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1612896018599-3ba9e85cb147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYWNreWFyZCUyMHBvb2x8ZW58MXx8fHwxNzY3NDQ5NTAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Robert Chen',
      location: 'Palm Beach, FL',
      text: 'Outstanding service and quality. They renovated our old pool and made it look brand new. Highly recommend!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1766750838541-46b460a988f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvdXRkb29yJTIwbGl2aW5nfGVufDF8fHx8MTc2NzU1MTA0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <div>
      {/* Hero Section with Video */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src={new URL('../assets/hero video.mp4', import.meta.url).href}
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/70 to-transparent"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-start">
          <div className="container-custom flex justify-start">
            <div className="max-w-3xl text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block bg-accent-blue/20 backdrop-blur-sm border border-accent-blue/30 px-4 py-2 rounded-full mb-6">
                  <span className="text-white text-sm uppercase tracking-wider">Premium Pool Builders</span>
                </div>
                <h1 className="mb-6 text-white">
                  Luxury Pool Design<br />& Build Solutions
                </h1>
                <p className="mb-8 text-xl text-white leading-relaxed">
                  Transform your outdoor space into a stunning oasis with Southern Pool Group's premium pool construction and design services.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="bg-white text-accent-blue px-10 py-5 rounded-full hover:bg-accent-dark-blue inline-flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all"
                  >
                    <span className="text-lg">Get Free Quote</span>
                    <ArrowRight className="w-6 h-6" />
                  </Link>
                  <Link
                    to="/gallery"
                    className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-10 py-5 rounded-full hover:bg-white/20 inline-flex items-center gap-3 transition-all"
                  >
                    <Play className="w-5 h-5" />
                    <span className="text-lg">View Our Work</span>
                  </Link>
                </div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="grid grid-cols-3 gap-8 mt-16"
                >
                  {[
                    { number: '25+', label: 'Years' },
                    { number: '500+', label: 'Pools Built' },
                    { number: '100%', label: 'Satisfaction' },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-6xl text-white font-bold">{stat.number}</div>
                      <div className="text-xl text-white text-sm uppercase tracking-wider font-semibold">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section - Modern Cards */}
      <section className="py-32 bg-white relative">
        <div className="container-custom">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent-blue uppercase tracking-widest text-sm mb-4 block">What We Do</span>
              <h2 className="mb-6">Our Premium Services</h2>
              <p className="text-xl text-medium-grey max-w-2xl mx-auto">
                From design to maintenance, we provide comprehensive pool solutions for discerning homeowners.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
              >
                {/* Background Image */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                    <service.icon className="w-10 h-10 text-accent-blue mb-4" />
                    <h5 className="text-white mb-3">{service.title}</h5>
                    <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {service.description}
                    </p>
                    <Link
                      to="/services"
                      className="text-accent-blue inline-flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects - Large Images */}
      <section className="py-32 bg-light-grey">
        <div className="container-custom">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent-blue uppercase tracking-widest text-sm mb-4 block">Portfolio</span>
              <h2 className="mb-6">Featured Projects</h2>
              <p className="text-xl text-medium-grey max-w-2xl mx-auto">
                Explore our portfolio of award-winning luxury pool installations
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-3xl cursor-pointer ${
                  index === 0 ? 'md:col-span-2 h-[600px]' : 'h-[500px]'
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-12">
                  <span className="inline-block bg-accent-blue px-4 py-2 rounded-full text-sm text-white mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-6">{project.location}</p>
                  <Link
                    to="/gallery"
                    className="inline-flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/20 transition-all"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-3 bg-charcoal text-white px-10 py-5 rounded-full hover:bg-dark-grey shadow-lg hover:shadow-xl transition-all"
            >
              <span className="text-lg">View Full Portfolio</span>
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Before/After with Split Screen */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent-blue uppercase tracking-widest text-sm mb-4 block">Transformations</span>
              <h2 className="mb-6">Before & After</h2>
              <p className="text-xl text-medium-grey max-w-2xl mx-auto">
                Witness the dramatic difference our expertise makes
              </p>
            </motion.div>
          </div>

          <div className="max-w-6xl mx-auto">
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1577877319317-b5b6ac30f3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwcmVub3ZhdGlvbiUyMGJlZm9yZXxlbnwxfHx8fDE3Njc1NTEwNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              afterImage="https://images.unsplash.com/photo-1661333587575-25c87c14f398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzd2ltbWluZyUyMHBvb2x8ZW58MXx8fHwxNzY3NTUxMDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              beforeLabel="Before"
              afterLabel="After"
            />
          </div>
        </div>
      </section>

      {/* Testimonials - Modern Design */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1574340082901-eccc3a3398bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwb29sJTIwcGFydHl8ZW58MXx8fHwxNzY3OTY3NzU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Pool Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/90"></div>
        </div>

        <div className="container-custom relative">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent-blue uppercase tracking-widest text-sm mb-4 block">Testimonials</span>
              <h2 className="mb-6 text-white">What Our Clients Say</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Trusted by homeowners across South Florida
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Pool Image Background */}
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent"></div>
                </div>

                {/* Testimonial Card */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent-blue text-accent-blue" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Split Layout */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent-blue uppercase tracking-widest text-sm mb-4 block">Why Us</span>
              <h2 className="mb-6">Why Choose Southern Pool Group?</h2>
              <p className="text-xl text-medium-grey mb-8">
                With over 25 years of excellence, we bring unmatched expertise to every project.
              </p>
              
              <div className="space-y-6">
                {[
                  '25+ years of pool design and construction experience',
                  'Licensed, bonded, and fully insured',
                  'Premium materials and craftsmanship',
                  'Comprehensive warranty coverage',
                  'Dedicated project managers',
                  'Full-service maintenance and support',
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 bg-accent-blue/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-accent-blue" />
                    </div>
                    <p className="text-lg">{feature}</p>
                  </motion.div>
                ))}
              </div>
              
              <Link
                to="/about"
                className="mt-10 inline-flex items-center gap-3 bg-charcoal text-white px-10 py-5 rounded-full hover:bg-dark-grey shadow-lg hover:shadow-xl transition-all"
              >
                <span className="text-lg">Learn More About Us</span>
                <ArrowRight className="w-6 h-6" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1672576488191-0db5354a0e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwY29uc3RydWN0aW9uJTIwd29ya3xlbnwxfHx8fDE3Njc0NjI2ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Pool Construction"
                  className="w-full"
                />
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-accent-blue text-white p-8 rounded-2xl shadow-2xl">
                <div className="text-5xl mb-2">500+</div>
                <div className="text-sm uppercase tracking-wider">Pools Completed</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1612318983888-562dbee7119f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZpbml0eSUyMHBvb2wlMjBzdW5zZXR8ZW58MXx8fHwxNzY3OTY3NzU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/95"></div>
        </div>

        <div className="container-custom relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent-blue uppercase tracking-widest text-sm mb-4 block">Get Started</span>
              <h2 className="text-white mb-6">Ready to Build Your Dream Pool?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Get a free consultation and quote for your dream pool. Our team is ready to bring your vision to life.
              </p>
              
              <div className="space-y-6">
                {[
                  { number: '1', title: 'Free Consultation', desc: 'Discuss your vision with our design team' },
                  { number: '2', title: 'Custom Design', desc: 'Receive a detailed 3D design and quote' },
                  { number: '3', title: 'Expert Installation', desc: 'Professional construction and finishing' },
                ].map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-6"
                  >
                    <div className="w-16 h-16 bg-accent-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl text-white">{step.number}</span>
                    </div>
                    <div>
                      <h6 className="text-white mb-1">{step.title}</h6>
                      <p className="text-gray-400">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ContactForm title="Request Your Free Quote" formType="quote" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
