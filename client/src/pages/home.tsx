import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Smartphone, Palette, Globe, Rocket, ShieldCheck, MapPin, Mail, Phone, Lightbulb, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import heroBg from '@assets/generated_images/abstract_network_of_glowing_nodes_and_lines_on_a_dark_background.png';
import aiImg from '@assets/generated_images/abstract_representation_of_artificial_intelligence.png';
import mobileImg from '@assets/generated_images/abstract_mobile_app_development_concept.png';
import designImg from '@assets/generated_images/abstract_creative_design_concept.png';
import visionImg from '@assets/generated_images/futuristic_horizon_with_digital_sunrise_and_connected_city.png';

type Language = "en" | "ko";

const translations = {
  en: {
    nav: {
      vision: "Vision",
      services: "Services",
      about: "About",
      contact: "Contact",
      getStarted: "Get Started"
    },
    hero: {
      tagline: "Innovating the Digital Landscape",
      titlePrefix: "We Architect",
      titleHighlight: "Digital Reality",
      description: "TeraGraph is a premier ICT solutions provider. We blend AI, mobile technology, and cutting-edge design to build the infrastructure of tomorrow.",
      explore: "Explore Solutions",
      vision: "Our Vision"
    },
    vision: {
      title: "Shaping the Future of Connectivity",
      description: "Our vision is to create a world where technology is not just a tool, but an extension of human potential. We believe in a seamless integration of digital intelligence and physical reality.",
      innovation: {
        title: "Innovation First",
        desc: "We don't just follow trends; we set them. By constantly exploring new technologies like Generative AI and IoT, we keep our clients ahead of the curve."
      },
      human: {
        title: "Human-Centric",
        desc: "Technology must serve people. Our solutions are designed with empathy, focusing on user experience and accessibility above all else."
      },
      sustainable: {
        title: "Sustainable Growth",
        desc: "We build scalable architectures that grow with your business. Sustainable code, efficient resources, and long-term partnership."
      }
    },
    services: {
      title: "Our Core Services",
      description: "Comprehensive IT services designed to scale with your ambition. From intelligent algorithms to pixel-perfect interfaces.",
      ai: {
        title: "AI Solutions",
        subtitle: "Advanced Machine Learning & Data Analysis",
        desc: "Leverage the power of artificial intelligence to automate processes, gain insights, and create smarter applications that adapt to user needs."
      },
      mobile: {
        title: "Mobile & Web",
        subtitle: "Cross-platform Applications",
        desc: "We build responsive, high-performance web and mobile applications that provide seamless experiences across all devices and platforms."
      },
      design: {
        title: "UI/UX Design",
        subtitle: "Creative & Strategic Design",
        desc: "Our design team crafts intuitive and visually stunning interfaces that engage users and elevate your brand identity to new heights."
      }
    },
    about: {
      titlePrefix: "More Than Just Code.",
      titleSuffix: "We Are Your Partners.",
      description: "At TeraGraph, we operate with the agility of a startup and the expertise of an enterprise. We don't just deliver software; we deliver value.",
      rapid: {
        title: "Rapid Innovation",
        desc: "We iterate fast. Our agile methodology ensures that your product hits the market quickly without compromising on quality."
      },
      reliable: {
        title: "Reliable Systems",
        desc: "Security and stability are at the core of everything we build. We create robust systems that you can rely on."
      },
      global: {
        title: "Global Standards",
        desc: "We adhere to international coding standards and best practices, ensuring your solution is world-class."
      },
      stats: {
        satisfaction: "Client Satisfaction",
        delivered: "Projects Delivered",
        support: "Technical Support",
        experience: "Years Experience"
      }
    },
    footer: {
      description: "Empowering businesses with next-generation ICT solutions. From concept to deployment, we are your partners in digital transformation.",
      servicesTitle: "Services",
      contactTitle: "Contact Us",
      address: "123 Innovation Drive, Tech Valley, Seoul, Korea",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rights: "All rights reserved."
    }
  },
  ko: {
    nav: {
      vision: "비전",
      services: "서비스",
      about: "소개",
      contact: "문의",
      getStarted: "시작하기"
    },
    hero: {
      tagline: "디지털 환경의 혁신",
      titlePrefix: "우리는 설계합니다",
      titleHighlight: "디지털 현실을",
      description: "TeraGraph는 선도적인 ICT 솔루션 제공업체입니다. AI, 모바일 기술, 최첨단 디자인을 결합하여 내일의 인프라를 구축합니다.",
      explore: "솔루션 탐색",
      vision: "우리의 비전"
    },
    vision: {
      title: "연결의 미래를 만들다",
      description: "기술이 단순한 도구가 아닌 인간 잠재력의 확장이 되는 세상을 만듭니다. 우리는 디지털 지능과 물리적 현실의 완벽한 통합을 믿습니다.",
      innovation: {
        title: "혁신 우선",
        desc: "트렌드를 따르지 않고 주도합니다. 생성형 AI와 IoT 같은 신기술을 끊임없이 탐구하여 고객을 앞서가게 합니다."
      },
      human: {
        title: "인간 중심",
        desc: "기술은 사람을 위해 존재해야 합니다. 우리의 솔루션은 공감을 바탕으로 사용자 경험과 접근성을 최우선으로 설계됩니다."
      },
      sustainable: {
        title: "지속 가능한 성장",
        desc: "비즈니스와 함께 성장하는 확장 가능한 아키텍처를 구축합니다. 지속 가능한 코드, 효율적인 리소스, 그리고 장기적인 파트너십을 약속합니다."
      }
    },
    services: {
      title: "핵심 서비스",
      description: "야망과 함께 성장하도록 설계된 포괄적인 IT 서비스. 지능형 알고리즘부터 픽셀 단위의 완벽한 인터페이스까지.",
      ai: {
        title: "AI 솔루션",
        subtitle: "고급 머신러닝 & 데이터 분석",
        desc: "인공지능의 힘을 활용하여 프로세스를 자동화하고, 통찰력을 얻으며, 사용자 요구에 적응하는 스마트한 애플리케이션을 만듭니다."
      },
      mobile: {
        title: "모바일 & 웹",
        subtitle: "크로스 플랫폼 애플리케이션",
        desc: "모든 기기와 플랫폼에서 원활한 경험을 제공하는 반응형 고성능 웹 및 모바일 애플리케이션을 구축합니다."
      },
      design: {
        title: "UI/UX 디자인",
        subtitle: "창의적이고 전략적인 디자인",
        desc: "사용자의 참여를 유도하고 브랜드 가치를 새로운 차원으로 끌어올리는 직관적이고 시각적으로 멋진 인터페이스를 제작합니다."
      }
    },
    about: {
      titlePrefix: "코드 그 이상.",
      titleSuffix: "우리는 당신의 파트너입니다.",
      description: "TeraGraph는 스타트업의 민첩성과 대기업의 전문성을 갖추고 운영됩니다. 우리는 단순한 소프트웨어가 아닌 가치를 전달합니다.",
      rapid: {
        title: "빠른 혁신",
        desc: "빠르게 반복합니다. 애자일 방법론을 통해 품질 저하 없이 제품을 시장에 신속하게 출시합니다."
      },
      reliable: {
        title: "신뢰할 수 있는 시스템",
        desc: "보안과 안정성은 우리가 구축하는 모든 것의 핵심입니다. 믿을 수 있는 견고한 시스템을 만듭니다."
      },
      global: {
        title: "글로벌 표준",
        desc: "국제 코딩 표준과 모범 사례를 준수하여 세계적인 수준의 솔루션을 보장합니다."
      },
      stats: {
        satisfaction: "고객 만족도",
        delivered: "프로젝트 완료",
        support: "기술 지원",
        experience: "년의 경험"
      }
    },
    footer: {
      description: "차세대 ICT 솔루션으로 비즈니스에 힘을 실어줍니다. 기획부터 배포까지, 디지털 혁신의 파트너가 되겠습니다.",
      servicesTitle: "서비스",
      contactTitle: "문의하기",
      address: "서울특별시 테크밸리 혁신로 123",
      privacy: "개인정보 처리방침",
      terms: "이용 약관",
      rights: "All rights reserved."
    }
  }
};

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
  const [lang, setLang] = useState<Language>("ko");
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <span className="text-primary">Tera</span>Graph
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#vision" className="text-sm font-medium hover:text-primary transition-colors">{t.nav.vision}</a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">{t.nav.services}</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">{t.nav.about}</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">{t.nav.contact}</a>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="w-16 px-0 gap-1">
                  <Globe className="h-4 w-4" />
                  <span className="font-medium">{lang.toUpperCase()}</span>
                  <span className="sr-only">Switch Language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLang("en")}>English</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLang("ko")}>한국어</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="default" size="sm" className="rounded-full">
              {t.nav.getStarted}
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
              {t.hero.tagline}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              {t.hero.titlePrefix} <br />
              <span className="text-primary">{t.hero.titleHighlight}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="rounded-full text-lg h-12 px-8 w-full sm:w-auto group" asChild>
                <a href="#services">
                  {t.hero.explore}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full text-lg h-12 px-8 w-full sm:w-auto border-primary/20 hover:bg-primary/10" asChild>
                <a href="#vision">{t.hero.vision}</a>
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
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">{t.vision.title}</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t.vision.description}
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
               <h3 className="text-2xl font-bold mb-4">{t.vision.innovation.title}</h3>
               <p className="text-muted-foreground">
                 {t.vision.innovation.desc}
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
               <h3 className="text-2xl font-bold mb-4">{t.vision.human.title}</h3>
               <p className="text-muted-foreground">
                 {t.vision.human.desc}
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
               <h3 className="text-2xl font-bold mb-4">{t.vision.sustainable.title}</h3>
               <p className="text-muted-foreground">
                 {t.vision.sustainable.desc}
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
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">{t.services.title}</h2>
            <p className="text-muted-foreground text-lg">
              {t.services.description}
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
                  <CardTitle className="text-2xl">{t.services.ai.title}</CardTitle>
                  <CardDescription>{t.services.ai.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {t.services.ai.desc}
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
                  <CardTitle className="text-2xl">{t.services.mobile.title}</CardTitle>
                  <CardDescription>{t.services.mobile.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {t.services.mobile.desc}
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
                  <CardTitle className="text-2xl">{t.services.design.title}</CardTitle>
                  <CardDescription>{t.services.design.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {t.services.design.desc}
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
                {t.about.titlePrefix} <br/>
                <span className="text-primary">{t.about.titleSuffix}</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t.about.description}
              </p>
              
              <div className="space-y-6 mt-8">
                <div className="flex gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full h-fit">
                    <Rocket className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t.about.rapid.title}</h3>
                    <p className="text-muted-foreground">
                      {t.about.rapid.desc}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full h-fit">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t.about.reliable.title}</h3>
                    <p className="text-muted-foreground">
                      {t.about.reliable.desc}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full h-fit">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t.about.global.title}</h3>
                    <p className="text-muted-foreground">
                      {t.about.global.desc}
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
                      <p className="text-sm text-muted-foreground">{t.about.stats.satisfaction}</p>
                   </div>
                   <div className="bg-card border border-border p-6 rounded-2xl shadow-2xl backdrop-blur-md">
                      <h4 className="text-4xl font-bold text-accent mb-2">50+</h4>
                      <p className="text-sm text-muted-foreground">{t.about.stats.delivered}</p>
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="bg-card border border-border p-6 rounded-2xl shadow-2xl backdrop-blur-md">
                      <h4 className="text-4xl font-bold text-pink-500 mb-2">24/7</h4>
                      <p className="text-sm text-muted-foreground">{t.about.stats.support}</p>
                   </div>
                   <div className="bg-card border border-border p-6 rounded-2xl shadow-2xl backdrop-blur-md">
                      <h4 className="text-4xl font-bold text-blue-500 mb-2">10+</h4>
                      <p className="text-sm text-muted-foreground">{t.about.stats.experience}</p>
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
                {t.footer.description}
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
              <h4 className="font-bold mb-6 text-foreground">{t.footer.servicesTitle}</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">{t.services.ai.title}</li>
                <li className="hover:text-primary cursor-pointer transition-colors">{t.services.mobile.title}</li>
                <li className="hover:text-primary cursor-pointer transition-colors">{t.services.design.title}</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-foreground">{t.footer.contactTitle}</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span>
                    {t.footer.address.split(',').map((line, i) => (
                        <span key={i} className="block">{line.trim()}</span>
                    ))}
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
            <p>&copy; 2024 TeraGraph. {t.footer.rights}</p>
            <div className="flex gap-8">
              <span className="hover:text-foreground cursor-pointer">{t.footer.privacy}</span>
              <span className="hover:text-foreground cursor-pointer">{t.footer.terms}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
