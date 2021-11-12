# workout-tracker 
by Sheryl Hohman copyright 2021  

## This app is a personal project for recording workouts and showing stats  
### Test this app out at:  

 - (netlify - automatically deploys the latest pushed code)  
	DEV branch Deploy! (More relevant/current at this stage)  
	[![Netlify Status](https://api.netlify.com/api/v1/badges/45895dff-5c1a-4a2e-8326-0694ff5c7276/deploy-status)](https://app.netlify.com/sites/dev-sheryl-workout-tracker/deploys)  
	[DEV BRANCH workout-tracker (netlify deployment)](https://dev-sheryl-workout-tracker.netlify.app/)  
	`https://dev-sheryl-workout-tracker.netlify.app/`    

	Main Branch (No Actual Production/released versions yet)  
	[![Netlify Status](https://api.netlify.com/api/v1/badges/45895dff-5c1a-4a2e-8326-0694ff5c7276/deploy-status)](https://app.netlify.com/sites/sheryl-workout-tracker/deploys)  
	[workout-tracker (netlify deployment)](https://sheryl-workout-tracker.netlify.app/)  
	`https://sheryl-workout-tracker.netlify.app/`    

 - (vercel - much less frequently updated)  
	[workout-tracker (vercel deployment)](https://workout-tracker-five.vercel.app)  
	(`https://workout-tracker-five.vercel.app`)  

### WIP: Current Status of this app is DEV Stage 0

    Setting up initial tooling
    NOT even close to an MVP!
    In Early DEV ONLY.
    WIP
	
	NOTE: this is only public it is actually only in DEV, 
	There is NO a release or beta or even alpha.
	
	It is only listed on Main branch because it is easiest to Netlify the app from main branch, rather than DEV branches. I do not expect anyone but me to look at it.

	TODO: setup Netlify to work with DEV branches.


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

### Dependencies, Libraries, etc chosen to create this app

 - create-react-app
 - vercel
 - netlify
 - (as cdn imports currently, or  
    as css files downloaded into public folder or y-experimental folder:
 			- bulma css
 			- semantic css
 			- pureio css
 			- normalize.css
 			- new reset css
 			- reset css (named as: hard-old-css-reset.css)
   )
 - react-calendar

	

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

  Added Branch Deployments  
  (211111, DEV branch is deployed (`dev`))  
  URL format for branch deploys is:  
  https://<branch-name>-<app-url>.netfily.com  
  (eg. https://dev-sheryl-workout-tracker.netlify.app/)
  *HOWEVER DEV BRANCH DEPLOYMENT IS NOT WORKING! for me right now*

💡   *Branch Deploy Settings here:
		https://app.netlify.com/sites/sheryl-workout-tracker/settings/deploys
		more info here: https://docs.netlify.com/site-deploys/overview/#branches-and-deploys
		Add or Remove Deployment Branches*  


  
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

211108:	

	CSS
	Components UI, Accessability
	Chakra
		Decided on Chakra for UI (CSS + Components + including Accessability)
		-- Here is a good breakdown that explains my choice, 
		  compared with others I considered. 
		  (Dodds uses Tailwind, Grider uses Semantic, I tried Semantic and Bulma, looked at others)
		  https://chakra-ui.com/docs/comparison
		- Includes Accessability
		- Has tailwind-like CSS naming and styling
		- Uses 
		  - [emotion](https://emotion.sh/docs/introduction)
		    	which was based on:
			    - (glamourous(Dodds), 
			    - styled-components,
			      [styled-components](https://styled-components.com/) 
			    - glamor, etc)
		  Woah! Yikes. 
		    Tagged Template string literals
		    [Tagged templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) 
		    [Tagged Template Literals](https://styled-components.com/docs/advanced#tagged-template-literals)
		    Template literals as function calls.

		    Awesome:
		    [The Magic Behind styled-components 2016](https://mxstbr.blog/2016/11/styled-components-magic-explained/) 

		  OK. More learning goodness 
		  	(and why (styled-components, aphrodite, etc) were created! ("Styles in JS libraries")
		  	[CSS-in-JS vs Inline Styles](https://mxstbr.blog/2016/11/inline-styles-vs-css-in-js/)

		  - [styled-system](https://styled-system.com/)

		- Unfortunately, it requires use of their components instead of using JSX/HTML components.
		So it requires learning/using their eco-system. Would prefer to use Native HTML/JSl learning only their CSS.
		I guess using any CSS framework requires lock-in of some sort, and learning their whole eco-system anyway, so ..
		- Also probably better than building my own, which is what would wind up happening.
		- OTOH, do I even need accesability? I mean, it is only fo rme anyway. MAYBE I publish somewhere and some random person decides to try it out, but..
		- So there will be more of a learning curve, and more of a lock in than I would like!!
		- It is ultimately customisable though!. All styles are passed in as props, so it is all CSS in JS, and easy to override anything.
		- Do not prefer their buy advanced components and layouts. But, eh, I guess it is fair. 
		- They do NOT HAVE ANY TIME or DATE Components !!!
		- Their website, while it is not the easiest to find/determine needed components, or styles values, 
		- ..it does have a great "editible code" examples!!
		  So that is a win for me trends me toward them!

		- Overall, I think this is a good choice. Get over those hesitations!

	DownShift for 
	searchable drop down menus.
		- It includes accessability
		- I hope the same Chakra styles can be easily applied
		- Dodds

	
	react-styles
		- necessary for Chakra, or was it for DownShift.
		Another thing to learn. (prefer if most everything was vanillar JS or React only, but..). Good to know anyway.

	Date Picker
	react-calendar
		Already startted using react-calendar for Date (but NOT TIME) picker. Now need to choose Time picker.
	I want Date Picker to include a "Today" button though.
	So may need to customize/copy the  Calendar component so it can have a Today button. Or choose a different Calendar creator plugin.

	Time Picker: 
	React-Toolbox
		http://react-toolbox.io/#/components/time_picker
		If want an android-like circular time picker, use react-toolbox.io
		import TimePicker from 'react-toolbox/lib/time_picker';
  	Their Switch is also nice - Although I think Chakra also has one for its light/dark mode.

  React Fastclick
		https://github.com/JakeSidSmith/react-fastclick
	Instantly make your desktop / hybrid apps more responsive on touch devices.

	Popper
		For tooltips, drop-downs, etc to always remain within the screen view. It will pop to a different location trying to keep the entire pop-over content within view.

	Storybook
		Might be interesting to use Storybook to build/test UI.
		GitHub, Airbnb, and Stripe all use it, so maybe useful skill.
		https://storybook.js.org/docs/react/get-started/conclusion
		But looks too involved for my small project.


prev (last updated week or so ago): 

- get a basic CSS framework for initial styling
  top contenders:  
  (both can be used immediately via CDN link,
   or installed to project via npm
  )
  
  - also import new-css-reset.css
  - and normalize.css
	Put normalize import first, then new-css-reset, then styles.
  
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
	 

- wire app to 
	https://SherylHohman.github.io/workout-tracker  
		Can I do that with GitHub Pages? I STILL have not been able to figure out GitHub Pages!
		Maybe it can only host docs?
		Ideally, it could host running app AND docs!
	Then update website in the "About" section of my github page.
	That's the default website, but 
	for now, I'll change the About website link to netlify's deployment.

- replace netlify url with my own domain url
- change netlify to create temp preview urls for branches

- maybe disable auto redeploy until have an MVP?
  
-- LATER TODO's
	- edit manifest.json, or app.manifest, or whatever I called it.
		change name, and colors, and remove comments to turn it back into a true json
	- remove all these teaching/learning comments from the sourece code!! :-((
		Unfortunately, I have an obsession worrying about "loosing" stuff :-((
		  (Also why TOO MANY COMMENTS / documentation :-(( )
		  Maybe one day I'll find a good, positive use for all these notes.
		  Like maybe turn them all into blog posts.
		  ...then I could DELETE the comments? (or maybe include a link to the post, JIC ;-) )

===========================

# Changelog:


... (see git commits ?)

- 211019
    - add css folder to public and put normalize.css, the-new-css-reset.css
        Also added the bulma.css file there. (  bulma.io)
        pure.css I am loading from a CDN        (purecss.io)
    - added css link tags to head of index.html file

    - TODO: decide on a framework, and "css reset" option
            npm install chosen css reset package(s)
            npm install chosen framework
            import the chosen css files to my App.js react component
            delete the css file from public folder (or move to src)
            delete their link tag "imports" from public/index.html

- 211019
	- rendered app shows my (TEMP) app name and a (TEMP) logo
		instead of the default React Logo, et.al.
	- deleted most of the styles in App.js
	- replaced icons with my own (in index.html and in public folder)
	- replaced the manifest file with my own in the public folder)
		Renamed and updated with my (TEMP) info. 
		Was manifest.json. Now app.manifest. 
		(I added comments I did not want to "officially" call it a json file :-/ )
		Added tons of comments explaining the fields :-(
		(TODO: delete the comments)
		(TODO: REM to eventually update the name, background_color and app color)

- 211810 5:30p Fix Tooling - create-react-app dependency Warnings
	moved `react-scripts` in package.json and package-lock.json
	    from dependency to devDependency.
		This should remove some reported "warnings" and "vulnerabilities".
		Here are some links on the info:
		- Here is the Merged fix on github. It will be in the next release
			https://github.com/BattlesnakeOfficial/board/pull/29
		- Here is the explanation about the so-called "vulnerabilities" that are reported by npm.
			(Dan Abramov on a CRA github issue):
			https://github.com/facebook/create-react-app/issues/11174
		- Here is an explanation on how to update CRA in general:
			just update the `react-scripts` version number in `package.json`. 
			In this case, just move `react-scripts` to `devDependancies`
			Then run `npm install` to update the packages accordingly.
			https://create-react-app.dev/docs/updating-to-new-releases/
			
		In the end, even after npm install, I still have the same 21 moderate, 45 high, and 2 critical "vulnerabilities"
			But I am confident that they are not ACTUAL issues.
			I do NOT need up update any packages.
			No matter what GitHub Dependabot and NPM are telling me!

- 211810 11:30a
	- fix readme
	- replace netlify url with custom netifly url
	- deployments


