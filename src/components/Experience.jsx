import { useState } from "react";
import { Briefcase, Code, GraduationCap, User } from "lucide-react";

export const Experience = () => {
    const [flippedExperience, setFlippedExperience] = useState(false);
    const [flippedEducation, setFlippedEducation] = useState(false);

    return (
        <section id="experience" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    My <span className="text-primary">Journey</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Experience Card */}
                    <div
                        className="relative w-full h-[500px] perspective cursor-pointer"
                        onClick={() => setFlippedExperience(!flippedExperience)}
                    >
                        <div
                            className={`relative w-full h-full transition-transform duration-700 transform-style preserve-3d ${
                                flippedExperience ? "rotate-y-180" : ""
                            }`}
                        >
                            {/* Front Side */}
                            <div className="absolute inset-0 bg-card rounded-xl overflow-hidden shadow-lg backface-hidden">
                                <img
                                    src="/Image/geraud-gordias-c5F1hhK5t0Q-unsplash.jpg"
                                    alt="Experience"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/50 text-white flex flex-col justify-center items-center px-6">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                                        Passionate Web Developer
                                    </h3>
                                    <p className="text-base max-w-md">
                                        Click to flip and learn more about my experience.
                                    </p>
                                </div>
                            </div>

                            {/* Back Side */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-700 to-purple-900 text-white rounded-xl shadow-lg backface-hidden rotate-y-180 flex flex-col justify-center items-center px-6">
                                <h4 className="text-2xl font-bold mb-4">2+ Years of Experience</h4>
                                <ul className="text-left space-y-3 text-sm md:text-base max-w-md">
                                    <li className="flex items-start gap-2">
                                        <Code className="w-5 h-5 mt-1" />
                                        Built fast, accessible web apps using React & TypeScript.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <User className="w-5 h-5 mt-1" />
                                        Designed intuitive interfaces with Tailwind & Figma.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Briefcase className="w-5 h-5 mt-1" />
                                        Collaborated with teams to ship scalable products.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Education Card */}
                    <div
                        className="relative w-full h-[500px] perspective cursor-pointer"
                        onClick={() => setFlippedEducation(!flippedEducation)}
                    >
                        <div
                            className={`relative w-full h-full transition-transform duration-700 transform-style preserve-3d ${
                                flippedEducation ? "rotate-y-180" : ""
                            }`}
                        >
                            {/* Front Side */}
                            <div className="absolute inset-0 bg-card rounded-xl overflow-hidden shadow-lg backface-hidden">
                                <img
                                    src="/experience/education.jpg"
                                    alt="Education"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/50 text-white flex flex-col justify-center items-center px-6">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                                        My Education
                                    </h3>
                                    <p className="text-base max-w-md">
                                        Click to flip and see my academic background.
                                    </p>
                                </div>
                            </div>

                            {/* Back Side */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-700 to-purple-900 text-white rounded-xl shadow-lg backface-hidden rotate-y-180 flex flex-col justify-center items-center px-6">
                                <h4 className="text-2xl font-bold mb-4">Academic Background</h4>
                                <ul className="text-left space-y-3 text-sm md:text-base max-w-md">
                                    <li className="flex items-start gap-2">
                                        <GraduationCap className="w-5 h-5 mt-1" />
                                        B.Tech in Computer Science - XYZ University
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <User className="w-5 h-5 mt-1" />
                                        Specialized in Web Technologies & Software Engineering
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Briefcase className="w-5 h-5 mt-1" />
                                        Completed multiple internships & research projects
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Flip CSS */}
            <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
        </section>
    );
};
