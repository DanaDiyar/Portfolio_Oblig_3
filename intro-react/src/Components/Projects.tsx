import { format } from "date-fns";

type ProjectProps = {
  title: string;
  description: string;
  category: string;
  createdAt: string;
  public: boolean; 
  tags: string[];
  index: number;
  removeProject: (index: number) => void;
};

function Project({ title, description, category, createdAt, public: isPublic, tags, index, removeProject }: ProjectProps) {
  return (
    <div>
      <p>{title} - <strong>{category}</strong></p>
      <p>Beskrivelse: {description}</p>
      <p>Publisert: {createdAt}</p>
      <p>Offentlig: {isPublic ? "Ja" : "Nei"}</p>
      <p>Tags: {tags?.join(", ") || "Ingen tagger"}</p>
      <button onClick={() => removeProject(index)}>Fjern</button>
    </div>
  );
}

type ProjectsProps = {
  projects: { 
    title: string, 
    description: string,
    category: string, 
    createdAt: string 
    public: boolean;
    tags: string[];
  }[];
  removeProject: (index: number) => void;
};

export default function Projects({ projects, removeProject }: ProjectsProps) {
  const countByCategory = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = 0;
    }
    acc[project.category]++;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div>
      {projects.length > 0 ? (
        projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            category={project.category}
            createdAt={project.createdAt} 
            public={project.public}
            tags={project.tags}
            index={index}
            removeProject={removeProject}
          />
        ))
      ) : (
        <h3>Ingen prosjekter tilgjengelig</h3>
      )}

      <h3>Totalt prosjekter per kategori:</h3>
      <ul>
        {Object.entries(countByCategory).map(([category, count], index) => (
          <li key={index}>{category}: {count} prosjekter</li>
        ))}
      </ul>
    </div>
  );
}
