import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ContactForm } from '../components/ContactForm';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

export function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const galleryItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1661333587575-25c87c14f398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzd2ltbWluZyUyMHBvb2x8ZW58MXx8fHwxNzY3NTUxMDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'new-builds',
      title: 'Modern Infinity Pool',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1612896018599-3ba9e85cb147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYWNreWFyZCUyMHBvb2x8ZW58MXx8fHwxNzY3NDQ5NTAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'new-builds',
      title: 'Contemporary Backyard Pool',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1766750838541-46b460a988f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvdXRkb29yJTIwbGl2aW5nfGVufDF8fHx8MTc2NzU1MTA0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'new-builds',
      title: 'Luxury Outdoor Living',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1722404190766-cd39c0742175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNvcnQlMjBwb29sJTIwZGVzaWdufGVufDF8fHx8MTc2NzU1MTA0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'new-builds',
      title: 'Resort-Style Pool',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1577877319317-b5b6ac30f3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwcmVub3ZhdGlvbiUyMGJlZm9yZXxlbnwxfHx8fDE3Njc1NTEwNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'renovations',
      title: 'Pool Renovation Project',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1630386519718-8d20841eba6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGZlYXR1cmUlMjBmb3VudGFpbnxlbnwxfHx8fDE3Njc1NTEwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'water-features',
      title: 'Custom Water Feature',
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1672576488191-0db5354a0e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwY29uc3RydWN0aW9uJTIwd29ya3xlbnwxfHx8fDE3Njc0NjI2ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'new-builds',
      title: 'Pool Construction',
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1766302524567-36ec1759fef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwbWFpbnRlbmFuY2UlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY3NTUxMDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'renovations',
      title: 'Pool Equipment Upgrade',
    },
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'new-builds', label: 'New Builds' },
    { value: 'renovations', label: 'Renovations' },
    { value: 'water-features', label: 'Water Features' },
  ];

  const filteredGallery = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 bg-charcoal text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1661333587575-25c87c14f398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzd2ltbWluZyUyMHBvb2x8ZW58MXx8fHwxNzY3NTUxMDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Gallery"
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
              <h1 className="mb-4">Our Portfolio</h1>
              <p className="text-xl text-light-grey max-w-2xl">
                Explore our collection of luxury pool projects
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-light-grey sticky top-[72px] z-40">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setFilter(category.value)}
                className={`px-6 py-3 rounded transition-colors ${
                  filter === category.value
                    ? 'bg-accent-blue text-white'
                    : 'bg-white text-charcoal hover:bg-gray-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredGallery.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-charcoal bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center">
                    <ZoomIn className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform">
                    <h6 className="text-white">{item.title}</h6>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-charcoal bg-opacity-95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-accent-blue"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Gallery item"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Before/After Section */}
      <section className="py-20 bg-light-grey">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Before & After Transformations</h2>
            <p className="text-xl text-medium-grey">
              See the dramatic difference our renovations make
            </p>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1577877319317-b5b6ac30f3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwcmVub3ZhdGlvbiUyMGJlZm9yZXxlbnwxfHx8fDE3Njc1NTEwNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              afterImage="https://images.unsplash.com/photo-1661333587575-25c87c14f398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzd2ltbWluZyUyMHBvb2x8ZW58MXx8fHwxNzY3NTUxMDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              beforeLabel="Before"
              afterLabel="After"
            />
            
            <div className="text-center">
              <h4 className="mb-3">Complete Pool Renovation</h4>
              <p className="text-lg text-medium-grey">
                Miami Beach Residence - Transformed from dated to contemporary luxury
              </p>
            </div>

            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1672576488191-0db5354a0e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwY29uc3RydWN0aW9uJTIwd29ya3xlbnwxfHx8fDE3Njc0NjI2ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              afterImage="https://images.unsplash.com/photo-1612896018599-3ba9e85cb147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYWNreWFyZCUyMHBvb2x8ZW58MXx8fHwxNzY3NDQ5NTAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              beforeLabel="Construction"
              afterLabel="Completed"
            />
            
            <div className="text-center">
              <h4 className="mb-3">Custom New Build</h4>
              <p className="text-lg text-medium-grey">
                Fort Lauderdale Estate - From concept to stunning reality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="mb-6">Ready to Create Your Own Masterpiece?</h2>
              <p className="text-xl text-medium-grey mb-8">
                Every pool we build is unique, crafted to match your vision and lifestyle. Let's discuss how we can transform your outdoor space into a luxury oasis.
              </p>
              <div className="bg-light-grey p-8 rounded-lg">
                <h5 className="mb-4">What You Get:</h5>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Free design consultation and site visit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Detailed 3D renderings of your pool</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Comprehensive project quote</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Material and finish selections</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <ContactForm title="Request Design Consultation" formType="quote" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
