import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { motion } from 'motion/react';

export function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 bg-charcoal text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1766750838541-46b460a988f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvdXRkb29yJTIwbGl2aW5nfGVufDF8fHx8MTc2NzU1MTA0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Contact Us"
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
              <h1 className="mb-4">Contact Us</h1>
              <p className="text-xl text-light-grey max-w-2xl">
                Get in touch to start your pool project today
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Phone,
                title: 'Phone',
                content: '(555) 123-4567',
                subContent: 'Mon-Fri 8AM-6PM',
              },
              {
                icon: Mail,
                title: 'Email',
                content: 'info@southernpoolgroup.com',
                subContent: '24/7 Response',
              },
              {
                icon: MapPin,
                title: 'Location',
                content: '123 Pool Lane',
                subContent: 'Miami, FL 33131',
              },
              {
                icon: Clock,
                title: 'Hours',
                content: 'Mon-Fri: 8AM-6PM',
                subContent: 'Sat: 9AM-3PM',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-light-grey p-8 rounded-lg text-center"
              >
                <item.icon className="w-12 h-12 text-accent-blue mx-auto mb-4" />
                <h5 className="mb-2">{item.title}</h5>
                <p className="text-medium-grey">{item.content}</p>
                <p className="text-sm text-medium-grey">{item.subContent}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Forms */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6">Send Us a Message</h2>
                <ContactForm title="Quick Contact Form" formType="contact" />
              </div>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6">Visit Our Showroom</h2>
                <div className="bg-light-grey rounded-lg overflow-hidden h-96 mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.328329267094!2d-80.19362!3d25.77427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ2JzI3LjQiTiA4MMKwMTEnMzcuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Southern Pool Group Location"
                  ></iframe>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h5 className="mb-4">Why Visit Us?</h5>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                      <span>View material samples and finishes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                      <span>Meet with design consultants</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                      <span>See equipment demonstrations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                      <span>Get expert recommendations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Request Form */}
      <section className="py-20 bg-light-grey">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Request a Service</h2>
              <p className="text-xl text-medium-grey">
                Existing customer? Request maintenance or repair service
              </p>
            </div>
            <ContactForm title="Service Request Form" formType="service" />
          </div>
        </div>
      </section>

      {/* Quote Request Form */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Get a Free Quote</h2>
              <p className="text-xl text-medium-grey">
                Ready to build your dream pool? Let's discuss your project
              </p>
            </div>
            <div className="bg-accent-blue text-white p-8 rounded-lg mb-8">
              <h5 className="mb-4">What Happens Next?</h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl mb-2">1</div>
                  <p>We'll contact you within 24 hours</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">2</div>
                  <p>Schedule a free site visit</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">3</div>
                  <p>Receive your custom quote</p>
                </div>
              </div>
            </div>
            <ContactForm title="Project Quote Request" formType="quote" />
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-charcoal text-white">
        <div className="container-custom text-center">
          <h3 className="mb-4">Need Emergency Service?</h3>
          <p className="text-xl text-light-grey mb-8 max-w-2xl mx-auto">
            For urgent pool repairs and maintenance, call our 24/7 emergency hotline
          </p>
          <a
            href="tel:5551234567"
            className="inline-block bg-accent-blue text-white px-8 py-4 rounded hover:bg-accent-dark-blue text-2xl"
          >
            (555) 123-4567
          </a>
        </div>
      </section>
    </div>
  );
}
