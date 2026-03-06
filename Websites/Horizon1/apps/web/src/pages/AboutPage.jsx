
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Zap, Globe, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Real Field Experience',
      description:
        'We operate beyond the Shanghai-Beijing bubble, with presence in Hong Kong, Shenzhen, Ningbo, and Shanghai. Our team knows China from the ground up and can reach anywhere in the country.'
    },
    {
      icon: Zap,
      title: 'Lean & Agile',
      description:
        'No corporate bureaucracy. We move fast, adapt quickly, and deliver results without the overhead of traditional consulting firms. Our network of entrepreneurs understands what it takes to succeed.'
    },
    {
      icon: Globe,
      title: 'Entrepreneur-Focused',
      description:
        'We understand the challenges of growing businesses. Our approach is practical, cost-effective, and designed for companies that need results, not reports.'
    },
    {
      icon: Award,
      title: 'Proven Network',
      description:
        "Years of building relationships across China's business landscape. We connect you with the right people and open doors that matter."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Dragon China</title>
        <meta
          name="description"
          content="Learn about Dragon China's lean, agile approach to connecting European companies with China's business landscape. Real expertise across Hong Kong, Shenzhen, Ningbo, and Shanghai."
        />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1622126807280-9b5b32b28e77"
              alt="Professional business team collaborating on China market strategy in modern office"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                About <span className="text-primary">Dragon China</span>
              </h1>
              <p className="text-xl text-foreground/90 leading-relaxed">
                Your trusted partner for navigating China's business landscape with confidence and clarity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Network Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 text-center">
                Our Network
              </h2>
              <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
                <p>
                  Dragon China operates across China's key business hubs with strategic presence in Hong Kong,
                  Shenzhen, Ningbo, and Shanghai. But our reach extends far beyond these cities—we can connect
                  you with opportunities anywhere in China.
                </p>
                <p>
                  Our network of experienced business professionals understands both Western expectations and
                  Chinese business culture, providing you with the local expertise needed to succeed in this
                  dynamic market.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 text-center">
                Our Approach
              </h2>
              <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
                <p>
                  Dragon China was built on a simple principle: European companies need real, on-the-ground
                  expertise in China, not corporate consulting speak. We connect you with senior business
                  professionals who understand both Western expectations and Chinese business culture.
                </p>
                <p>
                  Our lean and agile model means you get the expertise you need without the overhead of
                  traditional consulting firms. We're a network of entrepreneurs with real field experience
                  beyond the Shanghai-Beijing bubble, understanding that growing businesses need practical
                  solutions and measurable results.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Dragon Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                Why Dragon
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Direct, no-jargon approach to China business success
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-background rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                  >
                    <Icon className="text-primary mb-4" size={40} />
                    <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                    <p className="text-foreground/80 leading-relaxed">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Let's Work Together
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to leverage our China expertise for your business? Get in touch and let's discuss
                how we can help you succeed.
              </p>
              <Link to="/contact">
                <Button size="lg" className="h-12 px-8 text-base">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
