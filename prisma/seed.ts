import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  await prisma.contactCategory.upsert({
    where: { name: "Audit" },
    update: {},
    create: {
      name: "Audit",
    },
  });

  await prisma.contactCategory.upsert({
    where: { name: "Développement" },
    update: {},
    create: {
      name: "Développement",
    },
  });

  await prisma.contactCategory.upsert({
    where: { name: "Formation" },
    update: {},
    create: {
      name: "Formation",
    },
  });

  // await prisma.contactRequest.upsert({
  //   where: { id: "" },
  //   update: {},
  //   create: {
  //     categoryId: "clgez9rim0002v0u4go9txvus", // Développement
  //     firstName: "Matthieu",
  //     lastName: "MEIGNAN",
  //     email: "matthieu.meignan@inolib.com",
  //     phone: "06 73 90 19 32",
  //     message: "Bla bla bla...",
  //   },
  // });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    await prisma.$disconnect();
    console.error(error);
    process.exit(1);
  });
