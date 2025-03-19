
"use client"
import { useState, useEffect } from "react";
import { createClient } from "next-sanity";
import AgenticProjects from "./AgentProject";
import NextProjects from "./NextProjects";
import TsProjects from "./TsProjects";




const sanityClient = createClient({
  projectId: "xtej4sdt",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

export default function Projects() {
  const [tsProjects, setTsProjects] = useState([]);
  const [nextProjects, setNextProjects] = useState([]);
  const [agentProjects, setAgentProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      setLoading(true);
      setTsProjects(await sanityClient.fetch(`*[_type == 'project']`));
      setNextProjects(await sanityClient.fetch(`*[_type == 'nextproject']`));
      setAgentProjects(await sanityClient.fetch(`*[_type == 'agentproject']`));
      setLoading(false);
    }
    fetchProjects();
  }, []);

  return (
    <main>
      <AgenticProjects agentProjects={agentProjects} loading={loading} />
      <TsProjects tsProjects={tsProjects} loading={loading} />
      <NextProjects nextProjects={nextProjects} loading={loading} />
    </main>
  );
}
