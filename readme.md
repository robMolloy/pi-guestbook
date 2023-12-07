# Pi Guestbook

An open-source solution to photobooth/guestbook for events & parties, made up of multiple services, built for a raspberry pi but should work on anything that can use linux print `lpr` command

## Watch directory and convert to PDF

A listener on the directory which on the new-image event converts the image to a PDF then moves it to a new directory

## Watch directory and print (do later / done already on rpi)

A listener on the directory which on the new-pdf events prints the new file

## Local web server

This will be hosted by the raspberry pi. Then using any tablet or similar device on the same local network/mobile hotspot the tablet will upload the images directly to the raspberry pi

## Remote web server

Similar to the local web server, but this will allow guests to upload there own photos and use a cropping tool to force the user to upload images of the correct aspect ratio. Images will be uploaded to an S3-equivalent and on success a db entry will be created (which allows for a listener)

## Db listener

As files are uploaded to an S3-equivalent and then an entry is made into the db, the file is downloaded by the raspberry pi
