'use strict';

$(document).ready(function () {

  /*
    Button "Choose your plan";
    Clicking adds 'is-active' class on corresponding plan
    and add 'has-activated-item' class on common parent, which hide another
    buttons
  */
  $('.choose__variants').on('click', '.js-choose-button', function () {

    var successHtml = '<span class="choosed-block hidden">\n        Plan selected\n      </span>',
        selectedHtml = '<div class="choose-item__selected-label"></div>',
        itemWrap = $(this).closest('.choose__item-wrap'),
        buttonWrap = $(this).closest('.choose-button-wp');

    // adding selected label
    itemWrap.addClass('is-active').append(selectedHtml);

    // adding 'plan selected'
    buttonWrap.append(successHtml);
    $('.choose__variants').addClass('has-activated-item');
  });

  /*
    help icons clicking show help text
  */
  $('.js-input-help-icon').click(toggleHandler);

  function toggleHandler() {
    var eventTarget = $(this),
        toggleTarget = eventTarget.closest('.input-text__help').find('.input-text__help-text');

    toggleTarget.fadeIn('slow');
    eventTarget.off('click', toggleHandler); // will be in future

    setTimeout(bodyClick, 100); // listen body for closing click

    function bodyClick() {
      $('body').on('click', hideInfo);
    }

    function hideInfo(e) {
      $('body').off('click', hideInfo); // clear

      // if click was on text, return and again listen body
      if (e.target === toggleTarget[0]) {
        bodyClick();
        return;
      }

      // if not hidden - hide it
      if (!toggleTarget[0].hidden) {
        toggleTarget.fadeOut();

        // Previously click was taked off.
        // Info is hidden, so will catch this button-click again.
        eventTarget.click(toggleHandler);
      }
    }
  }
});