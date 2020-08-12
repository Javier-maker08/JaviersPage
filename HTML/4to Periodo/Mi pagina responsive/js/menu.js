jQuery('document').ready(function($){

var menu_img = $('.iconMenu')
var menu = $ ('.menu ul')

   menu_img.click(function(){

if(menu.hasClass('desplegar')){
   menu.removeClass('desplegar');
}else {
menu.addClass('desplegar')
}


}
})
});
