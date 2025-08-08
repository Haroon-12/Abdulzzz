import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { categories, products } from './data';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Clear existing data
  console.log('🗑️ Clearing existing data...');
  await prisma.contactInquiry.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.adminUser.deleteMany();

  // Seed categories
  console.log('📂 Seeding categories...');
  for (const category of categories) {
    await prisma.category.create({
      data: {
        name: category.name,
        description: category.description,
        icon: category.icon
      }
    });
  }

  // Seed products
  console.log('📦 Seeding products...');
  for (const product of products) {
    await prisma.product.create({
      data: {
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        inStock: product.inStock,
        featured: product.featured || false
      }
    });
  }

  // Seed admin user with hashed password
  console.log('👤 Seeding admin user...');
  const hashedPassword = await bcrypt.hash('admin123', 12);
  await prisma.adminUser.create({
    data: {
      username: 'admin',
      password: hashedPassword
    }
  });

  console.log('✅ Database seeding completed!');
  console.log('🔑 Admin credentials: admin / admin123');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
