import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.users.upsert({
    where: { email: 'andreyelyan.contato@gmail.com' },
    update: {},
    create: {
      name: 'Andrey',
      lastName: 'Silveira',
      password: '12345678',
      dateOfBirth: '19/07/1998',
      gender: 'Masculino',
      cellPhone: '51985809513',
      email: 'andreyelyan.contato@gmail.com',
    },
  });

  const post2 = await prisma.users.upsert({
    where: { email: 'andreyelyan@gmail.com' },
    update: {},
    create: {
      name: 'Andrey',
      lastName: 'Elyan',
      password: '12345678',
      dateOfBirth: '19/07/1998',
      gender: 'Masculino',
      cellPhone: '51985809513',
      email: 'andreyelyan@gmail.com',
    },
  });

  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
