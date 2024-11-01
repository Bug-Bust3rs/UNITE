#!/bin/bash

set -e


echo "Installing pnpm globally..."
npm install -g pnpm


echo "Installing dependencies for all packages..."
pnpm install


echo "Running Prisma migrations in the backend..."
cd apps/backend
pnpm dlx prisma migrate dev --name init
cd ../.. 


echo "Starting Turborepo in development mode..."
pnpm dev
