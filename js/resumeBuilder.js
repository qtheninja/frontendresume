//SKILLS ARRAY FOR BIO
var skills = 
[
  "awesomeness",
  "programming",
  "teaching",
  "JS"
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
    "age": 30,
    "role": "Web Deveoper",
    "email": "codyhigdem@gmail.com",
    "biopic": "https://pbs.twimg.com/profile_images/462693307311599617/ysCCkZYP_400x400.jpeg",
    "contacts": contacts,
    "welcomeMessage": "If it's worth doing. Then do it no matter the odds",
    "skills": skills,
    "display": function(){
    }
  };
//JSON data for education
var education = {
  "schools" : [
    {
      "name": "St Paul College",
      "city": "St Paul Mn",
      "degree": "AA",
      "major": "N/A",
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
  "onlineCourses": onlineCourses
  };
//JSON data for WORK
var work = {
  "jobs": [
    {
      "employer": "myself",
      "title": "Bossman",
      "location": "Minneapolis, Mn",
      "dates": "2009-2015",
      "description": "I was on a boat"
      },
      {
      "employer": "myself",
      "title": "Bossman",
      "location": "Minneapolis, mn",
      "dates": "2023-2015",
      "description": "I was on a boat"
      },
      {
      "employer": "myself",
      "title": "Bossman",
      "location": "Minneapolis, mn",
      "dates": "201-2015",
      "description": "I was on a boat"
      }
    ]
  "display": function(){

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

  }
};
//END of JSON DATA SETS
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);


if (bio.skills.length > 0){

  $("#header").append(HTMLskillsStart);

  for (var i=0; i < bio.skills.length; i++)
  {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);
  };
};




/*
for (skill in bio.skills){
  console.log(bio.skills[skill])
}
*/

var displayWork = function(){
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
}
};

displayWork();



$(document).click(function(loc){
  var y = loc.pageY;
  var x = loc.pageX;

  logClicks(x,y);
});

var locationizer = function (work_obj){
  var locations = [];

  for (job in work_obj.jobs) {
    var location = work_obj.jobs[job].location;
    locations.push(location);
  };
  return locations;
  /*
  console.log('test');
  for (var job in work.jobs){
  locations.push(work.jobs[job].location);
  }
  return location;
  */
};

var inName = function(name){
  name = name.trim().split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
   return name[0] + " " + name[1];

}

$('#main').append(internationalizeButton);
console.log(locationizer(work));

displayWork();

var displayProject = function(){
  //make da magic
  console.log('hi mom');
};

projects.display = function (){
  //make a 4 loop and then iterate through all of the projects
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
    }
  }
}

projects.display();

//This mostly comes from helper.js via udacity
$("#mapDiv").append(googleMap);