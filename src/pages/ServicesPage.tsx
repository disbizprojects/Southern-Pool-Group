import { Link } from 'react-router-dom';
import { Droplet, Waves, Wrench, Sparkles, Hammer, Settings, ArrowRight } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { motion } from 'motion/react';

export function ServicesPage() {
  const services = [
    {
      icon: Droplet,
      title: 'Custom Pool Design',
      description: 'Transform your vision into reality with our bespoke pool designs tailored to your property and lifestyle.',
      features: [
        '3D design visualization',
        'Site analysis and planning',
        'Style consultation',
        'Material selection',
        'Landscape integration',
      ],
      image: 'https://images.unsplash.com/photo-1661333587575-25c87c14f398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzd2ltbWluZyUyMHBvb2x8ZW58MXx8fHwxNzY3NTUxMDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Hammer,
      title: 'Pool Installation',
      description: 'Expert construction using premium materials and proven techniques for pools built to last.',
      features: [
        'Excavation and preparation',
        'Steel reinforcement',
        'Gunite or concrete construction',
        'Plumbing and electrical',
        'Premium finishing',
      ],
      image: 'https://images.unsplash.com/photo-1672576488191-0db5354a0e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwY29uc3RydWN0aW9uJTIwd29ya3xlbnwxfHx8fDE3Njc0NjI2ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Waves,
      title: 'Pool Renovations',
      description: 'Breathe new life into your existing pool with comprehensive renovation services.',
      features: [
        'Resurfacing and refinishing',
        'Tile replacement',
        'Coping restoration',
        'Equipment upgrades',
        'Modernization',
      ],
      image: 'https://images.unsplash.com/photo-1577877319317-b5b6ac30f3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwcmVub3ZhdGlvbiUyMGJlZm9yZXxlbnwxfHx8fDE3Njc1NTEwNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Wrench,
      title: 'Maintenance & Repairs',
      description: 'Keep your pool in pristine condition with our comprehensive maintenance programs.',
      features: [
        'Weekly cleaning service',
        'Chemical balancing',
        'Equipment inspection',
        'Leak detection and repair',
        'Emergency service',
      ],
      image: 'https://images.unsplash.com/photo-1766302524567-36ec1759fef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwbWFpbnRlbmFuY2UlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY3NTUxMDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Sparkles,
      title: 'Water Features',
      description: 'Add elegance and ambiance with custom water features that elevate your pool design.',
      features: [
        'Waterfalls and fountains',
        'Deck jets and bubblers',
        'Sheer descents',
        'Fire and water bowls',
        'Custom rock formations',
      ],
      image: 'https://images.unsplash.com/photo-1630386519718-8d20841eba6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGZlYXR1cmUlMjBmb3VudGFpbnxlbnwxfHx8fDE3Njc1NTEwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Settings,
      title: 'Equipment Installation',
      description: 'Upgrade your pool with the latest technology for efficiency, comfort, and convenience.',
      features: [
        'Automated control systems',
        'Energy-efficient pumps',
        'Salt water systems',
        'LED lighting',
        'Heating and cooling',
      ],
      image: 'https://images.unsplash.com/photo-1612896018599-3ba9e85cb147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYWNreWFyZCUyMHBvb2x8ZW58MXx8fHwxNzY3NDQ5NTAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 bg-charcoal text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1722404190766-cd39c0742175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNvcnQlMjBwb29sJTIwZGVzaWdufGVufDF8fHx8MTc2NzU1MTA0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Our Services"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-4">Our Services</h1>
              <p className="text-xl text-light-grey max-w-2xl">
                Comprehensive pool solutions from design to maintenance
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => (
        <section
          key={service.title}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-light-grey'}`}
        >
          <div className="container-custom">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className="flex items-center gap-4 mb-4">
                  <service.icon className="w-12 h-12 text-accent-blue" />
                  <h2>{service.title}</h2>
                </div>
                <p className="text-xl text-medium-grey mb-6">{service.description}</p>
                
                <h5 className="mb-4">What's Included:</h5>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-accent-blue text-white px-8 py-4 rounded hover:bg-accent-dark-blue"
                >
                  Request This Service
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? 'lg:order-1' : ''}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full rounded-lg shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-20 bg-charcoal text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Process</h2>
            <p className="text-xl text-light-grey max-w-2xl mx-auto">
              From initial consultation to final installation, we guide you every step of the way
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Meet with our team to discuss your vision, budget, and timeline.',
              },
              {
                step: '02',
                title: 'Design',
                description: 'Receive custom 3D designs and detailed project specifications.',
              },
              {
                step: '03',
                title: 'Construction',
                description: 'Expert installation with regular updates and quality control.',
              },
              {
                step: '04',
                title: 'Completion',
                description: 'Final walkthrough, training, and ongoing support.',
              },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl text-accent-blue mb-4">{phase.step}</div>
                <h5 className="mb-3">{phase.title}</h5>
                <p className="text-light-grey">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="mb-6">Get Started Today</h2>
              <p className="text-xl text-medium-grey mb-8">
                Ready to transform your backyard? Contact us for a free consultation and quote. Our team will work with you to create the perfect pool for your home.
              </p>
              <div className="bg-light-grey p-8 rounded-lg">
                <h5 className="mb-4">Why Choose Us?</h5>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>25+ years of experience in luxury pool construction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Licensed, bonded, and fully insured</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Comprehensive warranty on all work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Dedicated project managers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Premium materials and craftsmanship</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <ContactForm title="Request Service Quote" formType="service" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
