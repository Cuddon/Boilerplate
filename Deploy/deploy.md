
# Build

Build to a directory (not a tarball)

    sudo rm -r /Users/andrew/Documents/Production/appname
    meteor build /Users/andrew/Documents/Production/appname --architecture=os.linux.x86_64 --directory


# Copy to server

If the server folder does not yet exist

    From the mac
    scp -r /Users/andrew/Documents/Production/appname user@your.server.example.com:/home/ubuntu/appname/

If the server folder sr7400 exists

    ssh in to the server
    sudo docker stop appname
    sudo rm -r /home/ubuntu/appname/
    logout

    From the mac
    rsync --recursive --stats --verbose --chmod=u+rwx,g+rwx,o+rwx /Users/andrew/Documents/Production/appname ubuntu@192.168.1.1:/home/ubuntu/

    ssh in to the server
    sudo docker start appname
    sudo docker logs appname   // Check for startup erors
    logout


# Create/Run the docker container

## Prerequisites
1. MongoDB running (can be in another container)


## Create the container

    sudo docker run -e ROOT_URL=http://192.168.1.1 --publish 192.168.1.1:8081:80 --name appname -e APP_DIR=/app -v /home/ubuntu/appname/bundle:/app -e MONGO_URL=mongodb://192.168.1.1:27017/sr7400 --detach --restart always ulexus/meteor



