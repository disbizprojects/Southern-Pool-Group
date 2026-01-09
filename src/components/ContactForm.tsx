import { useState } from 'react';
import { Send } from 'lucide-react';

interface ContactFormProps {
  title?: string;
  formType?: 'contact' | 'quote' | 'service';
}

export function ContactForm({ title = 'Get In Touch', formType = 'contact' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h4 className="mb-6">{title}</h4>
      
      {submitted ? (
        <div className="bg-accent-blue text-white p-6 rounded text-center">
          <p>Thank you! We'll get back to you within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-2">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-accent-blue"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-accent-blue"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Phone *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-accent-blue"
            />
          </div>

          {formType !== 'contact' && (
            <div>
              <label className="block text-sm mb-2">Service Interested In</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-accent-blue"
              >
                <option value="">Select a service</option>
                <option value="custom-design">Custom Pool Design</option>
                <option value="installation">Pool Installation</option>
                <option value="renovation">Pool Renovation</option>
                <option value="maintenance">Maintenance & Repairs</option>
                <option value="water-features">Water Features</option>
                <option value="equipment">Equipment Installation</option>
              </select>
            </div>
          )}

          <div>
            <label className="block text-sm mb-2">Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-accent-blue"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent-blue text-white px-8 py-4 rounded hover:bg-accent-dark-blue flex items-center justify-center gap-2"
          >
            <span>{formType === 'quote' ? 'Request Quote' : 'Send Message'}</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      )}
    </div>
  );
}
