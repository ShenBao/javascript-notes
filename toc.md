

246

var ul_tag = $('<div></ul>')
        .insertAfter('#content h1')
        .addClass('content-toc')
        .attr('id', 'content-toc');

336

    $('#content-toc').toc({
      'selectors': 'h2,h3,h4,h5,h6', //elements to use as headings
      'container': '#content'
    });