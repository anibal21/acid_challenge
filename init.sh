#!/bin/bash

#We connect to the instance
#ssh -i /Users/anibalsci/Documents/aws_keys/acid.pem ubuntu@18.188.193.19

#Doker installation
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

curl -fsSL https://test.docker.com -o test-docker.sh
sh test-docker.sh

sh install.sh