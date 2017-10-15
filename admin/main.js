var database = firebase.database();
var storage = firebase.storage();

//Login
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var email = user.email;
    document.getElementById('loginModal').style.display='none';
    document.getElementById('signOut').style.display='block';
    document.getElementById('signIn').style.display='none';
    document.getElementById('status').innerHTML = 'You are sign-in as ' + '<i>' + email + '</i>';
  } else {
    document.getElementById('loginModal').style.display='block';
    document.getElementById('signOut').style.display='none';
    document.getElementById('signIn').style.display='block';
    document.getElementById('status').innerHTML = "You are not sign-in";
  }
});

function loadData(){
    database.ref('profile/').on('value', function(snapshot) {
        database.ref('profile/').on('value', function(snapshot) {
            document.getElementById('profileAbout').value = snapshot.val().about;
            document.getElementById('profileWorkName').value = snapshot.val().workName;
            document.getElementById('profileWorkStart').value = snapshot.val().workStart;
            document.getElementById('profileWorkDescribe').value = snapshot.val().workDescribe;
            document.getElementById('eduName').value = snapshot.val().eduName;
            document.getElementById('eduStart').value = snapshot.val().eduStart;
            document.getElementById('eduEnd').value = snapshot.val().eduEnd;
            document.getElementById('eduDescribe').value = snapshot.val().eduDescribe;
            document.getElementById('contactAddress').value = snapshot.val().address;
            document.getElementById('contactMobile').value = snapshot.val().mobile;
            document.getElementById('contactEmail').value = snapshot.val().email;
            document.getElementById('contactFb').value = snapshot.val().fb;
            document.getElementById('profileCVlink').value = snapshot.val().cvLink;
            document.getElementById('profileAvartarlink').value = snapshot.val().avartar;
            document.getElementById('profileQuote').value = snapshot.val().quote;
            document.getElementById('profileQuoteAuth').value = snapshot.val().quoteAuth;
        }, function (error) {
            console.log("Error: " + error.code);
        });

    });
}


function signIn() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function (){
        document.getElementById('loginModal').style.display='none';
        loadData();
    }).catch(function (error) {
        // Handle Errors here.
        document.getElementById('loginError').style.display = 'block';
        document.getElementById('loginError').innerHTML = 'Error: ' + error.message;
        // ...
    });
}

function signOut() {
    firebase.auth().signOut().then(function () {
        document.getElementById('status').innerHTML = "Sign-out successful";
    }).catch(function (error) {
        document.getElementById('status').innerHTML = "Error: " + error.message;
    });
}

function introUpdate() {
    var prAbout = document.getElementById('profileAbout');
    var prAvt = document.getElementById('profileAvartarlink');
    var prCV = document.getElementById('profileCVlink');
    var prQt = document.getElementById('profileQuote');
    var prQtAuth = document.getElementById('profileQuoteAuth');
    database.ref('profile/').update({
        about: prAbout.value,
        avartar: prAvt.value,
        quote: prQt.value,
        quoteAuth: prQtAuth.value,
        cvLink: prCV.value
    }).catch(function(e){
        console.log("Error: " + e.message);
    });
}

function workUpdate() {
    var prWName = document.getElementById('profileWorkName');
    var prWStart = document.getElementById('profileWorkStart');
    var prWDes = document.getElementById('profileWorkDescribe');
    database.ref('profile/').update({
        workName: prWName.value,
        workStart: prWStart.value,
        workDescribe: prWDes.value
    }).catch(function(e){
        console.log("Error: " + e.message);
    });
}

function eduUpdate() {
   var prEName = document.getElementById('eduName');
   var prEStart = document.getElementById('eduStart');
   var prEEnd = document.getElementById('eduEnd');
   var prEDes = document.getElementById('eduDescribe'); 
   database.ref('profile/').update({
        eduName: prEName.value,
        eduStart: prEStart.value,
        eduEnd: prEEnd.value,
        eduDescribe: prEDes.value
   }).catch(function(e){
        console.log("Error: " + e.message);
    });
}

function contactUpdate() {
    var prCAddress = document.getElementById('contactAddress');
    var prCMobile = document.getElementById('contactMobile');
    var prCEmail = document.getElementById('contactEmail');
    var prCFb = document.getElementById('contactFb');
    database.ref('profile/').update({
        address: prCAddress.value,
        mobile: prCMobile.value,
        email: prCEmail.value,
        fb: prCFb.value
    }).catch(function(e){
        console.log("Error: " + e.message);
    });
}