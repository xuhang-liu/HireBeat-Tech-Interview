# Tasks

The tasks below can be completed in any order. If you finish a task please change `Finished?: No` to `Finished?: Yes`. That way we can tell whether something should be consider finished if you happen to jump from one task from another.

## 1. The username is not showing correctly in the navbar
The top right section in the navbar is supposed to show the logged-in users' first and last name, but the developer left it static. He was supposed to pull this information in through Redux somehow. 

Finished?: No

## 2. The users list on the dashboard shows a weird time format
The user list on the user page shows the time in computer time! We would like to change this to American time, can we show it as such? e.g. 02/24/2019 11:00 AM

Finished?: No

## 3. The custom tab component is not working 
On the top of the Dashboard there is a component tab that is supposed to show three daily news facts. We can see the first one but it's not switching to the other tab panes when click on the tab buttons. This needs to be fixed.

Finished?: No
## 4. The code in the List component that is used for resource looks weird
The CEO wanted to give their 15-year-old nephew a job. It took him three days to build the List component, and now the team is complaining it’s not proper ES6 code. Can you clean this up real quick?

Finished?: No

## 5. JWT Tokens please
The backend developer doesn’t want to deal with sessions anymore. So, they are sending a JWT token with the authentication request. Can you make sure that every call that is made through Axios is sending the JWT token in the `Authorization` header? 

Finished?: No

## 6. I can access the dashboard without logging in!
We can access http://localhost:3001/dashboard without even logging in! We're planning to use the same layout for all these pages that require authentication. Can you make sure that it redirects back to `/` if there's no user logged in?

Finished?: No

## 7. The load more users doesn't work!
When clicking on `Load more` in the `Latest Signup` section it should load additional users and appended them to the existing table. Can you fix this?

Finished?: No