function initPanels(size)
{
	$("#adminPanel").addClass("col-sm-" + size);
	$("#twitchPanel").addClass("col-sm-" + (12 - size));
}