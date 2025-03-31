import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import Section from './Section';
import Container from './Container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { toast } from '@/hooks/use-toast';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z.string().min(10, { message: 'Message should be at least 10 characters' }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    // Email submission - open default email client
    const mailtoLink = `mailto:support@skygridtech.org?subject=Contact from ${data.name}&body=${encodeURIComponent(data.message)}%0A%0AFrom: ${data.name}%0AEmail: ${data.email}`;
    window.open(mailtoLink, '_blank');

    toast({
      title: "Message Sent!",
      description: "Your message has been sent via email.",
    });

    form.reset();
  };

  // Direct WhatsApp button handler without form submission
  const handleDirectWhatsAppClick = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?phone=2348153428584&text=${encodeURIComponent("Hello, I'm interested in your services. Can we chat?")}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Section id="contact" className="py-20 bg-black text-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-skyblue">Contact Us</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work with us? Reach out using the form below or contact us directly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            
            {/* Contact Cards */}
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-skyblue p-3 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Email</h4>
                    <a href="mailto:support@skygridtech.org" className="text-skyblue hover:underline">
                      support@skygridtech.org
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-skyblue p-3 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Phone</h4>
                    <a href="tel:+2348153428584" className="text-skyblue hover:underline">
                      +234 815 342 8584
                    </a>
                    <Button 
                      onClick={handleDirectWhatsAppClick} 
                      variant="outline" 
                      className="mt-2 bg-black text-white border-gray-700 hover:bg-gray-800"
                      size="sm"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Chat on WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-skyblue p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Address</h4>
                    <p className="text-gray-300">
                      HSE 13/15 ADEGBENLE BOLARINWA, <br />
                      CHEVY VIEW ESTATE, <br />
                      CHEVRON LEKKI
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" className="bg-gray-800 border-gray-700 text-white" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email" className="bg-gray-800 border-gray-700 text-white" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message" 
                          className="bg-gray-800 border-gray-700 text-white min-h-32" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-skyblue hover:bg-skydark text-white"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>
          </div>
        </div>
        
        {/* Success Dialog */}
        <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
          <DialogContent className="bg-gray-900 text-white border-gray-800">
            <DialogHeader>
              <DialogTitle className="flex items-center justify-center text-center">
                <CheckCircle className="h-12 w-12 text-green-500 mb-2" />
                <span className="text-xl block mt-2">Message Sent Successfully!</span>
              </DialogTitle>
              <DialogDescription className="text-center text-gray-300 mt-2">
                Your WhatsApp message has been sent. We'll get back to you soon.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </Container>
    </Section>
  );
};

export default Contact;
