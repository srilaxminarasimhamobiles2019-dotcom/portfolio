import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Briefcase, GraduationCap, MapPin } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    { icon: Briefcase, title: "5+ Years", description: "Professional Experience" },
    { icon: User, title: "50+", description: "Happy Clients" },
    { icon: GraduationCap, title: "Creative", description: "Problem Solver" },
    { icon: MapPin, title: "Global", description: "Remote Work" }
  ];

  const interests = ["Design", "Technology", "Innovation", "Collaboration", "Learning"];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in">
            Passionate about creating meaningful digital experiences that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="slide-in-left">
            <h3 className="text-2xl font-semibold mb-6">Hello, I'm [Your Name]</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over 5 years of experience in creative design and development, I specialize in 
                creating digital solutions that are both aesthetically pleasing and functionally robust.
              </p>
              <p>
                My journey began with a passion for visual storytelling and has evolved into a 
                comprehensive skill set spanning user experience design, brand development, and 
                technical implementation.
              </p>
              <p>
                I believe in the power of collaboration and am dedicated to understanding each 
                client's unique vision to deliver exceptional results that exceed expectations.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-4">Interests & Values</h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <Badge key={interest} variant="secondary" className="text-sm">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="slide-in-right">
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <Card key={index} className="p-6 text-center soft-shadow hover:glow-shadow transition-all duration-300">
                  <item.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h4 className="font-bold text-2xl mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;