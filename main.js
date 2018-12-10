// Initialize Firebase
var config = {
	apiKey: "AIzaSyA0kSZDADTB_Hk9yeZ1x369YpXpGddNZsM",
	authDomain: "onlinecardgam-e.firebaseapp.com",
	databaseURL: "https://onlinecardgam-e.firebaseio.com",
	projectId: "onlinecardgam-e",
	storageBucket: "onlinecardgam-e.appspot.com",
	messagingSenderId: "872243751469"
};
firebase.initializeApp(config);

function addEmail(email) {
	var emailObject = {
		email: email
	};
	firebase.database().ref('emails').push().set(emailObject)
		.then(function(snapshot) {
			//success(); // some success method
		}, function(error) {
			//console.log('error' + error);
			//error(); // some error method
	});
}
