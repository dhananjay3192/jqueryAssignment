$(document).ready(()=>{
	$('.modal-button').on('mouseenter',()=>{
        $('.modal-button').css({'color':'white', 'background-color':'#003399'});

	})
	$('.modal-button').on('mouseleave',()=>{
        $('.modal-button').css({'color':'black', 'background-color':'white'});

	})

	// a click on the button will launch the modal
   $('.modal-button').on('click',()=>{
        $('.modal-body').slideToggle();
        $('.modal-content').slideToggle();

	})

   // a click on anywhere on the modal-body(transparent black element) will close the modal
   $('.modal-body').on('click',()=>{
   	$('.modal-body').slideUp('fast');
   	$('.modal-content').slideUp('fast');
   })
    
    // a click on "close" icon will close the modal
   $('.icon').on('click', ()=>{
   	$('.modal-body').slideUp('fast');
   	$('.modal-content').slideUp('fast');
   })
    
    // a click on any of the buttons inside the modal, will close the modal
    $('.button-inside').on('click', ()=>{
    	$('.modal-body').slideUp('fast');
   	    $('.modal-content').slideUp('fast');
    })
    
    //the close changes its color on mouseenter and mouseleave
    $('button').eq(2).on('mouseenter', ()=>{
    	$('button').eq(2).css('background-color','red');
    })
    $('button').eq(2).on('mouseleave', ()=>{
    	$('button').eq(2).css('background-color','#003399');
    })

})