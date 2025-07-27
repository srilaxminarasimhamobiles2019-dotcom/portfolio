import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      avatar: "/placeholder.svg",
      rating: 5,
      testimonial: "Exceptional work! The attention to detail and creative problem-solving skills are outstanding. Delivered exactly what we needed and more."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager, Design Co.",
      avatar: "/placeholder.svg",
      rating: 5,
      testimonial: "Working with this creative professional was a game-changer for our project. The communication was clear, deadlines were met, and the quality exceeded our expectations."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director, Brand Agency",
      avatar: "/placeholder.svg",
      rating: 5,
      testimonial: "Incredible talent and professionalism. The creative solutions provided helped us achieve our goals and stand out in a competitive market."
    }
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in">What Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in">
            Don't just take my word for it. Here's what clients have to say about working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className={`soft-shadow hover:glow-shadow transition-all duration-300 ${
                index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'
              }`}
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.testimonial}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;