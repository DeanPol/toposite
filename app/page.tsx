"use client";

import { Menu, Mail, Phone, MapPin, Send, ChevronRight } from "lucide-react";
import { Button } from "@/components/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState, useEffect } from "react";

const navigation = [
  { name: "ΥΠΗΡΕΣΙΕΣ", href: "#services" },
  { name: "Η ΟΜΑΔΑ", href: "#about" },
  { name: "ΕΠΙΚΟΙΝΩΝΙΑ", href: "#contact" },
];

const services = [
  {
    title: "ΤΟΠΟΓΡΑΦΙΚΕΣ ΜΕΛΕΤΕΣ",
    image: "/images/image_1.webp",
    longDescription:
      "Αναλαμβάνουμε την λεπτομερή και ακριβής αποτύπωση του ακινήτου σας ως προς τα προβολικά συστήματα συντεταγμένων που χρησιμοποιούνται στον Ελλαδικό χώρο, όπως το Ελληνικό Γεωδαιτικό Σύστημα Αναφοράς 1987, και πάντοτε σύμφωνα με τις ισχύουσες προδιαγραφές.",
    subServices: [
      "Τοπογραφικό Διάγραμμα για Εθνικό Κτηματολόγιο",
      "Τοπογραφικό για την Πράξη Χαρακτηρισμού από το Δασαρχείο",
      "Τοπογραφικό για Άδεια Οικοδομής",
      "Τοπογραφικό για την Αγοραπωλησία Ακινήτου",
      "Τοπογραφικό για Κατάτμηση κ.ο.κ",
    ],
  },
  {
    title: "ΤΕΧΝΙΚΕΣ ΕΚΘΕΣΕΙΣ ΦΩΤΟΕΡΜΗΝΕΙΑΣ",
    image: "/images/image_2.webp",
    longDescription:
      "Our mobile development team crafts exceptional mobile experiences that users love. We understand the unique challenges of mobile platforms and create solutions that perform flawlessly across devices. From concept to deployment, we ensure your mobile application stands out in the crowded app marketplace.",
    subServices: [
      "iOS App Development",
      "Android App Development",
      "Cross-platform Development",
      "Mobile UI/UX Design",
      "App Store Optimization",
      "Mobile App Testing",
      "Ongoing Maintenance and Updates",
    ],
  },
  {
    title: "ΟΙΚΟΔΟΜΙΚΕΣ ΑΔΕΙΕΣ",
    image: "/images/image_3.webp",
    longDescription:
      "Αναλαμβάνουμε όλες τις απαιτούμενες μελέτες καθώς και την επίβλεψη νέων οικοδομικών έργων.",
    subServices: [
      "Αρχιτεκτονική Μελέτη, με γνώμονα την αρχιτεκτονική προσαρμογή του κτιρίου στο περιβάλλοντα χώρο και τις απαιτήσεις του πελάτη",
      "Φωτορεαλιστική τρισδιάστατη απεικόνιση του υπό μελέτη κτιρίου σε πελάτες που θέλουν να δουν το υπό μελέτη κτίριο τους υλοποιημένο πριν καν κατασκευαστεί",
      "Στατικές Μελέτες",
    ],
  },
  {
    title: "ΕΝΕΡΓΕΙΑΚΕΣ ΕΠΙΘΕΩΡΗΣΕΙΣ",
    image: "/images/image_4.webp",
    longDescription:
      "Αναλαμβάνουμε την ενεργειακή επιθεώρηση της ιδιοκτησίας σας και την έκδοση του πιστοποιητικού ενεργειακής απόδοσης σε σύντομο χρονικό διάστημα και πάντοτε σύμφωνα με τις ισχύουσες προδιαγραφές.",
    subServices: [],
  },
  {
    title: "ΜΕΛΕΤΕΣ ΠΥΡΑΣΦΑΛΕΙΑΣ",

    image: "/images/image_5.webp",
    longDescription:
      "Το Τεχνικό Γραφείο αναλαμβάνει την εκπόνηση μελετών εγκαταστάσεων και δικτύων ενεργητικής πυροπροστασίας και πυρασφάλειας.",
    subServices: [],
  },
  {
    title: "ΤΕΧΝΙΚΕΣ ΕΚΘΕΣΕΙΣ",
    image: "/images/image_6.webp",
    longDescription:
      "Αναλαμβάνουμε τη σύνταξη τεκμηριωμένων τεχνικών εκθέσεων προς επίλυση ιδιοκτησιακών διαφορών αμφισβήτισης ορίων, αλλά και εκθέσεων εφαρμογής τίτλων ιδιοκτησίας που μπορούν να χρησιμοποιηθούν στα αρμόδια δικαστήρια.",
    subServices: [],
  },
  {
    title: "ΥΠΗΡΕΣΙΕΣ ΓΙΑ ΕΠΑΓΓΕΛΜΑΤΙΕΣ",
    image: "/images/image_7.webp",
    longDescription:
      "Αναλαμβάνουμε την υποστήριξη επαγγελματιών του τεχνικού κλάδου (αρχιτέκτονες κ.α.) για την υλοποίηση των έργων τους, καθώς και επιχειρήσεων (λατομεία κ.α.) για την εύρυθμη λειτουργία τους (ογκομετρήσεις κ.α.). καθώς και μεγαλύτερων έργων προς διασφάλισης της ποιότητας του παραδοτέου έργου (ίδρυση και επίλυση δικτύων οριζοντιογραφικού και κατακόρυφου ελέγχου με σκοπό την αποτύπωση, χάραξη, καθώς και για τον έλεγχο μικρομετακινήσεων).",
    subServices: [
      "Ίδρυση/Επίλυση οδεύσεων",
      "Ίδρυση/Επίλυση Χωροσταθμικών δικτύων",
      "Ίδρυση/Επίλυση 2D/3D δικτύων με την μέθοδο των ελαχίστων τετραγώνων",
      "Λεπτομερείς Τεχνικές εκθέσεις συνορθώσεων",
      "Αποτυπώσεις-Ίδρυση Δικτύων-Χαράξεις",
      "Ογκομετρήσεις",
      "Τοπογραφικές Μελέτες",
    ],
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
      <section className="bg-muted/50 grid grid-cols-1 md:grid-cols-4 items-center w-full h-full mt-16">
        <div className="col-span-1 md:col-span-3">
          <img
            src="/images/header_fit.webp"
            alt="Hero background"
            className="w-full max-h-[400px] object-cover"
          />
        </div>
        <div className="md:col-start-4 md:col-span-1 col-span-1 p-4 text-center">
          <h1 className="text-lg font-bold mb-4 tracking-tight">
            ΠΟΛΙΤΗΣ ΕΔΟΥΑΡΔΟΣ-ΟΔΥΣΣΕΑΣ
          </h1>
          <h2 className="text-lg text-muted-foreground mb-8">
            Αγρονόμος Τοπογράφος Μηχανικός
          </h2>
          <Button size="lg" variant="outline">
            <Link href="#contact">Επικοινωνία</Link>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="mt-16 container mx-auto px-4">
        <h2 className="text-xl font-bold mb-4 text-center">
          ΕΠΑΓΓΕΛΜΑΤΙΚΕΣ ΥΠΗΡΕΣΙΕΣ
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Υπηρεσίες που παρέχουμε
        </p>
        <div className="grid lg:grid-cols-3 gap-8 text-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden transition-all hover:shadow-lg  bg-[aliceblue] border border-gray-150"
            >
              <div className="aspect-video overflow-hidden border-b border-border/50">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 bg-muted"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {service.longDescription}
                </p>
                <div className="mt-6">
                  <ul className="space-y-2">
                    {service.subServices?.map((subService, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-left">{subService}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="relative container px-4 text-center my-8 p-6 rounded-lg bg-[cornsilk]">
          <p className="text-xs md:text-sm text-muted-foreground max-w-2xl mx-auto">
            Κάθε δικαιοπραξία που έχει ώς αντικείμενο Αγοραπωλησία, Γονική
            παροχή, Δωρεά κλπ, πρέπει να συνοδεύεται από τοπογραφικό διάγραμμα
            (ν.651/77, άρ. 5). Πέρα όμως από την απαίτηση του νόμου, το σωστό
            τοπογραφικό διάγραμμα εξασφαλίζει την ακριβή θέση των ορίων του
            ακινήτου σας επ'αόριστον.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="/images/header_banner.webp"
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
                Ο Αγρονόμος Τοπογράφος Μηχανικός Εθνικού Μετσόβιου Πολυτεχνείου
                Πολίτης Εδουάρδος-Οδυσσέας, είναι ειδικός στις υπηρεσίες
                χαρτογράφησης και τοπογραφίας, προσφέροντας γρήγορα και πάνω από
                όλα έγκυρα αποτελέσματα.
              </p>
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
