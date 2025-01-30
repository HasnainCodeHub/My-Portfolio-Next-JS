"use client"; // For client-side rendering
import { useState, useEffect } from "react";
import { createClient } from "next-sanity";
import { groq } from "next-sanity";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { Spinner } from "../components/spinner"; 
import { motion } from "framer-motion"; // Import Framer Motion

// Define the types for the project
interface Project {
  _id: string;
  projectName: string;
  description: string;
  npmCommand?: string; // Optional because 'nextproject' might not have it
  backgroundImage?: {
    asset: {
      _id: string;
      url: string;
    };
  };
  link: string;
}

// Sanity client configuration
const sanityClient = createClient({
  projectId: "xtej4sdt", // Replace with your actual project ID
  dataset: "production", // Replace with your dataset name
  apiVersion: "2024-01-01", // Use the current date
  useCdn: true, // Set to false if you want to ensure fresh data
});

// Helper function to generate image URLs
const builder = imageUrlBuilder(sanityClient);
function urlFor(source: any) {
  return builder.image(source).url();
}

// Framer Motion animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Projects component to fetch and display projects (both types)
export default function Projects() {
  const [tsProjects, setTsProjects] = useState<Project[]>([]); // Holds 'project' data
  const [nextProjects, setNextProjects] = useState<Project[]>([]); // Holds 'nextproject' data
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Function to fetch TypeScript and Next.js projects from Sanity
    async function fetchProjects() {
      setLoading(true); // Set loading to true before fetching
      const tsResult: Project[] = await sanityClient.fetch(groq`
        *[_type == 'project'] {
          _id,
          projectName,
          description,
          backgroundImage {
            asset -> {
              _id,
              url
            }
          },
          link,
          npmCommand
        }
      `);

      const nextResult: Project[] = await sanityClient.fetch(groq`
        *[_type == 'nextproject'] {
          _id,
          projectName,
          description,
          backgroundImage {
            asset -> {
              _id,
              url
            }
          },
          link
        }
      `);

      setTsProjects(tsResult); // Set fetched TypeScript projects in state
      setNextProjects(nextResult); // Set fetched Next.js projects in state
      setLoading(false); // Set loading to false after fetching
    }

    // Initial fetch
    fetchProjects();

    // Set up a real-time listener for changes in 'project' and 'nextproject' documents
    const subscription = sanityClient
      .listen(`*[_type == "project" || _type == "nextproject"]`)
      .subscribe(() => {
        fetchProjects(); // Re-fetch projects on any change
      });

    // Clean up the listener on component unmount
    return () => subscription.unsubscribe();
  }, []);

  return (
    <main className="bg-gray-100 min-h-screen py-10 px-4">
      {/* Render TypeScript Projects */}
      <div className="p-4 w-full mx-auto max-w-[90%] lg:max-w-[120rem]">
        <motion.h1
          className="text-4xl sm:text-6xl md:text-6xl lg:text-8xl font-bold mt-12 text-center text-white bg-cyan-950 w-[100%] rounded-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h1>
        <br />
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 text-center">TypeScript Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {loading ? (
            <Spinner /> // Show spinner while loading
          ) : tsProjects.length === 0 ? (
            <p>No TypeScript projects found.</p>
          ) : (
            tsProjects.map((project) => (
              <motion.div
                key={project._id}
                className="border border-gray-300 shadow-lg p-4 rounded-lg bg-white flex flex-col min-w-[250px] max-w-[300px] h-full"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {project.backgroundImage && (
                  <motion.img
                    src={urlFor(project.backgroundImage.asset.url)}
                    alt={project.projectName}
                    className="rounded-lg mt-2 w-full h-40 object-cover hover:opacity-90 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
                <div className="flex-grow p-4 flex flex-col">
                  <Link href={project.link} passHref target="_blank">
                    <h2 className="text-lg font-semibold hover:text-blue-500 transition-colors duration-300">{project.projectName}</h2>
                  </Link>
                  <p className="text-sm text-gray-600">{project.description}</p>
                  {project.npmCommand && (
                    <p className="mt-2 text-xs text-gray-500">
                      Command: <code>{project.npmCommand}</code>
                    </p>
                  )}
                </div>
                <Link href={project.link} passHref target="_blank">
                  <motion.button
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    View Project
                  </motion.button>
                </Link>
              </motion.div>
            ))
          )}
        </div>

        {/* Render Next.js Projects */}
        <h2 className="text-3xl font-semibold text-gray-700 mt-12 mb-6 text-center">Next.js Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {loading ? (
            <Spinner /> // Show spinner while loading
          ) : nextProjects.length === 0 ? (
            <p>No Next.js projects found.</p>
          ) : (
            nextProjects.map((project) => (
              <motion.div
                key={project._id}
                className="border border-gray-300 shadow-lg p-4 rounded-lg bg-white flex flex-col min-w-[250px] max-w-[300px] h-full"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {project.backgroundImage && (
                  <motion.img
                    src={urlFor(project.backgroundImage.asset.url)}
                    alt={project.projectName}
                    className="rounded-lg mt-2 w-full h-40 object-cover hover:opacity-90 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
                <div className="flex-grow p-4 flex flex-col">
                  <Link href={project.link} passHref target="_blank">
                    <h2 className="text-lg font-semibold hover:text-blue-500 transition-colors duration-300">{project.projectName}</h2>
                  </Link>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </div>
                <Link href={project.link} passHref target="_blank">
                  <motion.button
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    View Project Live
                  </motion.button>
                </Link>
              </motion.div>
            ))
          )}
        </div>

        <h1 className="text-6xl text-red-600 text-center font-bold">More Projects Coming Soon</h1>
      </div>
    </main>
  );
}
