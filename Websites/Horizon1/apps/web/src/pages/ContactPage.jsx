
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import pb from '@/lib/pocketbaseClient';

const ContactPage = () => {
  // State for Lead Capture Form
  const [leadEmail, setLeadEmail] = useState('');
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [isSuccessLead, setIsSuccessLead] = useState(false);

  // State for Contact Form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [isSuccessContact, setIsSuccessContact] = useState(false);
  
  const { toast } = useToast();

  // Handle Lead Capture Submission
  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    if (!leadEmail) {
      toast({
        title: 'Email required',
        description: 'Please enter your email address',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmittingLead(true);
    try {
      // USER EDIT: This saves the lead email to the 'email_leads' collection in PocketBase.
      await pb.collection('email_leads').create(
        {
          email: leadEmail,
          guide_interest: true
        },
        { $autoCancel: false }
      );
      setIsSuccessLead(true);
      setLeadEmail('');
      toast({
        title: 'Success!',
        description: 'Check your email for the free guide.'
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to submit. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmittingLead(false);
    }
  };

  // Handle Contact Form Changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle Contact Form Submission
  const handleContactSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.company || !formData.message) {
      toast({
        title: 'Missing fields',
        description: 'Please fill in all required fields',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmittingContact(true);
    try {
      // USER EDIT: This saves the contact form submission to the 'contact_submissions' collection in PocketBase.
      // It does not send an email directly from the frontend. You can view these submissions in your PocketBase admin dashboard.
      await pb.collection('contact_submissions').create(
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          submitted_at: new Date().toISOString()
        },
        { $autoCancel: false }
      );

      setIsSuccessContact(true);
      setFormData({ name: '', email: '', company: '', message: '' });
      toast({
        title: 'Message sent!',
        description: "We'll get back to you as soon as possible."
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to send message. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmittingContact(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Dragon China</title>
        <meta
          name="description"
          content="Get in touch with Dragon China. Contact us for sourcing, quality control, market research, and business development services across China."
        />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ready to discuss your China business needs? We're here to help.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Lead Magnet Section */}
        <section className="py-12 bg-card border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto bg-background rounded-xl shadow-2xl p-8 sm:p-12 border border-primary/20"
            >
              <div className="flex justify-center mb-4">
                <BookOpen className="text-primary" size={48} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 text-center">
                Free Guide: 5 Critical Mistakes European Companies Make When Sourcing in China
              </h2>
              <p className="text-lg text-foreground/90 mb-8 text-center">
                Enter your email below to receive our exclusive guide and avoid costly errors.
              </p>

              {isSuccessLead ? (
                <div className="text-center py-6">
                  <CheckCircle2 className="mx-auto text-primary mb-4" size={48} />
                  <p className="text-xl text-foreground font-semibold mb-2">Thank you!</p>
                  <p className="text-muted-foreground">
                    Check your email for the free guide. We'll send it shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleLeadSubmit} className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={leadEmail}
                    onChange={(e) => setLeadEmail(e.target.value)}
                    className="flex-1 h-12 text-base bg-input border-border text-foreground"
                    required
                  />
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmittingLead}
                    className="h-12 px-8 whitespace-nowrap"
                  >
                    {isSubmittingLead ? 'Sending...' : 'Get Free Guide'}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-primary mb-6">Contact Information</h2>
                <p className="text-foreground/90 mb-8 leading-relaxed">
                  Whether you need sourcing support, quality control, market research, or business
                  development services, we're ready to help you succeed in China.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-semibold text-foreground mb-1">Email</p>
                      <a
                        href="mailto:contact@dragonchina.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        contact@dragonchina.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-semibold text-foreground mb-1">Our Locations</p>
                      <p className="text-muted-foreground">Hong Kong</p>
                      <p className="text-muted-foreground">Shenzhen</p>
                      <p className="text-muted-foreground">Ningbo</p>
                      <p className="text-muted-foreground">Shanghai</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-card rounded-lg border border-primary/20">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-primary">Response Time:</strong> We typically respond to
                    inquiries within 24 hours during business days.
                  </p>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {isSuccessContact ? (
                  <div className="bg-card rounded-xl p-12 border border-primary/20 text-center">
                    <CheckCircle2 className="mx-auto text-primary mb-6" size={64} />
                    <h3 className="text-2xl font-bold text-foreground mb-4">Message Sent!</h3>
                    <p className="text-muted-foreground mb-8">
                      Thank you for contacting us. We'll get back to you as soon as possible.
                    </p>
                    <Button
                      onClick={() => setIsSuccessContact(false)}
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="bg-card rounded-xl p-8 border border-border">
                    <h3 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h3>

                    <div className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="bg-input border-border text-foreground"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@company.com"
                          className="bg-input border-border text-foreground"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                          Company *
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                          className="bg-input border-border text-foreground"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project or inquiry..."
                          rows={6}
                          className="bg-input border-border text-foreground resize-none"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmittingContact}
                        className="w-full group"
                      >
                        {isSubmittingContact ? (
                          'Sending...'
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
