import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, ArrowRight } from 'lucide-react';
import logo from 'figma:asset/31d98d8fdebbd5d47bc479f6e9cd6a7b8f22c109.png';

interface LoginPageProps {
  setIsLoggedIn: (value: boolean) => void;
}

export function LoginPage({ setIsLoggedIn }: LoginPageProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock login - in real app, this would authenticate with backend
    if (formData.email && formData.password) {
      setIsLoggedIn(true);
      navigate('/dashboard');
    } else {
      setError('Please enter both email and password');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  return (
    <div className="min-h-screen bg-light-grey flex items-center justify-center py-20">
      <div className="container-custom">
        <div className="max-w-md mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <div className="text-center mb-8">
              <img src={logo} alt="Southern Pool Group" className="h-16 mx-auto mb-4" />
              <h2 className="mb-2">Customer Login</h2>
              <p className="text-medium-grey">
                Access your account to view projects and documents
              </p>
            </div>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-medium-grey" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-accent-blue"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-medium-grey" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-accent-blue"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-sm">Remember me</span>
                </label>
                <a href="#" className="text-sm text-accent-blue hover:text-accent-dark-blue">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-accent-blue text-white px-8 py-4 rounded hover:bg-accent-dark-blue flex items-center justify-center gap-2"
              >
                <span>Sign In</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-medium-grey">
                Don't have an account?{' '}
                <a href="#" className="text-accent-blue hover:text-accent-dark-blue">
                  Contact us
                </a>{' '}
                to get started
              </p>
            </div>
          </div>

          <div className="mt-8 bg-accent-blue text-white p-6 rounded-lg">
            <h5 className="mb-3">Customer Portal Features</h5>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <span>View project status and timeline</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <span>Access project documents and plans</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <span>Schedule maintenance appointments</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <span>View invoices and payment history</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <span>Direct messaging with your project team</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
