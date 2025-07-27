import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Code, 
  Palette, 
  Smartphone, 
  Database, 
  Globe, 
  Figma,
  Monitor,
  Layers
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: [
        { name: "React/Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "CSS/Tailwind", level: 95 },
        { name: "JavaScript", level: 90 }
      ]
    },
    {
      title: "Design & UX",
      icon: Palette,
      skills: [
        { name: "UI/UX Design", level: 90 },
        { name: "Figma", level: 95 },
        { name: "Adobe Creative Suite", level: 80 },
        { name: "Prototyping", level: 85 }
      ]
    },
    {
      title: "Backend & Database",
      icon: Database,
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Python", level: 70 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 }
      ]
    }
  ];

  const tools = [
    { name: "Figma", icon: Figma },
    { name: "VS Code", icon: Code },
    { name: "React", icon: Globe },
    { name: "Mobile Dev", icon: Smartphone },
    { name: "Web Design", icon: Monitor },
    { name: "Design Systems", icon: Layers }
  ];

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in">My Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in">
            A comprehensive skill set developed through years of experience and continuous learning.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className={`soft-shadow hover:glow-shadow transition-all duration-300 ${
                index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <category.icon className="h-8 w-8 text-primary mr-3" />
                  <h3 className="font-semibold text-xl">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="fade-in">
          <h3 className="text-2xl font-semibold text-center mb-8">Tools & Technologies</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {tools.map((tool) => (
              <div key={tool.name} className="text-center group">
                <div className="p-4 rounded-lg bg-card soft-shadow group-hover:glow-shadow transition-all duration-300">
                  <tool.icon className="h-8 w-8 mx-auto text-primary mb-2" />
                  <p className="text-sm font-medium">{tool.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;