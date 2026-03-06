
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Dragon China - Connect Your European Business with China's Best On-the-Ground Experts</title>
        <meta
          name="description"
          content="Connect European companies with senior business professionals across China and Hong Kong. Real field expertise, no corporate jargon, proven results."
        />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            {/* USER EDIT: Change the hero background image URL below */}
            <img
              src="https://images.unsplash.com/photo-1557065923-e0d91fcfba7e"
              alt="Modern China business landscape with skyscrapers and urban development"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Connect Your European Business with China's Best{' '}
                <span className="text-primary">On-the-Ground Experts</span>
              </h1>
              <p className="text-xl sm:text-2xl text-foreground/90 mb-4 max-w-3xl mx-auto">
                Real field experience. No corporate jargon. Proven results.
              </p>
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                We connect European companies with senior business professionals across China and Hong Kong
                who understand both Western expectations and Chinese business culture.
              </p>
              <Link to="/contact">
                <Button size="lg" className="text-lg px-8 py-6 group">
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Your Bridge to China Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Your Bridge to China
              </h2>
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                Dragon connects European companies with experienced business professionals who understand both
                Western expectations and Chinese business culture. We provide on-the-ground expertise across
                China's key business hubs, helping you navigate sourcing, quality control, market research,
                and business development with confidence.
              </p>
            </motion.div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {/* Image 1: Sourcing products */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group relative rounded-xl overflow-hidden shadow-lg aspect-square"
              >
                {/* USER EDIT: Change Sourcing image URL below */}
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Sourcing products in factory"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent flex items-end p-6">
                  <h3 className="text-xl font-bold text-primary">Sourcing Products</h3>
                </div>
              </motion.div>

              {/* Image 2: Market research */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group relative rounded-xl overflow-hidden shadow-lg aspect-square"
              >
                {/* USER EDIT: Change Market Research image URL below */}
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                  alt="Market research and data analysis"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent flex items-end p-6">
                  <h3 className="text-xl font-bold text-primary">Market Research</h3>
                </div>
              </motion.div>

              {/* Image 3: Quality control */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group relative rounded-xl overflow-hidden shadow-lg aspect-square"
              >
                {/* USER EDIT: Change Quality Control image URL below */}
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837"
                  alt="Quality control inspection"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent flex items-end p-6">
                  <h3 className="text-xl font-bold text-primary">Quality Control</h3>
                </div>
              </motion.div>

              {/* Image 4: Business development missions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group relative rounded-xl overflow-hidden shadow-lg aspect-square"
              >
                {/* USER EDIT: Change Business Development image URL below */}
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
                  alt="Business development meeting"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent flex items-end p-6">
                  <h3 className="text-xl font-bold text-primary">Business Development</h3>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Get Started Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
                Get Started
              </h2>
              <p className="text-xl text-foreground/90 mb-10">
                Connect with China experts who deliver real results, not just reports.
              </p>
              <Link to="/contact">
                <Button size="lg" className="text-lg px-10 py-6 group">
                  Contact Us Today
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
