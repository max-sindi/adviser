'use strict';
/*
  Button "Choose your plan";
  Click adds active class on corresponding item;
*/
$(document).ready(function() {

  /*
  Button "Choose your plan";
  Clicking adds 'is-active' class on corresponding plan
  and add 'has-activated-item' class on common parent, which hide another
  buttons
  */
  $('.choose__variants').on('click', '.js-choose-button', function() {

    let
      successHtml =
      `<span class="choosed-block hidden">
        Plan selected
      </span>`,

      selectedHtml = `<div class="choose-item__selected-label"></div>`,
      itemWrap   = $(this).closest('.choose__item-wrap'),
      buttonWrap = $(this).closest('.choose-button-wp');

    // adding selected label
    itemWrap.addClass('is-active')
            .append(selectedHtml);

    // adding 'plan selected'
    buttonWrap.append(successHtml);
    $('.choose__variants').addClass('has-activated-item');

  });


  /*
    help icons clicking show help text
  */
  $('.js-input-help-icon').click( function() {

    $(this).closest('.input-text__help')
           .find('.input-text__help-text')
           .fadeToggle('slow');

  });



})
