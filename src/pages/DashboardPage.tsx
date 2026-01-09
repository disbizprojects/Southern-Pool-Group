import { useNavigate } from 'react-router-dom';
import { FileText, Calendar, CreditCard, MessageSquare, Settings, LogOut, Download, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface DashboardPageProps {
  isLoggedIn: boolean;
}

export function DashboardPage({ isLoggedIn }: DashboardPageProps) {
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate('/login');
    return null;
  }

  const projectData = {
    name: 'Custom Pool Installation',
    status: 'In Progress',
    progress: 65,
    startDate: 'March 15, 2026',
    estimatedCompletion: 'May 30, 2026',
    image: 'https://images.unsplash.com/photo-1561722504-1c2e7d7952e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwY29uc3RydWN0aW9uJTIwcHJvZ3Jlc3N8ZW58MXx8fHwxNzY3NTU3NDE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  };

  const upcomingAppointments = [
    {
      id: 1,
      title: 'Design Review Meeting',
      date: 'Jan 10, 2026',
      time: '2:00 PM',
    },
    {
      id: 2,
      title: 'Equipment Selection',
      date: 'Jan 15, 2026',
      time: '10:00 AM',
    },
  ];

  const documents = [
    { id: 1, name: 'Pool Design Plans.pdf', date: 'Jan 5, 2026' },
    { id: 2, name: 'Contract Agreement.pdf', date: 'Jan 3, 2026' },
    { id: 3, name: 'Material Selections.pdf', date: 'Jan 2, 2026' },
    { id: 4, name: 'Permit Documents.pdf', date: 'Dec 28, 2025' },
  ];

  const invoices = [
    { id: 1, number: 'INV-001', amount: '$15,000', status: 'Paid', date: 'Jan 1, 2026' },
    { id: 2, number: 'INV-002', amount: '$25,000', status: 'Pending', date: 'Jan 5, 2026' },
  ];

  const messages = [
    {
      id: 1,
      from: 'David Harrison',
      subject: 'Design Updates',
      preview: 'We\'ve made the requested changes to the pool design...',
      date: 'Jan 6, 2026',
      unread: true,
    },
    {
      id: 2,
      from: 'Marcus Rodriguez',
      subject: 'Construction Schedule',
      preview: 'The excavation is scheduled to begin next week...',
      date: 'Jan 4, 2026',
      unread: false,
    },
  ];

  return (
    <div className="min-h-screen bg-light-grey">
      {/* Header */}
      <section className="bg-charcoal text-white py-12">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="mb-2">Welcome Back, John!</h2>
              <p className="text-light-grey">Here's your project overview</p>
            </div>
            <button className="flex items-center gap-2 bg-white text-charcoal px-6 py-3 rounded hover:bg-light-grey">
              <LogOut className="w-5 h-5" />
              Sign Out
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-custom">
          {/* Project Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-md p-8 mb-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="mb-1">{projectData.name}</h4>
                    <p className="text-medium-grey">Project ID: #2026-001</p>
                  </div>
                  <span className="bg-accent-blue text-white px-4 py-2 rounded">
                    {projectData.status}
                  </span>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span>Project Progress</span>
                    <span className="text-accent-blue">{projectData.progress}%</span>
                  </div>
                  <div className="w-full bg-light-grey rounded-full h-4">
                    <div
                      className="bg-accent-blue h-4 rounded-full transition-all"
                      style={{ width: `${projectData.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent-blue" />
                    <div>
                      <p className="text-sm text-medium-grey">Start Date</p>
                      <p>{projectData.startDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-accent-blue" />
                    <div>
                      <p className="text-sm text-medium-grey">Est. Completion</p>
                      <p>{projectData.estimatedCompletion}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <ImageWithFallback
                  src={projectData.image}
                  alt="Pool Construction Progress"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h5 className="mb-6">Quick Actions</h5>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { icon: Calendar, label: 'Schedule Appointment', color: 'accent-blue' },
                    { icon: MessageSquare, label: 'Send Message', color: 'accent-blue' },
                    { icon: CreditCard, label: 'Make Payment', color: 'accent-blue' },
                    { icon: FileText, label: 'View Documents', color: 'accent-blue' },
                    { icon: Download, label: 'Download Plans', color: 'accent-blue' },
                    { icon: Settings, label: 'Settings', color: 'accent-blue' },
                  ].map((action, index) => (
                    <motion.button
                      key={action.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-light-grey transition-colors"
                    >
                      <action.icon className={`w-8 h-8 text-${action.color}`} />
                      <span className="text-sm text-center">{action.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Messages */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center justify-between mb-6">
                  <h5>Messages</h5>
                  <button className="text-accent-blue hover:text-accent-dark-blue text-sm">
                    View All
                  </button>
                </div>
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`p-4 rounded-lg border hover:border-accent-blue cursor-pointer transition-colors ${
                        message.unread ? 'bg-blue-50 border-accent-blue' : 'bg-white border-gray-200'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 bg-accent-blue rounded-full"></div>
                          <div>
                            <p className={message.unread ? '' : 'text-medium-grey'}>{message.from}</p>
                            <p className="text-sm text-medium-grey">{message.date}</p>
                          </div>
                        </div>
                        {message.unread && (
                          <span className="bg-accent-blue text-white text-xs px-2 py-1 rounded">
                            New
                          </span>
                        )}
                      </div>
                      <h6 className="mb-1">{message.subject}</h6>
                      <p className="text-sm text-medium-grey">{message.preview}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documents */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center justify-between mb-6">
                  <h5>Project Documents</h5>
                  <button className="text-accent-blue hover:text-accent-dark-blue text-sm">
                    View All
                  </button>
                </div>
                <div className="space-y-3">
                  {documents.map((doc) => (
                    <div
                      key={doc.id}
                      className="flex items-center justify-between p-4 rounded-lg hover:bg-light-grey cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="w-8 h-8 text-accent-blue" />
                        <div>
                          <p>{doc.name}</p>
                          <p className="text-sm text-medium-grey">{doc.date}</p>
                        </div>
                      </div>
                      <Download className="w-5 h-5 text-medium-grey hover:text-accent-blue" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Upcoming Appointments */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h5 className="mb-6">Upcoming</h5>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="p-4 bg-light-grey rounded-lg">
                      <p className="mb-2">{appointment.title}</p>
                      <div className="flex items-center gap-2 text-sm text-medium-grey">
                        <Calendar className="w-4 h-4" />
                        <span>{appointment.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-medium-grey mt-1">
                        <Clock className="w-4 h-4" />
                        <span>{appointment.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 bg-accent-blue text-white px-4 py-3 rounded hover:bg-accent-dark-blue">
                  Schedule New
                </button>
              </div>

              {/* Invoices */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h5 className="mb-6">Invoices</h5>
                <div className="space-y-4">
                  {invoices.map((invoice) => (
                    <div key={invoice.id} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span>{invoice.number}</span>
                        <span
                          className={`text-sm px-2 py-1 rounded ${
                            invoice.status === 'Paid'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}
                        >
                          {invoice.status}
                        </span>
                      </div>
                      <p className="text-2xl mb-1">{invoice.amount}</p>
                      <p className="text-sm text-medium-grey">{invoice.date}</p>
                      {invoice.status === 'Pending' && (
                        <button className="w-full mt-3 bg-accent-blue text-white px-4 py-2 rounded hover:bg-accent-dark-blue text-sm">
                          Pay Now
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Support */}
              <div className="bg-accent-blue text-white rounded-lg p-8">
                <h5 className="mb-4">Need Help?</h5>
                <p className="mb-6 text-sm">
                  Our support team is here to assist you with any questions.
                </p>
                <button className="w-full bg-white text-accent-blue px-4 py-3 rounded hover:bg-light-grey">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}