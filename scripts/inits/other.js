function initOther()
{
	$("#otherSkip").click(function (e){
		var output = "!veto";
		copyToClipboard(output);
	});

	$("#otherAdd").click(function (e){
		var output = "!sr " + $("#otherVariable").val();
		copyToClipboard(output);
	});

	$("#otherBan").click(function (e){
		var output = "/ban " + $("#otherVariable").val();
		copyToClipboard(output);
	});

	$("#otherTimeout").click(function (e){
		var output = "/timeout " + $("#otherVariable").val();
		copyToClipboard(output);
	});

	$("#otherName").click(function (e){
		var output = "!game " + $("#otherVariable").val();
		copyToClipboard(output);
	});

	$("#otherGame").click(function (e){
		var output = "!status " + $("#otherVariable").val();
		copyToClipboard(output);
	});
}