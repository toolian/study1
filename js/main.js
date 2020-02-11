
	var title = document.getElementById('title');

function showHide() {
  if (title.style.display != 'block') { // если блок скрыт
    title.style.display = 'block'; // открываем его
  } else { // если открыт
    title.style.display = 'none'; // скрываем
  }
}
$('#button-search-adv').click(function(){
   $(this).css('background', 'linear-gradient(180deg, rgba(90,119,19,1) 29%, rgba(113,144,38,1) 55%, rgba(132,166,55,1) 71%)');
});
$(".regular").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000
      });
     
     
    