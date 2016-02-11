//Still an issue with this functionality
var projectsDropdownIsShown = false;

$(function($, document, window, viewport){
	function showProjectsDropDown () {
		if (!projectsDropdownIsShown)
			$(".dropdown-toggle").dropdown();
	}
	
	function hideProjectsDropDown () {
		if (projectsDropdownIsShown)
			$(".dropdown-toggle").dropdown();
	}
	
    var projectsDropdownResponsive = function() {
        if( viewport.is("<=xm") ) {
        	showProjectsDropDown();
        } else {
        	hideProjectsDropDown();
        }
    }

    $(document).ready(function() {
        projectsDropdownResponsive();

    });

$('#projectsDropdown').on('shown.bs.dropdown', function () {
	projectsDropdownIsShown = true;
});

$('#projectsDropdown').on('hidden.bs.dropdown', function () {
	projectsDropdownIsShown = false;
});

$('#navbar-responsive-collapse').on('show.bs.collapse', function(){
	if (projectsDropdownIsShown)
		$(".dropdown-toggle").dropdown();
});

$('#navbar-responsive-collapse').on('hidden.bs.collapse', function(){
	if (!projectsDropdownIsShown)
		$(".dropdown-toggle").dropdown();
});
});