import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/Navbar';
import { useAuth } from '@/hooks/useAuth';
import { motion } from 'framer-motion';
import {
  Briefcase, MessageCircle, Zap, Target, BookOpen,
  ArrowRight, Star, BarChart3, Users, Mic,
  Trophy, Sparkles, Shield, Clock, ChevronRight
} from 'lucide-react';

const features = [
  { icon: Target, title: 'Role-Based Interviews', desc: 'Tailored questions for Software Dev, Data Analyst, UI/UX, and more.' },
  { icon: Zap, title: 'Instant AI Feedback', desc: 'Get scored on clarity, technical accuracy, communication & confidence.' },
  { icon: BookOpen, title: 'Resume-Based Questions', desc: 'Upload your resume and get questions targeted to your experience.' },
  { icon: Mic, title: 'Voice Interview Mode', desc: 'Speak your answers and get feedback on fluency, pace & filler words.' },
  { icon: MessageCircle, title: 'Career Mentor — Neya', desc: 'Ask anything about careers, resumes, skills & interview strategies.' },
  { icon: Star, title: 'Performance Analytics', desc: 'Track your progress with detailed scores and improvement plans.' },
];

const steps = [
  { num: '01', title: 'Choose Your Role', desc: 'Select job role, interview type & difficulty' },
  { num: '02', title: 'Practice Interview', desc: 'Answer AI-generated questions in real-time' },
  { num: '03', title: 'Get Feedback', desc: 'Receive detailed scores and improvement tips' },
  { num: '04', title: 'Improve & Repeat', desc: 'Follow your personalized study plan' },
];

const stats = [
  { value: '9', label: 'Job Roles', icon: Briefcase },
  { value: '4', label: 'Interview Types', icon: Target },
  { value: 'Voice', label: 'Speech Practice', icon: Mic },
  { value: '<5min', label: 'Quick Mode', icon: Clock },
];


export default function Index() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-5" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 py-16 md:py-28 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              AI-Powered Interview Prep
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground leading-tight mb-6">
              Ace Your Next Interview with{' '}
              <span className="gradient-text">CareerPilot AI</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Practice with realistic mock interviews, get instant AI feedback, and build the confidence to land your dream internship or job.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/interview/setup">
                <Button variant="hero" size="lg" className="text-base px-8">
                  Start Mock Interview
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <Link to="/chatbot">
                <Button variant="hero-outline" size="lg" className="text-base px-8">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  Ask Neya
                </Button>
              </Link>
            </div>
            {!user && (
              <p className="mt-4 text-sm text-muted-foreground">
                <Link to="/auth" className="text-primary hover:underline font-medium">Sign up free</Link> to save your progress & track analytics
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-border bg-card/50">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <s.icon className="w-4 h-4 text-primary" />
                  <span className="text-2xl md:text-3xl font-display font-bold gradient-text">{s.value}</span>
                </div>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions (for logged in users) */}
      {user && (
        <section className="container mx-auto px-4 py-10">
          <h2 className="font-display font-bold text-foreground text-xl mb-4">Quick Actions</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { to: '/interview/setup', icon: Target, label: 'Start Interview', desc: 'Begin a new mock session', color: 'bg-primary/10 text-primary' },
              { to: '/analytics', icon: BarChart3, label: 'View Analytics', desc: 'Check your performance', color: 'bg-accent/10 text-accent' },
              { to: '/chatbot', icon: MessageCircle, label: 'Ask Neya', desc: 'Get career guidance', color: 'bg-score-average/10 text-score-average' },
            ].map((action) => (
              <Link key={action.to} to={action.to}>
                <Card className="shadow-card hover:shadow-card-hover transition-shadow cursor-pointer group">
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className={`w-11 h-11 rounded-lg ${action.color} flex items-center justify-center`}>
                      <action.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-display font-semibold text-foreground text-sm">{action.label}</p>
                      <p className="text-xs text-muted-foreground">{action.desc}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Everything You Need to Prepare
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A complete AI-driven platform designed for students and freshers.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow border border-border"
            >
              <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-secondary/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center text-foreground mb-14">
            How It Works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="text-4xl font-display font-bold gradient-text mb-3">{s.num}</div>
                <h3 className="font-display font-semibold text-foreground mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="gradient-hero rounded-2xl p-10 md:p-16 max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4 relative">
            Ready to Start Preparing?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto relative">
            Join thousands of students building interview confidence with AI.
          </p>
          <Link to={user ? '/interview/setup' : '/auth'}>
            <Button size="lg" className="bg-card text-foreground hover:bg-card/90 font-semibold text-base px-8 relative">
              {user ? 'Begin Your Journey' : 'Get Started Free'}
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded gradient-hero flex items-center justify-center">
              <Briefcase className="w-3 h-3 text-primary-foreground" />
            </div>
            <span className="font-display font-semibold text-foreground">CareerPilot AI</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/feedback" className="hover:text-foreground transition-colors">Feedback</Link>
            <Link to="/chatbot" className="hover:text-foreground transition-colors">Ask Neya</Link>
          </div>
          <p>Built for students, by students. Practice smart, interview better.</p>
        </div>
      </footer>
    </div>
  );
}
