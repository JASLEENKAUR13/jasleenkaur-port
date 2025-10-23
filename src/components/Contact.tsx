import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || `Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:work.jasleenkaur@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    toast({
      title: "Opening email client...",
      description: "Your default email app will open with the pre-filled message.",
    });

    // Reset form after a short delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "work.jasleenkaur@gmail.com",
      href: "mailto:work.jasleenkaur@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8750912238",
      href: "tel:+918750912238",
      color: "accent"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "West Delhi, India",
      href: null,
      color: "primary"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/JASLEENKAUR13",
      color: "primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jasleen-kaur-6b2906255/",
      color: "accent"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on exciting projects? Let's connect and create something amazing together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="glass-card border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="bg-muted/50 border-border/50 focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Your Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="bg-muted/50 border-border/50 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Collaboration"
                      className="bg-muted/50 border-border/50 focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project or how we can work together..."
                      rows={6}
                      className="bg-muted/50 border-border/50 focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="btn-hero w-full text-lg py-3"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send via Email
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Your message will be sent directly to my email.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="glass-card border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const IconComponent = info.icon;
                      return (
                        <div key={index} className="flex items-center space-x-4">
                          <div className={`p-3 rounded-lg ${
                            info.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                          }`}>
                            <IconComponent className={`h-5 w-5 ${
                              info.color === 'primary' ? 'text-primary' : 'text-accent'
                            }`} />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">
                              {info.label}
                            </p>
                            {info.href ? (
                              <a 
                                href={info.href}
                                className="text-foreground hover:text-primary transition-colors font-medium"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-foreground font-medium">{info.value}</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="glass-card border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Connect with me</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center space-x-3 p-4 rounded-lg border border-border/50 hover:border-${social.color}/50 transition-all duration-300 group hover:scale-105`}
                        >
                          <IconComponent className={`h-5 w-5 text-${social.color} group-hover:scale-110 transition-transform`} />
                          <span className="font-medium">{social.label}</span>
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Availability Status */}
              <Card className="glass-card border-0">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-3 h-3 bg-accent rounded-full mr-3 animate-pulse"></div>
                    <h3 className="text-xl font-semibold">Available for Work</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    I'm currently open to internship opportunities, freelance projects, 
                    and full-time positions in software development.
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-accent">
                    <CheckCircle className="h-4 w-4" />
                    <span>Typically responds within 24 hours</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;