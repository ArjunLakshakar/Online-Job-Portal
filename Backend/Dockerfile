# Use OpenJDK 17 as base image
FROM eclipse-temurin:17-jdk

WORKDIR /app

# Copy Maven wrapper and pom.xml first (for dependency caching)
COPY Job-Portal/mvnw .
COPY Job-Portal/.mvn .mvn
COPY Job-Portal/pom.xml .

RUN chmod +x mvnw
RUN ./mvnw dependency:go-offline

# Copy source code
COPY Job-Portal/src src

RUN ./mvnw clean package -DskipTests

CMD ["java", "-jar", "target/Job-Portal-0.0.1-SNAPSHOT.jar"]
