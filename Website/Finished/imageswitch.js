var currentIndex = 0,
items = $('.container div'),
itemAmt = items.length;

function cycleItems() {
  var item = $('.container div').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}

$('.next').click(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
	currentIndex = 0;
  }
  cycleItems();
});

$('.prev').click(function() {
  currentIndex -= 1;
  if (currentIndex < 0) {
	currentIndex = itemAmt - 1;
  }
  cycleItems();
});
$('a.someclass').click(function(e) {
	e.preventDefault();
});