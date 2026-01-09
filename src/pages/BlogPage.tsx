import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { motion } from 'motion/react';
import { ContactForm } from '../components/ContactForm';
import { useState } from 'react';

export function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Pool Design Trends for 2026',
      excerpt: 'Discover the latest trends in luxury pool design, from infinity edges to integrated spas and sustainable features.',
      image: 'https://images.unsplash.com/photo-1661333587575-25c87c14f398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzd2ltbWluZyUyMHBvb2x8ZW58MXx8fHwxNzY3NTUxMDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Design',
      date: 'January 3, 2026',
      author: 'Sarah Mitchell',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Pool Maintenance 101: Essential Tips for Homeowners',
      excerpt: 'Keep your pool crystal clear and functioning perfectly with these essential maintenance tips from our experts.',
      image: 'https://images.unsplash.com/photo-1766302524567-36ec1759fef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwbWFpbnRlbmFuY2UlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY3NTUxMDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Maintenance',
      date: 'December 28, 2025',
      author: 'Marcus Rodriguez',
      readTime: '7 min read',
    },
    {
      id: 3,
      title: 'Choosing the Right Pool Materials for Your Climate',
      excerpt: 'Learn how to select materials that will withstand your local weather conditions while maintaining beauty and durability.',
      image: 'https://images.unsplash.com/photo-1672576488191-0db5354a0e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwY29uc3RydWN0aW9uJTIwd29ya3xlbnwxfHx8fDE3Njc0NjI2ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Construction',
      date: 'December 20, 2025',
      author: 'David Harrison',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'Energy-Efficient Pool Technology: Save Money and the Planet',
      excerpt: 'Explore the latest energy-efficient pool equipment and how it can reduce your operating costs while being eco-friendly.',
      image: 'https://images.unsplash.com/photo-1612896018599-3ba9e85cb147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYWNreWFyZCUyMHBvb2x8ZW58MXx8fHwxNzY3NDQ5NTAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Technology',
      date: 'December 15, 2025',
      author: 'Sarah Mitchell',
      readTime: '8 min read',
    },
    {
      id: 5,
      title: 'Water Features That Elevate Your Pool Design',
      excerpt: 'Add elegance and ambiance to your pool with waterfalls, fountains, and other custom water features.',
      image: 'https://images.unsplash.com/photo-1630386519718-8d20841eba6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGZlYXR1cmUlMjBmb3VudGFpbnxlbnwxfHx8fDE3Njc1NTEwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Design',
      date: 'December 10, 2025',
      author: 'Sarah Mitchell',
      readTime: '5 min read',
    },
    {
      id: 6,
      title: 'Pool Renovation: When and Why You Should Consider It',
      excerpt: 'Is your pool showing signs of age? Learn when it\'s time for a renovation and what options are available.',
      image: 'https://images.unsplash.com/photo-1577877319317-b5b6ac30f3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwcmVub3ZhdGlvbiUyMGJlZm9yZXxlbnwxfHx8fDE3Njc1NTEwNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Renovation',
      date: 'December 5, 2025',
      author: 'Marcus Rodriguez',
      readTime: '6 min read',
    },
  ];

  const categories = ['All', 'Design', 'Maintenance', 'Construction', 'Technology', 'Renovation'];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 bg-charcoal text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1766750838541-46b460a988f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvdXRkb29yJTIwbGl2aW5nfGVufDF8fHx8MTc2NzU1MTA0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Blog"
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
              <h1 className="mb-4">Pool Care & Design Blog</h1>
              <p className="text-xl text-light-grey max-w-2xl">
                Expert advice, tips, and inspiration for pool owners
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-light-grey sticky top-[72px] z-40">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-medium-grey" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-accent-blue"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded bg-white text-charcoal hover:bg-accent-blue hover:text-white transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div>
              <span className="inline-block bg-accent-blue text-white px-3 py-1 rounded text-sm mb-4">
                Featured
              </span>
              <h2 className="mb-4">{blogPosts[0].title}</h2>
              <p className="text-xl text-medium-grey mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-6 text-sm text-medium-grey mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{blogPosts[0].date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{blogPosts[0].author}</span>
                </div>
                <span>{blogPosts[0].readTime}</span>
              </div>
              <Link
                to="#"
                className="inline-flex items-center gap-2 bg-accent-blue text-white px-8 py-4 rounded hover:bg-accent-dark-blue"
              >
                Read Full Article
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-light-grey">
        <div className="container-custom">
          <h3 className="mb-12">Recent Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="absolute top-4 left-4 bg-accent-blue text-white px-3 py-1 rounded text-sm">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <h5 className="mb-3 group-hover:text-accent-blue transition-colors">
                    {post.title}
                  </h5>
                  <p className="text-medium-grey mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-medium-grey mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <Link
                    to="#"
                    className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-dark-blue"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container-custom">
          <div className="bg-accent-blue text-white rounded-lg p-12 text-center">
            <h3 className="mb-4">Get Pool Tips Delivered to Your Inbox</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for expert pool care advice, design inspiration, and exclusive offers.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded text-charcoal focus:outline-none"
              />
              <button className="bg-charcoal text-white px-8 py-3 rounded hover:bg-dark-grey whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-light-grey">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="mb-6">Have Questions About Pool Care?</h2>
              <p className="text-xl text-medium-grey mb-8">
                Our experts are here to help. Contact us for personalized advice on pool design, maintenance, or renovations.
              </p>
              <div className="space-y-4">
                {[
                  'Free consultation with our design team',
                  'Custom pool care recommendations',
                  'Professional maintenance services',
                  'Emergency repair support',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <ContactForm title="Ask Our Experts" formType="contact" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
