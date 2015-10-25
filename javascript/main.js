var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer',
      gutter: 5
    }
});

// layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});


// Empty One

$( 'body' ).ready(function(){
	$('.grid-item--name').height($('.grid-item--name').width());
});

$( window).resize(function(){
	$('.grid-item--name').height($('.grid-item--name').width());
});

// Filter

// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});