# nc-portfolio-fe

To see a short demo of this app :

https://vimeo.com/696132854

To view the backend github repo :

https://github.com/TWallwin/nc-portfolio-be

# Summary

This is the frontend repo for our 2 week project - nc portfolio.

Nc-portfolios is a tool for app-creators and employers to share and view video demos of apps they've made. It can be run on ios or andriod.

The comments page on each video allows creators to connect with employers easily and they can share information about themselves such as a github link.

The app has in built user authentication.

# Technology

The front end of the app is built in react native. We used expo-av video player to render the videos and cloudinary to store our video files on. The user authentication is achieved using hashed passwords on our backend data base and becrypt to compare the hashed passwords.

The back end server is created using express and hosted on heroku. Our database is built using psql.

# Set-up

To run the app locally:

```
git clone https://github.com/TWallwin/nc-portfolio-fe

npm install

expo start
```

This will clone the repo into your current folder, install any dependancies and start expo.
You need to install the expo app on your phone or install an ios/android emulator on your computer.

If using your phone, scan the QR code generated in the terminal and your phone will connect to the app (you need to be connected to the same wifi network).

The mininum version of node required to run the app is v16.13.1.
