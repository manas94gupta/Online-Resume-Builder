// This file contains all the data that you want to be displayed
// on your online resume.
// You'll making changes to just this file in order to create
// your online resume.

// It contains all the details already filled out with some
// sample details, you just need to edit those and fill in your
// own details.

// Header object
// This holds your name, role and image url to be displayed in the header.
var header = {
    // Replace Walter White within quotes with your own name
    "name": "Walter White",
    // Replace Chemical Engineer within quotes with your own role/post.
    "role": "Chemical Engineer",
    // Copy and paste your image in the 'images' folder and then
    // replace 'biopic.img' with your image name.
    // for example if your image name is 'passport.jpg' then the line
    // would look like "biopic": "images/passport.jpg"
    // if you don't want your image to be displayed then replace
    // images/biopic.jpg within quotes with # symbol. So the line
    // would look like "biopic": "#"
    "biopic": "images/biopic.jpg"
};

// Personal object
// This holds your personal info like name, sex, dateofbirth, nationality
// and spokenlanguages to be displayed in the sidebar.
var personal = {
    // Replace Walter White within quotes with your own name
    "name": "Walter White",
    // Replace Male within quotes with your sex
    "sex": "Male",
    // Replace Jan 1, 1956 within quotes with your own date of birth
    "dateofbirth": "Jan 1, 1956",
    // Replace American within quotes with your own nationality
    "nationality": "American",
    // Replace English within quotes with the languages you speak
    // separated by commas. For example if you speak Arabic and Spanish
    // then the line would look like "languages": "Arabic, Spanish"
    "languages": "English"
};

// Contacts object
// This holds your contact details like mobile, email and address
// to be displayed in the sidebar.
var contacts = {
    // Replace 9213467816 within quotes with your own mobile no.
    "mobile": "9213467816",
    // Replace heisenberg@ww.com within quotes with your own email
    "email": "heisenberg@ww.com",
    // Replace 25th Street, Albuquerque within quotes with your address
    "address": "25th Street, Albuquerque"
};

// Links object
// This holds your links like github, linkedin, twitter and
// personal website to be displayed in the sidebar.
var links = {
    // Replace walterwhite within quotes with your github user name
    "github": "walterwhite",
    // Replace walterwhite within quotes with your linkedin user name
    "linkedin": "walterwhite",
    // Replace heisenberg within quotes with your twitter user name
    "twitter": "heisenberg",
    // Replace heisenberg.com within quotes with your own personal website link
    "website": "heisenberg.com"
};

// Profile object
// This holds profile description
var profile = {
    // Replace the content within quotes with your own description.
    "profile": "Lorem ipsum dolor sit amet, pro ut eirmod fabellas, has ea aliquam disputationi moderatius quaerendum per. No periculis democritum concludaturque pri, et sonet moderatius quaerendum per, eum ea mollis albucius mnesarchum. Cu splendide voluptatum sed. Cu duo persius assueverit, ut sit elit persius euismod."
};

// Skills object
// This holds your skills
var skills = {
    "skills": [
        // Replace "Chemist", "Entrepreneur", "Budgeting", "Crisis Management" with
        // your own skills separated by commas and each skill enclosed within quotes.
        // There can more/less than 4 skills
        // Skills need not be 2-3 words short, they can be long senteces as well.
        // For example if your skills are cooking, singing, dancing, very good at home management
        // and public speaking then the line would look like
        // "Cooking", "Singing", "Dancing", "Very good at home management", "Public speaking"
        "Chemist", "Entrepreneur", "Budgeting", "Crisis Management"
    ]
};

// Experience object
// This holds your experience details
var experience = {
    "jobs": [
        // Each job details are enclosed within {} brackets separated by commas
        {
            // Replace Feb, 1979 - Jan, 1984 within quotes with your job dates
            "date": "Feb, 1979 - Jan, 1984",
            // Replace Co-Founder within quotes with your job title
            "title": "Co-Founder",
            // Replace California within quotes with your job location
            "location": "California",
            // Replace Gray Matter Technology within quotes with your job company
            "company": "Gray Matter Technology",
            // Replace the content within the quotes with your job description
            "description": "Lorem ipsum dolor sit amet, pro ut eirmod fabellas, has ea aliquam disputationi moderatius quaerendum per. No periculis democritum concludaturque pri, et sonet moderatius quaerendum per, eum ea mollis albucius mnesarchum. Cu splendide voluptatum sed. Cu duo persius assueverit, ut sit elit persius euismod."
        },
        // If you only want one job experience to display then remove the comma at the
        // end of previous job experience's closing bracket '}' and remove the next job
        // details entered below within the curly brackets '{}' and also remove the
        // curly brackets.
        {
            // Replace Jun, 1990 - Dec, 2009 within quotes with your job dates
            "date": "Jun, 1990 - Dec, 2009",
            // Replace Chemistry Teacher within quotes with your job title
            "title": "Chemistry Teacher",
            // Replace Albuquerque within quotes with your job location
            "location": "Albuquerque",
            // Replace JP Wynne High School within quotes with your job company
            "company": "JP Wynne High School",
            // Replace the content within the quotes with your job description
            "description": "Lorem ipsum dolor sit amet, pro ut eirmod fabellas, has ea aliquam disputationi moderatius quaerendum per. No periculis democritum concludaturque pri, et sonet moderatius quaerendum per, eum ea mollis albucius mnesarchum. Cu splendide voluptatum sed. Cu duo persius assueverit, ut sit elit persius euismod."
        }
        // If you want to add more job experiences simply add a comma ',' after the
        // ending curly brackets '}' of previous job details and copy the previous
        // job details enclosed within the curly brackets '{}' along with the curly brackets
        // and paste in the next line of previous job details closing bracket.
        // Now replace the details within the newly pasted job details with your own job details.
    ]
};

// Projects object
// This holds your projects details
var projects = {
    "projects": [
        // Each project details are enclosed within {} brackets separated by commas
        {
            // Replace November, 1981 within quotes with your project dates
            "date": "November, 1981",
            // Replace Proton Radiography within quotes with your project title
            "title": "Proton Radiography",
            // Replace the content within the quotes with your project description
            "description": "Lorem ipsum dolor sit amet, pro ut eirmod fabellas, has ea aliquam disputationi moderatius quaerendum per. No periculis democritum concludaturque pri, et sonet moderatius quaerendum per, eum ea mollis albucius mnesarchum. Cu splendide voluptatum sed. Cu duo persius assueverit, ut sit elit persius euismod."
        },
        // If you only want one project details to display then remove the comma at the
        // end of previous project details closing bracket '}' and remove the next project
        // details entered below within the curly brackets '{}' and also remove the
        // curly brackets.
        {
            // Replace June, 2007 within quotes with your project dates
            "date": "June, 2007",
            // Replace Methamphetamine Distillation within quotes with your project title
            "title": "Methamphetamine Distillation",
            // Replace the content within the quotes with your project description
            "description": "Lorem ipsum dolor sit amet, pro ut eirmod fabellas, has ea aliquam disputationi moderatius quaerendum per. No periculis democritum concludaturque pri, et sonet moderatius quaerendum per, eum ea mollis albucius mnesarchum. Cu splendide voluptatum sed. Cu duo persius assueverit, ut sit elit persius euismod."
        }
        // If you want to add more project details simply add a comma ',' after the
        // ending curly brackets '}' of previous project details and copy the previous
        // project details enclosed within the curly brackets '{}' along with the curly brackets
        // and paste in the next line of previous project details closing bracket.
        // Now replace the details within the newly pasted project details with your own project details.
    ]
};

// Education object
// This holds your education details
var education = {
    "schools": [
        // Each school/college details are enclosed within {} brackets separated by commas
        {
            // Replace Aug, 1974 - Jun, 1978 within quotes with your school/college dates
            "date": "Aug, 1974 - Jun, 1978",
            // Replace Chemical Engineering and Applied Sciences within quotes with your
            // degree/major/class/grade
            "degree": "Chemical Engineering and Applied Sciences",
            // Replace California Institute of Technology within quotes with your school/college
            "college": "California Institute of Technology"
        },
        // If you only want one school details to display then remove the comma at the
        // end of previous school details closing bracket '}' and remove the next school
        // details entered below within the curly brackets '{}' and also remove the
        // curly brackets.
        {
            // Replace Aug, 1974 - Jun, 1978 within quotes with your school/college dates
            "date": "Mar, 1972 - Jun, 1974",
            // Replace Chemical Engineering and Applied Sciences within quotes with your
            // degree/major/class/grade
            "degree": "High School",
            // Replace California Institute of Technology within quotes with your school/college
            "college": "JP Wynne High School"
        }
        // If you want to add more school details simply add a comma ',' after the
        // ending curly brackets '}' of previous school details and copy the previous
        // school details enclosed within the curly brackets '{}' along with the curly brackets
        // and paste in the next line of previous school details closing bracket.
        // Now replace the details within the newly pasted school details with your own school details.
    ]
};
