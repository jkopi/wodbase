import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  const email = 'mrbarbell@example.com';

  await prisma.gym.create({
    data: {
      name: 'Barbell Club',
      description: 'Zulu Barbell Club',
      address: 'Zulustreet A5',
      owner: email,
    },
  });

  // await prisma.gym.create({
  //   data: {
  //     name: 'CrossFit Zulu',
  //     description: 'The original CrossFit Zulu',
  //     address: 'Zulustreet A5',
  //     owner: email,
  //   },
  // });
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
