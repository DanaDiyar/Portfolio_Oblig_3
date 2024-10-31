import React, { useState } from "react";
import { format } from "date-fns";

type CreateProjectProps = {
  onAddProject: (project: {
    title: string;
    description: string;
    createdAt: string;
    category: string;
    public: boolean;
    tags: string[];
  }) => void;
}

const CreateProject: React.FC<CreateProjectProps> = ({ onAddProject }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [category, setCategory] = useState("");
  const [isPublic, setIsPublic] = useState(false); 
  const [tags, setTags] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    
    if (!title || !description || !createdAt || !category) {
      alert("Alle feltene må fylles ut.");
      return;
    }

    onAddProject({ 
      title, 
      description, 
      createdAt,
      category, 
      public: isPublic,
      tags: tags.split(",").map(tag => tag.trim())
    });

    
    setTitle("");
    setDescription("");
    setCreatedAt("");
    setCategory("");
    setIsPublic(false);
    setTags("");
  };

  return (
    <form onSubmit={handleSubmit} className="create-project-form">
      <label htmlFor="title">Prosjekttittel:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Skriv prosjekttittel"
      />

      <label htmlFor="description" className="form-label">Beskrivelse:</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Skriv beskrivelse"
      />

      <label htmlFor="createdAt" className="form-label">Publiseringsdato:</label>
      <input
        type="date"
        id="createdAt"
        value={createdAt}
        onChange={(e) => setCreatedAt(e.target.value)}
      />

      <label htmlFor="category" className="form-label">Kategori:</label>
      <input
        type="text"
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Skriv kategori"
      />

      <label htmlFor="public" className="isPublicButton">Skal prosjektet være offentlig eller privat? (Huk av knappen for for offentlig)</label>
      <input
        type="checkbox"
        id="public"
        checked={isPublic}
        onChange={(e) => setIsPublic(e.target.checked)}
      />

      <label htmlFor="tags" className="form-label">Tags (separert med komma):</label>
      <input
        type="text"
        id="tags"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        placeholder="Skriv tags"
      />

    <button type="submit" className="submit-button">Opprett Prosjekt</button>
    </form>
  );
};

export default CreateProject;