# 7 Project #1 – APPetite

## Overview
    Our team (Eddie, Jules, Sam, and Tressa) conceived of and executed a design that solves a real-world problem by integrating data received from multiple server-side API requests. We learned agile development methodologies and implemented features and bug fixes using the git branch workflow and pull requests.

# Motivation
    Address the common problem of being indecisive about what to eat, using a fun and simple app.

# Build Status
    * Basic HTML – complete
    * JavaScript for basic application functionality - complete
    * CSS styling for the primary interface - complete

# APP Functionality
    * Uses W3C geolocation API to get user's current location.
    * Uses location data to query Yelp's API for open restaurants within an 8000 meter radius.
    * Selects a restaurant with at least 3.5 stars at random from the returned list of options.
    * Displays the name, Yelp profile image, category tags, Yelp star rating, distance from user, and Yelp page 
        link for the selected restaurant.

# API Reference
    * W3C geolocation
    * Yelp

# Future Development
    * Allow users to customize search parameters such as distance, minimum star rating, minimum number of reviews, 
        and restaurant category.
    * Allow users to input location manually instead of using only geolocation.
    * Get menu data from restaurants and select specific items for the user to order. 
    * Allow users to order selected items directly through the app.

## Key Topics
    * Server-side APIs
    * Git branching workflow
    * Agile software development

## Comprehension Check
    To be employer-ready, our team must be able to answer the following questions:

    1. What is agile software development? 
        Agile software development comprises various approaches to software development under which requirements and solutions evolve through the collaborative effort of self-organizing and cross-functional teams and their customer(s)/end user(s). It advocates adaptive planning, evolutionary development, early delivery, and continual improvement, and it encourages rapid and flexible response to change.

    2. What is an MVP?
        A minimum viable product (MVP) is a concept that stresses the impact of learning in new product development. Defined, an MVP, is that version of a new product which allows a team to collect the maximum amount of validated learning about customers with the least effort. This validated learning comes in the form of whether your customers will actually purchase your product.

        A key premise behind the idea of MVP is that you produce an actual product (which may be no more than a landing page, or a service with an appearance of automation, but which is fully manual behind the scenes) that you can offer to customers and observe their actual behavior with the product or service. Seeing what people actually do with respect to a product is much more reliable than asking people what they would do.

    3. If you pull down a teammate's branch and you have merge conflicts, how do you handle it?
        On the command line, a simple "git merge --abort" will do this for you. In case you've made a mistake while resolving a conflict and realize this only after completing the merge, you can still easily undo it: just roll back to the commit before the merge happened with "git reset --hard " and start over again.

## Learning Objectives
    Our team will be employer-competitive if we are able to:
    * Speak technically about a feature we implemented in our project
    * Explain and execute git branching workflow in a collaborative project
    * Resolve merge conflicts
    * Explain agile software development
    * Design, build, and deploy a client-side web application using GitHub Pages
    * Prepare a professional presentation and repository README for our project

## Helpful Links
    * [Agile Methodology](https://en.wikipedia.org/wiki/Agile_software_development)
    * [Git Branching](https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows)
    * [Learn Enough Git to Be Dangerous](https://www.learnenough.com/git-tutorial/getting_started)
    
## Markdown
    Markdown is a way to style text on the web. You control the display of the document; formatting words as bold or italic, adding images, and creating lists are just a few of the things that can be done with Markdown. Mostly, Markdown is just regular text with a few non-alphabetic characters thrown in, like # or *.

    You can use Markdown most places around GitHub:
    * Gists
    * Comments in Issues and Pull Requests
    * Files with the .md or .markdown extension

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
