# workout-tracker 
by Sheryl Hohman copyright 2021  

## This app is a personal project for recording workouts and showing stats  
### Test this app out at:  

 - (netlify - automatically deploys the latest pushed code)  
	[![Netlify Status](https://api.netlify.com/api/v1/badges/45895dff-5c1a-4a2e-8326-0694ff5c7276/deploy-status)](https://app.netlify.com/sites/sheryl-workout-tracker/deploys)  
	[workout-tracker (netlify deployment)](https://sheryl-workout-tracker.netlify.app/)  
	`https://sheryl-workout-tracker.netlify.app/`    

 - (vercel - less frequently updated)  
	[workout-tracker (vercel deployment)](https://workout-tracker-five.vercel.app)  
	(`https://workout-tracker-five.vercel.app`)  

### WIP: Current Status of this app is Stage 0

    Setting up initial tooling
    NOT even close to an MVP!
	(just shows create-react-app page!)


### The app (will) show:

  - log of all workouts
  - ability to add and edit workouts
  - configuration of goal(s)
  - charts of average activity based on a selected time frame.
  - comparison chart of goal vs actual
  -  (configuration of categories))
  -  (configuration of data stored per category)
  -  (an estimated amount of activity required to meed the overall goal. or a workout plan)
  -  (suggestion for a modified goal, if the current one is unreasonable)

## example goals:
My main workout "goal" is to achieve a certain Average number of minutes
 per year/month/day.
And These are defined in 3 main categories:
 - weights (including calesthenics)
 - cardio (eg cycling, jogging, swimming?)
 - stretch (yoga, stretching, etc)
 - movement? (walking, gardening?)
Would even like to add a category for 
 - outside vs inside/home/gym  
   eg cycling on stationary bike or jogging on treadmill
   vs "real life" jogging or cycling outdoors
Some min number of time doing an outdoor activity/year.

Ideally it will help me stay on track to achieve an average fitness goals, 
and to create a long-term activity log to refer over a lifetime of activity.  

Eventually it could be used for tracking other activities as well  

I might even add AI stats. 
Like the probability I'll workout tomorrow.
Or, a reasonable plan of attack to reach a specific goal, 
based on my long, short, and medium historical patterns of workouts.

----------------------------------------
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

------------------------------------------------  
## SH Notes:  

### Deployed app (via vercel):  
🔗  Linked to sherylhohman/workout-tracker  
		(created .vercel and added it to .gitignore)  
🔍  Inspect: https://vercel.com/sherylhohman/workout-tracker/9DDSf9n1u7eXa48M3Rt2jtxLRLvX [1s]  
✅  Production: https://workout-tracker-five.vercel.app [copied to clipboard] [59s]  
📝  Deployed to production.   
		Run `vercel --prod` to overwrite later (https://vercel.link/2F).  
💡   To change the domain or build command,  
		go to https://vercel.com/sherylhohman/workout-tracker/settings  

#### (How to deploy via vercel)  

No Git (GitHub, GitLab, or Bitbucket) required.  
  can deploy from any local project directory.
Must manually trigger a redeploy from the command line.

One Time Only:  
1. Sign up for an account at vercel.com  
	github or gitlab or email, I think are the options  

From command line in project directory:  

One Time Per Project:  
2. `npm install -g vercel`  
3. `vercel login`  
	only need to do this 1 time/project  
	(if used github to sign up, use email associated with github)  
4. check email account,  
   Confirm email that was sent from the vercel login step  
5. `vercel`  
   First time it is run on any project it runs setup  
   Can just press enter to accept the defaults on all Q's  
   --> they return the live link  
   --> (and a link my dashboard for this project on their website)  
 
After any code changes:  
6.  `vercel --prod`  
	re-builds, and re-deploys  


### Deployed app (via netlify):  
  
  
  
  Automatically rebuilt and redeployed everytime github repository `main` branch gets updated  
  Can be **public** or **private** repository.
  But for SelfHosted GitHub/GitLab, need paid account.
  
#### (How to deploy via netlify)  

1. sign up at netlify.  
	Can use github, gitlab, or email  
2.  Click "New site from Git"  
3. (continuous deployment): select a provider:  
	GitHub, GitLab, Bitbucket  
4.  authorize github  
5.  Where to install Netlify?
		choose team (subaccount ie sh, hartmanproducts, fulkrum, etc):  
		(SherylHohman)  
6.  choose **ONLY SELECTED REPOSITORIES**  
7.  choose repo (workout-tracker)   
8.  click install  

Here is the link my netlify dashboard for workout-tracker app:
  https://app.netlify.com/start/repos/SherylHohman%2Fworkout-tracker

9.  in netlify, refresh page until app shows up.
10.  click the app to go to the netlify dashboard for the app
11.  review deploy settings  (auto detected settings should work)  
      - branch name (main)
	  - build       ()
	  - build directory (build)
12.  Click Deploy
13.  New Site link will appear on the top of the redirected page

  
> Your site is deployed: Try a test build and deploy, directly from your Git repository or a folder.  
  
  
Here is my netlify deployed app workout-tracker 
  https://sheryl-workout-tracker.netlify.app/
  
>You can change a site’s default Netlify subdomain by selecting the Options button next to the subdomain in the Custom domains panel, then selecting Edit site name in the dropdown.
  
Can change to a custom domain from netlify app dashboard:
(will need to do some domain configuration though, unless buy domain through them - they'll do it automatically)
	https://app.netlify.com/sites/sheryl-workout-tracker/settings/domain/setup


Add snippet to readme to always display status of latest build
>This image automatically updates to reflect the current state of your latest production deploy. You can use the markdown snippet below to add it to your project README.
```
[![Netlify Status](https://api.netlify.com/api/v1/badges/45895dff-5c1a-4a2e-8326-0694ff5c7276/deploy-status)](https://app.netlify.com/sites/sheryl-workout-tracker/deploys)
```

===========================

# Roadmap:

- MVP
  (see ToDo's until have an MVP)

===========================

# TODO:

- fix tooling: create-react-app apparantly included 
  25 security alerts! (github dependabot alerts)
  

- get a basic CSS framework for initial styling
  top contenders:  
  (both can be used immediately via CDN link,
   or installed to project via npm
  )
  
  - Bulma.io 
    (cons: 
	 - hard to change primary colors (install sass system & rebuild the library)
	 - ONLY class based, nod efault styling based on html tags)
	 - will have to edit every line of JSX when it comes time to replace the library!
	 - their style classnames are NOT prefixed!
	 pros: 
	 - only needs a CSS file to use the default colors, et al
	 - just add classes to (EVERY) element, see website for results
	 - I like the look of their styles (except the colors!!)
	 - decent default styling for MVP
	 - no JS
	`npm install bulma-start` (would also need this to customize colors, or anything else)
	    or
	 CDN: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">`
	and
	`<meta name="viewport" content="width=device-width, initial-scale=1">`
	
  - purecss.io
	- some default styling based on HTML tags
	- class based styling otherwise
	- their class based styles are prefixed with pure-
	- their class based styles are easier to remember
	- might be easier to edit styles than Bulma??
	cons
	 - I do not much like their default styling
	   esp light vs dark gray on forms, and spacing between element
	 `npm install purecss --save`
	  or
	 CDN: `<link rel="stylesheet" href="https://unpkg.com/purecss@2.0.6/build/pure-min.css" integrity="sha384-Uu6IeWbM+gzNVXJcM9XV3SohHtmWE+3VGi496jvgX1jyvDTXfdK+rfZc8C1Aehk5" crossorigin="anonymous">`
	and
	`<meta name="viewport" content="width=device-width, initial-scale=1">
	 
- replace default create-react-app with my App name (anything else)

- replace netlify url with my own domain url
- change netlify to create temp preview urls for branches
- maybe disable auto redeploy until have an MVP

- start working on a dev branch  

===========================

# Changelog:

- 211810
	- fix readme
	- replace netlify url with custom netifly url
	- deployments


