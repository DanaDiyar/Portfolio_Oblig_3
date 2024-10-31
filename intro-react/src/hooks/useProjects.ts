import { useState, useEffect } from "react";
import { fetchProjectsApi, addProjectApi } from "../services/api.ts";
import { z } from "zod";


const projectSchema = z.object({
  title: z.string(),
  category: z.string(),
  createdAt: z.string(),
  public: z.boolean().optional(),
  tags: z.array(z.string()).optional()
});


export type Project = z.infer<typeof projectSchema>;

const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  const fetchProjects = async () => {
    try {
      const data = await fetchProjectsApi();
      
      const validatedProjects = z.array(projectSchema).parse(data);
      setProjects(validatedProjects);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    }
  };

  const handleAddProject = async (project: Project) => {
    try {
      const newProjects = await addProjectApi(project);
      setProjects(newProjects);
    } catch (error) {
      console.error("Error adding project:", error);
      alert("Kunne ikke opprette prosjekt: " + (error as Error).message);
    }
  };

  const removeProject = (index: number) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return { projects, handleAddProject, removeProject };
};

export default useProjects;