-- AlterTable
ALTER TABLE "OTP" ALTER COLUMN "expiresAt" SET DEFAULT CURRENT_TIMESTAMP + interval '10 minutes';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "image" TEXT;
