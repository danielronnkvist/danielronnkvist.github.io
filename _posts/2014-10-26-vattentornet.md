---
layout: post
title: Vattentornet
image: vattentornet.png
---

Jag var med och gjorde studentpuben Vattentornets hemsida.
Den är byggd i Ruby on rails och jag jobbade mest på användarhanteringen och bokningssytemet.

För användarsystemet använde jag mig av [Devise](https://github.com/plataformatec/devise).
Ett av kraven var att nya användare skulle läggas till med bara mailadressen och att de sedan skulle få ett mail för att aktivera sitt konto.
För att hantera hierarkin använde jag mig av [CanCan](https://github.com/ryanb/cancan).

Bokningssystemet krävde en kalender som skapades med [Moment.js](http://momentjs.com/) och [Angularjs](https://angularjs.org).

Ta gärna en titt på [vattentor.net](http://vattentor.net/) och kika på koden på [GitHub](https://github.com/klaseskilson/vattentornet).
