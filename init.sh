#!/bin/bash

#We connect to the instance
#ssh -i /Users/anibalsci/Documents/aws_keys/acid.pem ubuntu@18.188.193.19


#Docker
sudo yum update -y
sudo yum install -y docker
sudo service docker start
sudo usermod -a -G docker ec2-user