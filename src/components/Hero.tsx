import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden glass-card p-2">
              <img 
                src={profilePhoto} 
                alt="Jasleen Kaur" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute inset-0 w-48 h-48 mx-auto rounded-full border-2 border-primary/20 animate-pulse"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="gradient-text">Jasleen Kaur</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in delay-200">
            Software Engineering Student & Full Stack Developer
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-300">
            Passionate about creating innovative software solutions with expertise in 
            <span className="text-primary font-medium"> Flutter</span>, 
            <span className="text-accent font-medium"> React</span>, and 
            <span className="text-primary font-medium"> Mobile App Development</span>. 
            Building the future, one line of code at a time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in delay-500">
            <Button 
              className="btn-hero text-lg px-8 py-3"
              onClick={() => scrollToSection('#projects')}
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              className="text-lg px-8 py-3 border-primary/30 hover:border-primary transition-all duration-300"
              onClick={() => {
                // Create a downloadable resume link
                const link = document.createElement('a');
                link.href = '/jasleen-kaur-resume.pdf'; // You'll need to add this file
                link.download = 'Jasleen_Kaur_Resume.pdf';
                link.click();
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-in delay-700">
            <a 
              href="https://github.com/JASLEENKAUR13" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:scale-110 transition-transform duration-300 hover:shadow-glow"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/jasleenkaur13" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:scale-110 transition-transform duration-300 hover:shadow-glow"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:work.jasleenkaur@gmail.com"
              className="p-3 glass-card rounded-full hover:scale-110 transition-transform duration-300 hover:shadow-glow"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;