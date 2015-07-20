//SKILLS ARRAY FOR BIO
var skills = 
[
  "classy",
  "programming",
  "martial arts",
  "saving the world"
]
//CONTACT OBJECT FOR BIO
var contacts = {
  "mobile": "8675309",
  "email": "codyhigdem@gmail.com",
  "github": "qtheninja",
  "twitter": "codyhigdem",
  "location": "Saint Pal Mn"
};
//THIS IS FOR THE JSON DATA FOR EDUCATION
var onlineCourses = [
  {
    "title": "test",
    "school": "Udacity",
    "date": 2015,
    "url": "URL HERE"
  }
];
//JSON data for BIO
var bio = {
  "name": "Cody Higdem",
  "role": "Web Deveoper",
  "email": "codyhigdem@gmail.com",
  "biopic": "https://pbs.twimg.com/profile_images/462693307311599617/ysCCkZYP_400x400.jpeg",
  "contacts": contacts,
  "welcomeMsg": "If it's worth doing. Then do it no matter the odds",
  "skills": skills,
  "display": function(){
    //BEGIN THE BIO function
    var header = $("#header");
    //let's declare all the vars first for fun
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
    header.append(formattedName);
    header.append(formattedRole);
    header.append(formattedBioPic);
    header.append(formattedWelcomeMsg);
    //INFO
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var contacts = formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedBlog + formattedLocation;
    $("#footerContacts").append(contacts);    
    $("#header").append(HTMLskillsStart);
    for (var i=0; i < bio.skills.length; i++) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(formattedSkill);
    };
  }
};
//JSON data for education
var education = {
  "schools" : [
    {
      "name": "St Paul College",
      "city": "St Paul Mn",
      "degree": "AA",
      "major": "Associates",
      "year": 2009
    },
    {
      "name": "University of Minnesota",
      "city": "Minneapolis, Mn",
      "degree": "BA",
      "major": "Psychology",
      "year": 2010
      }
  ],
  "onlineCourses": onlineCourses,
  "display": function(){
    //REMEMBER using for makes jobs the iterator
    for (school in education.schools){
      //HTMLworkStart is coming from helper.js
       $("#education").append(HTMLschoolStart);
      //START THIS STUFF
      var edu = education.schools[school];
      //MAKE THE FORMATTED SKILLS SETUP...
      //We need to setup work.jobs[arrayNumber].employer look at the trail from var work/"jobs"/job-number/key_you_want in this case employer.
      var formattedName = HTMLschoolName.replace("%data%", edu.name);
      //then the title for the work object
      //var formattedCity = HTMLschoolLocation.replace("%data%", edu.city);
      var formattedDegree = HTMLschoolDegree.replace("%data%", edu.degree);
      var formattedMajor = HTMLschoolMajor.replace("%data%", edu.major);
      var formattedYear = HTMLschoolDates.replace("%data%", edu.year);
      var formattedLocation = HTMLschoolLocation.replace("%data%", edu.city);
      var spot =  $(".education-entry:last");
      spot.append(formattedName);
      spot.append(formattedDegree);
      spot.append(formattedMajor);
      spot.append(formattedYear);
      spot.append(formattedLocation);
    };
  }
};
//JSON data for WORK
var work = {
  "jobs": [
    {
      "employer": "The United States Army",
      "title": "Sergeant",
      "location": "Houston, Tx",
      "dates": "2003-2009",
      "description": "Rocking it out with the US Army"
    },
    {
      "employer": "Myself",
      "title": "Entrepreneur",
      "location": "Saint Paul, mn",
      "dates": "2009-2014",
      "description": "I was on a boat..with my flippy floppies"
    }
  ],
  "display": function(){
    //REMEMBER using for makes jobs the iterator
    for (job in work.jobs){
      //HTMLworkStart is coming from helper.js
      $("#workExperience").append(HTMLworkStart);
      //MAKE THE FORMATTED SKILLS SETUP...
     //We need to setup work.jobs[arrayNumber].employer look at the trail from var work/"jobs"/job-number/key_you_want in this case employer.
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      //then the title for the work object
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      //THEN concat for easier reading
      var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;
      //APPEND to work entry
      $(".work-entry:last").append(formattedEmployerTitle);
    };
  }
};
//JSON for projects id
var projects = {
  "projects": [
    {
      "title": "Portfolio of Images",
      "dates": "July 2015",
      "description": "This project was about building out some images for a portfolio site via udacity",
      "images": ["http://i.imgur.com/61dvGLdb.png", "http://i.imgur.com/fXNgQeGb.png", "http://i.imgur.com/8jOOWf3b.png"]
    } 
  ],
  "display": function() {
    for(project in projects.projects){
      //You can find this in helper.js helper code to display the json data
      $("#projects").append(HTMLprojectStart);
      //make a variable to shorten entry info
      var projectEntry = projects.projects[project];
      //remember looking at the json data it's var projects then . then "projects", then the catalogue number for projects, then the info like title, dates, description, images
      var formattedTitle = HTMLprojectTitle.replace("%data%", projectEntry.title);
      var formattedDates = HTMLprojectDates.replace("%data%", projectEntry.dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", projectEntry.description);
      //make a variable for id to hold on to. call it spot.
      var spot = $(".project-entry:last");
      spot.append(formattedTitle);
      spot.append(formattedDescription);
      spot.append(formattedDates);
      //SEE if we have urls/images
      if (projectEntry.images.length > 0){
        for (image in projectEntry.images){
          var formattedImage = HTMLprojectImage.replace("%data%", projectEntry.images[image]);
          spot.append(formattedImage);
        }
      };
    };
  }
};

//Straight from Udacity course, returns an array of all of the work locations
var locationizer = function (work_obj){
  var locations = [];
  for (job in work_obj.jobs) {
    var location = work_obj.jobs[job].location;
    locations.push(location);
  };
  return locations;
};
//Fire the functions in the JSON
bio.display();
work.display();
education.display();
projects.display();
//This mostly comes from helper.js via udacity
$("#mapDiv").append(googleMap);