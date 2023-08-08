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
    - ✅ 100% width
    - snow background animation 
    - header
        - ✅ Navbar at top
        - ✅ Topic selection on left
        - ✅ Personal icon top right w/menu
            - ✅ Menu has links to my accounts: Github, LinkedIn, email
    - body (ReactRouter)
        - ✅ Home: renders logo and intro text
        - ✅ Learn: renders the information and an image
            - ✅ centered, changes to padding/margin for mobile
        - Test: renders the question to left
        - Test: renders the answers selection to the right
    - footer
        - Contact details
        - links to other repos

*Lesson learned - imperfect components*
Drop down menu [mobile] 
- ❌ Drop down design 1
    - have the drop down appear with the personal details
    - seperate into their own </div>
        - add menu options and </Links>
        - position ```absolute``` to render over the rest of the page
        - design with softer edges and :hover colours
        - FAIL
- Drop down design 2 (Tailwind component)
    - Create new component and add to Navbar
    - 

*Lesson learned - ```sm: md: lg:``` means 'at the break point'*
- declare a size for a mobile screen and have it alter AFTER the breakpoint!  
    - ```<div class="text-center sm:text-left"></div>``` will center text below ```sm:```

*Lesson Learned - use ```Navigator.clipBoard.writeText``` to copy something to user's clipBoard*



## Functionality
- ✅ Use ReactRouter to navigate to the different pages using Navbar
    - routes for each page are in navigation => item.href
- ✅ Have the user selection of the Navbar light up 'pink' for current selection
    - useState for the nav-item clicked => handleclick function
- 

## Types
- Define the props
    - QuizPageProps, ready to be handed down inc ```QuizQuestions```
    - QuizQuestions, an array of objects
        + remember: ```codeSnippet``` is optional for 1/15 questions


## Server Requests

## Netlify productions
- Run the build command to create a build folder with the compilied Typescript
- set the publish directory
- set the base directory to the new build folder - 'build'
