header.display = function() {
    var formattedBiopic = HTMLbiopic.replace("%data%", header.biopic);
    $("header").append(formattedBiopic, HTMLnamerole);

    var formattedHeadName = HTMLheadName.replace("%data%", header.name);
    var formattedHeadRole = HTMLheadRole.replace("%data%", header.role);
    $(".vertical-align").append(formattedHeadName, formattedHeadRole);
};

$(document).ready(function() {
    header.display();
});
