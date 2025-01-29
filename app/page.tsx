"use client";

import { Menu, Mail, Phone, Send, ChevronRight } from "lucide-react";
import { Button } from "@/components/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/sheet";
import ListItem from "@/components/list";
import { Carousel, CarouselContent, CarouselItem } from "@/components/carousel";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const navigation = [
  { name: "ΑΡΧΙΚΗ", href: "#home" },
  { name: "ΥΠΗΡΕΣΙΕΣ", href: "#services" },
  { name: "ΣΧΕΤΙΚΑ", href: "#about" },
  { name: "ΕΠΙΚΟΙΝΩΝΙΑ", href: "#contact" },
];

const services = [
  {
    title: "ΤΟΠΟΓΡΑΦΙΚΕΣ ΜΕΛΕΤΕΣ",
    image: "/images/service_1.webp",
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
    image: "/images/service_2.webp",
    longDescription:
      "Φωτοερμηνεία είναι η διαδικασία κατά την οποία με χρήση αεροφωτογραφιών και δορυφορικών εικόνων από δημόσιες και ιδιωτικές υπηρεσίες μπορούμε να τεκμηριώσουμε τον χαρακτήρα εκτάσεων σε σχέση με την ισχύουσα δασική νομοθεσία (δασική ή μη), το είδος της βλάστησης και των καλλιεργειών εντός του υπό εξέταση ακινήτου, προσδιορισμό της γεωμορφολογίας του εδάφους, να αποδείξουμε την ύπαρξη ή μη δρόμων, παλαιών μονοπατιών, ρεμάτων, κτιρίων ή άλλων κατασκευών (βαθμίδες καλλιέργειας, ξερολιθιές, κ.α.) σε συγκεκριμένες ημερομηνίες. Οι Τεχνικές εκθέσεις που συντάσσονται κατατίθενται στα αρμόδια δικαστήρια και διάφορες υπηρεσίες για υποθέσεις ιδιοκτησιακών διαφορών, αυθαίρετων κατασκευών, καταπατήσεων κ.α.",
    subServices: [],
  },
  {
    title: "ΟΙΚΟΔΟΜΙΚΕΣ ΑΔΕΙΕΣ",
    image: "/images/service_3.webp",
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
    image: "/images/service_4.webp",
    longDescription:
      "Αναλαμβάνουμε την ενεργειακή επιθεώρηση της ιδιοκτησίας σας και την έκδοση του πιστοποιητικού ενεργειακής απόδοσης σε σύντομο χρονικό διάστημα και πάντοτε σύμφωνα με τις ισχύουσες προδιαγραφές.",
    subServices: [],
  },
  {
    title: "ΜΕΛΕΤΕΣ ΠΥΡΑΣΦΑΛΕΙΑΣ",

    image: "/images/service_5.webp",
    longDescription:
      "Το Τεχνικό Γραφείο αναλαμβάνει την εκπόνηση μελετών εγκαταστάσεων και δικτύων ενεργητικής πυροπροστασίας και πυρασφάλειας.",
    subServices: [],
  },
  {
    title: "ΤΕΧΝΙΚΕΣ ΕΚΘΕΣΕΙΣ",
    image: "/images/service_6.webp",
    longDescription:
      "Αναλαμβάνουμε τη σύνταξη τεκμηριωμένων τεχνικών εκθέσεων προς επίλυση ιδιοκτησιακών διαφορών αμφισβήτισης ορίων, αλλά και εκθέσεων εφαρμογής τίτλων ιδιοκτησίας που μπορούν να χρησιμοποιηθούν στα αρμόδια δικαστήρια.",
    subServices: [],
  },
  {
    title: "ΥΠΗΡΕΣΙΕΣ ΓΙΑ ΕΠΑΓΓΕΛΜΑΤΙΕΣ",
    image: "/images/service_7.webp",
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
  {
    title: "ΜΕΛΕΤΕΣ ΟΔΟΠΟΙΙΑΣ",
    image: "/images/service_8.webp",
    longDescription:
      "Σχεδιασμός εσωτερικής οδοποιίας ακινήτων-γηπέδων, μελέτες κυκλοφοριακών συνδέσεων, μελέτες οδικών έργων.",
    subServices: [],
  },
  {
    title: "ΜΕΛΕΤΗ-ΣΧΕΔΙΑΣΜΟΣ ΧΩΡΟΥ ΚΑΙ ΑΥΛΩΝ",
    image: "/images/service_9.webp",
    longDescription:
      "Το γραφείο μελετά και σχεδιάζει χώρους πρασίνου με γνώμονα τη καλαίσθητη μετατροπή του χώρου, τις κατάλληλες κλίσεις για την απορροή τον υδάτων και τη δημιουργία μικροκλίματος με την επιλογή των κατάλληλων συστημάτων σκίασης σε συνδυασμό με τα ιδανικά φυτά-δέντρα, προσαρμοσμένο στις ανάγκες του πελάτη.",
  },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeSection, setActiveSection] = useState(0);
  const sections = ["home", "services", "about", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const section = searchParams.get("section");
    if (section) {
      const index = sections.indexOf(section);
      if (index !== -1) {
        setActiveSection(index);
      }
    }
  }, [searchParams]);

  const handleNavigation = (index: number) => {
    setActiveSection(index);
    router.push(`?section=${sections[index]}`);
  };

  const returnToHome = () => {
    setActiveSection(0);
    router.push("?section=home");
  };

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
        <nav className="px-4 h-[5rem] bg-card content-center">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <button onClick={() => returnToHome()}>
              <img
                alt="Site Logo"
                src="/images/site_logo.webp"
                className="h-[60px]"
                height={60}
                width={80}
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navigation.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(index)}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    activeSection === index
                      ? "text-primary"
                      : "hover:text-primary"
                  )}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button aria-label="Burger Menu" variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-4 mt-8">
                  {navigation.map((item, index) => (
                    <button
                      key={item.name}
                      onClick={() => {
                        handleNavigation(index);
                      }}
                      className={cn(
                        "text-lg font-medium transition-colors text-left",
                        activeSection === index
                          ? "text-primary"
                          : "hover:text-primary"
                      )}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      <Carousel
        className="w-full h-screen"
        selectedIndex={activeSection}
        setSelectedIndex={setActiveSection}
        opts={{
          align: "start",
          loop: false,
        }}
      >
        <CarouselContent>
          {/* Hero Banner */}
          <CarouselItem className="w-full">
            <section className="relative h-screen flex items-center justify-center">
              <div className="absolute inset-0">
                <img
                  src="/images/header_fit.webp"
                  alt="Hero background"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>
              <div className="relative container mx-auto px-4 text-center text-white">
                <div className="mb-12">
                  <h1 className="text-xl md:text-4xl font-bold mb-6 tracking-tight">
                    Τεχνικό Μελετητικό Γραφείο
                  </h1>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                    ΠΟΛΙΤΗΣ ΕΔΟΥΑΡΔΟΣ-ΟΔΥΣΣΕΑΣ
                  </h1>
                </div>
                <div className="mt-16">
                  <Button
                    size="lg"
                    className="mr-4"
                    onClick={() => handleNavigation(1)}
                  >
                    Υπηρεσίες
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-black"
                    onClick={() => handleNavigation(3)}
                  >
                    Επικοινωνία
                  </Button>
                </div>
              </div>
            </section>
          </CarouselItem>

          {/* Services Section */}
          <CarouselItem className="w-full">
            <section className="h-screen overflow-y-auto bg-muted pt-[8rem]">
              <h2 className="text-xl font-bold mb-4 text-center">
                ΕΠΑΓΓΕΛΜΑΤΙΚΕΣ ΥΠΗΡΕΣΙΕΣ
              </h2>

              <p className="text-muted-foreground text-center max-w-2xl mx-auto">
                Υπηρεσίες που παρέχουμε
              </p>
              <div className="relative px-4 text-center my-8 p-6 rounded-lg bg-[cornsilk] max-w-4xl mx-auto">
                <p className="text-xs md:text-sm text-muted-foreground max-w-4xl mx-auto">
                  Κάθε δικαιοπραξία που έχει ώς αντικείμενο Αγοραπωλησία, Γονική
                  παροχή, Δωρεά κλπ, πρέπει να συνοδεύεται από τοπογραφικό
                  διάγραμμα (ν.651/77, άρ. 5). Πέρα όμως από την απαίτηση του
                  νόμου, το σωστό τοπογραφικό διάγραμμα εξασφαλίζει την ακριβή
                  θέση των ορίων του ακινήτου σας επ'αόριστον.
                </p>
              </div>
              <div className="grid lg:grid-cols-3 gap-8 text-center max-w-7xl mx-auto py-8 mb-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden transition-all hover:shadow-lg bg-card border border-gray-150"
                  >
                    <div className="aspect-video overflow-hidden border-b border-border/50">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 bg-muted"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold mb-4">
                        {service.title}
                      </h3>
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
            </section>
          </CarouselItem>

          {/* About Section */}
          <CarouselItem className="w-full">
            <section className="h-screen overflow-y-auto bg-muted py-[8rem]">
              <div className="container mx-auto p-8 bg-card rounded">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <img
                      src="/images/header_banner.webp"
                      alt="Our team collaborating"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-6">
                    <div className="inline-block">
                      <h2 className="text-3xl font-bold mb-2">
                        Ενδεικτικές Μελέτες
                      </h2>
                      <div className="h-1 w-20 bg-primary rounded-full" />
                    </div>
                    <ul className="space-y-3 text-lg text-muted-foreground leading-relaxed">
                      <ListItem text="Αποτύπωση έκτασης για μίσθωση Παραλίας στη Νάξο." />
                      <ListItem text="Αποτύπωση γηπέδου για σύνταξη συμβολαίου." />
                      <ListItem text="Τεχνική έκθεση φωτοερμηνείας απόδειξης ύπαρξης δρόμου από το έτος 1945." />
                      <ListItem text="Νομιμοποίηση κτίσματος με το ν.4178/13." />
                      <ListItem text="Ρύθμιση αυθαίρετων κατασκευών με το ν.4178/13." />
                      <ListItem text="Τεχνικές εκθέσεις Πραγματογνωμοσύνης." />
                      <ListItem text="Ενεργειακές Επιθεώρησεις." />
                      <ListItem text="Σύνταξη τοπογραφικών διαγραμμάτων με χρήση Gnss και απόδοση υψομετρικών καμπύλων." />
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
                  <div className="space-y-6">
                    <div className="inline-block">
                      <h2 className="text-3xl font-bold mb-2">
                        Τοπογραφικός Εξοπλισμός
                      </h2>
                      <div className="h-1 w-20 bg-primary rounded-full" />
                    </div>
                    <ul className="list-disc list-inside space-y-4 text-gray-800">
                      <li>
                        <span className="font-semibold">
                          Γεωδαιτικός δέκτης κινηματικών μετρήσεων:
                        </span>
                        <ul className=" pl-6 mt-2 text-sm text-gray-600">
                          <li>
                            Ακρίβεια RTK:
                            <ul className="pl-6">
                              <li>H: 8mm ± 1ppm (rms)</li>
                              <li>V: 15mm ± 1ppm (rms)</li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="font-semibold">
                          Γεωδαιτικοί δέκτες στατικών και κινηματικών μετρήσεων:
                        </span>
                        <ul className=" pl-6 mt-2 text-sm text-gray-600">
                          <li>
                            Ακρίβεια static:
                            <ul className="pl-6">
                              <li>H: 5mm + 1ppm</li>
                              <li>V: 10 mm + 2 ppm</li>
                            </ul>
                          </li>
                          <li>
                            <br />
                            Ακρίβεια RTK:
                            <ul className="pl-6">
                              <li>H: 7 mm + 1 ppm</li>
                              <li>V: 14 mm + 2 ppm</li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="font-semibold">
                          Ολοκληρωμένος γεωδαιτικός σταθμός:
                        </span>
                        <ul className="pl-6 mt-2 text-sm text-gray-600">
                          <li>Γωνιακή ακρίβεια: 6cc (2″)</li>
                          <li>
                            Μέτρηση με ένα πρίσμα έως 5.000m με ακρίβεια
                            ±2mm+2ppm
                          </li>
                          <li>
                            Μέτρηση χωρίς πρίσμα έως 600m με ακρίβεια ±3mm+2ppm
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="font-semibold">
                          Περιστροφικό laser για μέτρηση υψομέτρων στο πεδίο
                        </span>
                      </li>
                      <li>
                        <span className="font-semibold">
                          Dji drone για αεροφωτογραφήσεις:
                        </span>
                        <ul className=" pl-6 mt-2 text-sm text-gray-600">
                          <li>Μέγεθος εικόνας: 42mp</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <img
                      src="/images/equipment.webp"
                      alt="Our team collaborating"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>
          </CarouselItem>

          {/* Contact Section */}
          <CarouselItem className="w-full">
            <section className="h-screen overflow-y-auto bg-muted pt-[8rem]">
              <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-3xl font-bold mb-8">
                      Επικοινωνήστε μαζί μας
                    </h2>

                    <div className="space-y-8">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Email</h3>
                          <p className="text-muted-foreground">
                            topographypolitis@gmail.com
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Phone</h3>
                          <p className="text-muted-foreground">
                            +30 6975518942
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
                            Όνομα
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 rounded-md border bg-background"
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Επώνυμο
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
                          Ηλεκτρονική Διεύθυνση
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-2 rounded-md border bg-background"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Μήνυμα
                        </label>
                        <textarea
                          placeholder="Το μήνυμά σας..."
                          className="w-full px-4 py-2 rounded-md border bg-background h-32"
                        />
                      </div>

                      <Button
                        aria-label="Send Message"
                        className="w-full"
                        size="lg"
                      >
                        <Send className="mr-2 h-4 w-4" /> Αποστολή
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
