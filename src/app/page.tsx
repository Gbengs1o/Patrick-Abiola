import Image from 'next/image';
import Link from 'next/link';
import { Award, Briefcase, Mail, Mic, Phone, Users } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="home"
          className="w-full h-[calc(100vh-3.5rem)] flex flex-col justify-center items-center text-center px-4"
        >
          <Avatar className="w-32 h-32 md:w-40 md:h-40 mb-6 border-4 border-primary">
            <AvatarImage src="https://placehold.co/400x400.png" alt="Patrick Abiola" data-ai-hint="professional man" />
            <AvatarFallback>PA</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-2">
            Patrick Abiola
          </h1>
          <p className="text-lg md:text-2xl text-foreground/80 mb-8 max-w-3xl">
            Product Manager, Career Services Expert, HR Professional, and Public Speaker
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="#expertise">View My Work</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="w-full py-16 md:py-24 bg-card/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              About Me
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-1 gap-8 text-lg text-foreground/80 leading-relaxed text-center">
              <p>
                I am a multifaceted professional with a deep passion for building products that solve real-world problems and helping individuals achieve their career aspirations. My journey has taken me through the dynamic fields of Product Management, Human Resources, and Career Services, equipping me with a unique blend of strategic thinking, user empathy, and people management skills.
              </p>
               <p>
                Whether I'm defining a product roadmap, coaching a client through a career transition, or speaking to an audience, my goal is always to create value and drive positive change.
              </p>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              My Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {expertiseData.map((item) => (
                <Card key={item.title} className="flex flex-col bg-card/50 hover:border-primary/50 transition-all duration-300">
                  <CardHeader className="flex-row items-center gap-4">
                    <div className="bg-primary/20 p-3 rounded-full">
                      {item.icon}
                    </div>
                    <CardTitle className="text-primary">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-foreground/80">{item.description}</p>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section id="contact" className="w-full py-16 md:py-24 bg-card/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
               <a href="mailto:patrick.abiola@example.com" className="flex items-center gap-3 text-lg hover:text-primary transition-colors group">
                  <Mail className="w-6 h-6 text-primary" />
                  <span className="group-hover:underline">patrick.abiola@example.com</span>
               </a>
               <a href="https://www.linkedin.com/in/patrickabiola" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg hover:text-primary transition-colors group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  <span className="group-hover:underline">LinkedIn Profile</span>
               </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const expertiseData = [
  {
    title: 'Product Management',
    icon: <Briefcase className="w-6 h-6 text-primary" />,
    description: "I specialize in the entire product lifecycle, from ideation and user research to launch and iteration. My focus is on building user-centric products that align with business goals.",
    skills: ['Roadmap Planning', 'Agile Methodologies', 'User Research', 'Data Analysis', 'Jira', 'Figma'],
  },
  {
    title: 'Career Services',
    icon: <Award className="w-6 h-6 text-primary" />,
    description: "As a career coach, I empower professionals to navigate their career paths successfully. I provide resume building, interview preparation, and strategic career planning services.",
    skills: ['Resume Writing', 'Interview Coaching', 'Career Strategy', 'LinkedIn Optimization', 'Negotiation'],
  },
  {
    title: 'Human Resources',
    icon: <Users className="w-6 h-6 text-primary" />,
    description: "With a background in HR, I have a strong understanding of talent acquisition, employee relations, and performance management. I focus on creating positive and productive work environments.",
    skills: ['Talent Acquisition', 'Onboarding', 'Employee Relations', 'Performance Management', 'HRIS'],
  },
  {
    title: 'Public Speaking',
    icon: <Mic className="w-6 h-6 text-primary" />,
    description: "I am an experienced public speaker, adept at engaging audiences on topics related to product management, career development, and leadership. I craft compelling narratives to inspire and educate.",
    skills: ['Keynote Speaking', 'Workshop Facilitation', 'Storytelling', 'Panel Moderation', 'Presentation Design'],
  },
];
