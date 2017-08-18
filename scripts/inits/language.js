function initLanguage(language, languages)
{
	var languageOption;
	changeLanguage(language);

	for(var i = 0; i < languages.length; i++)
	{
		languageOption = new Option(languages[i][0], languages[i][1]);
		
		if(eval(languages[i][1]) == language){
			languageOption.selected = true;
		}

		$(languageOption).html(languages[i][0]);
		$("#language").append(languageOption);
	}
}