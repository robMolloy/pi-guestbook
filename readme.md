# Pi Guestbook

An open-source solution to photobooth/guestbook for events & parties, made up of multiple services

## Watch directory and print

A listener on the directory which on the new-file event converts the image to a PDF then prints

## Local web server

This will be hosted by the raspberry pi. Then using any tablet or similar device on the same local network/mobile hotspot the tablet will upload the images directly to the raspberry pi

## Remote web server

Similar to the local web server, but this will allow guests to upload there own photos and use a cropping tool to force the user to upload images of the correct aspect ratio

## Db listener

As files are uploaded to an S3 bucket equivalent and then an entry is made into the db, the file is downloaded by the raspberry pi
