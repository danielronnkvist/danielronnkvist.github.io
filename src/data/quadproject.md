---
title: Quadproject
image: quadproject.png
keywords: quadcopter webgl three.js modelling simulation physics
---
A simulation of a quadcopter made in WebGL using _THREE.js_. It was made in the course Modeling and simulation at Linköpings University spring 2015. The main focus of the project was to create a realistic simulation of a quadcopter by modeling the system and then implement the simulation using a preferred method.

It uses a _PD_ regulator to control the angle and height of the quadcopter, the user is controlling the desired values of those parameters. It then calculates the needed thrust and the new position of the quadcopter. All implementation was done in MATLAB at first but then translated into JavaScript.

The code can be found on [GitHub](https://github.com/danielronnkvist/quadproject). I have also begun working on transforming the simulation into a multiplayer game where all users are flying their own quadcopter in the same space. This is done with a node server and websockets, but still a work in progress.
