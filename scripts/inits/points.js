function initPoints()
{
	$("#pointsTake").click(function(e)
	{
		var output = '!points remove ' + $("#pointsUsername").val() + ' ' + $("#pointsPoints").val();
		copyToClipboard(output);
	});

	$("#pointsGive").click(function(e)
	{
		var output = '!points add ' + $("#pointsUsername").val() + ' ' + $("#pointsPoints").val();
		copyToClipboard(output);
	});
}