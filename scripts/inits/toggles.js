function initToggles()
{

	$('.language').on('change', function(){
		$('.language').not(this).val(this.value);
		var selected = eval($(this).find("option:selected").val());
		changeLanguage(selected);
	});

	$(document).keydown(function(e){
		if (e.keyCode == hotkey) { 
			toggleMenu();
		}
	});

	$("#size1").click(function (e)
	{
		changeSize(2);
	});

	$("#size2").click(function (e)
	{
		changeSize(3);
	});

	$("#size3").click(function (e)
	{
		changeSize(4);
	});

	$("#size4").click(function (e)
	{
		changeSize(5);
	});

	$("#toggle").click(function (e)
	{
		toggleMenu();
	});
}