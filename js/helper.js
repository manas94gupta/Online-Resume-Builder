/*
This file contains the html strings stored inside variables which
will be used to build the final html file.
*/

/*
%data% placeholder will be replaced with the info entered by the
user in data.js and the resultant html string will be added to
the index.html.
*/

// Header Elements
var HTMLbiopic = '<div class="biopic"><img src="%data%" alt="Bio Pic" /></div>';

var HTMLnamerole = '<div class="name-role"><div class="vertical-align"></div></div>';

var HTMLheadName = '<hr><h1 class="name">%data%</h1>';
var HTMLheadRole = '<h5 class="role">%data%</h5><hr>';


// Aside Elements

// Aside Personal Elements
var HTMLpersonal = '<div class="personal"></div>';
var HTMLpersonalHeading = '<h3>Personal</h3>';

var HTMLpersonalTable = '<table id="personalTable"></table>';

var HTMLpersonalName = '<tr id="personalName"></tr>';
var HTMLpersonalNameHead = '<th>Name</th>';
var HTMLpersonalNameCell = '<td>%data%</td>';

var HTMLpersonalSex = '<tr id="personalSex"></tr>';
var HTMLpersonalSexHead = '<th>Sex</th>';
var HTMLpersonalSexCell = '<td>%data%</td>';

var HTMLpersonalBirth = '<tr id="personalBirth"></tr>';
var HTMLpersonalBirthHead = '<th>Date Of Birth</th>';
var HTMLpersonalBirthCell = '<td>%data%</td>';

var HTMLpersonalNationality = '<tr id="personalNationality"></tr>';
var HTMLpersonalNationalityHead = '<th>Nationality</th>';
var HTMLpersonalNationalityCell = '<td>%data%</td>';

var HTMLpersonalLanguages = '<tr id="personalLanguages"></tr>';
var HTMLpersonalLanguagesHead = '<th>Languages</th>';
var HTMLpersonalLanguagesCell = '<td>%data%</td>';

// Aside Contact Elements
var HTMLcontact = '<div class="contact"></div>';
var HTMLcontactHeading = '<h3>Contact</h3>';

var HTMLcontactTable = '<table id="contactTable"></table>';

var HTMLcontactMobile = '<tr id="contactMobile"></tr>';
var HTMLcontactMobileCell = '<td><i class="fa fa-phone" aria-hidden="true"></i>%data%</td>';

var HTMLcontactMail = '<tr id="contactMail"></tr>';
var HTMLcontactMailCell = '<td><i class="fa fa-envelope" aria-hidden="true"></i>%data%</td>';

var HTMLcontactAddress = '<tr id="contactAddress"></tr>';
var HTMLcontactAddressCell = '<td><i class="fa fa-map-marker" aria-hidden="true"></i>%data%</td>';

// Aside Links Elements
var HTMLlinks = '<div class="links"></div>';
var HTMLlinksHeading = '<h3>Links</h3>';

var HTMLlinksTable = '<table id="linksTable"></table>';

var HTMLlinksGithub = '<tr id="linksGithub"></tr>';
var HTMLlinksGithubCell = '<td><a target="_blank" href="#"><span class="boldText"><i class="fa fa-github" aria-hidden="true"></i>github.com/</span>%data%</a></td>';

var HTMLlinksLinkedin = '<tr id="linksLinkedin"></tr>';
var HTMLlinksLinkedinCell = '<td><a target="_blank" href="#"><span class="boldText"><i class="fa fa-linkedin" aria-hidden="true"></i>linkedin.com/</span>%data%</a></td>';

var HTMLlinksTwitter = '<tr id="linksTwitter"></tr>';
var HTMLlinksTwitterCell = '<td><a target="_blank" href="#"><span class="boldText"><i class="fa fa-twitter" aria-hidden="true"></i>twitter.com/</span>%data%</a></td>';

var HTMLlinksWebsite = '<tr id="linksWebsite"></tr>';
var HTMLlinksWebsiteCell = '<td><a target="_blank" href="#"><span class="boldText"><i class="fa fa-globe" aria-hidden="true"></i>%data%</span></a></td>'; target="_blank"



// Main Elements

// Main Profile Elements
var HTMLprofile = '<div class="profile"></div>';

var HTMLprofileHeading = '<span class="heading">Profile</span>';
var HTMLprofileEntry = '<div class="profile-entry"></div>';

var HTMLprofileDescription = '<p>%data%</p>';

// Main Skills Elements
var HTMLskills = '<div class="skills"></div>';

var HTMLskillsHeading = '<span class="heading">Skills</span>';
var HTMLskillEntry = '<div class="skill-entry"></div>';

var HTMLskillList = '<ul class="flex-box" id="skillList"></ul>';
var HTMLskillElement = '<li>%data%</li>';

// Main Experience Elements
var HTMLworkex = '<div class="workex"></div>';

var HTMLworkexHeading = '<span class="heading">Experience</span>';
var HTMLworkEntry = '<div class="work-entry"></div>';

var HTMLworkDate = '<div class="date">%data%</div>';
var HTMLworkTitle = '<div class="job-title">%data%</div>';
var HTMLworkLocation = '<div class="location">%data%</div>';
var HTMLworkCompany = '<div class="company">%data%</div>';
var HTMLworkDescription = '<p class="description">%data%</p>';

// Main Projects Elements
var HTMLprojects = '<div class="projects"></div>';

var HTMLprojectsHeading = '<span class="heading">Projects</span>';
var HTMLprojectEntry = '<div class="project-entry"></div>';

var HTMLprojectDate = '<div class="date">%data%</div>';
var HTMLprojectTitle  = '<div class="project-title">%data%</div>';
var HTMLprojectDescription = '<p class="description">%data%</p>';

// Main Education Elements
var HTMLeducation = '<div class="education"></div>';

var HTMLeducationHeading = '<span class="heading">Education</span>';
var HTMLeducationEntry = '<div class="education-entry"></div>';

var HTMLeducationDate = '<div class="date">%data%</div>';
var HTMLeducationDegree = '<div class="degree">%data%</div>';
var HTMLeducationCollege = '<div class="college">%data%</div>';
