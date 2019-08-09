  

  $(document).ready(function(){

  $('.accordion-menu > ul > li:has(ul)').addClass("has-sub");

  $('.accordion-menu > ul > li > a').click(function() {
    var checkElement = $(this).next();
    //$('.accordion-menu li').removeClass('active');
    $(this).closest('li').addClass('active');	
    
	
    
    if((checkElement.is('ul')) && (checkElement.is(':visible'))) {

      $(this).closest('li').removeClass('active');
      checkElement.slideUp('normal');
    }
    
    if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {

      //$('.accordion-menu ul ul:visible').slideUp('normal');
      checkElement.slideDown('normal');
    }
    
    if (checkElement.is('ul')) {
      return false;
    } else {
      return true;	
    }		
  });
  
  
  
  
  });
  
  	

