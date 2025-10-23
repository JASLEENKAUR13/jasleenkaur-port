import { useEffect, useState } from 'react';
import { Code, Database, Smartphone, Cloud, Globe, Settings } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "primary",
      skills: [
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 80 },
        { name: "Dart", level: 95 },
        { name: "Kotlin", level: 75 },
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "accent",
      skills: [
        { name: "Flutter", level: 95 },
        { name: "Android SDK", level: 85 },
         

        { name: "Jetpack Compose", level: 80 },
        { name: "BLoC Pattern", level: 90 },
        { name: "State Management", level: 88 },
      ]
    },
    {
      title: "Web Development",
      icon: Globe,
      color: "primary",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "FastAPI", level: 80 },
        { name: "REST APIs", level: 92 },
        { name: "UI/UX Design", level: 85 },
      ]
    },
    {
      title: "Database & Cloud",
      icon: Database,
      color: "accent",
      skills: [
        { name: "Firebase", level: 90 },
        { name: "Supabase", level: 88 },
        { name: "MySQL", level: 80 },
       { name: "Postgresql", level: 80 },
        { name: "Cloud Integration", level: 85 },
        { name: "Data Management", level: 87 },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Settings,
      color: "primary",
      skills: [
        { name: "Git & GitHub", level: 92 },
        { name: "Android Studio", level: 88 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 85 },
        { name: "Retrofit", level: 80 },
      ]
    },
    {
      title: "Specialized Areas",
      icon: Cloud,
      color: "accent",
      skills: [
        { name: "API Integration", level: 92 },
        { name: "Mobile Architecture", level: 88 },
        { name: "Full Stack Development", level: 85 },
        { name: "Problem Solving", level: 90 },
        { name: "Agile Development", level: 82 },
      ]
    }
  ];

  const SkillBar = ({ skill, delay }: { skill: { name: string; level: number }, delay: number }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress"
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${delay}ms`
          }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit built through hands-on experience and continuous learning
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <Card key={category.title} className="glass-card border-0 project-card">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <div className={`p-3 rounded-lg mr-4 ${
                        category.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                      }`}>
                        <IconComponent className={`h-6 w-6 ${
                          category.color === 'primary' ? 'text-primary' : 'text-accent'
                        }`} />
                      </div>
                      <h3 className="text-lg font-semibold">{category.title}</h3>
                    </div>
                    
                    <div className="space-y-1">
                      {category.skills.map((skill, skillIndex) => (
                        <SkillBar 
                          key={skill.name} 
                          skill={skill} 
                          delay={categoryIndex * 200 + skillIndex * 100}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Skills Summary */}
          <div className="mt-16 text-center">
            <Card className="glass-card border-0 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Core Competencies</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">3+</div>
                    <div className="text-sm text-muted-foreground">Years Learning</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">5+</div>
                    <div className="text-sm text-muted-foreground">Projects Built</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Passion Driven</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;