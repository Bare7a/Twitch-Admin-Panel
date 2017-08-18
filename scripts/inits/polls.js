function initPolls()
{
	$("#pollsStart").click(function(e)
	{
		var options = $("#pollsOptions").val().split(delimeter);
		for (var i = 0; i < options.length; i++){
			options[i] = options[i].trim();			
		}

		options = options.join("|");
		var output = [$("#pollsTitle").val(), $("#pollsCost").val(), $("#pollsMax").val(), $("#pollsMultipleSelect :selected").val(), options]
		output = output.join("|");
		output = "!poll start " + output;

		copyToClipboard(output);
	});

	$("#pollsStop").click(function(e)
	{
		var output = "!poll stop";
		copyToClipboard(output);
	});
}