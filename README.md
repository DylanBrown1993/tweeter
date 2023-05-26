# Ribbiter Project

Ribbiter is a simple, single-page Twitter clone (but with FROGS 🐸)

![image](https://github.com/DylanBrown1993/tweeter/assets/128406806/75d1a6ad-f470-4c9c-9a32-cfa99f4fb36d)
![image](https://github.com/DylanBrown1993/tweeter/assets/128406806/18f95cae-cbea-4a93-8368-a651f56e8618)

## Table of Contents
### 1. Intro
### 2. Your information
### 3. Writing a Ribbit 🐸
### 4. Explanation of styling
### 5. Explanation of code


## Intro

A common problem frogs run into, is they never know what their relatives south of the swamp have been up to. This problem has a simple solution, and that solution is 🐸 RIBBITER!

Ribbiter is a place for frogs to Ribbit what they're thinking, so all of the frogs they know on all the different lilypads know what they are up to!

## Your information

In the header of the page you will see all of your information, including your name and photo!

## Writing a Ribbit

Once your ready to let everyone know what your tiny frog brain is thinking, you'll want to start typing that in the form provided. Ribbits must be at least 1 character, and no more than 140 characters. If your ribbit does not meet the requirements set by the app, you will be met with an appropriate error message.


![image](https://github.com/DylanBrown1993/tweeter/assets/128406806/919b28df-7be8-421a-9139-6b931ca48920)
![image](https://github.com/DylanBrown1993/tweeter/assets/128406806/099a7d51-1ecd-45b1-8f93-a740edb6e12f)

If your ribbit meets our requirments it is sent into the feed for all to see!

![image](https://github.com/DylanBrown1993/tweeter/assets/128406806/d775f048-91f3-4788-8b8a-066b31b2de4d)

![image](https://github.com/DylanBrown1993/tweeter/assets/128406806/d3f2b15c-6dd8-4c6a-b856-c6f507d93d52)


## Explanation of styling

All of the app was designed using CSS and Media Queries. Each section of the app has it's own CSS to keep code tidy and organized, and all of these are linked into our index.html. There is both a desktop view and a mobile view, so you can acess it at your log, or while out exploring the swamp!

## Explanation of code

This code represents the client-side JavaScript logic for a Twitter clone. It utilizes jQuery for efficient manipulation of the Document Object Model (DOM) and simplified AJAX requests. The code leverages jQuery's event handling and AJAX capabilities to interact with the server and dynamically update the user interface.

The main functionalities of the code include generating and rendering Ribbits, validating Ribbit content, and submitting new Ribbits. The createTweetElement function dynamically creates HTML markup for displaying tweets, incorporating user information, Ribbit content, and timestamps. The renderTweets function updates the user interface by clearing the tweet container and appending the generated Ribbit elements.

To ensure valid tweet content, the validation function checks the length of the Ribbit and displays appropriate error messages if it exceeds the character limit or if it is empty. The submitTweet function sends the tweet data to the server using an AJAX POST request, and upon success, it reloads the Ribbits, clears the form, and resets the character counter.

Additionally, the code includes an escape function to prevent potential issues with special characters in tweets by performing HTML encoding on the Ribbit content.

