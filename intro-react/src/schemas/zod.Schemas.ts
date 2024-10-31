import { z } from 'zod';

const ProjectSchema = z.object({
  name: z.string(),           
  category: z.string(),       
});

export const ProjectsSchema = z.array(ProjectSchema);
