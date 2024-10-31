const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient(); 

exports.getAllProjects = async () => {
    return await prisma.project.findMany();
};

exports.getProjectById = async (id) => {
    return await prisma.project.findUnique({
        where: { id: Number(id) },
    });
};

exports.createProject = async (data) => {
    return await prisma.project.create({
        data,
    });
};

exports.updateProject = async (id, data) => {
    return await prisma.project.update({
        where: { id: Number(id) },
        data,
    });
};

exports.deleteProject = async (id) => {
    return await prisma.project.delete({
        where: { id: Number(id) },
    });
};
