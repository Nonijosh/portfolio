import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
  quote:
    "I had the opportunity to work with Chukwunonso during our time in the oil and gas industry, where we worked together on several wireline operations. Coming from an IT support background, I was genuinely impressed by how quickly he adapted to the role and accelerated his learning to meet the demands of the job. He consistently showed calmness under pressure, strong technical ability, and a dependable work ethic. Seeing him transition into software engineering is exciting, and I have no doubt he will bring that same discipline and problem-solving mindset into tech.",
  author: "Olajumoke Ojikutu",
  role: "Software Engineer at TD",
  avatar:
    "https://media.licdn.com/dms/image/v2/D5603AQFBllXqauqPyg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1712519816636?e=1777507200&v=beta&t=24Qo8W6mlw8ZOU5_3q7atdFIkU-5Ya5-HsceNrA4J6E",
  },
  {
  quote:
    "I have known Nonso since our university days, and over time I have also worked with him on a few projects. He is someone who naturally adds value wherever he goes. Josh is resourceful, dependable, and always willing to put in the work needed to get results. He works well with people, learns quickly and always eager to improve.",
  author: "Daniel Osaretin",
  role: "Software Engineer / ML Engineer",
  avatar:
    "/daniel.jpg",
  },
  {
    quote:
      "Chukwunonso is a reliable and capable professional who brings a strong mix of technical understanding, adaptability, and professionalism to his work. During the time we worked together, he showed a willingness to learn, take initiative, and support both users and business needs effectively. He is someone who can be trusted to contribute meaningfully and work well within a team environment.",
    author: "Mr. Olaoluwa Ibigami",
    role: "IT InfrastructureManager",
    avatar:
      "https://media.licdn.com/dms/image/v2/D4D03AQG6HGpgTfCazg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718249218452?e=1777507200&v=beta&t=hLWMiQ3HhahXKhuYZHCz65dcpadWH3jSgbyaRTlmdmg",
  },
  {
  quote:
    "Working with Josh on the KAID web project was a great experience. He was cooperative, receptive to feedback, and committed to building something functional and meaningful. I am confident he will continue to do great work wherever he goes.",
  author: "Praise Idisenimi Otobo",
  role: "Senior Architect & Project Manager",
  avatar:
    "https://media.licdn.com/dms/image/v2/D4D03AQFyIYf3Clbzjw/profile-displayphoto-scale_400_400/B4DZn9XGVuKQAg-/0/1760892322356?e=1777507200&v=beta&t=QXZkuspATAuPe8OXglTSKecpu8EJHaZ0hDAHiH-ehxA",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="container mx-auto 
      px-6 relative z-10"
      >
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            What People Say
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            Kind words from{" "}
            <span
              className="font-serif italic 
            font-normal text-white"
            >
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIdx].avatar}
                  alt={testimonials[activeIdx].author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-semibold">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
