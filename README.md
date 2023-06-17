# Windows95Tube

## Description
What if YouTube was on your Windows 95 home computer system? This is that.

[View Live Site](https://windows95tube.herokuapp.com/)

Uses the [React95 UI library](https://storybook.react95.io/?path=/story/docs-welcome-to-react95--page) with the YouTube API.

Fun easter eggs: 
- Fake loading screen
- CSS used to slowly display the "Related Videos" images so it feels like the REAL internet on Windows 95
- Click the NetTube computer logo to toggle through different themes (look below)
- classic AOL "Files Done" audio plays on search 
- Play and Pause buttons work

## Screenshots: 
Original: 
![alt text](https://raw.githubusercontent.com/Joelstraley/90sYoutube/main/src/assets/readme%20photos/Original.png)
Barbie:
![alt text](https://raw.githubusercontent.com/Joelstraley/90sYoutube/main/src/assets/readme%20photos/Barbie.png)
Oppenheimer:
![alt text](https://github.com/Joelstraley/90sYoutube/blob/main/src/assets/readme%20photos/Oppenheimer.png?raw=true)
The Matrix:
![alt text](https://github.com/Joelstraley/90sYoutube/blob/main/src/assets/readme%20photos/TheMatrix.png?raw=true)
Teenage Muntant Ninja Turtles:
![alt text](https://github.com/Joelstraley/90sYoutube/blob/main/src/assets/readme%20photos/TMNT.png?raw=true)
MS-DOS / Dark-Mode:
![alt text](https://github.com/Joelstraley/90sYoutube/blob/main/src/assets/readme%20photos/MS-DOS.png?raw=true)

Spot a bug or want to get in touch? email me at [JoelStraley@gmail.com](mailto:JoelStraley@gmail.com)

Long live the 90s!

## Want to know more? : 
The project had several complications. The first being that the Windows 95 UI library utilizes the Styled-Components library, which runs into a known error when bundled using Vite. So I reverted back to using the basic create-react-app with Webpack. I had issues adding my own buttons to correspond with an HTML IFrame element to show the YouTube videos. I ended up finding a hack through stack overflow that basically edits the video url to fake "play" and "stop" functionality with the buttons. 

The app took a lot of specific detail to be responsive, which was a part of my learning goals when deciding to make the application. One of the final issues was it would deploy correctly through Heroku then crash later on. I ended up having to increase the space by adding "Node_options" to the config variables in Heroku then setting the "max-old-space-size".

![alt text](https://github.com/Joelstraley/90sYoutube/blob/main/src/assets/readme%20photos/BillAndJay.jpg?raw=true)
