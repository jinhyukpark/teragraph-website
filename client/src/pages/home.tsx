import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Smartphone, Palette, Globe, Rocket, ShieldCheck, MapPin, Mail, Phone, Lightbulb, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import heroBg from '@assets/generated_images/abstract_network_of_glowing_nodes_and_lines_on_a_dark_background.png';
import aiImg from '@assets/generated_images/abstract_representation_of_artificial_intelligence.png';
import mobileImg from '@assets/generated_images/abstract_mobile_app_development_concept.png';
import designImg from '@assets/generated_images/abstract_creative_design_concept.png';
import visionImg from '@assets/generated_images/futuristic_horizon_with_digital_sunrise_and_connected_city.png';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { staggerChildren: 0.2 } },
  viewport: { once: true }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <span className="text-primary">Tera</span>Graph
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#vision" className="text-sm font-medium hover:text-primary transition-colors">Vision</a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
            <Button variant="default" size="sm" className="rounded-full">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Digital Network Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20 backdrop-blur-sm">
              Innovating the Digital Landscape
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              We Architect <br />
              <span className="text-primary">Digital Reality</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              TeraGraph is a premier ICT solutions provider. We blend AI, mobile technology, and cutting-edge design to build the infrastructure of tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="rounded-full text-lg h-12 px-8 w-full sm:w-auto group" asChild>
                <a href="#services">
                  Explore Solutions
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full text-lg h-12 px-8 w-full sm:w-auto border-primary/20 hover:bg-primary/10" asChild>
                <a href="#vision">Our Vision</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section (New) */}
      <section id="vision" className="py-24 relative overflow-hidden bg-black/20">
        <div className="absolute inset-0 z-0">
           <img src={visionImg} alt="Future Vision" className="w-full h-full object-cover opacity-10 mix-blend-screen" />
           <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            {...fadeInUp}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Shaping the Future of Connectivity</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our vision is to create a world where technology is not just a tool, but an extension of human potential. 
              We believe in a seamless integration of digital intelligence and physical reality.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.1 }}
               className="bg-card/30 border border-primary/20 p-8 rounded-2xl backdrop-blur-md hover:bg-primary/5 transition-colors"
             >
               <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary">
                 <Lightbulb className="w-7 h-7" />
               </div>
               <h3 className="text-2xl font-bold mb-4">Innovation First</h3>
               <p className="text-muted-foreground">
                 We don't just follow trends; we set them. By constantly exploring new technologies like Generative AI and IoT, we keep our clients ahead of the curve.
               </p>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="bg-card/30 border border-accent/20 p-8 rounded-2xl backdrop-blur-md hover:bg-accent/5 transition-colors"
             >
               <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-6 text-accent">
                 <Target className="w-7 h-7" />
               </div>
               <h3 className="text-2xl font-bold mb-4">Human-Centric</h3>
               <p className="text-muted-foreground">
                 Technology must serve people. Our solutions are designed with empathy, focusing on user experience and accessibility above all else.
               </p>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.3 }}
               className="bg-card/30 border border-purple-500/20 p-8 rounded-2xl backdrop-blur-md hover:bg-purple-500/5 transition-colors"
             >
               <div className="w-14 h-14 bg-purple-500/20 rounded-full flex items-center justify-center mb-6 text-purple-500">
                 <Zap className="w-7 h-7" />
               </div>
               <h3 className="text-2xl font-bold mb-4">Sustainable Growth</h3>
               <p className="text-muted-foreground">
                 We build scalable architectures that grow with your business. Sustainable code, efficient resources, and long-term partnership.
               </p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-muted/20 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            {...fadeInUp}
            className="mb-16 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Our Core Services</h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive IT services designed to scale with your ambition. From intelligent algorithms to pixel-perfect interfaces.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* AI Service */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm overflow-hidden h-full group hover:border-primary/50 transition-colors duration-300">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-primary/10 transition-colors"></div>
                  <img src={aiImg} alt="AI Services" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    <Brain className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl">AI Solutions</CardTitle>
                  <CardDescription>Advanced Machine Learning & Data Analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Leverage the power of artificial intelligence to automate processes, gain insights, and create smarter applications that adapt to user needs.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Mobile Service */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm overflow-hidden h-full group hover:border-primary/50 transition-colors duration-300">
                <div className="h-48 overflow-hidden relative">
                   <div className="absolute inset-0 bg-accent/20 mix-blend-overlay z-10 group-hover:bg-accent/10 transition-colors"></div>
                  <img src={mobileImg} alt="Mobile Development" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 text-accent">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl">Mobile & Web</CardTitle>
                  <CardDescription>Cross-platform Applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We build responsive, high-performance web and mobile applications that provide seamless experiences across all devices and platforms.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Design Service */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm overflow-hidden h-full group hover:border-primary/50 transition-colors duration-300">
                <div className="h-48 overflow-hidden relative">
                   <div className="absolute inset-0 bg-purple-500/20 mix-blend-overlay z-10 group-hover:bg-purple-500/10 transition-colors"></div>
                  <img src={designImg} alt="Design Services" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-4 text-pink-500">
                    <Palette className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl">UI/UX Design</CardTitle>
                  <CardDescription>Creative & Strategic Design</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Our design team crafts intuitive and visually stunning interfaces that engage users and elevate your brand identity to new heights.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About / Advantages Section */}
      <section id="about" className="py-24 relative overflow-hidden">
         {/* Decorative Elements */}
         <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
         
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
                More Than Just Code. <br/>
                <span className="text-primary">We Are Your Partners.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At TeraGraph, we operate with the agility of a startup and the expertise of an enterprise. We don't just deliver software; we deliver value.
              </p>
              
              <div className="space-y-6 mt-8">
                <div className="flex gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full h-fit">
                    <Rocket className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Rapid Innovation</h3>
                    <p className="text-muted-foreground">
                      We iterate fast. Our agile methodology ensures that your product hits the market quickly without compromising on quality.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full h-fit">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Reliable Systems</h3>
                    <p className="text-muted-foreground">
                      Security and stability are at the core of everything we build. We create robust systems that you can rely on.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full h-fit">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Global Standards</h3>
                    <p className="text-muted-foreground">
                      We adhere to international coding standards and best practices, ensuring your solution is world-class.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-12">
                   <div className="bg-card border border-border p-6 rounded-2xl shadow-2xl backdrop-blur-md">
                      <h4 className="text-4xl font-bold text-primary mb-2">98%</h4>
                      <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                   </div>
                   <div className="bg-card border border-border p-6 rounded-2xl shadow-2xl backdrop-blur-md">
                      <h4 className="text-4xl font-bold text-accent mb-2">50+</h4>
                      <p className="text-sm text-muted-foreground">Projects Delivered</p>
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="bg-card border border-border p-6 rounded-2xl shadow-2xl backdrop-blur-md">
                      <h4 className="text-4xl font-bold text-pink-500 mb-2">24/7</h4>
                      <p className="text-sm text-muted-foreground">Technical Support</p>
                   </div>
                   <div className="bg-card border border-border p-6 rounded-2xl shadow-2xl backdrop-blur-md">
                      <h4 className="text-4xl font-bold text-blue-500 mb-2">10+</h4>
                      <p className="text-sm text-muted-foreground">Years Experience</p>
                   </div>
                </div>
              </div>
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[100px] -z-10 rounded-full pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-card pt-24 pb-12 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <Link href="/" className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity cursor-pointer">
                <span className="text-primary">Tera</span>Graph
              </Link>
              <p className="text-muted-foreground max-w-md mb-8">
                Empowering businesses with next-generation ICT solutions. 
                From concept to deployment, we are your partners in digital transformation.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                  <Mail className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-foreground">Services</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">AI & Machine Learning</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Web Development</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Mobile Apps</li>
                <li className="hover:text-primary cursor-pointer transition-colors">UI/UX Design</li>
                <li className="hover:text-primary cursor-pointer transition-colors">IT Consulting</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-foreground">Contact Us</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span>
                    123 Innovation Drive,<br />
                    Tech Valley, Seoul, Korea
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <span>contact@terragraph.io</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span>+82 10-1234-5678</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; 2024 TeraGraph. All rights reserved.</p>
            <div className="flex gap-8">
              <span className="hover:text-foreground cursor-pointer">Privacy Policy</span>
              <span className="hover:text-foreground cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
