FROM node:18

# Install latest Java
RUN apt-get update && apt-get install -y \
  openjdk-17-jdk \
  && rm -rf /var/lib/apt/lists/*

# Download antlr runtime
RUN wget https://www.antlr.org/download/antlr-4.11.1-complete.jar -P /usr/local/lib/

# Create ANTLR alias
RUN echo 'alias antlr4="java -jar /usr/local/lib/antlr-4.11.1-complete.jar"' >> ~/.bashrc
