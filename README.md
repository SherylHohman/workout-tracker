# workout-tracker by Sheryl Hohman copyright 2021  

## This app is for recording workouts and showing stats  

#### Ideally it will help one reach their fitness goals, and to create a long-term activity log to refer over a lifetime of activity.  

#### It could be used for tracking other activities as well  

#### I might even add AI stats  

-------
Test this app out at:
	[https://workout-tracker-five.vercel.app](https://workout-tracker-five.vercel.app)

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

