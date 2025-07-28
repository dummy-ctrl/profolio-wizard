import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Download,
  Copy,
  Star,
  Calendar,
  MapPin,
  Award,
  Code,
  Eye,
  Heart,
  Share2
} from "lucide-react";
import Navbar from "@/components/Navbar";

const Portfolio = () => {
  const portfolioData = {
    name: "Alex Chen",
    title: "Full-Stack Developer & AI Enthusiast",
    tagline: "Building the future with code, one project at a time",
    location: "San Francisco, CA",
    email: "alex.chen@email.com",
    github: "alex-dev",
    linkedin: "alexchen-dev",
    about: "Aspiring full-stack developer with a passion for AI and machine learning. Experienced in React, Python, and cloud technologies. Currently pursuing Computer Science degree while building real-world applications and contributing to open-source projects.",
    
    projects: [
      {
        id: 1,
        title: "E-commerce API",
        description: "Full-stack e-commerce platform with Django REST Framework, JWT authentication, and payment integration",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
        tech: ["Django", "PostgreSQL", "Redis", "Docker"],
        stars: 123,
        demo: "https://demo.example.com",
        repo: "https://github.com/alex-dev/ecommerce-api",
        featured: true
      },
      {
        id: 2,
        title: "AI Chat Application",
        description: "Real-time chat app with AI assistant integration using OpenAI API and WebSockets",
        image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=400&h=250&fit=crop",
        tech: ["Node.js", "Socket.io", "OpenAI", "Express"],
        stars: 234,
        demo: "https://chat.example.com",
        repo: "https://github.com/alex-dev/ai-chat",
        featured: true
      },
      {
        id: 3,
        title: "Portfolio Dashboard",
        description: "Modern React dashboard with TypeScript, TailwindCSS, and responsive design",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
        tech: ["React", "TypeScript", "TailwindCSS", "Vite"],
        stars: 87,
        demo: "https://portfolio.example.com",
        repo: "https://github.com/alex-dev/portfolio",
        featured: false
      }
    ],

    achievements: [
      {
        title: "AWS Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2024",
        type: "certification"
      },
      {
        title: "Software Engineering Intern",
        issuer: "Tech Innovations Inc.",
        date: "Summer 2023",
        type: "internship"
      },
      {
        title: "Dean's List Recognition",
        issuer: "University of Technology",
        date: "Fall 2023",
        type: "award"
      }
    ],

    skills: [
      { name: "React", level: 85 },
      { name: "Python", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "Django", level: 75 },
      { name: "AWS", level: 60 },
      { name: "Machine Learning", level: 70 },
      { name: "Docker", level: 65 },
      { name: "PostgreSQL", level: 70 }
    ]
  };

  const copyPortfolioLink = () => {
    navigator.clipboard.writeText("https://portfolio.alexchen.dev");
    // Toast notification would go here
  };

  const ProjectCard = ({ project }: { project: any }) => (
    <Card className="glass-card-hover overflow-hidden group">
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {project.featured && (
          <Badge className="absolute top-3 right-3 bg-gradient-purple-blue text-white border-none">
            Featured
          </Badge>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
            <Button size="sm" className="btn-glass flex-1">
              <Eye className="w-4 h-4 mr-2" />
              Demo
            </Button>
            <Button size="sm" className="btn-neon flex-1">
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <Star className="w-4 h-4" />
            <span>{project.stars}</span>
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech: string, index: number) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 px-6 text-center">
          {/* Background Effects */}
          <div className="absolute inset-0 mesh-background opacity-30" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="mb-8">
              <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-primary/30">
                <AvatarImage src="/placeholder.svg" alt={portfolioData.name} />
                <AvatarFallback className="text-2xl font-bold bg-gradient-purple-blue text-white">
                  {portfolioData.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold text-gradient-rainbow mb-4">
                {portfolioData.name}
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-2">
                {portfolioData.title}
              </p>
              
              <p className="text-lg text-accent font-medium mb-6">
                {portfolioData.tagline}
              </p>
              
              <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground mb-8">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{portfolioData.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Mail className="w-4 h-4" />
                  <span>{portfolioData.email}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button className="btn-neon">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button className="btn-neon">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button className="btn-gradient">
                <Download className="w-4 h-4 mr-2" />
                Resume PDF
              </Button>
              <Button className="btn-glass" onClick={copyPortfolioLink}>
                <Copy className="w-4 h-4 mr-2" />
                Copy Link
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-gradient-blue mb-1">
                  {portfolioData.projects.length}
                </div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </Card>
              <Card className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-gradient-blue mb-1">
                  {portfolioData.achievements.length}
                </div>
                <div className="text-xs text-muted-foreground">Achievements</div>
              </Card>
              <Card className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-gradient-blue mb-1">
                  {portfolioData.skills.length}
                </div>
                <div className="text-xs text-muted-foreground">Skills</div>
              </Card>
              <Card className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-gradient-blue mb-1">
                  4.9
                </div>
                <div className="text-xs text-muted-foreground">GPA</div>
              </Card>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 pb-20 space-y-20">
          
          {/* About Section */}
          <section>
            <h2 className="text-3xl font-display font-bold text-gradient-blue mb-8 text-center">
              About Me
            </h2>
            <Card className="glass-card p-8 text-center max-w-4xl mx-auto">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {portfolioData.about}
              </p>
            </Card>
          </section>

          {/* Projects Section */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-gradient-blue mb-4">
                Featured Projects
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A collection of my most impactful work, showcasing full-stack development and AI integration
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioData.projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button className="btn-gradient">
                <Github className="w-4 h-4 mr-2" />
                View All Projects on GitHub
              </Button>
            </div>
          </section>

          {/* Achievements Timeline */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-gradient-blue mb-4">
                Achievements & Experience
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Key milestones in my professional and academic journey
              </p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-destructive opacity-30" />
              
              <div className="space-y-12">
                {portfolioData.achievements.map((achievement, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <Card className={`glass-card-hover p-6 max-w-md ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                      <div className="flex items-center space-x-3 mb-3">
                        <Award className="w-5 h-5 text-primary" />
                        <Badge variant="outline" className="text-xs capitalize">
                          {achievement.type}
                        </Badge>
                      </div>
                      <h3 className="font-semibold mb-1">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{achievement.issuer}</p>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>{achievement.date}</span>
                      </div>
                    </Card>
                    
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-gradient-blue mb-4">
                Skills & Technologies
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Technical expertise across full-stack development, AI/ML, and cloud technologies
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolioData.skills.map((skill, index) => (
                <Card key={index} className="glass-card-hover p-6 text-center group">
                  <Code className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2">{skill.name}</h3>
                  <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                    <div 
                      className="bg-gradient-purple-blue h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">{skill.level}% proficiency</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center py-12 border-t border-white/10">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Heart className="w-5 h-5 text-red-400" />
              <span className="text-muted-foreground">Made with</span>
              <span className="font-semibold text-primary">Smart Internship Builder</span>
            </div>
            
            <div className="flex justify-center space-x-4 mb-6">
              <Button size="sm" variant="ghost" className="btn-glass">
                <Share2 className="w-4 h-4 mr-2" />
                Share Portfolio
              </Button>
              <Button size="sm" variant="ghost" className="btn-glass">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
            
            {/* QR Code placeholder */}
            <div className="w-24 h-24 bg-white/10 rounded-lg mx-auto flex items-center justify-center">
              <span className="text-xs text-muted-foreground">QR Code</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Scan to view portfolio on mobile
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;