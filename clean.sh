echo "This will delete ALL containers and volumes"
read -r -p "Are you sure? [y/N] " response
if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]
then
    docker rm -f $(docker ps -a -q)
    docker volume rm $(docker volume ls -q)
else
    echo "Doing nothing, as requested"
fi

