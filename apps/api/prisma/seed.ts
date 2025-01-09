import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const permissions = [
    { name: 'create:user', description: 'Create users' },
    { name: 'read:user', description: 'Read users' },
    { name: 'update:user', description: 'Update users' },
    { name: 'delete:user', description: 'Delete users' },
    { name: 'create:transfer', description: 'Create transfers' },
    { name: 'read:transfer', description: 'Read transfers' },
    { name: 'manage:roles', description: 'Manage roles and permissions' },
  ];

  const createdPermissions = await Promise.all(
    permissions.map((permission) =>
      prisma.permission.upsert({
        where: { name: permission.name },
        update: {},
        create: permission,
      }),
    ),
  );

  const roles = [
    {
      name: 'admin',
      description: 'Administrator role with full access',
      permissions: createdPermissions,
    },
    {
      name: 'user',
      description: 'Regular user with basic access',
      permissions: createdPermissions.filter(
        (p) =>
          !p.name.includes('delete:') &&
          !p.name.includes('manage:') &&
          p.name !== 'create:user',
      ),
    },
    {
      name: 'customer',
      description: 'Customer with limited access',
      permissions: createdPermissions.filter(
        (p) => p.name === 'read:transfer' || p.name === 'create:transfer',
      ),
    },
  ];

  for (const role of roles) {
    await prisma.role.upsert({
      where: { name: role.name },
      update: {
        permissions: {
          set: role.permissions.map((p) => ({ id: p.id })),
        },
      },
      create: {
        name: role.name,
        description: role.description,
        permissions: {
          connect: role.permissions.map((p) => ({ id: p.id })),
        },
      },
    });
  }

  await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@spacelinkbrasil.com.br',
      password: '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm',
      name: 'Admin',
      surname: 'User',
      phone: '5527999999999',
      document: '00000000000',
      wallet: {
        create: {
          balance: 0,
        },
      },
      role: {
        connect: {
          name: 'admin',
        },
      },
    },
  });

  console.log('Seed completed successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
