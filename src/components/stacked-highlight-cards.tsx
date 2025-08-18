import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export default function StackedHighlightCards() {
  const projects = [
    {
      title: "Country French Interiors Dashboard",
      image:
        "https://cl0avqtjow.ufs.sh/f/Pb8WreYSaAY10mKuwqQIn75VLc4hrUb2MiRJpfxZadN6gCwy",
      description:
        "Web application for tracking 10k+ product records with advanced search capabilities and automated reporting for furniture business operations.",
      role: "Full-Stack Developer",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "shadcn/ui",
        "Prisma",
        "react-hook-form",
        "zod",
      ],
      year: "2024",
      link: "https://cfi-v2.vercel.app/",
    },
    {
      title: "Authentication Dashboard Template",
      image:
        "https://cl0avqtjow.ufs.sh/f/Pb8WreYSaAY1bCmdPAprfp6RjeiK0I97XxwNTuSMrlLJUmn3",
      description:
        "Complete authentication system with Google OAuth, session management, and email workflows - designed as a reusable template for future projects.",
      role: "Full-Stack Developer",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "shadcn/ui",
        "Resend",
        "Drizzle",
        "PostgreSQL",
        "react-hook-form",
        "zod",
        "better-auth",
        "tanstack query",
      ],
      year: "2025",
      link: "https://app.stefanbuenaventura.dev",
    },
    {
      title: "Bookmarked - Mozilla Browser Extension",
      image:
        "https://cl0avqtjow.ufs.sh/f/Pb8WreYSaAY1lh6m21icQ2NtVGpvWITP3lziUSwOm65aFo0y",
      description:
        "Kanban-style bookmark manager for organizing favorite websites with drag-and-drop functionality and persistent storage.",
      role: "Frontend Developer",
      technologies: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "dnd-kit",
        "zustand",
        "react-hook-form",
        "zod",
      ],
      year: "2024",
      link: "https://addons.mozilla.org/en-US/firefox/addon/bookmarked/",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
            A selection of my most impactful work, demonstrating range and depth
            across industries.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card overflow-hidden rounded-xl border shadow-sm transition-all hover:shadow-md"
            >
              <div className="grid md:grid-cols-3">
                {/* Project Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden md:aspect-auto md:h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Project Details */}
                <div className="p-6 md:col-span-2 md:p-8">
                  <div className="mb-2 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    {project.title}
                  </h3>

                  <div className="text-muted-foreground mb-4 flex flex-col flex-wrap gap-x-4 text-sm md:flex-row">
                    <span>{project.role}</span>
                    <span className="hidden md:inline">•</span>
                    <span>{project.year}</span>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>

                  <Button asChild variant="outline" size="sm">
                    <Link href={project.link}>
                      View Project <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// const projects = [
//   {
//     title: "Country French Interiors Dashboard",
//     image:
//       "https://cl0avqtjow.ufs.sh/f/Pb8WreYSaAY10mKuwqQIn75VLc4hrUb2MiRJpfxZadN6gCwy",
//     description:
//       "Web application for tracking 10k+ product records with advanced search capabilities and automated reporting for furniture business operations.",
//     role: "Full-Stack Developer",
//     technologies: [
//       "Next.js",
//       "React",
//       "TypeScript",
//       "TailwindCSS",
//       "shadcn/ui",
//       "Prisma",
//       "react-hook-form",
//       "zod",
//     ],
//     year: "2024",
//     link: "https://cfi-v2.vercel.app/",
//   },
//   {
//     title: "Authentication Dashboard Template",
//     image:
//       "https://cl0avqtjow.ufs.sh/f/Pb8WreYSaAY1bCmdPAprfp6RjeiK0I97XxwNTuSMrlLJUmn3",
//     description:
//       "Complete authentication system with Google OAuth, session management, and email workflows - designed as a reusable template for future projects.",
//     role: "Full-Stack Developer",
//     technologies: [
//       "Next.js",
//       "React",
//       "TypeScript",
//       "TailwindCSS",
//       "shadcn/ui",
//       "Resend",
//       "Drizzle",
//       "PostgreSQL",
//       "react-hook-form",
//       "zod",
//       "better-auth",
//       "tanstack query",
//     ],
//     year: "2025",
//     link: "https://app.stefanbuenaventura.dev",
//   },
//   {
//     title: "Bookmarked - Mozilla Browser Extension",
//     image:
//       "https://cl0avqtjow.ufs.sh/f/Pb8WreYSaAY1lh6m21icQ2NtVGpvWITP3lziUSwOm65aFo0y",
//     description:
//       "Kanban-style bookmark manager for organizing favorite websites with drag-and-drop functionality and persistent storage.",
//     role: "Frontend Developer",
//     technologies: [
//       "React",
//       "TypeScript",
//       "TailwindCSS",
//       "dnd-kit",
//       "zustand",
//       "react-hook-form",
//       "zod",
//     ],
//     year: "2024",
//     link: "https://addons.mozilla.org/en-US/firefox/addon/bookmarked/",
//   },
// ];
