import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  const projects = [
    {
      title: "Prosjekt A (endret)",
      description: "Dette er beskrivelsen for prosjekt A.",
      category: "Utvikling",
      public: true,
      tags: {
        create: [
          { name: "JavaScript" },
          { name: "Node.js" }
        ],
      },
    },
    {
      title: "Prosjekt B (endret)",
      description: "Dette er beskrivelsen for prosjekt B.",
      category: "Design",
      public: false,
      tags: {
        create: [
          { name: "Figma" },
          { name: "UX/UI" }
        ],
      },
    },
  ];

  for (const project of projects) {
    await prisma.project.create({
      data: project,
    });
  }

  console.log("Database seeded!");
}

seed()
  .catch((e) => console.error("Feil under seeding:", e))
  .finally(async () => {
    await prisma.$disconnect();
  });