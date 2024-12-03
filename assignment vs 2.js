[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/vbnbTt5m)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=15295267&assignment_repo_type=AssignmentRepo)
# Dev_Setup
Setup Development Environment

#Assignment: Setting Up Your Developer Environment

#Objective:
This assignment aims to familiarize you with the tools and configurations necessary to set up an efficient developer environment for software engineering projects. Completing this assignment will give you the skills required to set up a robust and productive workspace conducive to coding, debugging, version control, and collaboration.

#Tasks:

1. Select Your Operating System (OS):
   Choose an operating system that best suits your preferences and project requirements. Download and Install Windows 11. https://www.microsoft.com/software-download/windows11

2. Install a Text Editor or Integrated Development Environment (IDE):
   Select and install a text editor or IDE suitable for your programming languages and workflow. Download and Install Visual Studio Code. https://code.visualstudio.com/Download
3. Set Up Version Control System:
   Install Git and configure it on your local machine. Create a GitHub account for hosting your repositories. Initialize a Git repository for your project and make your first commit. https://github.com

4. Install Necessary Programming Languages and Runtimes:
  Instal Python from http://wwww.python.org programming language required for your project and install their respective compilers, interpreters, or runtimes. Ensure you have the necessary tools to build and execute your code.

5. Install Package Managers:
   If applicable, install package managers like pip (Python).

6. Configure a Database (MySQL):
   Download and install MySQL database. https://dev.mysql.com/downloads/windows/installer/5.7.html

7. Set Up Development Environments and Virtualization (Optional):
   Consider using virtualization tools like Docker or virtual machines to isolate project dependencies and ensure consistent environments across different machines.

8. Explore Extensions and Plugins:
   Explore available extensions, plugins, and add-ons for your chosen text editor or IDE to enhance functionality, such as syntax highlighting, linting, code formatting, and version control integration.

9. Document Your Setup:
    Create a comprehensive document outlining the steps you've taken to set up your developer environment. Include any configurations, customizations, or troubleshooting steps encountered during the process. 
Developer Environment Setup Documentation
This document outlines the steps taken to set up a developer environment, including configurations, customizations, and troubleshooting steps.

Table of Contents
System Requirements
Installing Essential Software
Configuring the Environment
Customizing the Setup
Troubleshooting Steps
Final Verification
System Requirements
Before starting, ensure your system meets the following requirements:

Operating System: Windows 10/11, macOS, or Linux
Memory: Minimum 8 GB of RAM
Storage: Minimum 50 GB of free disk space
Processor: 64-bit processor
Installing Essential Software
Update System Packages:

Windows: Update via Windows Update.
macOS: sudo softwareupdate -i -a
Linux (Ubuntu): sudo apt update && sudo apt upgrade
Install Git:

Windows: Download from Git for Windows.
macOS: brew install git
Linux: sudo apt install git
Install a Code Editor (Visual Studio Code):

Download and install from Visual Studio Code.
Install Node.js and npm:

Download and install from Node.js.
Verify installation: node -v and npm -v
Install Python:

Download and install from Python.org.
Verify installation: python --version and pip --version
Install Docker:

Download and install from Docker.
Configuring the Environment
Git Configuration:

Set your username and email:
bash
Copy code
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"
VS Code Extensions:

Recommended extensions:
Python
Prettier - Code formatter
ESLint
Docker
GitLens
Create a Virtual Environment for Python:

bash
Copy code
python -m venv myenv
source myenv/bin/activate   # On Windows: myenv\Scripts\activate
Install Global npm Packages:

bash
Copy code
npm install -g eslint prettier
Customizing the Setup
VS Code Settings:

Open VS Code and go to File > Preferences > Settings.
Add or modify settings.json:
json
Copy code
{
  "editor.formatOnSave": true,
  "python.pythonPath": "path_to_your_virtual_env/bin/python",
  "eslint.enable": true,
  "prettier.singleQuote": true
}
Shell Customization (Optional):

Oh My Zsh (macOS/Linux):
bash
Copy code
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
Docker Configuration:

Create a Dockerfile and .dockerignore in your project directory.
Example Dockerfile:
dockerfile
Copy code
FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "index.js"]
Troubleshooting Steps
Common Git Issues:

Problem: Permission denied (publickey).
Solution: Ensure your SSH key is added to the ssh-agent and GitHub:
bash
Copy code
ssh-add ~/.ssh/id_rsa
VS Code Not Recognizing Virtual Environment:

Solution: Manually select the interpreter in VS Code:
Ctrl+Shift+P > Python: Select Interpreter > Choose the correct virtual environment.
Docker Daemon Not Starting:

Solution: Restart Docker or your machine. Check Docker's settings for any misconfigurations.
Final Verification
Verify Git Installation:

bash
Copy code
git --version
Verify Node.js and npm Installation:

bash
Copy code
node -v
npm -v
Verify Python Installation:

bash
Copy code
python --version
pip --version
Verify Docker Installation:

bash
Copy code
docker --version
#Deliverables:
- Document detailing the setup process with step-by-step instructions and screenshots where necessary.
- A GitHub repository containing a sample project initialized with Git and any necessary configuration files (e.g., .gitignore).
![alt text](image.png)
- A reflection on the challenges faced during setup and strategies employed to overcome them.
Reflection on Challenges Faced During Setup and Strategies Employed to Overcome Them
Directory Creation

Challenge: Error bash: cd: path/to/your/sample-project: No such file or directory.
Strategy: Created the directory structure from scratch using mkdir and touch commands.
Remote Repository Configuration

Challenge: Error remote: Repository not found.
Strategy: Verified the correct remote URL on GitHub and used git remote set-url to update the remote URL.
Git Configuration

Challenge: Misconfiguration of the Git remote URL or not adding it properly.
Strategy: Added and verified the remote URL using git remote add origin <URL> and git remote -v.
Branch Management

Challenge: Pushing to the correct branch (main instead of master).
Strategy: Renamed the branch using git branch -M main to align with GitHub’s default.
Content Creation and File Management

Challenge: Ensuring all necessary project files were created and correctly populated.
Strategy: Used echo commands to quickly populate files and double-checked file paths and names.
#Submission:
Submit your document and GitHub repository link through the designated platform or email to the instructor by the specified deadline.

#Evaluation Criteria:**
- Completeness and accuracy of setup documentation.
- Effectiveness of version control implementation.
- Appropriateness of tools selected for the project requirements.
- Clarity of reflection on challenges and solutions encountered.
- Adherence to submission guidelines and deadlines.

Note: Feel free to reach out for clarification or assistance with any aspect of the assignment.
