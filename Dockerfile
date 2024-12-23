# Use an official Node.js image as the base image (you can replace this with your desired base image)
FROM node

# Set the working directory
WORKDIR /myapp

# Install Git and other dependencies
RUN apt-get update && apt-get install -y git

# Set up your Git user details (replace with your actual details)
RUN git config --global user.name "shrutinasre" && \
    git config --global user.email "shruti.nasre10@gmail.com"

# Clone the GitHub repository (replace with your repository URL)
RUN git clone https://github.com/shrutinasre/ReactMiniProject .

# Copy all the project files into the container (if needed)
COPY . .

# Run npm install to install any dependencies (if working with a Node.js app)
RUN npm install

# Add any other commands you need for your app

# Default command to run on container start (e.g., run app)
CMD ["npm", "start"]

EXPOSE 80 22


