function initLanguage(language, languages)
{
	var option;
	changeLanguage(language);

	for(var i = 0; i < languages.length; i++)
	{
		option = $('<option>',
		{
			value: languages[i][1],
			text : languages[i][0]
		});

		if(eval(languages[i][1]) == language){
			option.attr('selected', 'selected');
		}

		$('.language').append(option);
	}
}