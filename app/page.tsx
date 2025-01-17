"use client";

import { Menu, Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState, useEffect } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Web Development",
    description:
      "Custom web applications built with cutting-edge technologies and best practices. Our team specializes in creating scalable, responsive websites that deliver exceptional user experiences. We utilize modern frameworks like React, Next.js, and Vue.js to build fast, secure, and maintainable applications that help your business grow.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
  },
  {
    title: "Mobile Development",
    description:
      "Comprehensive mobile solutions for both iOS and Android platforms. We create native and cross-platform applications that engage users and drive business growth. Our mobile development team focuses on performance, user experience, and platform-specific design guidelines to deliver apps that stand out in the crowded app marketplace.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered design solutions that enhance user experience and drive engagement. Our design team combines aesthetics with functionality, creating intuitive interfaces that users love. We conduct thorough research, create user personas, and implement design systems that ensure consistency across all your digital products.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80",
  },
  {
    title: "Cloud Solutions",
    description:
      "Enterprise-grade cloud infrastructure and deployment solutions that scale with your business. We provide comprehensive cloud strategy, migration, and management services using leading platforms like AWS, Azure, and Google Cloud. Our solutions ensure high availability, security, and cost optimization for your applications.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80",
  },
  {
    title: "DevOps Services",
    description:
      "Streamline your development and operations with our comprehensive DevOps solutions. We implement continuous integration and deployment pipelines, automate testing processes, and establish monitoring systems that ensure your applications run smoothly. Our DevOps practices reduce time-to-market while maintaining high quality standards.",
    image:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80",
  },
  {
    title: "Data Analytics",
    description:
      "Transform your raw data into actionable insights with our advanced analytics solutions. We help businesses collect, process, and analyze data to make informed decisions. Our team implements machine learning models, creates interactive dashboards, and develops predictive analytics systems that drive business growth.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your digital assets with our comprehensive security solutions. We provide security audits, implement robust authentication systems, and establish security protocols that safeguard your applications and data. Our team stays up-to-date with the latest security threats and best practices to ensure your systems remain secure.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
  },
  {
    title: "Digital Consulting",
    description:
      "Strategic technology consulting to help your business navigate the digital landscape. Our experienced consultants work with you to develop technology roadmaps, optimize processes, and implement solutions that align with your business objectives. We provide guidance on technology selection, architecture decisions, and digital transformation initiatives.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
  },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
            : "bg-transparent"
        )}
      >
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            TechTeam
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </header>

      {/* Hero Banner */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Transform Your Ideas Into Reality
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            We're a team of experts dedicated to delivering exceptional digital
            solutions for your business.
          </p>
          <Button size="lg" className="mr-4">
            Our Services
          </Button>
          <Button size="lg" variant="outline">
            Contact Us
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Services</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          We offer a comprehensive range of digital services to help your
          business grow and succeed in the digital age.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden transition-all hover:shadow-lg flex flex-col h-full"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Our team collaborating"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
            <div className="space-y-6">
              <div className="inline-block">
                <h2 className="text-3xl font-bold mb-2">Who We Are</h2>
                <div className="h-1 w-20 bg-primary rounded-full" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are a passionate team of technology experts, innovators, and
                problem solvers dedicated to helping businesses thrive in the
                digital age. With over a decade of experience in delivering
                cutting-edge solutions, we've helped countless organizations
                transform their digital presence and achieve their business
                goals.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our approach combines technical excellence with a deep
                understanding of business needs. We believe in building
                long-term partnerships with our clients, providing not just
                services, but strategic guidance and support throughout their
                digital journey.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">250+</h3>
                  <p className="text-muted-foreground">Projects Completed</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">95%</h3>
                  <p className="text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have a project in mind? Let's discuss how we can help you
                achieve your goals.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">
                      contact@techteam.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">
                      123 Tech Street, San Francisco, CA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-lg">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-md border bg-background"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-md border bg-background"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-md border bg-background"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-2 rounded-md border bg-background h-32"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button className="w-full" size="lg">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
