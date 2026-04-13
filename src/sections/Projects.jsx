import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Simple Weather App",
    description:
      "A simple weather app I built to better understand how APIs work. It shows the weather for your current location and also lets you search other locations to view their forecast. It includes a small 'Did You Know?' section that shares an interesting fact about the region you are viewing.",
    image: "/projects/project1.png",
    tags: ["Go", "JavaScript", "HTML", "CSS", "Weather API"],
    link: "https://24hrsweather.vercel.app",
    github: "#",
  },
  {
    title: "LAS Repair Tool",
    description:
      "In wireline logging, acquired data is stored in LAS file format, and depending on the acquisition system used, importing it into other data software can be difficult. I built a simple desktop application that scans LAS files, aligns values, reformats column and row structure, and fills missing entries with null values to make the files import-ready. My target platform was Warrior 8, which was the logging software I used at the time.",
    image: "/projects/project2.png",
    tags: ["Python", "Tkinter", "Regex", "File Handling", "LAS"],
    link: "#",
    github: "#",
  },
  {
    title: "KAID Website",
    description:
      "A professional website built for the KAID team, similar in style to the portfolio you are currently viewing. KAID focuses on architectural design, construction, and interiors, and it was a privilege to work on a project that helped present their brand and services in a clean and modern way.",
    image: "/projects/project3.png",
    tags: ["React", "Python", "nodejs", "CSS"],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Some of my work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-2 text-sm">
                  {project.link && project.link !== "#" && (
                    <span className="inline-flex items-center gap-2 text-primary font-medium">
                      <ArrowUpRight className="w-4 h-4" />
                      Live
                    </span>
                  )}
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
