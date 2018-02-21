$(document).ready(function(){
	$("button").click(function(e){
		e.preventDefault();
		var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
		$.getJSON(url, function(data){
  			$('<h2 class="mx-5 mt-5 mb-2 text-center"><q>' + data.quoteText + '</q></h2>')
  					.insertAfter("h1")
  					.after('<p class="mb-5 text-right pr-5 mr-5"><i>' + data.quoteAuthor + '</i></p>')
});
		// $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1?jsoncallback=?", function(a) {
		//   $("div").append(a[0].content + "<p>— " + a[0].title + "</p>")
		// })

		// $.ajax({
		// url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",	
		// success: function(data) {
		// 	var post = data.shift();
		// 	$(".quoteArea").html(post.content);
		// }, 
		// cache: false
		// })
	})
	
})