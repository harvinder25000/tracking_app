var $ = Dom7;
var theme = 'auto';
var timeinterval;
var baseUrl='http://localhost/tracking_app/v1/'; 
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}
// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  theme: 'ios',
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  routes: routes,
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
  popup: {
    closeByBackdropClick: false,
  },
  autocomplete: {
    openIn: 'popup',
    animate: false,
  }
});
 
$(document).on('page:init', '.page[data-name="homepage"]', function (e) {
     jQuery.getJSON( 'json/countries.json', function( data ){
        var items = '<option>What Country do you live in?</option>';
        jQuery.each( data, function( key, value ){
            items += '<option value="'+value.name+'">'+value.name+'</option>';
        })
        jQuery('select[name="membercountry"]').html(items)
    })
    
    var settings = {
              "async": true,
              "crossDomain": true,
              "url": "https://www.australianopaljewellery.com.au/mobile-app/get-heard-about-us.php",
              "method": "POST",
              "headers": {
                "content-type": "application/x-www-form-urlencoded",
                "cache-control": "no-cache",
                "postman-token": "00231f05-602a-b14e-2b55-29659667ea64"
              }
          }

          jQuery.ajax(settings).done(function (response) {
              if (response.status_code == '200') {
                  // Create toast with icon
                  var html = "<option>How did you find out about the museum?</option>";
                  for(var i=0; i<response.data.length; i++){
                      html += '<option value="'+response.data[i].content+'">'+response.data[i].content+'</option>';
                  }
                  jQuery('select[name="memberaboutus"]').html(html)
              }
          });
    
})




function signup(){   
 console.log('Login ApI');
 var firstname=document.getElementById("first_name").value;
var lastname=document.getElementById("last_name").value;
var email=document.getElementById("email").value;
var phone=document.getElementById("phone").value;
var password=document.getElementById("password").value;
var cpassword=document.getElementById("cpassword").value;

jQuery('#firstname').removeClass('required_field');
jQuery('#lastname').removeClass('required_field');
jQuery('#email').removeClass('required_field');
jQuery('#phone').removeClass('required_field');
jQuery('#password').removeClass('required_field');
jQuery('#cpassword').removeClass('required_field');

var valid='yes';
if(first_name==""){
	jQuery('#first_name').addClass('required_field');
	valid='no';
}
if(last_name==""){
	jQuery('#last_name').addClass('required_field');
	valid='no';
}
if(email==""){
	jQuery('#email').addClass('required_field');
	valid='no';
}
if(phone==""){
	jQuery('#phone').addClass('required_field');
	valid='no';
}
if(password==""){
	jQuery('#password').addClass('required_field');
	valid='no';
}
if(cpassword==""){
  jQuery('#cpassword').addClass('required_field');
  valid='no';
}
if(valid=='no'){
	return false;
}
 var d={};
 d["first_name"]=document.getElementById("first_name").value;
 d["last_name"]=document.getElementById("last_name").value;
 d["email"]=document.getElementById("email").value;
 d["phone"]=document.getElementById("phone").value;
 d["password"]=document.getElementById("password").value;
 d["cpassword"]=document.getElementById("cpassword").value;
if(document.getElementById("password").value!=document.getElementById("cpassword").value)
{
  alert('password does not match');
  return false;
}
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": baseUrl+"signup.php",
   "method": "POST", //GET | POST
  "headers": {
    "content-type": "application/json",
    "authorization": "Bearer a3sPILiY1472fnfr0na5v9sXGu7R",
    "cache-control": "no-cache",
    "postman-token": "ee77e197-ba28-2405-0c4f-aec558c89b5a"
  },
     "processData": false,
  "data": JSON.stringify(d)
  }

  jQuery.ajax(settings).done(function(response) {
    alert(response.status);

    if (response.status == 'success') {        
        localStorage.setItem('userData', JSON.stringify(response.data[0]));
       app.router.navigate('/sateachershome/'); //redirection to new page
       
    } 

    else {
        // Create toast with icon
        var toastIcon = app.toast.create({
          icon: '<a><i class="f7-icons">close_round_fill</i></a>',
          text:  response.message,
          position: 'center',
          closeTimeout: 2000,
        });
        toastIcon.open();
    }
	
	
  });
}


function login(){   
 
 console.log('Login ApI');
var firstname=document.getElementById("username").value;
var password1=document.getElementById("password_login").value;

 
jQuery('#username').removeClass('required_field');
jQuery('#password_login').removeClass('required_field');

var valid='yes';
if(username==""){
	jQuery('#username').addClass('required_field');
	valid='no';
}

if(password1==""){
	jQuery('#password_login').addClass('required_field');
	valid='no';
}

if(valid=='no'){
	return false;
}
 var d={};
 d["username"]=username;
 d["password"]=password1;


  var settings = {
    "async": true,
    "crossDomain": true,
    "url": baseUrl+"login.php",
   "method": "POST", //GET | POST
  "headers": {
    "content-type": "application/json",
    "authorization": "Bearer a3sPILiY1472fnfr0na5v9sXGu7R",
    "cache-control": "no-cache",
    "postman-token": "ee77e197-ba28-2405-0c4f-aec558c89b5a"
  },
     "processData": false,
  "data": JSON.stringify(d)
  }

  jQuery.ajax(settings).done(function(response) {
   

    if (response.status == 'success') { 
       app.router.navigate('/panel/'); //redirection to new page       
    } 
    else {
        // Create toast with icon
        var toastIcon = app.toast.create({
          icon: '<a><i class="f7-icons">close_round_fill</i></a>',
          text:  response.message,  
          position: 'center',
          closeTimeout: 2000,
        });
        toastIcon.open();
    }
	
	
  });
}











function teachersLoginBackup(){   
 console.log('Login ApI');
 
 var d={};
 d["username"]=document.getElementById("username").value;
 d["password"]=document.getElementById("password").value;

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": baseUrl+"teachersLogin",
   "method": "POST", //GET | POST
  "headers": {
    "content-type": "application/json",
    "authorization": "Bearer a3sPILiY1472fnfr0na5v9sXGu7R",
    "cache-control": "no-cache",
    "postman-token": "ee77e197-ba28-2405-0c4f-aec558c89b5a"
  },
     "processData": false,
  "data": JSON.stringify(d)
  }

  jQuery.ajax(settings).done(function(response) {
    
    if (response.status == "success") {        
        localStorage.setItem('userData', JSON.stringify(response.data[0]));
       app.router.navigate('/sateachershome/'); //redirection to new page
       
    } else {
        // Create toast with icon
        var toastIcon = app.toast.create({
          icon: '<a><i class="f7-icons">close_round_fill</i></a>',
          text:  response.msg,
          position: 'center',
          closeTimeout: 2000,
        });
        toastIcon.open();
    }
	
	
  });
}

/**
function first_view(){
    app.popup.open('.popup-tablet-fullscreen', true)
    clearInterval(timeinterval);
    var clock = document.getElementById('clockdiv');
    
    clock.innerHTML ="";
}**/
