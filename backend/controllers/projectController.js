import projectRepository from '../repositories/projectRepository';

const getAllProjects = async () => {
    return await projectRepository.getAllProjects();
};

const getProjectById = async (id) => {
    return await projectRepository.getProjectById(id);
};

const createProject = async (projectData) => {
    try {
        console.log("Received project data:", projectData); 
        
        const { title, description, category, isPublic, tags} = projectData;

        const newProject = await projectRepository.createProject({
            title,
            description,
            category,
            isPublic,
            tags,
        });
        
        return newProject;
    } catch (error) {
        console.error("Error creating project:", error);
        throw error;
    }
};

const deleteProject = async (id) => {
    return await projectRepository.deleteProject(id);
};

export {
    getAllProjects,
    getProjectById,
    createProject,
    deleteProject
};