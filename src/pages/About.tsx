import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Globe, Clock } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Editor-in-Chief",
      bio: "20+ years in investigative journalism with a focus on environmental policy and climate change.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b766?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Michael Chen",
      role: "Technology Editor",
      bio: "Former Silicon Valley reporter covering AI, cybersecurity, and emerging technologies.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Emma Rodriguez",
      role: "Sports Editor",
      bio: "Olympic correspondent and sports analyst with expertise in international athletics.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "David Kumar",
      role: "Business Editor",
      bio: "Financial markets expert with deep knowledge of global economic trends and policies.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
  ];

  const achievements = [
    { icon: Award, title: "Pulitzer Prize Winner", year: "2023" },
    { icon: Globe, title: "International Press Freedom Award", year: "2022" },
    { icon: Users, title: "Best Digital Innovation", year: "2021" },
    { icon: Clock, title: "Excellence in Breaking News", year: "2020" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">About The Herald</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            For over three decades, The Herald has been committed to delivering truth, transparency, 
            and in-depth analysis. We believe journalism is essential to democracy and serves as a 
            vital bridge between information and understanding.
          </p>
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">5M+</div>
              <div className="text-sm text-muted-foreground">Monthly Readers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">150+</div>
              <div className="text-sm text-muted-foreground">Countries Reached</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">30+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                We are dedicated to providing accurate, unbiased, and comprehensive news coverage 
                that empowers our readers to make informed decisions. Our commitment to investigative 
                journalism and fact-based reporting has earned us the trust of millions worldwide.
              </p>
              <p className="text-muted-foreground">
                In an era of information overload, we cut through the noise to deliver what matters most. 
                Our team of experienced journalists and editors work tirelessly to uphold the highest 
                standards of journalistic integrity.
              </p>
            </div>
            <div className="bg-muted p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <Badge variant="outline">Truth</Badge>
                  <span className="text-sm">Unwavering commitment to factual reporting</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Badge variant="outline">Independence</Badge>
                  <span className="text-sm">Editorial freedom from external influences</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Badge variant="outline">Accountability</Badge>
                  <span className="text-sm">Holding power to account for the public good</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Badge variant="outline">Innovation</Badge>
                  <span className="text-sm">Embracing new technologies to serve our audience</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <achievement.icon className="h-12 w-12 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">{achievement.year}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Our Editorial Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <Badge variant="outline">{member.role}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;