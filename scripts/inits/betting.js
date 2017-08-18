function initBetting()
{
	$("#bettingStart").click(function(e)
	{
		var questions = $("#bettingQuestions").val().split(delimeter);
		for (var i = 0; i < questions.length; i++){
			questions[i] = questions[i].trim();			
		}

		questions = questions.join("|");
		var output = [$("#bettingTitle").val(), $("#bettingPayout").val(), $("#bettingMin").val(), $("#bettingMax").val(), $("#bettingMultipleSelect :selected").val(), questions]
		output = output.join("|");
		output = "!betting start " + output;

		copyToClipboard(output);
	});

	$("#bettingStop").click(function(e)
	{
		var output = "!betting stop";
		copyToClipboard(output);
	});

	$("#bettingWinnerBtn").click(function(e)
	{
		var output = "!betting winner " + $("#bettingWinner").val();
		copyToClipboard(output);
	});
}