$(document).ready(function(){
	$("button").click(function(e){
		e.preventDefault();
		var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
		$.getJSON(url, function(data){
  			$("h3").html('<q>' + data.quoteText + '</q>');
			$("#author").text(data.quoteAuthor);
		$("#tweet").on("click", function(){
			$(this).attr("href", 'https://twitter.com/intent/tweet?text=');
		});
		})
	})
	
})