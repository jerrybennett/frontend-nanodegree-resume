/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
  "name" : "Jerry Bennett",
  "role" : "Web Developer",
  "contacts" :
    {
       "mobile" : "203-555-5555",
       "email" : "jerrybennett@earthlink.net",
       "github" : "https://github.com/jerrybennett",
       "twitter" : "",
       "location" : "Bridgeport, CT"
    },
   "welcomeMsg" : "Hello. I am currently freelancing in web development and and working toward my Udacity Nanodegree.",
   "skills" : [
      "HTML",
      "CSS",
      "Javascript",
      "jQuery",
      "Github"
   ],
   "bioPic" : "http://fillmurray.com/200/200",
   display : function() {
    var $header = $("#header"),
        $topContacts = $("#topContacts:last"),
        $footerContacts = $("#footerContacts:last");
    if (bio.name.length > 0) {
      var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
      var formattedName = HTMLheaderName.replace("%data%", bio.name);
      var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
      var formattedPhone = HTMLmobile.replace("%data%", bio.contacts.mobile);
      var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
      var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
      var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
      var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
      $header.prepend(formattedRole).prepend(formattedName);
      $header.append(formattedBioPic).append(formattedWelcomeMsg);
      $topContacts.append(formattedPhone).append(formattedEmail).append(formattedGitHub).append(formattedLocation);
      $footerContacts.append(formattedPhone).append(formattedEmail).append(formattedGitHub);

      // For some reason the code below only renders the first skill for every instance.
      // It only displays "HTML."

      // if (bio.skills.length > 0) {
      //   $("#header").append(HTMLskillsStart);
      //   var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
      //   $("#skills").append(formattedSkill);
      //   formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
      //   $("#skills").append(formattedSkill);
      //   formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
      //   $("#skills").append(formattedSkill);
      // }

      // I discovered the problem was with my JSON formatting.
      // While trouble shooting why my "skills" were not displaying properly
      // on my site, I came across this loop in the forums. it was made
      // by student Graham Lutz (graham_lutz). It didn't sove my issue but, it is more in line with DRY principle.

      if (bio.skills.length > 0) {
        $header.append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
          var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
        }
      }
    }
   }
};

var work = {
  "jobs" : [
  {
    "employer" : "PORT COFFEEHOUSE",
    "title" : "Owner/Operator",
    "location" : "Bridgeport, CT",
    "dates" : "2007 - 2013",
    "description" : "Shared day to day operation duties included: Staffing, training, serving, cleaning, baking, etc. My specific duties included: Ordering supplies and inventory; Design, implementation and maintenance of our website; Ads, promotion and PR; Set up and maintenance of all things computer related."
  },
  {
    "employer" : "COMMUNITY RESIDENCES, INC.",
    "title" : "Residential Instructor",
    "location" : "Trumbull, CT",
    "dates" : "2006 - 2007",
    "description" : "Assisted at-risk adolescents, and young adults, with intellectual disabilities and behavioral health issues in a group home. Helped clients perform day to day tasks as needed; Cooking, cleaning, shopping, laundry, etc. Ensured client’s daily plans were implemented per doctor’s, nurses and house managers request."
  },
  {
    "employer" : "MEASURE FOR MEASURE",
    "title" : "Shop Steward",
    "location" : "Bridgeport, CT",
    "dates" : "2005 - 2006",
    "description" : "Made sure shop was kept neat and orderly. Made deliveries when needed. Answered calls, worked in receiving and other general office duties. Went onsite to help with construction and remodeling of homes."
  },
  {
    "employer" : "NEW CANAAN NATURE CENTER",
    "title" : "Director of Summer Camps",
    "location" : "New Canaan, CT",
    "dates" : "Spring to Fall 2005",
    "description" : "Recruited, hired and trained 18 counselors to work effectively and in a caring manner with children, ages 3 - 8. Created schedules and provided guidance for summer program activities. Managed payroll, petty cash and ordered supplies. Assured parents their children were safe while having fun."
  },
  {
    "employer" : "DESERT SUN SCIENCE CENTER (ASTROCAMP)",
    "title" : "Summer Director",
    "location" : "Idyllwild, CA",
    "dates" : "2002 - 2004",
    "description" : "Recruited, hired and trained 15 - 25 counselors to work effectively and in a caring manner with children, ages 8 -15. Developed activities and schedules for summer program. Liaison between parents and their children in order to assure parents their children were safe and having fun. Managed payroll, petty cash and ordered supplies for summer program. Worked closely with other administrators to insure all camp operations ran smoothly."
  },
  {
    "employer" : "DESERT SUN SCIENCE CENTER (ASTROCAMP)",
    "title" : "Assistant Program Director of School Programs",
    "location" : "Idyllwild, CA",
    "dates" : "2001 - 2002",
    "description" : "Developed classroom curricula. Conducted staff safety training and proper use of gear on ropes course elements, the rock wall and pool area activities. Maintained, built and ordered classroom equipment and supplies. Assisted Program Director as needed."
  },
  {
    "employer" : "YMCA Camp Erdman",
    "title" : "Program Instructor",
    "location" : "Waialua, HI",
    "dates" : "2000-2001",
    "description" : "Taught environmental education providing students the opportunity to experience nature through a variety of hands-on activities. Promoted community and cooperation among the students through safe, fun and challenging activities. Facilitated leadership programs for participants to reach beyond their limits while enhancing communication and cooperation skills."
  },
  {
    "employer" : "DESERT SUN SCIENCE CENTER (ASTROCAMP)",
    "title" : "Program Instructor",
    "location" : "Idyllwild, CA",
    "dates" : "1999 - 2000",
    "description" : "Delivered educational, engaging and entertaining classes about astronomy, physics and other natural sciences. Additional responsibilities included: writing/developing curricula and classroom materials, training newly hired instructors, and conducting orientation sessions for up to 130 students at a time."
  }],
  display : function() {
    for (var job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedEmployerTitle).append(formattedDates).append(formattedLocation).append(formattedDescription);
    }
  }
};

var projects = {
  "projects" : [
  {
    "title" : "Brennan's Shebeen",
    "dates" : "2015",
    "description" : "Website for a local bar and resturant. I built this site on the Materialize framework.",
    "images" : ["images/brennans.jpg", "images/brennans-1.jpg"],
    "url" : "http://brennansshebeen.com"
  }],
  display : function() {
    for (var project in projects.projects) {
      $("#projects").append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace("#", projects.projects[project].url).replace("%data%", projects.projects[project].title);
      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      var formattedDescription= HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedTitle).append(formattedDates).append(formattedDescription);
      if (projects.projects[project].images.length > 0) {
        for (var image in projects.projects[project].images) {
          var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
          $(".project-entry:last").append(formattedImage);
        }
      }
    }
  }
};

var education = {
  "schools" : [
  {
    "name" : "Flatiron School",
    "location" : "New York, NY",
    "degree" : "Non-Certificate Program",
    "majors" : ["Front-End Web Development"],
    "date" : "2015",
    "url" : "http://flatironschool.com/"
  },
  {
    "name" : "Southwest Missouri State University",
    "location" : "Springfield, MO",
    "degree"  : "BS",
    "majors"  : ["Management - Administrative"],
    "date" : "1998",
    "url" : "http://www.missouristate.edu/"
  }],
  "onlineCourses": [
  {
     "title" : "Front-End Web Developer Nanodegree",
     "school" : "Udacity",
     "date" : "Current",
     "url" : "http://udacity.com/"
  },
  {
     "title" : "Javascript, HTML, and CSS",
     "school" : "Treehouse",
     "date" : 2015,
     "url" : "http://teamtreehouse.com/"
  },
  {
     "title" : "Git and Javascript",
     "school" : "Code School",
     "date" : 2015,
     "url" : "http://www.codeschool.com/"
  },
  {
     "title" : "HTML, CSS Javascript, Python, Ruby",
     "school" : "Codecademy",
     "date" : 2014,
     "url" : "http://www.codecademy.com/"
  },
  {
     "title" : "An Introduction to Interactive Programming in Python",
     "school" : "Coursera",
     "date" : 2014,
     "url" : "http://coursera.org"
  }],
  display : function() {
    $("#education").append(HTMLschoolStart);
    for (var school in education.schools) {
      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedSchoolNameDegree = formattedSchoolName + formattedDegree;
      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].date);
      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
      $(".education-entry:last").append(formattedSchoolNameDegree).append(formattedDates).append(formattedLocation).append(formattedMajors);
    }
    $("#education").append(HTMLonlineClasses).append(HTMLschoolStart);
    for (var course in education.onlineCourses) {
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("#", education.onlineCourses[course].url);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
      var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
      var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
      $(".education-entry:last").append(formattedOnlineTitleSchool).append(formattedOnlineDates);
    }
  }
};

bio.display();
work.display();
projects.display();
education.display();

function locationizer(work_obj) {
  var locationArray = [];

  for (var job in work_obj.jobs) {
    var newLocation = work_obj.jobs[job].location;
    locationArray.push(newLocation);
  }
  return locationArray;
}

function inName (name) {
  var name = $("#name").html();
  name = name.trim().split(" ");
  console.log(name);
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  name[1] = name[1].toUpperCase();
  name = name.join(" ");

  return name;
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);