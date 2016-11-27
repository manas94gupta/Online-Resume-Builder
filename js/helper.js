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
