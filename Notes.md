TailWind components
- instead of rendering different buttons or titles in JSX
    + render a list of items for a menu using .map() ...WOW
    + each array item can contain properties like href (REactRouter) and boolean statements for rendering

QuizButtons
    + TailWind buttons have thier own CSS but I want a custom CSS for my quiz, need to work out how to get around this

Quiz
    + initial render is too wide and doesn't conform to mobile
    + use ```flex-wrap``` for mobile?
    + when using sm: md: lg: classnames, remember to start from the smallest and work up
        + the different sizes represent the *limits*, not the screen size

Routing
    + <Link> and <a> tags do very different things
    + notably, anchor tags refresh the browser whereas Link tags are in React-Router so don't refresh