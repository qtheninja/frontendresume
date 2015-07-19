//SKILL ARRAY FOR BIO
var skills = [
  "awesomeness",
  "programming",
  "teaching",
  "JS"
  ];
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
//BIO
var bio = {
    "name": "Cody",
    "age": 30,
    "role": "Web Deveoper",
    "email": "codyhigdem@gmail.com",
    "profileImg": "urlHERE",
    "contacts": contacts,
    "welcomeMessage": "If it's worth doing. Then do it no matter the odds",
    "skills": skills
  };

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
        "year": 2011
      }
    ],
    "onlineCourses": onlineCourses
  };
  
var work = {
  "jobs": [
    {
      "employer": "myself",
      "title": "Bossman",
      "location": "Minneapolis, mn",
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
};

var projects = {
  "projects": [
 {
   "title": "dances with wolves",
   "dates": "1 - 100",
   "description": "We danced inthe moon light",
   "images": ["url here", "url here", "hurl"]
 } 
]
};

if (bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  console.log('you have skills sun');
  }else{
  console.log('you got no skilsl homes');
}