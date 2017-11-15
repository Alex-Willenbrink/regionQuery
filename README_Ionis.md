git clone file.bundle -b master myapp
cd myapp
docker build -t myapp .
docker run -it --rm -p 8881:8888 myapp

visit the website at http://localhost:8881
