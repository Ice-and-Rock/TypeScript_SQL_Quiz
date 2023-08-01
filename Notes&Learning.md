## Setup
- install a new react typescript app
- delete unnecessary files/imports 
- install tailwind into the app
    - install tailwind libraries [icons etc]
    - add these to the ```tsconfig``` file
- add a script 'build css' to build the tailwind CSS file
- add this to the tailwind.config.js
    -```content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"]```
    - This tells Tailwind to look for changes in the files that are JS, React and typescript etc

## Build the initial CSS and style
Page layout
    - 100% width
    - snow background animation 
    - header
        - Title and logo to left
        - Selection down menu below 
        - Each menu topic has: Learn / Test
    - body (ReactRouter)
        - Learn: renders the information and an image
        - Test: renders the question to left
        - Test: renders the answers selection to the right
    - footer
        - Contact details
        - links to other repos

## Functionality
- Use ReactRouter to navigate to the different pages

## Server Requests


