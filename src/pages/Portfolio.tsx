import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Download, ExternalLink, Mail, MapPin, Sparkles, Copy, QrCode, Star, Calendar, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import AIAssistant from '@/components/AIAssistant';

const Portfolio = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const portfolioData = {
    profile: {
      name: 'Alex Johnson',
      title: 'Full-Stack Developer & AI Enthusiast',
      location: 'San Francisco, CA',
      email: 'alex.johnson@email.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      bio: 'Passionate full-stack developer with 3+ years of experience building scalable web applications. Specialized in React, Node.js, and AI integration. Always eager to learn new technologies and solve complex problems.',
      socials: {
        github: 'https://github.com/alexjohnson',
        linkedin: 'https://linkedin.com/in/alexjohnson',
        portfolio: 'https://alexjohnson.dev'
      }
    },
    projects: [
      {
        id: 1,
        title: 'E-commerce React App',
        description: 'Full-stack e-commerce platform with payment integration, inventory management, and admin dashboard. Built with React, Node.js, and Stripe.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        github: 'https://github.com/alexjohnson/ecommerce-app',
        demo: 'https://ecommerce-demo.vercel.app',
        featured: true
      },
      {
        id: 2,
        title: 'AI Chat Application',
        description: 'Real-time chat application with AI-powered responses using OpenAI API. Features include file sharing, emoji reactions, and message encryption.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop',
        tech: ['Next.js', 'OpenAI', 'Socket.io', 'PostgreSQL'],
        github: 'https://github.com/alexjohnson/ai-chat',
        demo: 'https://ai-chat-demo.vercel.app',
        featured: true
      },
      {
        id: 3,
        title: 'Data Visualization Dashboard',
        description: 'Interactive business analytics dashboard with real-time data visualization and reporting features.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
        tech: ['D3.js', 'Python', 'Flask', 'SQLite'],
        github: 'https://github.com/alexjohnson/data-viz',
        demo: 'https://data-viz-demo.netlify.app',
        featured: false
      }
    ],
    achievements: [
      {
        type: 'internship',
        title: 'Software Engineering Intern',
        organization: 'TechCorp Inc.',
        date: 'Jun 2024 - Aug 2024',
        description: 'Developed microservices architecture, improved API performance by 40%'
      },
      {
        type: 'award',
        title: 'Best Innovation Award',
        organization: 'University Hackathon',
        date: '2024',
        description: 'First place for developing an AI-powered sustainability platform'
      },
      {
        type: 'certificate',
        title: 'AWS Certified Solutions Architect',
        organization: 'Amazon Web Services',
        date: '2024',
        description: 'Cloud architecture certification covering design principles'
      }
    ],
    skills: {
      'Frontend': ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
      'Backend': ['Node.js', 'Python', 'GraphQL', 'REST APIs'],
      'Database': ['MongoDB', 'PostgreSQL', 'Redis'],
      'Cloud': ['AWS', 'Docker', 'Kubernetes'],
      'Tools': ['Git', 'Figma', 'Postman', 'VS Code']
    }
  };

  const copyPortfolioLink = () => {
    navigator.clipboard.writeText('https://portfolia.dev/alex-johnson');
    // Show toast notification
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-soft">
      {/* Portfolio Header */}
      <section className="bg-white border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8 animate-fade-in">
            {/* Profile Image */}
            <div className="relative">
              <img
                src={portfolioData.profile.avatar}
                alt={portfolioData.profile.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-success rounded-full border-4 border-white" />
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                <h1 className="text-3xl lg:text-4xl font-space font-bold">
                  {portfolioData.profile.name}
                </h1>
                {isEditMode && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                        <Sparkles className="w-4 h-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>✨ Edit with AI</DialogTitle>
                      </DialogHeader>
                      <AIEditForm section="profile" />
                    </DialogContent>
                  </Dialog>
                )}
              </div>
              
              <p className="text-xl text-primary mb-2">{portfolioData.profile.title}</p>
              
              <div className="flex items-center justify-center lg:justify-start space-x-4 text-foreground-muted mb-4">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{portfolioData.profile.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Mail className="w-4 h-4" />
                  <span>{portfolioData.profile.email}</span>
                </div>
              </div>

              <p className="text-foreground-muted mb-6 max-w-2xl">
                {portfolioData.profile.bio}
              </p>

              {/* Social Links */}
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <Button variant="outline" size="sm" asChild>
                  <a href={portfolioData.profile.socials.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={portfolioData.profile.socials.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
                <Button size="sm" onClick={copyPortfolioLink}>
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Link
                </Button>
                <Button variant="outline" size="sm">
                  <QrCode className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Edit Mode Toggle */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-sm text-foreground-muted">
            Portfolio Preview • <span className="text-success">Live</span>
          </div>
          <div className="flex space-x-3">
            <Button
              variant={isEditMode ? "default" : "outline"}
              size="sm"
              onClick={() => setIsEditMode(!isEditMode)}
            >
              {isEditMode ? 'Exit Edit' : 'Edit Mode'}
            </Button>
            <Link to="/export">
              <Button className="btn-primary">
                <ExternalLink className="w-4 h-4 mr-2" />
                Export & Share
              </Button>
            </Link>
          </div>
        </div>

        {/* Projects Section */}
        <section className="mb-12 animate-slide-in-up">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl lg:text-3xl font-space font-bold text-gradient-primary">
              Featured Projects
            </h2>
            {isEditMode && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm" variant="ghost">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Edit with AI
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>✨ Edit Projects with AI</DialogTitle>
                  </DialogHeader>
                  <AIEditForm section="projects" />
                </DialogContent>
              </Dialog>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {portfolioData.projects.filter(p => p.featured).map((project, index) => (
              <Card key={project.id} className="glass-card interactive overflow-hidden animate-slide-in-right" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="aspect-video bg-gradient-soft rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground-muted text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Achievements Section */}
          <section className="animate-slide-in-up">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-space font-bold text-gradient-primary">
                Achievements
              </h2>
              {isEditMode && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" variant="ghost">
                      <Sparkles className="w-4 h-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>✨ Edit Achievements with AI</DialogTitle>
                    </DialogHeader>
                    <AIEditForm section="achievements" />
                  </DialogContent>
                </Dialog>
              )}
            </div>

            <div className="space-y-4">
              {portfolioData.achievements.map((achievement, index) => (
                <Card key={index} className="glass-card animate-slide-in-right" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      {achievement.type === 'internship' && <Building className="w-4 h-4 text-primary" />}
                      {achievement.type === 'award' && <Star className="w-4 h-4 text-primary" />}
                      {achievement.type === 'certificate' && <Badge className="w-4 h-4 text-primary" />}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{achievement.title}</h3>
                      <p className="text-sm text-foreground-muted">{achievement.organization}</p>
                      <p className="text-xs text-foreground-muted flex items-center mt-1">
                        <Calendar className="w-3 h-3 mr-1" />
                        {achievement.date}
                      </p>
                      <p className="text-sm text-foreground-muted mt-2">{achievement.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="animate-slide-in-up">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-space font-bold text-gradient-primary">
                Skills
              </h2>
              {isEditMode && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" variant="ghost">
                      <Sparkles className="w-4 h-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>✨ Edit Skills with AI</DialogTitle>
                    </DialogHeader>
                    <AIEditForm section="skills" />
                  </DialogContent>
                </Dialog>
              )}
            </div>

            <div className="space-y-4">
              {Object.entries(portfolioData.skills).map(([category, skills], index) => (
                <Card key={category} className="glass-card animate-slide-in-right" style={{ animationDelay: `${index * 100}ms` }}>
                  <h3 className="font-semibold mb-3">{category}</h3>
                  <div className="flex flex-wrap gap-1">
                    {skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border text-center animate-fade-in">
          <p className="text-foreground-muted text-sm">
            Made with 💻 by{' '}
            <span className="text-gradient-primary font-semibold">Smart Internship Portfolio Builder</span>
          </p>
        </footer>
      </div>

      <AIAssistant />
    </div>
  );

  function AIEditForm({ section }) {
    return (
      <div className="space-y-4">
        <div className="bg-gradient-glow p-4 rounded-lg">
          <p className="text-sm text-foreground-muted">
            AI will analyze your {section} and suggest improvements for better impact and clarity.
          </p>
        </div>
        
        <div className="space-y-3">
          <Button className="w-full btn-electric">
            ✨ Make it more impactful
          </Button>
          <Button className="w-full btn-primary">
            🚀 Optimize for recruiters
          </Button>
          <Button className="w-full" variant="outline">
            📝 Improve clarity
          </Button>
          <Button className="w-full" variant="outline">
            🎯 Add missing keywords
          </Button>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Custom AI prompt:</label>
          <Textarea 
            placeholder="Tell AI how you want to improve this section..."
            rows={2}
          />
          <Button className="w-full">Apply AI Enhancement</Button>
        </div>
      </div>
    );
  }
};

export default Portfolio;