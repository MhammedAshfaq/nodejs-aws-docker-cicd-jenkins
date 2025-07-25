<!-- Node.js Dockerized GitHub CICD Jenkins Project -->
<!-- Refer link :- https://www.youtube.com/watch?v=W1UQhLuxCo8&t=235s -->

<!-- Steps -->
1. npm init -y
2. npm i express dotenv cors body-parser
3. npm i -save-dev nodemon
4. Update package.json
    "scripts": {
    "dev": "nodemon index.js",
    "start": "node index.js"
    },



<!-- Jenkins Credentials -->
1. username:- admin79
2. password:- admin@79
3. fullname:- admin
4. email:- ashfaqmohammedcv@gmail.com


<!-- DEVOPS -->
1. create instance
2. loggin the instance with terminal
3. install jenkins on ubuntu
4. install java on ubuntu
5. install nodejs on ubuntu
6. check the jenkins status
    -> systemctl status jenkins
7. get jenkins admin password
    -> sudo cat /var/lib/jenkins/secrets/initialAdminPassword
8. install docker on ubuntu
    -> sudo apt-get install docker.io
9. loggin the jenkins server with using above credentials
10. create new item on jenkins basid on our github repository
11. create SSH key on ubuntu
    -> ssh-keygen
12. config with jenkins
13. run build on jenkins
14. open build console in jenkins
15. copy the path of working directory and open on ubuntu server
    -> cd /var/lib/jenkins/workspace/cicdpipelineonawsec2/
16. do the `sudo npm install`
17. Add security group on aws for our node js project port `3000`
18. create Dockerfile on ubuntu
    -> sudo vim Dockerfile
19. sudo docker build . -t node-app
20. sudo docker run -d --name node-app -p 3000:3000 node-app
21. sudo docker kill `image id`
