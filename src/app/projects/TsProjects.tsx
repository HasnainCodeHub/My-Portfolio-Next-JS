import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Spinner } from "../components/spinner";
import { urlFor } from "@/sanity/lib/image";

interface Project {
  _id: string;
  projectName: string;
  description: string;
  link: string;
  backgroundImage?: {
    asset: {
      _ref: string; // Sanity uses _ref for image assets
    };
  };
}

interface Props {
  tsProjects: Project[];
  loading: boolean;
}

export default function TsProjects({ tsProjects, loading }: Props) {
  return (
    <section>
      <h2 className="text-3xl font-semibold text-gray-700 mt-12 mb-6 text-center">
        TypeScript Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {loading ? (
          <Spinner />
        ) : tsProjects.length === 0 ? (
          <p>No TypeScript projects found.</p>
        ) : (
          tsProjects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Check if description is longer than 30 words
  const descriptionWords = project.description.split(" ");
  const shouldShowReadMore = descriptionWords.length > 30;

  return (
    <motion.div
      className="border border-gray-300 shadow-lg p-4 rounded-lg bg-white flex flex-col min-w-[250px] max-w-[300px] h-full"
      whileHover={{ scale: 1.05 }}
    >
      {project.backgroundImage && (
        <motion.img
          src={urlFor(project.backgroundImage).url()} // ✅ Corrected
          alt={project.projectName}
          className="rounded-lg mt-2 w-full h-40 object-cover"
        />
      )}
      <div className="flex-grow p-4 flex flex-col">
        <Link href={project.link} passHref target="_blank">
          <h2 className="text-lg font-semibold hover:text-blue-500">
            {project.projectName}
          </h2>
        </Link>

        <p className="text-sm text-gray-600">
          {isExpanded
            ? project.description
            : shouldShowReadMore
            ? descriptionWords.slice(0, 30).join(" ") + "..."
            : project.description}
        </p>

        {shouldShowReadMore && (
          <button
            className="text-blue-500 text-sm mt-1 font-semibold"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>

      <Link href={project.link} passHref target="_blank">
        <motion.button
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          View Project
        </motion.button>
      </Link>
    </motion.div>
  );
}
