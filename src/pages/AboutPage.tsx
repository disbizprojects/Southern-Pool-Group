import { Link } from 'react-router-dom';
import { Users, Award, Target, CheckCircle, ArrowRight } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { motion } from 'motion/react';

export function AboutPage() {
  const team = [
    {
      name: 'David Harrison',
      role: 'Founder & CEO',
      bio: '25+ years in luxury pool design and construction',
    },
    {
      name: 'Sarah Mitchell',
      role: 'Head of Design',
      bio: 'Award-winning pool architect with international experience',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Construction Manager',
      bio: 'Expert in premium pool installation and project management',
    },
    {
      name: 'Emily Chen',
      role: 'Client Relations Director',
      bio: 'Dedicated to exceptional customer service and satisfaction',
    },
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in every project we undertake.',
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your vision and satisfaction are at the center of everything we do.',
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Meticulous attention to detail ensures flawless results.',
    },
    {
      icon: CheckCircle,
      title: 'Integrity',
      description: 'Transparent communication and honest business practices.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 bg-charcoal text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1672576488191-0db5354a0e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwY29uc3RydWN0aW9uJTIwd29ya3xlbnwxfHx8fDE3Njc0NjI2ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="About Us"
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
              <h1 className="mb-4">About Southern Pool Group</h1>
              <p className="text-xl text-light-grey max-w-2xl">
                Building luxury pools and lasting relationships since 1998
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-medium-grey">
                <p>
                  Founded in 1998, Southern Pool Group began with a simple mission: to create exceptional outdoor living spaces that transform homes into private luxury resorts.
                </p>
                <p>
                  Over the past 25 years, we've designed and built hundreds of custom pools throughout South Florida, earning a reputation for uncompromising quality and innovative design.
                </p>
                <p>
                  Our team combines traditional craftsmanship with cutting-edge technology to deliver pools that are not only beautiful but built to last generations.
                </p>
                <p>
                  Today, we're proud to be one of the most trusted names in luxury pool construction, serving discerning homeowners who demand the very best.
                </p>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1766750838541-46b460a988f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvdXRkb29yJTIwbGl2aW5nfGVufDF8fHx8MTc2NzU1MTA0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Our Work"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-light-grey">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Values</h2>
            <p className="text-xl text-medium-grey max-w-2xl mx-auto">
              The principles that guide every project we undertake
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <value.icon className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                <h5 className="mb-3">{value.title}</h5>
                <p className="text-medium-grey">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-charcoal text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '25+', label: 'Years Experience' },
              { number: '500+', label: 'Pools Built' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Awards Won' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl text-accent-blue mb-2">{stat.number}</div>
                <div className="text-lg text-light-grey">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Meet Our Team</h2>
            <p className="text-xl text-medium-grey max-w-2xl mx-auto">
              Experienced professionals dedicated to bringing your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-48 h-48 bg-light-grey rounded-full mx-auto mb-4"></div>
                <h5 className="mb-1">{member.name}</h5>
                <p className="text-accent-blue mb-2">{member.role}</p>
                <p className="text-medium-grey text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-light-grey">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Certifications & Affiliations</h2>
            <p className="text-xl text-medium-grey">
              Trusted and recognized by industry leaders
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'Licensed & Bonded',
              'BBB A+ Rating',
              'PHTA Member',
              'Master Pool Builder',
              'EPA Certified',
              'APSP Certified',
              'Green Building Council',
              'Florida State Licensed',
            ].map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md text-center flex items-center justify-center"
              >
                <p>{cert}</p>
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
              <h2 className="mb-6">Ready to Start Your Project?</h2>
              <p className="text-xl text-medium-grey mb-8">
                Schedule a free consultation with our team to discuss your dream pool project. We'll guide you through every step of the process.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-accent-blue flex-shrink-0" />
                  <p className="text-lg">Free initial consultation and site assessment</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-accent-blue flex-shrink-0" />
                  <p className="text-lg">Custom 3D design and visualization</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-accent-blue flex-shrink-0" />
                  <p className="text-lg">Detailed project timeline and budget</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-accent-blue flex-shrink-0" />
                  <p className="text-lg">Transparent pricing with no hidden fees</p>
                </div>
              </div>
              <Link
                to="/gallery"
                className="mt-8 inline-flex items-center gap-2 bg-charcoal text-white px-8 py-4 rounded hover:bg-dark-grey"
              >
                View Our Portfolio
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div>
              <ContactForm title="Request Consultation" formType="quote" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
