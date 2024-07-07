# Use the official Node.js 18 image as the base image
FROM node:18-alpine AS builder

# Add a build argument for the environment variable
ARG FONTAWESOME_PACKAGE_TOKEN

# Export the environment variable
ENV FONTAWESOME_PACKAGE_TOKEN=$FONTAWESOME_PACKAGE_TOKEN

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and pnpm-lock.yaml to the working directory
COPY package.json pnpm-lock.yaml ./

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Copy the rest of the application code to the working directory
COPY src ./src
COPY public ./public
COPY next.config.mjs ./next.config.mjs
COPY jsconfig.json ./jsconfig.json
COPY postcss.config.mjs ./postcss.config.mjs
COPY tailwind.config.js ./tailwind.config.js
COPY .npmrc ./.npmrc

# Build the Next.js application
RUN pnpm build

# Use the official Node.js 18 image as the base image for the final stage
FROM node:18-alpine AS runner

# Install pnpm
RUN npm install -g pnpm

# Set environment variables
ENV NODE_ENV=production

# Set the working directory inside the container
WORKDIR /app

# Copy the built application and necessary files from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/src ./src
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.mjs ./next.config.mjs
COPY --from=builder /app/.npmrc ./.npmrc

# Install only production dependencies
RUN pnpm install --prod

# Expose the port the app runs on
EXPOSE 8080

# Start the Next.js application on port 8080
ENV PORT 8080
CMD ["pnpm", "start"]
