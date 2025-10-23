import { Heart, Code, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/JASLEENKAUR13",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/jasleen-kaur-6b2906255/",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:work.jasleenkaur@gmail.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border/20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            {/* Left Side - Brand */}
            <div className="text-center md:text-left">
              <button 
                onClick={scrollToTop}
                className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300"
              >
                Jasleen Kaur
              </button>
              <p className="text-sm text-muted-foreground mt-1">
                Software Engineer & Full Stack Developer
              </p>
            </div>

            {/* Center - Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-card rounded-full hover:scale-110 transition-transform duration-300 hover:shadow-glow"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            
          </div>

          {/* Bottom Line */}
          <div className="mt-8 pt-8 border-t border-border/10">
            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                "Code is like humor. When you have to explain it, it's bad." - Cory House
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;