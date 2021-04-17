# Week 2 Assignment

## Getting Started

1. Fork this repository
2. Clone the forked repository to your local computer.
3. Setup your application
   ```bash
   # Make sure you run this command inside the week2 folder. Check via `pwd`
   # Not doing so may cause the create-react-app command to fail
   pwd
   # /path/to/week2-assignment
   create-react-app blog-homepage
   ```
4. Ensure you can run your dev server
   ```bash
   cd blog-homepage
   npm start
   ```

## Overview

For this assignment, you'll be creating a blog UI using React. We're going to focus on creating the UI elements for now, but the "Bonus" section has additional tasks you can try out to add some interactive elements.

### Requirements

Recreate the provided screenshot from [Medium](https://medium.com).

![Medium screenshot](medium.jpeg)

Ensure that your UI meets the following criteria:

* Renders the provided data using React components.
    * Copy the JSON files in the `_data` folder into your project folder. Import them into a component like so (path may vary):
      ```js
      import missedArticles from './missed-articles.json';
      ```
    * Data that should be rendered on the page includes:
        * "For you" section
        * "In case you missed it" section
        * Articles with
            * Image
            * Title
            * Description
            * Author picture/name
            * Article date
            * Article length
            * Bookmark
            * "Audio available"
            * "Member preview"
    * The green author outline (present if the author is a Medium member) is optional
* Uses React components that...
    * Are modular/reusable.
        * At the very minimum, this means the "Article" should be a component.
        * Ideally, you should subdivide the Article into more components.
    * Use the appropriate loops/conditionals to map and display components.
    * Use propTypes to define props.
* Looks "close enough" to the original screenshot.
    * Focus more on the React components first, then follow up with styling. We're really just ensuring that you know how to define and import a CSS file for this assignment.

## Submission

1. In order for a valid submission, your app should run and display a UI when running `npm start`. Please be mindful of any lint or console errors and clean those up before submission.
2. Create a pull request to this repository. There will be no CI.

## Bonus

* Make each article clickable. Upon clicking a article title/description/image, the browser should open the link for the article.
* Make each bookmark component clickable. Upon clicking a bookmark, the bookmark icon should turn green. Clicking the bookmark again will reset to the original state (no color). It's recommended to use React state to implement this behavior.

