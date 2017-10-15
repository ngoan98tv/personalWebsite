var database = firebase.database();

function openMenu() {
	document.getElementById('menu').style.display = 'block';
	document.getElementById('open').style.display = 'none';
	document.getElementById('close').style.display = 'block';
}

function closeMenu() {
	document.getElementById('menu').style.display = 'none';
	document.getElementById('open').style.display = 'block';
	document.getElementById('close').style.display = 'none';
}

function loadData(){
    database.ref('profile/').on('value', function(snapshot) {
        database.ref('profile/').on('value', function(snapshot) {
            document.getElementById('intro').innerHTML = snapshot.val().about;
            document.getElementById('workName').innerHTML = snapshot.val().workName;
            document.getElementById('workStart').innerHTML = snapshot.val().workStart;
            document.getElementById('workDescribe').innerHTML = snapshot.val().workDescribe;
            document.getElementById('eduName').innerHTML = snapshot.val().eduName;
            document.getElementById('eduStart').innerHTML = snapshot.val().eduStart;
            document.getElementById('eduEnd').innerHTML = snapshot.val().eduEnd;
            document.getElementById('eduDescribe').innerHTML = snapshot.val().eduDescribe;
            document.getElementById('address').innerHTML = snapshot.val().address;
            document.getElementById('mobile').innerHTML = snapshot.val().mobile;
            document.getElementById('email').innerHTML = snapshot.val().email;
            document.getElementById('fb').href = snapshot.val().fb;
            document.getElementById('quote0').innerHTML = snapshot.val().quote;
            document.getElementById('quote1').innerHTML = snapshot.val().quote;
            document.getElementById('quoteAuth').innerHTML = snapshot.val().quoteAuth;
            document.getElementById('quoteAuth0').innerHTML = snapshot.val().quoteAuth;
            document.getElementById('cvlink').href = snapshot.val().cvLink;
            document.getElementById('profileAvartar').src = snapshot.val().avartar;
            document.getElementById('img01a').src = "https://firebasestorage.googleapis.com/v0/b/ngoantran-21589.appspot.com/o/photos%2Fmy-class-2016-2020.jpg?alt=media&token=c4383b70-c175-48be-8533-8d6ed4318673";
            document.getElementById('img02a').src = "https://firebasestorage.googleapis.com/v0/b/ngoantran-21589.appspot.com/o/photos%2Fmy-class-2015-2016.jpg?alt=media&token=ddeb6f0d-3f91-42d8-ba9f-19cd636f1ec2s";
            document.getElementById('img03a').src = "https://firebasestorage.googleapis.com/v0/b/ngoantran-21589.appspot.com/o/photos%2Fmy-project.JPG?alt=media&token=a8904686-6f99-401b-a7ce-efd2b155bb41";
            document.getElementById('img04a').src = "https://firebasestorage.googleapis.com/v0/b/ngoantran-21589.appspot.com/o/photos%2Fmy-team-2015.jpg?alt=media&token=dbeca99d-1938-4d40-bcb6-7bda649843f6";
            document.getElementById('img05a').src = "https://firebasestorage.googleapis.com/v0/b/ngoantran-21589.appspot.com/o/photos%2Fmy-team-2017.JPG?alt=media&token=92b63199-2a9b-4afc-ae07-58a1a169d7eb";
            document.getElementById('img01b').src = "https://firebasestorage.googleapis.com/v0/b/ngoantran-21589.appspot.com/o/photos%2Fmy-class-2016-2020.jpg?alt=media&token=c4383b70-c175-48be-8533-8d6ed4318673";
            document.getElementById('img02b').src = "https://firebasestorage.googleapis.com/v0/b/ngoantran-21589.appspot.com/o/photos%2Fmy-class-2015-2016.jpg?alt=media&token=ddeb6f0d-3f91-42d8-ba9f-19cd636f1ec2s";
            document.getElementById('img03b').src = "https://firebasestorage.googleapis.com/v0/b/ngoantran-21589.appspot.com/o/photos%2Fmy-project.JPG?alt=media&token=a8904686-6f99-401b-a7ce-efd2b155bb41";
            document.getElementById('img04b').src = "https://firebasestorage.googleapis.com/v0/b/ngoantran-21589.appspot.com/o/photos%2Fmy-team-2015.jpg?alt=media&token=dbeca99d-1938-4d40-bcb6-7bda649843f6";
            document.getElementById('img05b').src = "https://firebasestorage.googleapis.com/v0/b/ngoantran-21589.appspot.com/o/photos%2Fmy-team-2017.JPG?alt=media&token=92b63199-2a9b-4afc-ae07-58a1a169d7eb";
        }, function (error) {
            console.log("Error: " + error.code);
        });

    });
}

window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        navbar.className = "w3-hide-small w3-container w3-text-white w3-top w3-card-4" + " w3-green";
    } else {
        navbar.className = navbar.className.replace(" w3-card-4 w3-green", "");
    }
}