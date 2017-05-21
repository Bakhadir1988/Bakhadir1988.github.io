$(document).ready(function () {

  $("a[href*='#']").mPageScroll2id();

  $("#my-menu").mmenu({
    extensions: ['theme-black', 'effect-menu-slide', 'pagedim-black' ],
    navbar: {
      title: 'Меню'
    },
    offCanvas: {
      position: 'right'
    }
  });

  var api = $('#my-menu').data('mmenu');
  $('#menu-button').click(function () {
    api.open();
  });

  api.bind('open:finish', function () {
    $('#menu-button').addClass('active');
  });

  api.bind('close:finish', function () {
    $('#menu-button').removeClass('active');
  });

$('.controls__link').on('click', function (e) {
  e.preventDefault();

  var item = $(this).closest('.controls__item'),
      contentItem = $('.tab__content'),
      itemPosition = item.index();
  contentItem.eq(itemPosition)
    .add(item)
    .addClass('active')
    .siblings()
    .removeClass('active');

});



});



