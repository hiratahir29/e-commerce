// db/seed.ts
import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from '@prisma/adapter-pg';
import { sample_data } from "../data/dummyData.js";
const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });
async function main() {
    console.log(process.env.DATABASE_URL);
    console.log("Seeding database...");
    // Clear existing products
    await prisma.comment.deleteMany(); // delete comments first to avoid FK issues
    await prisma.product.deleteMany();
    await prisma.account.deleteMany();
    await prisma.session.deleteMany();
    await prisma.verificationToken.deleteMany();
    await prisma.user.deleteMany();
    // Insert products
    for (const p of sample_data.products) {
        const { comments, ...productData } = p; // separate comments
        await prisma.product.create({
            data: {
                ...productData,
                comments: {
                    create: comments, // nested write here
                },
            },
        });
    }
    await prisma.user.createMany({ data: sample_data.users });
    console.log("Database seeded successfully");
}
main()
    .catch((e) => {
    console.error("Seeding failed:", e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
    console.log("Database connection closed.");
});
