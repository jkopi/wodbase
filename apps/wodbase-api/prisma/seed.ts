import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  const email = 'mrbarbell@example.com';

  await prisma.gym.deleteMany().catch((err) => {});
  await prisma.gymInfo.deleteMany().catch((err) => {});
  await prisma.workout.deleteMany().catch((err) => {});

  const gym = await prisma.gym.create({
    data: {
      name: 'Barbell Club',
      description: 'Zulu Barbell Club',
      address: 'Zulustreet A5',
      owner: email,
    },
  });

  await prisma.gymInfo.createMany({
    data: [
      {
        type: 'IMPORTANT_INFO',
        content:
          'ATTENTION: PLEASE MEMBERS PAY MEMBERSHIP QUICK, MONEY IS TIGHT!',
        gymId: gym.id,
      },
      {
        type: 'WEEKLY_INFO',
        content: 'Remember to sign up for gym competition!',
        gymId: gym.id,
      },
      {
        type: 'CONTACT_INFO',
        content: 'Membership queries: members@notareelemail.foo',
        gymId: gym.id,
      },
    ],
  });

  await prisma.workout.create({
    data: {
      name: 'Clean Warmup',
      description: `
      3 rounds of
      - 5 clean pulls
      - 5 hang muscle cleans
      - 5 tall cleans
      - 5 front squats
    `,
      type: 'WARMUP',
      order: 1,
      scheduledTo: new Date(),
      gymId: gym.id,
    },
  });

  await prisma.workout.create({
    data: {
      name: 'Power Clean EMOM',
      description: `
      5 power cleans every minute on the minute
      - Go hard or go home
    `,
      type: 'STRENGTH',
      order: 2,
      scheduledTo: new Date(),
      gymId: gym.id,
    },
  });

  const gyms = await prisma.gym.findMany();
  const workouts = await prisma.workout.findMany();
  const infos = await prisma.gymInfo.findMany({ where: { gymId: gym.id } });
  console.log({ gyms });
  console.log({ infos });
  console.log({ workouts });
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
