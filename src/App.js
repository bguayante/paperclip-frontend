import React, { useState, useEffect } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import './App.css';


import About from './components/About.js';
import Trade from './components/Trade.js';
import User from './components/User.js';

import SignIn from './components/SignIn'
import SignUp from './components/SignUp';



//REMEMBER TO UNCOMMENT THE REFRESH WORKAROUND BEFORE DEPLOYING

function App() {
	const [error, setError] = useState('');

	// hooks for the display of every component in nav menu
  const [hideUser, setHideUser] = useState(true);
  const [hideSignIn, setHideSignIn] = useState(true)
  const [hideSignUp, setHideSignUp] = useState(true)
  const [hideAbout, setHideAbout] = useState(true);
	const [hideTrade, setHideTrade] = useState(true);
	
	//hook for display of the nav menu itself
	const [hideNav, setHideNav] = useState(false)
	
	// hooks for login and sign up
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');
	const [confirmPassword, setconfirmPassword] = useState('');
	
	const [isPasswordValid, setisPasswordValid] = useState(true)
	const [isUserFound, setIsUserFound] = useState(true)
	
	//hook for storing current user info
	const [userId, setUserId] = useState('');
	
	//hook for trade options/link data/array of links with 0 value
	const [tradeData, settradeData] = useState([
    {
        "_id": "5ec5a93e60c031c391d8a9a3",
        "need": {
            "_id": "5ec5a93e60c031c391d8a99e",
            "tier": {
                "_id": "5ec5a92d60c031c391d8a98c",
                "rank": 1,
                "user": "5ec5a8f660c031c391d8a982",
                "__v": 0
            },
            "category": "5ec1ec3f82d704182c97a422",
            "__v": 0
        },
        "item": {
            "_id": "5ec5a93660c031c391d8a997",
            "picture": "pic",
            "description": "some flour",
            "tier": {
                "_id": "5ec5a92d60c031c391d8a98e",
                "rank": 2,
                "user": "5ec5a8f660c031c391d8a985",
                "__v": 0
            },
            "category": "5ec1ec3f82d704182c97a422",
            "__v": 0
        },
        "confirmed": 0,
        "__v": 0
		},
		{
			"_id": "n3s8d",
			"need": {
					"_id": "5ec5a93e60c031c391d8a99e",
					"tier": {
							"_id": "5ec5a92d60c031c391d8a98c",
							"rank": 1,
							"user": "5ec5a8f660c031c391d8a982",
							"__v": 0
					},
					"category": "5ec1ec3f82d704182c97a422",
					"__v": 0
			},
			"item": {
					"_id": "5ec5a93660c031c391d8a997",
					"picture": "pic",
					"description": "spongy cakey",
					"tier": {
							"_id": "5ec5a92d60c031c391d8a98e",
							"rank": 2,
							"user": "5ec5a8f660c031c391d8a985",
							"__v": 0
					},
					"category": "5ec1ec3f82d704182c97a422",
					"__v": 0
			},
			"confirmed": 0,
			"__v": 0
	}
])
const [tradeDataIndex, settradeDataIndex] = useState(0);

	
	// function to handle display for each url
	const history = useHistory()

	useEffect(() => {
	  return history.listen(location => {
			// console.log(location.pathname);
			// console.log('useffecting');
			// console.log(tradeData);
			// settradeDataIndex(1)
			// console.log(tradeDataIndex);
			
	    // eslint-disable-next-line default-case
	    switch (location.pathname) {
				case '/':
					setHideUser(true)
					setHideAbout(true)
					setHideTrade(true)
					setHideSignUp(true)
					setHideSignIn(true)
					setHideNav(false)
					break;
					
				case '/user':
					setHideUser(false)
					setHideNav(true)
					break;
					
				case '/about':
					setHideAbout(false)
					setHideNav(true)
					break;
					
				case '/trade':
					setHideTrade(false)
					setHideNav(true)
					break;
					
				case '/signin':
					setHideUser(true);
					setHideNav(true);
					setHideSignIn(false);
					break;
					
				case '/signup':
					setHideUser(true)
					setHideNav(true)
					setHideSignUp(false)
					break;
			}
	  })
	}, [history])
	
	
	// BUG WORKAROUND FOR DEPLOYMENT, FIX THE FACT THAT REFRESH CHANGES STATE
	// window.onload = (() => {
	// 	// console.log('window onloading');
	// 	if(window.location.pathname != '/') {
	// 		window.location.assign('/')
	// 	}
	// })
	

  function cornerButtonClick (event) {    
      if(event.target.getAttribute('name') === 'user') {
        setHideUser(false)
        setHideNav(true)
      }
      if(event.target.getAttribute('name') === 'about') {
        setHideAbout(false)
        setHideNav(true)
      }
      if(event.target.getAttribute('name') === 'trade') {
        setHideTrade(false)
        setHideNav(true)
      }
  }
	
	// function to handle home button click
  function paperclipButtonClick (event) {
    if(event.target.getAttribute('name') === 'user') {
      setHideUser(true)
      setHideNav(false)
    }
    if(event.target.getAttribute('name') === 'about') {
      setHideAbout(true)
      setHideNav(false)
    }
    if(event.target.getAttribute('name') === 'trade') {
      setHideTrade(true)
      setHideNav(false)
    }
  }

	
	
	
	
// A P I   I N T E R A C T I O N S
// 
// 
// 
// 
// 
// A P I   I N T E R A C T I O N S

 
function handleChange (event) {
	// eslint-disable-next-line default-case
	// console.log('handling change');
	
	switch (event.target.name){
		case 'email':
			setEmail(event.target.value)
			break;
		case 'username':
			setUsername(event.target.value)
			break;
		case 'password':
			setPassword(event.target.value)
			break;
		case 'confirmPassword':
			setconfirmPassword(event.target.value)
			break;
			
		default:
			console.log('switch is broke');
		
	}
}

let signUpInformation
let signInInformation

function runSubmit(event){
	event.preventDefault()
	
	if(username === '') {
		return
	}
	if(password === '') {
		return
	}
	
	signUpInformation = {
		email: email,
		userName: username,
		password: password
	}
	signInInformation = {
		userName: username,
		password: password
	}
	// console.log(signUpInformation);
	// console.log(signInInformation)
	
	
	switch(event.target.name) {
		case 'signUp':
			const match = confirmPassword === password;
			setisPasswordValid(match);
			if(match) {
				signUp()
			}
			break;
			
		case 'signIn':
			signIn()
			break;
			
		default:
			console.log('switch is broke');
	}
}

// SIGN UP AND SIGN IN FUNCTIONS

const [postId, setPostId] = useState('');

function signUp (body) {
	// POST request using fetch inside useEffect React hook	
	console.log('signing up');
	
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(signUpInformation),
	};
	
	console.log(requestOptions)
	
	fetch('http://localhost:8080/api/user', requestOptions)
		.then((response) => response.json())
		.then((data) => {
			console.log(data)
			setPostId(data.id)
			setUserId(data._id)
		})
		.then(() => {
			setEmail('')
			setUsername('')
			setPassword('')
			setconfirmPassword('')			
		})
	
}

function signIn (body) {
	const requestOptions = {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	};
	
	console.log(requestOptions)
	
	fetch(`http://localhost:8080/api/user/${username}/name`, requestOptions)
		.then((response) => response.json())
		.then((data) => {
			console.log(data)
			if(data) {
				setPostId(data.id)
				setUserId(data._id)
				setIsUserFound(true)
			} else {
				// console.log('bad user');
				setIsUserFound(false)
			}
			// check response to see if the info was good
			// if not, call a function that will reset the state?
		})
		.then(() => {
			setEmail('')
			setUsername('')
			setPassword('')
			setconfirmPassword('')
		})
	
}

//USER SCREEN FUNCTIONS

	//GET item by user id
	function getItemData() {
		const url = `http://localhost:8080/api/item/${userId}`;
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
			})
			.catch(function (error) {
				setError(error);
			});
	}

	//GET need by user id
	function getNeedById() {
		const url = `http://localhost:8080/api/need/${userId}`;
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
			})
			.catch(function (error) {
				setError(error);
			});
	}
	


//TRADE FUNCTIONS

function getUserLinks() {
	
}

function decisionButtonClick(event, nextIndex) {
	switch(event.target.id) {
		case 'yes':
			// console.log('yes');
			// console.log(nextIndex);
			// console.log(tradeDataIndex);
			// console.log(tradeData[tradeDataIndex].item.description);
			decideTrade('yes', nextIndex - 1)
			settradeDataIndex(nextIndex);
			break;
			
		case 'no':
			// console.log('no');
			// console.log(nextIndex);
			// console.log(tradeDataIndex);
			// console.log(tradeData[tradeDataIndex].item.description);
			decideTrade('no', nextIndex - 1)
			settradeDataIndex(nextIndex);
			break;
			
		default:
			console.log('switch is broke');
	}
	
}

let linkUpdateInformation

//PUT to update links with trade decisions
function decideTrade(decision, linkIndex) {
	console.log('trade decided');
	// console.log(tradeData[0].confirmed)
	
	let linkId = tradeData[linkIndex]._id
	console.log(linkId);
	
	
	linkUpdateInformation = {
		confirmation: 0
	}
	console.log(linkUpdateInformation);
	
	
	switch(decision) {
		case 'yes':
			linkUpdateInformation.confirmation = 1;
			console.log(linkUpdateInformation);
			break;
			
		case 'no':
			linkUpdateInformation.confirmation = -1;
			console.log(linkUpdateInformation);
			break;
			
		default:
			console.log('switch is broke');
	}
	// create an object for trade link and update confirmed value to -1 or 0 based on the value that's passed as a variable into this function
	//put the trade link into the body
	
	const requestOptions = {
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(linkUpdateInformation),
	};
	
	fetch(`http://localhost:8080/api/link/${linkId}/confirm`, requestOptions)
		.then((response) => response.json())
		.then((data) => {
			console.log(data)
		})

	
	
}


// A P I   I N T E R A C T I O N S
// 
// 
// 
// 
// 
// A P I   I N T E R A C T I O N S



	return (
		<div className='wrapper' id='grad'>
			<main>
				<div className="graphicHolder">
					<p className="graphic">=======<br></br>=====</p>
				</div>
				<Route
					path='/'
					// exact={true}
					render={() => {
						return (
							<>
								<div className={hideNav ? 'hidden' : ''}>
									<Link to='/'>
										<h1 className='header' name='header'>
											paperclip//
										</h1>
									</Link>
									<Link to='/trade'>
										<h2
											onClick={cornerButtonClick}
											className='trade'
											name='trade'>
											trade
										</h2>
									</Link>
									<Link to='/about'>
										<h2
											onClick={cornerButtonClick}
											className='about'
											name='about'>
											about
										</h2>
									</Link>
									<Link to='/user'>
										<h2
											onClick={cornerButtonClick}
											className='user'
											name='user'>
											user
										</h2>
									</Link>
								</div>
							</>
						);
					}}
				/>
				<Route
					path='/user'
					render={() => {
						return (
							<>
								<User
									hideUser={hideUser}
									paperclipButtonClick={paperclipButtonClick}
								/>
							</>
						);
					}}
				/>
				<Route
					path='/trade'
					render={() => {
						return (
							<>
								<Link to='/'>
									<h1 className='header'>paperclip</h1>
								</Link>
								<Trade tradeData={tradeData} decisionButtonClick={decisionButtonClick} tradeDataIndex={tradeDataIndex}/>
							</>
						);
					}}
				/>
				<Route
					path='/about'
					render={() => {
						return (
							<>
								<Link to='/'>
									<h1 className='header'>paperclip</h1>
								</Link>
								<About />
							</>
						);
					}}
				/>
				<Route
					path='/signup'
					render={() => {
						return (
							<>
								<SignUp handleChange={handleChange} runSubmit={runSubmit} hideSignUp={hideSignUp} isPasswordValid={isPasswordValid}/>
							</>
						);
					}}
				/>
				<Route
					path='/signin'
					render={() => {
						return (
							<>
								<SignIn handleChange={handleChange} runSubmit={runSubmit} hideSignIn={hideSignIn} isUserFound={isUserFound}/>
							</>
						);
					}}
				/>
			</main>
		</div>
	);
}

export default App;
