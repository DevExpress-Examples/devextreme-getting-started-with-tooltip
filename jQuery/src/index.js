$(() => {
  $('#like').dxButton({
    icon: 'like',
    stylingMode: 'outlined',
    type: 'normal',
  });

  $('#like-tooltip').dxTooltip({
    target: '#like',
    showEvent: 'mouseenter',
    hideEvent: 'mouseleave',
    contentTemplate(data) {
      return $('<div>').text('Like');
    },
  });

  $('#trash').dxButton({
    icon: 'trash',
    stylingMode: 'outlined',
    type: 'normal',
  });

  $('#trash-tooltip').dxTooltip({
    target: '#trash',
    showEvent: 'mouseenter',
    hideEvent: 'mouseleave',
    contentTemplate(data) {
      data[0].parentElement.classList.add('red-popup');
      return $('<div>').text('Delete');
    },
  });

  $('#info').dxButton({
    icon: 'info',
    stylingMode: 'outlined',
    type: 'normal',
  });

  $('#info-tooltip').dxTooltip({
    target: '#info',
    showEvent: 'mouseenter',
    hideEvent: 'mouseleave',
    contentTemplate(data) {
      data[0].parentElement.classList.add('blue-popup');
      return $('<div>').text('Info');
    },
  });
});
