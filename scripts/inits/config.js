function initConfig(){
	document.title = title;
	
	if(showModal){
		$("#confTwitch").val(channel);
		$("#confTitle").val(title);
		$("#confDelimeter").val(delimeter);

		$("#configModal").modal({
			backdrop: 'static',
			keyboard: false
		});

		$("#configModal").on('shown.bs.modal', function (e) {
			$('#confTwitch').focus();
		});

		$("#configModal").modal("show");

		$("#configSubmit").on('click', function(){
			channel = $("#confTwitch").val();
			title = $("#confTitle").val();
			delimeter = $("#confDelimeter").val();

			if(channel == ''){
				$("#confTwitch").focus();
			} else if(title == ''){
				$("#confTitle").focus();
			} else if(delimeter == ''){
				$("#confDelimeter").focus();
			} else{
				initTwitch(channel);
				document.title = title;
				$("#configModal").modal("hide");
			}	
		});
	} else {
		initTwitch(channel);
	}
}