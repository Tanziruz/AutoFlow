import { Link } from 'react-router-dom';
import { Sparkles, Target, Users, Rocket, Heart, ArrowLeft } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Sparkles className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">AutoFlow</span>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link
                to="/app"
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <Link
          to="/"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
        
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About AutoFlow
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to make automation accessible to everyone through the power of AI.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center">
              <Target className="h-8 w-8 text-indigo-600" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            At AutoFlow, we believe automation should be as simple as having a conversation.
            Our AI-powered platform empowers anyone to create sophisticated workflows without
            writing a single line of code. We're breaking down the barriers between human
            intention and automated execution.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">User-First</h3>
            <p className="text-gray-600">
              We design every feature with you in mind. Your success is our success,
              and we're committed to making automation intuitive and accessible.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
            <p className="text-gray-600">
              We leverage cutting-edge AI technology to push the boundaries of what's
              possible in workflow automation.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Passion</h3>
            <p className="text-gray-600">
              We're passionate about empowering people to work smarter, not harder.
              Every workflow saved is a victory for productivity.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-2xl p-12 text-white mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-indigo-50">
            <p>
              AutoFlow was born from a simple observation: people spend countless hours on
              repetitive tasks that could be automated, but traditional automation tools are
              too complex for most users.
            </p>
            <p>
              We asked ourselves: what if you could describe what you want in plain English
              and have AI build it for you? That question led to the creation of AutoFlow,
              a platform where anyone can become an automation expert.
            </p>
            <p>
              Today, we're helping thousands of users save time, reduce errors, and focus
              on what truly matters in their work and lives.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community and start automating your tasks today.
          </p>
          <Link
            to="/app"
            className="inline-flex items-center bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Get Started Free
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500">
            <p>&copy; 2025 AutoFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
