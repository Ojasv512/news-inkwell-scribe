import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a news tip, story idea, or feedback? We'd love to hear from you. 
            Our newsroom is always open to the public.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">First Name</label>
                  <Input placeholder="Enter your first name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Last Name</label>
                  <Input placeholder="Enter your last name" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Email</label>
                <Input type="email" placeholder="Enter your email" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Subject</label>
                <Input placeholder="What is this about?" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Message</label>
                <Textarea 
                  placeholder="Tell us more details..."
                  rows={5}
                />
              </div>
              <Button className="w-full">Send Message</Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Our Office</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  123 Press Avenue<br />
                  Media District<br />
                  New York, NY 10001<br />
                  United States
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Phone Numbers</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <p className="font-medium">Newsroom</p>
                  <p className="text-muted-foreground">+1 (555) 123-NEWS</p>
                </div>
                <div>
                  <p className="font-medium">Tips Hotline</p>
                  <p className="text-muted-foreground">+1 (555) 123-TIPS</p>
                </div>
                <div>
                  <p className="font-medium">General Inquiries</p>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <span>Email Addresses</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <p className="font-medium">News Tips</p>
                  <p className="text-muted-foreground">tips@theherald.com</p>
                </div>
                <div>
                  <p className="font-medium">Editorial</p>
                  <p className="text-muted-foreground">editorial@theherald.com</p>
                </div>
                <div>
                  <p className="font-medium">Feedback</p>
                  <p className="text-muted-foreground">feedback@theherald.com</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Newsroom Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-muted-foreground">6:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-muted-foreground">8:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-muted-foreground">8:00 AM - 9:00 PM</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Breaking news is covered 24/7. For urgent tips, use our tips hotline.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tips Section */}
        <section className="mt-16">
          <Card className="bg-muted">
            <CardHeader>
              <CardTitle>Submit News Tips Securely</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We take source protection seriously. For sensitive information, please use our secure channels:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline">
                  Encrypted Email
                </Button>
                <Button variant="outline">
                  Signal Messenger
                </Button>
                <Button variant="outline">
                  SecureDrop Portal
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;