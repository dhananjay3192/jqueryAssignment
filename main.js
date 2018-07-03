$(document).ready(()=>{

	//toggle icon is clicked 

	$('.toggle').on('click',()=>
	{
		  
          $('ul').toggleClass('hide');
	});

	// cursor over link changes link's color
	
	$('a').on('mouseenter', event => {
		$(event.currentTarget).addClass('highlight');
	})
	$('a').on('mouseleave', event => {
		$(event.currentTarget).removeClass('highlight');
	})

	// opens the link in a new tab

	$('.new').on('click',()=>{
		$('.new').attr('target','_blank');
	})
})