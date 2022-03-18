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
# Jamming

__________________________________________________________________________________________________

### Run the app:
From the command line, change directories (type `cd` in the command line) into the folder called ' ' and run the command:
`npm start`

If the page doesn't open, go to the site `http://localhost:3000/`

Go [here](https://developer.spotify.com/documentation/web-api/) and do a quick search for uri, which brings you to this [page](https://developer.spotify.com/documentation/web-api/?query=uri). You'll see a Spotify URI paraemeter with the description:
The resource identifier that you can enter, for example, in the Spotify Desktop client’s search box to locate an artist, album, or track. To find a Spotify URI simply right-click (on Windows) or Ctrl-Click (on a Mac) on the artist’s or album’s or track’s name.
And you see an example to the right. So if you right click on a song, you can copy spotify uri. 

Note: In App.js, when I tried to pass the .search() to the SearchBar component as an onSearch attribute, I got an error that SearcchBar was undefined. I found that I had not imported it into App.js, which fixed the problem using `import SearchBar from '../SearchBar/SearchBar';`.

### Get a Spotify user's access token
In order to get a Spotify access token, we will use the [spotify applications registration flow](https://developer.spotify.com/dashboard/) and [Spotify application guide](https://developer.spotify.com/documentation/general/guides/authorization/.)

You will need the user’s access token to make requests to the Spotify API. You will use the request parameters in step four of the implicit grant flow to make requests. See [here](https://developer.spotify.com/documentation/general/guides/authorization/implicit-grant/) to look into it.

### Setup user's account and make requests
If the access token is not already set, check the URL to see if it has just been obtained.

We will be using the [Implicit Grant Flow](https://developer.spotify.com/documentation/general/guides/authorization/) to setup a user’s account and make requests. The implicit grant flow returns a user’s access token in the URL.

In the implicit grant flow, values for the access token and expiration time are in the URL parameter after authentication.

Use window.location.href and the .match() method to retrieve the access token and expiration time from the URL.

Example URL from Spotify API:

`https://example.com/callback#access_token=NwAExz...BV3O2Tk&token_type=Bearer&expires_in=3600&state=123`

Use the .match() method on the URL string. Provide the regular expressions below as inputs:

`/access_token=([^&]*)/`
`/expires_in=([^&]*)/`

### Register the application using the Spotify application registration flow
Register the application using the [Spotify application registration flow](https://developer.spotify.com/dashboard/applications).

Give your application a relevant name and description:
App name: react-the-Jam
Description: App that allows users to save songs to a playlist 

Also, add the following Redirect URI: `http://localhost:3000/`

#### Saved user's playlist as the last steps
But, the app is not pulling in data from Spotify. 

#### App is not pulling in data from Spotify
Going back to step 84 to try to redo steps. It looks like other things work.

**Fix**: In SearchBar.js I added an onClick for the button:
`<button className="SearchButton" onClick={this.search}>SEARCH</button>`

But the app still isn't working

When I enter a song and click search, the url changed to:
http://localhost:3000/#access_token=BQB383dIbHTOOVc_VLex0Tz6xrKZu4UYGxbbppvfcbTqAojDa7-dGKACMIGVNdgwpN3AUtcZbgZ1y_jtELQtpthMdBYipJdePLW03B2HISPib5e0oXc3TrwP1N7ipLs1-_Om1_V5Q_hGo3IbkZtxlVITOVmNrKkDfbyFyP2hoS7HNxH0TrVLpIi4SPG2i5KUA1Y&token_type=Bearer&expires_in=3600

If search isn’t working there are several possible fail points:

    Spotify component may have failed to successfully fetch the data.
    may not have saved the data into state correctly
    components may not have passed the data as props
    all of the above may be correct, however may not have rendered the data correctly to the screen (eg in the Track component).

**Fix**: In Spotify.js, I added this to the first part of the search method 
        `.then( response => {
            return response.json();
        })`

### Debugging
See [here](https://www.codecademy.com/learn/javascript-errors-debugging). If using Google Chrome Developer Tools, install the React developer tool extension. It has a components tab (in the line where there is the “console” tab, select the >> button and from the dropdown menu open Components), that you navigate your component tree structure and see what props are being passed between them.

Another debugging tool is to use console.log() at different points in your code to see what value is being grabbed and passed between your props.

### Deploy
One can use [surge](https://surge.sh/help/getting-started-with-surge) to deploy the project.

You will start by installing surge globally.

-  First, ensure you have a recent version of Node.js.
-  Then, install Surge using npm by running the following command: npm install --global surge. I needed to preface this command with sudo. 

**Step 1**: Run the following in the command line:
`sudo npm install --global surge`

Then you can run surge from within any directory, to publish that directory onto the web.

Before you deploy, you need to think of a domain name with the following format:
`SOME_NAME.surge.sh`

SOME_NAME can be replaced with anything you like.

Next, you need to replace or add this URI to two locations in your project.

    In *Spotify.js, set redirectUri to your new domain
    In your Spotify application, add your new domain as a redirect URI

#### Back in the command line, from the Jammming project’s root directory, run:
`npm run build`

**step 2**: cd into the build directory and run the command:
`surge`

**Step 3**: It may propmt you to create an account. Provide an email and password (pressing enter after each one). Then the project is already filled out for you, so press enter again. For the domain, you can change it to what you want, then press enter. I chose:
`jamjammm.surge.sh`

**Step 4**: Change the domain value to your new URI. Go to [Spotify](https://developer.spotify.com/dashboard/login), log in. Click on your application. Click on edit settings. Scroll to Rdeirect URIs. click remove and enter the new redirect URI: http://jamjammm.surge.sh Then click add.

**step 5**: In Spotify.js, set redirectUri to your new domain as follows: 
const redirectUri = 'http://jamjammm.surge.sh';

**Step 6**: cd into the project's folder (run cd jammming/ in the command line) and type `npm run build`. Then cd into the build folder and type in the command line `surge`. Click enter when you see project in the command line. Then make sure your domain name is correct (in this case it is: jamjammm.surge.sh).

**Note**: Getting an error from surge showing "Page not found". The fix was to put an index file in the root directory. So From the jamming folder, I went into the jamming folder on my laptop, the one that has the public and src folders (i.e., the 'root' directory) in it. And I pasted the copied (that was copied from the public folder) index.html file into the root jamming directory. Next, in the command line, I cc'd into the jamming (root) directory. I typed in `npm run build` and hit return. I then cc'd into the build directory by typing `cd build` in the command line and hit return. Next, I typed `surge` in the command line and hit enter to deploy it again. And it worked!

The app is now online at this [page](http://jamjammm.surge.sh).
