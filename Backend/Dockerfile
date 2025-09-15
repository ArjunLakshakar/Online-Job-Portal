# Use OpenJDK 17 as base image
FROM eclipse-temurin:17-jdk

# Set working directory
WORKDIR /app

# Copy Maven wrapper and pom.xml first (for dependency caching)
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

# Give execute permission to mvnw
RUN chmod +x mvnw

# Download dependencies (helps with caching)
RUN ./mvnw dependency:go-offline

# Copy source code
COPY src src

# Build the application (skip tests for faster build)
RUN ./mvnw clean package -DskipTests

# Run the application
CMD ["java", "-jar", "target/Job-Portal-0.0.1-SNAPSHOT.jar"]
