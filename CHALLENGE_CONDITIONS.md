# Conditions and Justification for Challenge


## Conditions achieved as per instructions - Application details

- It must compile without errors -  if there are any potential compilation issues highlight them in your documentation.

- When the app is launched, the user should be able to see a list of the top 20 StackOverflow users.

- Each list item should contain user's profile image, name and reputation

- If the server is unavailable (e.g. offline), the user should see a list of empty states with an error message.

`(To note, error message displayed for the above if server fails or offline, but no list of empty states, as not sure what it means?)`

- Have cells be expandable (upon tapping the cell), with additional options to 'follow' and 'block' a user

- Follow/block functionality should just be locally simulated, i.e. no actual API call should be made. The meaning of following and blocking is explained in the points below

- Users that are followed should show an indicator in the main part of the list item

`(little green guy appears next to username when following a user)`

- Users that are blocked should show in a disabled greyed-out list item; tapping on the item should not open the details view

- Include the 'unfollow' option in the view when a user is followed

- Write unit tests wherever you see fit

- Emphasize testing and architecture

- Written in Typescript (preferred)

---
## Conditions `NOT` achieved as per instructions - Application details

- It should be designed such that the code can bridge to Native

---
## Explain in a few sentences the design decisions you took developing the above app, and describe anything that you were unable to do due to the time constraint

I followed an architecture pattern that is close to one we're currently using at work. When scaling, to more components and features, it makes sense to separate the features in a separate api folder where logic alone is handled, and where each have their own hooks for example.

It keeps the codebase more easy to maintain and understand in my opinion.

---

## Key Requirements: Your solution must meet the following requirements:

- A readme.md in the root of the project with clear instructions on installing and running the application.

- Use react 17 >

- Provide some baseline unit tests `[X]`

- Any additional documentation where you believe is required for the application.

- If your project is web based, please ensure that it is responsive

---

## Please indicate roughly how much time you spent on this challenge in the following categories: (this doesn’t have to be accurate, rough estimations are fine) 

- Review `(~20min)`

- Design `(~2hours) Thinking of how to structure the app was probably the longest part of it all`

- Implementation `(~1.5hours)`

- Testing `(20min)`

- Documentation `(~20min)`

---

## Optional Bonus Points Covered!

- Generated JSDocument using your favourite documentation tool. `[NO]`

- Add filtering / search input that filters the list of results from the API call. `I read this as filtering or SORTING, and implemented a quick SORT method instead of search method. I've only realised that I misread this part at the end`

- Implement a caching strategy. `Implemented a localStorage solution for followed status rather`

- Add paging `[Yes]`

---

## Thank you for reviewing my code submission.