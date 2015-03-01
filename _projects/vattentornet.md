---
layout: post
title: Vattentornet
image: vattentornet.png
keywords: vattentornet pub ruby on rails
---

Web page for the student pub Vattentornet.
It is built in Ruby on rails and my responsibilities was user handling and the booking system.

For user handling I used [Devise](https://github.com/plataformatec/devise).
One request was that new users should be added by only supplying their email and then they would get an email with an activation link.
To handle the user hierarchy I used the gem [CanCan](https://github.com/ryanb/cancan).

The booking system is a simple CRUD system, but the calendar view was built with the help of [Moment.js](http://momentjs.com/) och [Angularjs](https://angularjs.org).

The site is live at [vattentor.net](http://vattentor.net/) and the project is open source on [GitHub](https://github.com/klaseskilson/vattentornet).
