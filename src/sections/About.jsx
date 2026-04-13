import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing structured, maintainable code that supports long-term growth.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Designing optimized experiences that are fast, smooth, and dependable.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working seamlessly with others to deliver practical solutions.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Using modern technologies and smart ideas to build better solutions.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I am a technically driven professional whose career has evolved across software, IT support, and field engineering in the oil and gas industry. 
                That journey has given me a rare blend of hands-on operational experience, systems thinking, and a strong appreciation for technology that solves 
                real business problems.
              </p>
              <p>
                Over the years, I have worked in demanding environments where reliability, troubleshooting, and fast decision-making matter. 
                From supporting technical systems and resolving operational issues to improving workflows with digital tools, I have consistently used technology 
                as a practical way to drive efficiency and support teams.
              </p>
              <p>
                Today, I am building on that foundation by deepening my path in IT and software, with a focus on creating useful, 
                dependable solutions leveraging on AI. My background in both engineering operations and technology allows me to approach problems with structure, 
                adaptability, and a strong user-focused mindset.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
