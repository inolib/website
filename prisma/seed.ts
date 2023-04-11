import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    await prisma.$disconnect();
    console.log(error);
    process.exit(1);
  });
