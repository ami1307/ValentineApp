# Use lightweight Java image
FROM eclipse-temurin:21-jdk-alpine

# App directory
WORKDIR /app

# Copy Maven build
COPY target/valetine-0.0.1-SNAPSHOT.jar app.jar

# Expose port
EXPOSE 8080

# Run app
ENTRYPOINT ["java", "-jar", "app.jar"]
