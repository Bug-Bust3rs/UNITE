/*
  Warnings:

  - The primary key for the `DonationPosts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `JobPost` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `OTP` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `PetsPost` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DonationPosts" DROP CONSTRAINT "DonationPosts_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "DonationPosts_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "DonationPosts_id_seq";

-- AlterTable
ALTER TABLE "JobPost" DROP CONSTRAINT "JobPost_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "JobPost_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "JobPost_id_seq";

-- AlterTable
ALTER TABLE "OTP" DROP CONSTRAINT "OTP_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "expiresAt" SET DEFAULT CURRENT_TIMESTAMP + interval '10 minutes',
ADD CONSTRAINT "OTP_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "OTP_id_seq";

-- AlterTable
ALTER TABLE "PetsPost" DROP CONSTRAINT "PetsPost_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "PetsPost_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "PetsPost_id_seq";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT NOT NULL;
