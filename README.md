# Welcome to WTHR
### A weather app that truncates data down to the basics

Have you ever visited your weather site or app of choice, only to be overwhelmed with information?  Temperature, feels like temp, rain chance, air quality, UV index, on and on, in hourly increments, filling up the entire screen.  It's too much!  Sometimes you just wanna know if you need to put on a jacket to take out the trash.

Enter WTHR!  The simple interface gives you three time frames: Now, an hour from now, and 4 hours from now.  For each of those times, it takes all those data points and condenses it down to words that actually mean something.  You'll go from

### `45 feels like 39 wind SSW 11 mph humidity 41%`

to

### `Really cold and breezy`

Default settings consider 70F to be the perfect temperature, but users can create an account to change this setting.  The default location is my home of Lubbock, Tx, but users can get the weather anywhere in the world by searching the name of a city, a zip code, or the lat/lng coordinates of a location.

This app is very much a beta release.  There are many things I would like to add in the future, such as: 

+ Geolocation, so the app can know the user's default location
+ Editable settings, so the user isn't fixed to the data they provided in account creationg
+ A feedback button, so users can submit complaints and ideas
+ Persistent login that doesn't reset on page refresh
+ Multiple themes, such as light and dark modes

This project was made with Create React App.  The default readme text follows.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
