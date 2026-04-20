import { useEffect, useRef } from "react";
import { 
  ExternalLink, 
  Phone, 
  Mail, 
  MessageSquare, 
  ArrowRight,
  ShoppingBag, 
  Layout, 
  TrendingUp,
  Instagram,
  Linkedin,
  Github
} from "lucide-react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for cleaner classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

gsap.registerPlugin(ScrollTrigger);

// --- Components ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 navbar-blur">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-6">
        <div className="text-xl font-bold tracking-tighter uppercase">
          VIRALIX
        </div>
        <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-brand-secondary uppercase tracking-[1px]">
          <a href="#projects" className="hover:text-white transition-colors cursor-pointer">Work</a>
          <a href="#services" className="hover:text-white transition-colors cursor-pointer">Services</a>
          <a href="#about" className="hover:text-white transition-colors cursor-pointer">About</a>
          <a href="#contact" className="hover:text-white transition-colors cursor-pointer">Contact</a>
        </div>
        <a 
          href="#contact" 
          className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-200 transition-all cursor-pointer"
        >
          Let's talk
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 80,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
        stagger: 0.2
      });
      gsap.from(".hero-sub", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        delay: 0.6,
        ease: "expo.out"
      });
      gsap.from(".hero-cta", {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 1,
        ease: "expo.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-32 pb-16 px-10 overflow-hidden">
      <div className="max-w-7xl w-full hero-card-bg border border-white/10 rounded-[24px] p-12 md:p-20 relative overflow-hidden flex flex-col justify-center min-h-[70vh]">
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.05)_0%,transparent_40%)] -z-10" />
        
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[2px] text-white/30 mb-6 font-bold"
          >
            Premium Web Developer
          </motion.div>
          <h1 className="hero-title h1-sophisticated mb-8">
            I build websites <br />
            <span className="opacity-40 tracking-tight">that bring customers.</span>
          </h1>
          <p className="hero-sub text-lg md:text-xl text-brand-secondary mb-12 max-w-lg font-normal leading-[1.6]">
            Helping businesses grow online with modern, high-converting websites 
            that turn visitors into loyal leads.
          </p>
          <div className="hero-cta flex flex-wrap items-center gap-4">
            <a href="#projects" className="bg-white text-black px-8 py-4 rounded-full text-sm font-bold hover:bg-gray-200 transition-all">
              View My Work
            </a>
            <a href="#contact" className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-white/10 transition-all">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
        <div className="flex-1">
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-blue-600/10 rounded-[20px] rotate-3 -z-10 border border-white/5" />
            <img 
              src="https://picsum.photos/seed/business-agency/800/800" 
              alt="Viralix Agency" 
              className="w-full h-full object-cover rounded-[20px] grayscale transition-all duration-700 shadow-2xl border border-white/10"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <div className="flex-[1.5]">
          <span className="section-label uppercase tracking-[2px] text-[10px] text-white/30 font-bold mb-4 block">Professional Intro</span>
          <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-[1.1] tracking-tight">
            I'm Ayush Panwar. <br />
            Founder of VIRALIX.
          </h3>
          <div className="space-y-6 text-brand-secondary text-[16px] font-normal leading-[1.6]">
            <p>
              I am a web developer focused on one thing: <span className="text-white font-medium italic">results.</span> 
              At <span className="text-white font-bold">VIRALIX</span>, we build tireless sales engines for your business.
            </p>
            <p>
              My expertise lies in blending aesthetics with strategy to help businesses get more leads 
              and establish a premium online presence.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-1">
              <div className="text-3xl font-bold text-white tracking-tighter">95%+</div>
              <div className="text-[10px] font-bold text-white/30 uppercase tracking-[2px]">Conversion Lift</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold text-white tracking-tighter">50+</div>
              <div className="text-[10px] font-bold text-white/30 uppercase tracking-[2px]">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ title, description, image, label, link }: any) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-[20px] p-1 content-card-bg border border-white/5 hover:border-white/20 transition-all duration-500 shadow-xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-[16px]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />
      </div>
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-bold uppercase tracking-[2px] text-white/30">
            {label}
          </span>
          {link && (
             <a href={link} target="_blank" className="text-white/40 hover:text-white transition-colors">
               <ExternalLink className="w-4 h-4" />
             </a>
          )}
        </div>
        <h4 className="text-[16px] font-bold mb-2 group-hover:text-blue-400 transition-colors tracking-tight">{title}</h4>
        <p className="text-brand-secondary text-[13px] font-normal leading-[1.6] mb-6">
          {description}
        </p>
        {link ? (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[12px] font-bold text-white group-hover:gap-4 transition-all uppercase tracking-widest opacity-60 group-hover:opacity-100"
          >
            View Inspiration <ArrowRight className="w-4 h-4" />
          </a>
        ) : (
          <button className="flex items-center gap-2 text-[12px] font-bold text-white group-hover:gap-4 transition-all uppercase tracking-widest opacity-60 group-hover:opacity-100">
             Explore <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="section-label uppercase tracking-[2px] text-[10px] text-white/30 font-bold mb-4 block">Selected Works</span>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight leading-[0.95] mb-6">Crafting digital <br /> perfection.</h3>
          <p className="max-w-md text-brand-secondary text-[16px] font-normal leading-[1.6]">
            A showcase of digital products that blend high-end design with conversion-focused strategy.
          </p>
        </div>

        {/* Section A: Inspo */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <h4 className="text-[13px] font-bold uppercase tracking-[1px] text-white/60">Gym Industry Inspirations</h4>
            <div className="flex-1 h-[1px] bg-white/5" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Anytime Fitness"
              label="Inspiration"
              description="Modern gym website focused on membership conversion and lead generation."
              image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200"
              link="https://www.anytimefitness.co.in/"
            />
            <ProjectCard 
              title="Fitness First India"
              label="Inspiration"
              description="Experience premium club aesthetics with highly effective CTA placement."
              image="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1200"
              link="https://www.anytimefitness.co.in/gyms/in-1043/delhi-delhi-110001/"
            />
            <ProjectCard 
              title="Luxe Fitness Concept"
              label="Inspiration"
              description="High-end minimalist gym design with focused typography and dark aesthetics."
              image="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1200"
              link="https://www.fitnessfirst.net.in/clubs/iconic-select-citywalk"
            />
            <ProjectCard 
              title="Elite Training Hub"
              label="Inspiration"
              description="Performance-based gym portal featuring bold action-oriented visuals."
              image="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1200"
              link="https://gymindehradun.com/"
            />
            <ProjectCard 
              title="Aesthetic Wellness"
              label="Inspiration"
              description="Clean, modern wellness and fitness landing page focusing on user experience."
              image="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=1200"
              link="https://www.bharatgymsdehradun.com/"
            />
            <ProjectCard 
              title="Power & Flow"
              label="Inspiration"
              description="Dynamic gym interface designed for community engagement and class bookings."
              image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200"
              link="https://in.pinterest.com/pin/187673509468880812/"
            />
          </div>
        </div>

        {/* Section B: Demos */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <h4 className="text-[13px] font-bold uppercase tracking-[1px] text-white/60">Original Concepts</h4>
            <div className="flex-1 h-[1px] bg-white/5" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <ProjectCard 
              title="Elite Gym"
              label="Lead Generation"
              description="A conversion-optimized single page for gyms, featuring lead forms."
              image="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&q=80&w=800"
            />
            <ProjectCard 
              title="Luxe Salon"
              label="Salon Website"
              description="Premium booking-focused website for high-end salons."
              image="https://picsum.photos/seed/business-salon/800/800"
            />
            <ProjectCard 
              title="Coach Pro"
              label="Coaching Website"
              description="Personal branding site for coaches with course integration."
              image="https://picsum.photos/seed/business-consulting/800/800"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: Layout,
      title: "Business Website",
      desc: "Custom-made websites designed to establish authority and generate consistent leads for your business."
    },
    {
      icon: ShoppingBag,
      title: "eCommerce Website",
      desc: "Fast, secure, and user-friendly online stores optimized for maximum sales and recurring revenue."
    },
    {
      icon: TrendingUp,
      title: "Landing Pages",
      desc: "Single-page powerhouses designed for your ad campaigns to convert visitors into customers at scale."
    }
  ];

  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <span className="section-label uppercase tracking-[2px] text-[10px] text-white/30 font-bold mb-4 block text-center">What I offer</span>
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-20 tracking-tight leading-[0.95] uppercase">
          Solutions for <br /> modern growth.
        </h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item, i) => (
            <div key={i} className="group relative content-card-bg border border-white/5 p-10 rounded-[20px] hover:border-white/20 transition-all">
              <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-8">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4 tracking-tight">{item.title}</h4>
              <p className="text-brand-secondary text-sm font-normal leading-[1.6]">
                {item.desc}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                <span className="service-pill">Strategic</span>
                <span className="service-pill">ROI Focused</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const items = [
    {
      name: "Rajesh Kumar",
      role: "Gym Owner, Delhi",
      content: "Ayush transformed our digital presence. Since launching our new site, our membership inquiries have increased by 40% every month.",
      rating: 5
    },
    {
      name: "Sneha Sharma",
      role: "Salon Manager, Mumbai",
      content: "The booking system Ayush integrated into our website is a lifesaver. No more missing appointments or double bookings. Highly recommended!",
      rating: 5
    },
    {
      name: "Vikram Singh",
      role: "Business Consultant",
      content: "He doesn't just write code; he understands business. The landing page he built for my webinar had a conversion rate I didn't think was possible.",
      rating: 5
    }
  ];

  return (
    <section className="py-32 px-6 bg-blue-600/5">
      <div className="max-w-7xl mx-auto">
        <span className="section-label uppercase tracking-[2px] text-[10px] text-white/30 font-bold mb-4 block text-center">Client Words</span>
        <h3 className="text-4xl font-bold text-center mb-20 tracking-tight leading-[0.95]">
          Loved by businesses.
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              key={i} 
              className="bg-white/5 p-10 rounded-[20px] border border-white/5 relative"
            >
              <p className="text-[15px] italic font-normal leading-[1.6] mb-8 text-white/70 border-l-[2px] border-white/10 pl-6">
                "{item.content}"
              </p>
              <div>
                <div className="font-bold text-white text-sm">{item.name}</div>
                <div className="text-[10px] text-white/30 font-bold tracking-[1px] mt-1 uppercase">{item.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        <div>
          <span className="section-label uppercase tracking-[2px] text-[10px] text-white/30 font-bold mb-4 block">Get in touch</span>
          <h3 className="text-5xl md:text-7xl font-bold mb-10 tracking-tighter uppercase leading-[0.9]">
            Let's build <br /> your website
          </h3>
          <p className="text-brand-secondary text-lg font-normal leading-[1.6] mb-12 max-w-md">
            Ready to take your business to the next level? Reach out today for a 
            free consultation.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-all">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[2px] text-white/30">Phone / WhatsApp</div>
                <a href="https://wa.me/919027062147" className="text-2xl font-bold hover:text-blue-400 transition-colors tracking-tighter">+91 9027062147</a>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-all">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[2px] text-white/30">Email address</div>
                <a href="mailto:viralixc@gmail.com" className="text-xl md:text-2xl font-bold hover:text-blue-400 transition-colors truncate tracking-tighter">viralixc@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-6">
            <a href="https://api.whatsapp.com/send?phone=919027062147" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform shadow-xl shadow-green-500/10">
              <MessageSquare className="w-5 h-5" /> Chat on WhatsApp
            </a>
            <div className="flex gap-4">
              <div className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white hover:text-black cursor-pointer transition-all"><Instagram size={18} /></div>
              <div className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white hover:text-black cursor-pointer transition-all"><Linkedin size={18} /></div>
              <div className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white hover:text-black cursor-pointer transition-all"><Github size={18} /></div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/5 p-8 md:p-14 rounded-[20px] relative">
          <div className="absolute top-0 right-10 -translate-y-1/2 bg-white text-black px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[2px] shadow-xl">Inquiry Form</div>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest ml-1 opacity-50">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px) font-bold uppercase tracking-widest ml-1 opacity-50">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
            </div>
             <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest ml-1 opacity-50">What do you need?</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-blue-500 transition-colors appearance-none text-brand-secondary">
                <option value="business">Business Website</option>
                <option value="ecommerce">eCommerce Store</option>
                <option value="landing">Landing Page</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest ml-1 opacity-50">Message</label>
              <textarea rows={4} placeholder="Tell me about your business goals..." className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-blue-500 transition-colors resize-none"></textarea>
            </div>
            <button className="w-full bg-white text-black py-5 rounded-xl font-bold text-lg hover:bg-gray-200 transition-all uppercase tracking-tighter">
              Let's build your website
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer-strip py-12 px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-[12px] opacity-60">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-10">
          <span className="font-bold tracking-tighter text-white opacity-100 text-[14px] uppercase">VIRALIX</span>
          <div className="flex gap-8 items-center">
            <span>9027062147</span>
            <a href="https://api.whatsapp.com/send?phone=919027062147" target="_blank" rel="noopener noreferrer" className="text-green-400 font-bold hover:underline">WhatsApp Now</a>
            <a href="mailto:viralixc@gmail.com" className="hover:text-white transition-colors">viralixc@gmail.com</a>
          </div>
        </div>
        <div className="text-center md:text-right font-medium">
          © 2024 VIRALIX • Let's build your website
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Custom Cursor
    const cursor = cursorRef.current;
    const onMouseMove = (e: MouseEvent) => {
      if (cursor) {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.6,
          ease: "power3.out"
        });
      }
    };
    window.addEventListener("mousemove", onMouseMove);

    // Handle cursor scale on hover
    const links = document.querySelectorAll('a, button, [role="button"]');
    const onMouseEnter = () => {
      gsap.to(cursor, { scale: 2.5, duration: 0.3 });
    };
    const onMouseLeave = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3 });
    };

    links.forEach(link => {
      link.addEventListener("mouseenter", onMouseEnter);
      link.addEventListener("mouseleave", onMouseLeave);
    });

    // Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    
    // Scroll Trigger for fading sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      gsap.fromTo(section, 
        { opacity: 0.4, y: 20 }, 
        { 
          opacity: 1, 
          y: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            end: "top 60%",
            scrub: 1,
          }
        }
      );
    });

    // Reveal animations for headings
    const revealedHeadings = document.querySelectorAll('h3');
    revealedHeadings.forEach(heading => {
      gsap.from(heading, {
        scrollTrigger: {
          trigger: heading,
          start: "top 90%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "expo.out"
      });
    });

    // Parallax for grid
    gsap.to(gridRef.current, {
      y: -100,
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true
      }
    });

    return () => {
      lenis.destroy();
      window.removeEventListener("mousemove", onMouseMove);
      links.forEach(link => {
        link.removeEventListener("mouseenter", onMouseEnter);
        link.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []);

  return (
    <div ref={scrollRef} className="relative bg-[#050505] text-white selection:bg-blue-500/30 overflow-hidden font-sans">
      {/* Custom Cursor */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block -translate-x-1/2 -translate-y-1/2"
      />
      {/* Texture & Overlay */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay z-[100]" />
      <div 
        ref={gridRef}
        className="fixed inset-[-100px] bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none -z-10"
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
