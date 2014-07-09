function leftArrow() {
  var numberChild = $('.visibleProduct').data("n") + 2;
    if(numberChild==3){
      $('#third-product').removeClass('invisibleProduct').addClass('visibleProduct').fadeIn('slow');
      $('#second-product').addClass('invisibleProduct').removeClass('visibleProduct').hide();
      $('#first-product').addClass('invisibleProduct').removeClass('visibleProduct').hide();
    }else if(numberChild==4){
      $('#first-product').removeClass('invisibleProduct').addClass('visibleProduct').fadeIn('slow');
      $('#second-product').addClass('invisibleProduct').removeClass('visibleProduct').hide();
      $('#third-product').addClass('invisibleProduct').removeClass('visibleProduct').hide();
    }else if(numberChild==5){
      $('#second-product').removeClass('invisibleProduct').addClass('visibleProduct').fadeIn('slow');
      $('#first-product').addClass('invisibleProduct').removeClass('visibleProduct').hide();
      $('#third-product').addClass('invisibleProduct').removeClass('visibleProduct').hide();
    }
}

function rightArrow() {
var numberChild = $('.visibleProduct').data("n") + 2;
  if(numberChild==3){
    $('#second-product').removeClass('invisibleProduct').addClass('visibleProduct').fadeIn('slow');
    $('#first-product').addClass('invisibleProduct').removeClass('visibleProduct').hide();
    $('#third-product').addClass('invisibleProduct').removeClass('visibleProduct').hide();
  }else if(numberChild==4){
    $('#third-product').removeClass('invisibleProduct').addClass('visibleProduct').fadeIn('slow');
    $('#second-product').addClass('invisibleProduct').removeClass('visibleProduct').hide();
    $('#first-product').addClass('invisibleProduct').removeClass('visibleProduct').hide();
  }else if(numberChild==5){
    $('#first-product').removeClass('invisibleProduct').addClass('visibleProduct').fadeIn('slow');
    $('#second-product').addClass('invisibleProduct').removeClass('visibleProduct').hide();
    $('#third-product').addClass('invisibleProduct').removeClass('visibleProduct').hide();
  }
}
