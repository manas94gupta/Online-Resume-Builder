// This file contains the display functions to display the info provided by
// the user in data.js in the html file.

// It adds a display function to header, personal, contacts, links, profile,
// skills, experience, projects and education objects to display their
// respective info.

// The display functions takes info from their respective objects and add them
// to the formatted HTML strings in helper.js and then append them to the
// index.html in their respective positions.

// Header Display Function
header.display = function() {
    var formattedBiopic = HTMLbiopic.replace("%data%", header.biopic);
    $("header").append(formattedBiopic, HTMLnamerole);

    var formattedHeadName = HTMLheadName.replace("%data%", header.name);
    var formattedHeadRole = HTMLheadRole.replace("%data%", header.role);
    $(".vertical-align").append(formattedHeadName, formattedHeadRole);
};

// Personal Display Function
personal.display = function() {
    $(".aside-data").append(HTMLpersonal);

    $(".personal").append(HTMLpersonalHeading, HTMLpersonalTable);

    $("#personalTable").append(HTMLpersonalName, HTMLpersonalSex, HTMLpersonalBirth, HTMLpersonalNationality, HTMLpersonalLanguages);

    var formattedPersonalNameCell = HTMLpersonalNameCell.replace("%data%", personal.name);
    $("#personalName").append(HTMLpersonalNameHead, formattedPersonalNameCell);

    var formattedPersonalSexCell = HTMLpersonalSexCell.replace("%data%", personal.sex);
    $("#personalSex").append(HTMLpersonalSexHead, formattedPersonalSexCell);

    var formattedPersonalBirthCell = HTMLpersonalBirthCell.replace("%data%", personal.dateofbirth);
    $("#personalBirth").append(HTMLpersonalBirthHead, formattedPersonalBirthCell);

    var formattedPersonalNationalityCell = HTMLpersonalNationalityCell.replace("%data%", personal.nationality);
    $("#personalNationality").append(HTMLpersonalNationalityHead, formattedPersonalNationalityCell);

    var formattedPersonalLanguagesCell = HTMLpersonalLanguagesCell.replace("%data%", personal.languages);
    $("#personalLanguages").append(HTMLpersonalLanguagesHead, formattedPersonalLanguagesCell);
};

// Contacts Display Function
contacts.display = function() {
    $(".aside-data").append(HTMLcontact);

    $(".contact").append(HTMLcontactHeading, HTMLcontactTable);

    $("#contactTable").append(HTMLcontactMobile, HTMLcontactMail, HTMLcontactAddress);

    var formattedContactMobileCell = HTMLcontactMobileCell.replace("%data%", contacts.mobile);
    $("#contactMobile").append(formattedContactMobileCell);

    var formattedContactMailCell = HTMLcontactMailCell.replace("%data%", contacts.email);
    $("#contactMail").append(formattedContactMailCell);

    var formattedContactAddressCell = HTMLcontactAddressCell.replace("%data%", contacts.address);
    $("#contactAddress").append(formattedContactAddressCell);
};

// Links Display Function
links.display = function() {
    $(".aside-data").append(HTMLlinks);

    $(".links").append(HTMLlinksHeading, HTMLlinksTable);

    $("#linksTable").append(HTMLlinksGithub, HTMLlinksLinkedin, HTMLlinksTwitter, HTMLlinksWebsite);

    var formattedLinksGithub = HTMLlinksGithubCell.replace("%data%", links.github).replace("#", links.githubUrl);
    $("#linksGithub").append(formattedLinksGithub);

    var formattedLinksLinkedin = HTMLlinksLinkedinCell.replace("%data%", links.linkedin).replace("#", links.linkedinUrl);
    $("#linksLinkedin").append(formattedLinksLinkedin);

    var formattedLinksTwitter = HTMLlinksTwitterCell.replace("%data%", links.twitter).replace("#", links.twitterUrl);
    $("#linksTwitter").append(formattedLinksTwitter);

    var formattedLinksWebsite = HTMLlinksWebsiteCell.replace("%data%", links.website).replace("#", links.websiteUrl);
    $("#linksWebsite").append(formattedLinksWebsite);
};

// Profile Display Function
profile.display = function() {
    $(".main-data").append(HTMLprofile);

    $(".profile").append(HTMLprofileHeading, HTMLprofileEntry);

    var formattedProfileDescription = HTMLprofileDescription.replace("%data%", profile.profile);
    $(".profile-entry").append(formattedProfileDescription);
};

// Skills Display Function
skills.display = function() {
    $(".main-data").append(HTMLskills);

    $(".skills").append(HTMLskillsHeading, HTMLskillEntry);

    $(".skill-entry").append(HTMLskillList);

    skills.skills.forEach(function(skill) {
        var formattedSkillElement = HTMLskillElement.replace("%data%", skill);
        $("#skillList").append(formattedSkillElement);
    });
};

// Experience Display Function
experience.display = function() {
    $(".main-data").append(HTMLworkex);

    $(".workex").append(HTMLworkexHeading);

    experience.jobs.forEach(function(job) {
        $(".workex").append(HTMLworkEntry);

        var formattedWorkDate = HTMLworkDate.replace("%data%", job.date);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedWorkCompany = HTMLworkCompany.replace("%data%", job.company);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedWorkDate, formattedWorkTitle, formattedWorkLocation, formattedWorkCompany, formattedWorkDescription);
    });
};

// Projects Display Function
projects.display = function() {
    $(".main-data").append(HTMLprojects);

    $(".projects").append(HTMLprojectsHeading);

    projects.projects.forEach(function(project) {
        $(".projects").append(HTMLprojectEntry);

        var formattedProjectDate = HTMLprojectDate.replace("%data%", project.date);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedProjectDate, formattedProjectTitle, formattedProjectDescription);
    });
};

// Education Display function
education.display = function() {
    $(".main-data").append(HTMLeducation);

    $(".education").append(HTMLeducationHeading);

    education.schools.forEach(function(school) {
        $(".education").append(HTMLeducationEntry);

        var formattedEducationDate = HTMLeducationDate.replace("%data%", school.date);
        var formattedEducationDegree = HTMLeducationDegree.replace("%data%", school.degree);
        var formattedEducationCollege = HTMLeducationCollege.replace("%data%", school.college);
        $(".education-entry:last").append(formattedEducationDate, formattedEducationDegree, formattedEducationCollege);
    });
};

function biopicToggle() {
    // if user hasn't specified an image then the .biopic div wil not be displayed
    // and .name-role div will take 100% width inside the header.
    var imgsrc = $("img").attr("src");
    var biopic = $(".biopic");
    var namerole = $(".name-role");
    if(imgsrc === "#") {
        biopic.css({"display": "none"});
        namerole.css({"width": "100%"});
    }
};

// Initialisation of all display functions
$(document).ready(function() {
    header.display();
    personal.display();
    contacts.display();
    links.display();
    profile.display();
    skills.display();
    experience.display();
    projects.display();
    education.display();

    biopicToggle();
});
