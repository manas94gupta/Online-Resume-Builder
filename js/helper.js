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

var HTMLnamerole = '<div class="name-role"><div class="vertical-align"><hr id="namestart"><hr></div></div>';
var HTMLheadName = '<h1 class="name">%data%</h1>';
var HTMLheadRole = '<h5 class="role">%data%</h5>';


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
var HTMLlinksGithubCell = '<td><span class="boldText"><i class="fa fa-github" aria-hidden="true"></i>github.com/</span>%data%</td>';

var HTMLlinksLinkedin = '<tr id="linksLinkedin"></tr>';
var HTMLlinksLinkedinCell = '<td><span class="boldText"><i class="fa fa-linkedin" aria-hidden="true"></i>linkedin.com/</span>%data%</td>';

var HTMLlinksTwitter = '<tr id="linksTwitter"></tr>';
var HTMLlinksTwitterCell = '<td><span class="boldText"><i class="fa fa-twitter" aria-hidden="true"></i>twitter.com/</span>%data%</td>';

var HTMLlinksWebsite = '<tr id="linksWebsite"></tr>';
var HTMLlinksWebsiteCell = '<td><span class="boldText"><i class="fa fa-globe" aria-hidden="true"></i>%data%</span></td>';
