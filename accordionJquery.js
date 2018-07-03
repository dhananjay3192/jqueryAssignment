$(document).ready(()=>
{   

	$('.heading').on('mouseenter', event =>
	{
		$(event.currentTarget).css({'color':'white', 'text-decoration':'underline'})
	})
    
    $('.heading').on('mouseleave', event =>
	{
		$(event.currentTarget).css({'color':'black','text-decoration':'none'});
	})

	$('.heading').on('click', event=>
	{   

		// Any previously slided down content will slide up
		$(event.currentTarget).parent().parent().siblings().find('.content').slideUp()

		// it slideToggles the content of a heading which has been clicked
        $(event.currentTarget).parent().siblings().slideToggle();
        
        //rotates the icon
        $(event.currentTarget).siblings().toggleClass('icon-rotate');

        // any previously rotated icon with rotate back to its initial position
        $(event.currentTarget).parent().parent().siblings().find('.icon').removeClass('icon-rotate');

	})
})