"use client";

import React from "react";
import { Mail, Linkedin } from "lucide-react";
import { FaTwitter } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";


const LeaderCard = ({ leader, index }) => {
  return (
    <div
      className="bg-white rounded-2xl p-6 shadow-xl border border-gray-50/50 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 animate-in fade-in-from-bottom-8"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <img
        src={
          leader.image
            ? leader.image.startsWith("/")
              ? leader.image
              : `/${leader.image}`
            : `/placeholder.svg?height=120&width=120&query=professional headshot of ${leader.name}`
        }
        alt={leader.name}
        className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-emerald-500 shadow-lg"
      />
      <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
      <p className="text-emerald-600 font-semibold mb-3">{leader.designation}</p>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{leader.bio}</p>
      <div className="flex justify-center space-x-4">
        <a
          href={`mailto:${leader.email}`}
          className="text-gray-600 hover:text-emerald-600 transition-colors duration-200"
        >
          <Mail size={20} />
        </a>
        <a
          href={leader.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-emerald-600 transition-colors duration-200"
        >
          <Linkedin size={20} />
        </a>
        <a
  href={leader.twitter}
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-600 hover:text-emerald-600 transition-colors duration-200"
>
  <BsTwitter size={20} />
</a>

      </div>
    </div>
  );
};

const LeadershipTeam = () => {
  const leaders = [
    {
      name: "Dr. Anya Sharma",
      designation: "Chief Executive Officer",
      email: "anya.sharma@avexra.com",
      linkedin: "https://linkedin.com/in/anyasharma",
      twitter: "https://twitter.com/anyasharma",
      bio: "Visionary leader driving Avexra's strategic direction and global expansion.",
      image: "/images/anu.png",
    },
    {
      name: "Mark Thompson",
      designation: "Chief Technology Officer",
      email: "mark.thompson@avexra.com",
      linkedin: "https://linkedin.com/in/markthompson",
      twitter: "https://twitter.com/markthompson",
      bio: "Architect of Avexra's innovative tech stack and R&D initiatives.",
      image: "/images/chaina.png",
    },
    {
      name: "Sophia Lee",
      designation: "Chief Operating Officer",
      email: "sophia.lee@avexra.com",
      linkedin: "https://linkedin.com/in/sophialee",
      twitter: "https://twitter.com/sophialee",
      bio: "Ensuring operational excellence and seamless execution across all departments.",
      image: "/images/rashmi.png",
    },
    {
      name: "David Kim",
      designation: "Chief Financial Officer",
      email: "david.kim@avexra.com",
      linkedin: "https://linkedin.com/in/davidkim",
      twitter: "https://twitter.com/davidkim",
      bio: "Overseeing financial strategy and sustainable growth for Avexra.",
      image: "/images/dk.png",
    },
    {
      name: "Elena Petrova",
      designation: "VP, Global Sales",
      email: "elena.petrova@avexra.com",
      linkedin: "https://linkedin.com/in/elenapetrova",
      twitter: "https://twitter.com/elenapetrova",
      bio: "Leading our global sales initiatives and client acquisition strategies.",
      image: "/images/gg.png",
    },
    {
      name: "Carlos Ramirez",
      designation: "VP, Product Development",
      email: "carlos.ramirez@avexra.com",
      linkedin: "https://linkedin.com/in/carlosramirez",
      twitter: "https://twitter.com/carlosramirez",
      bio: "Driving the development of next-generation products and solutions.",
      image: "/images/ram.png",
    },
    {
      name: "Jessica White",
      designation: "Head of Human Resources",
      email: "jessica.white@avexra.com",
      linkedin: "https://linkedin.com/in/jessicawhite",
      twitter: "https://twitter.com/jessicawhite",
      bio: "Fostering a culture of innovation, diversity, and employee well-being.",
      image: "/images/moni.png",
    },
    {
      name: "Omar Hassan",
      designation: "Director of Marketing",
      email: "omar.hassan@avexra.com",
      linkedin: "https://linkedin.com/in/omarhassan",
      twitter: "https://twitter.com/omarhassan",
      bio: "Shaping Avexra's brand narrative and market presence globally.",
      image: "/images/vk.png",
    },
  ];

  return (
    <section id="leadership" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 animate-in fade-in-from-bottom-8">
            Our <span className="text-emerald-500">Leadership</span>
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto animate-in fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Meet the visionary leaders guiding Avexra towards a brighter future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <LeaderCard key={index} leader={leader} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
