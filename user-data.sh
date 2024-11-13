#!/bin/bash
# Update package index and install required packages
sudo yum update -y
sudo yum install -y git

# Install Node.js (using NodeSource for latest versions)
curl -fsSL https://rpm.nodesource.com/setup_14.x | sudo bash -
sudo yum install -y nodejs

# Clone the GitHub repository
git clone https://github.com/quanngotrong/ec2-test-node.git /home/ec2-user/app
cd /home/ec2-user/app

# Install dependencies
npm install

# Run the Node.js server
node server.js > server.log 2>&1 &
