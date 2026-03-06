
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search,
  ClipboardCheck,
  BarChart3,
  Calendar,
  Users,
  TrendingUp
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesPage = () => {
  // USER EDIT: You can edit the titles, descriptions, and "why it matters" text for each service below.
  const services = [
    {
      icon: Search,
      title: 'Sourcing & Supplier Identification',
      description:
        'We identify and vet reliable suppliers across China through factory visits and fair attendance, matching your specific requirements with manufacturers who can deliver quality products at competitive prices.',
      whyItMatters:
        'Finding the right supplier is critical. We leverage our network and local expertise to connect you with trustworthy partners, saving you time and reducing risk.'
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Control Missions & Inspections',
      description:
        'On-site quality assurance inspections throughout the production process. We ensure your products meet specifications before they ship, protecting your brand and investment.',
      whyItMatters:
        'Quality issues discovered after shipping are costly. Our inspections catch problems early, protecting your brand reputation and bottom line.'
    },
    {
      icon: BarChart3,
      title: 'Market Studies with Real Field Research',
      description:
        'In-depth market research conducted on the ground, not from a desk. We provide actionable insights based on real conversations and field observations across China.',
      whyItMatters:
        'Desktop research misses critical nuances. Our field-based approach uncovers opportunities and challenges that only local presence can reveal.'
    },
    {
      icon: Calendar,
      title: 'Fair Attendance & Booth Management',
      description:
        'We represent your company at major trade fairs including Canton Fair and sector-specific exhibitions, managing your booth, networking with potential partners, and identifying opportunities.',
      whyItMatters:
        "Trade fairs are essential for business development in China. Our presence ensures you don't miss opportunities while managing costs effectively."
    },
    {
      icon: Users,
      title: 'Fractional China Representative',
      description:
        'Act as your ongoing on-the-ground representative in China without the overhead of a full-time hire. We handle meetings, negotiations, and relationship management.',
      whyItMatters:
        'Having a local presence builds trust and accelerates business. Our fractional model gives you the benefits without the commitment of a full-time employee.'
    },
    {
      icon: TrendingUp,
      title: 'Helping Chinese SMEs Expand into European Markets',
      description:
        'We assist Chinese small and medium enterprises in understanding European markets, navigating regulations, and establishing business relationships with European partners.',
      whyItMatters:
        'Cross-cultural understanding works both ways. We bridge the gap for Chinese companies seeking European partnerships, creating mutual opportunities.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Dragon China</title>
        <meta
          name="description"
          content="Comprehensive China business services: sourcing, quality control, market research, trade fair representation, and business development for European companies."
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
                Our <span className="text-primary">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Comprehensive on-the-ground support for European companies doing business in China.
                From sourcing to market entry, we deliver real results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Factory Image Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1583737177718-b95af4095782"
                  alt="Modern manufacturing facility in China with advanced production equipment"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent flex items-end">
                  <div className="p-8">
                    <h2 className="text-3xl font-bold text-foreground mb-2">
                      On-the-Ground <span className="text-primary">Expertise</span>
                    </h2>
                    <p className="text-lg text-foreground/90">
                      We visit factories, attend fairs, and conduct real field research to ensure quality and reliability.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full bg-card border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <div className="mb-4">
                          <Icon className="text-primary" size={40} />
                        </div>
                        <CardTitle className="text-xl text-primary mb-2">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-foreground/80 text-base leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="border-t border-border pt-4">
                          <p className="text-sm font-semibold text-primary mb-2">Why It Matters</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {service.whyItMatters}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how we can support your business in China. No corporate jargon, just practical solutions.
              </p>
              <Link to="/contact">
                <Button size="lg" className="h-12 px-8 text-base">
                  Contact Us Today
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
