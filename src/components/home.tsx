// components/sections/HeroSection.jsx
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MapPin,
  Mail,
  Linkedin,
  Github,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export default function HeroSection() {
  return (
    <div className="py-16 md:py-24 h-screen flex items-center">
      <div className="container mx-auto px-4 2xl:max-w-[1400px]">
        <div className="gap-12 md:grid md:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-center md:col-span-5 lg:col-span-4">
            <div className="border-primary/10 dark:border-primary/20 relative mb-8 h-56 w-56 overflow-hidden rounded-full border-4 md:h-64 md:w-64 lg:h-72 lg:w-72">
              <Image
                alt="Profile picture of Stefan Buenaventura"
                fill
                className="object-cover"
                sizes="100vw"
                src="https://cl0avqtjow.ufs.sh/f/Pb8WreYSaAY1zk1C7Kl71cegEhVdvs2zbmiROuPtH0UZJSaf"
              />
            </div>
            <div className="bg-muted/30 dark:bg-gray-900/50 dark:border-gray-800 w-full max-w-sm space-y-4 rounded-xl border p-6">
              <h3 className="text-lg font-semibold dark:text-gray-100">
                Quick Facts
              </h3>
              <div className="grid gap-3">
                <div className="flex items-center gap-3">
                  <Calendar className="text-muted-foreground dark:text-gray-400 h-5 w-5" />
                  <div>
                    <p className="text-muted-foreground dark:text-gray-400 text-sm">
                      Experience
                    </p>
                    <p className="font-medium dark:text-gray-200">1 Year</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-muted-foreground dark:text-gray-400 h-5 w-5" />
                  <div>
                    <p className="text-muted-foreground dark:text-gray-400 text-sm">
                      Location
                    </p>
                    <p className="font-medium dark:text-gray-200">
                      Las Piñas City, Philippines
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-muted-foreground dark:text-gray-400 h-5 w-5" />
                  <div>
                    <p className="text-muted-foreground dark:text-gray-400 text-sm">
                      Contact
                    </p>
                    <a
                      href="mailto:stefanbuenaventura@gmail.com"
                      className="hover:text-primary dark:text-gray-200 dark:hover:text-primary font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      stefanbuenaventura@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="size-9 bg-transparent dark:border-gray-700 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                  aria-label="LinkedIn Profile"
                >
                  <a
                    href="https://linkedin.com/in/stefanbuena/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="size-9 bg-transparent dark:border-gray-700 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                  aria-label="GitHub Profile"
                >
                  <a href="https://github.com/stefan1575/">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col md:col-span-7 md:mt-0 lg:col-span-8">
            <div className="mb-2 flex items-center gap-2">
              <Badge
                variant="secondary"
                className="font-normal tracking-wide uppercase dark:bg-gray-800 dark:text-gray-300"
              >
                About Me
              </Badge>
            </div>
            <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl dark:text-gray-100">
              {`Hi, I'm `}
              <span className="text-primary">Stefan Buenaventura</span>
              <br />
              Automation Specialist
            </h1>
            <div className="space-y-4 text-lg dark:text-gray-300">
              <p>
                {`I build custom automation systems that cut manual work and make business processes run reliably. Over the past year, I've delivered solutions ranging from inventory dashboards handling thousands of records to AI-driven call flows that qualify HVAC leads in real time.`}
              </p>
              <p>
                {`Most of my work centers on connecting tools that don’t natively integrate, bridging CRMs with messaging platforms, automating lead flows, and simplifying internal reporting.`}
              </p>
              <p>
                {`If you're looking to replace repetitive tasks with dependable automation, or want a second set of eyes on where to streamline, I’d be glad to walk through what’s possible.`}
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                className="dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90"
              >
                <a href="#contact">
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100 bg-transparent"
              >
                <a href="#projects">
                  View My Work
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
