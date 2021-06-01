jQuery(function () {
    // Tooltip
    
    new jBox('Modal', {
      attach: '#Modal-3',
      width: 450,
      height: 250,
      closeButton: 'title',
      animation: false,
      title: 'AJAX request',
      ajax: {
        url: 'https://softimage.ir/dl/softimage.xml',
        data: {
          id: '2009',
          name: 'softimage_2009'
        },
        method: 'post',
        reload: 'strict',
        setContent: false,
        beforeSend: function () {
          this.setContent('');
          this.setTitle(
            '<div class="ajax-sending">Request  Download Link...</div>'
          );
        },
        complete: function () {
          this.setTitle('<div class="ajax-complete">Request complete</div>');
        },
        success: function (response) {
          this.setContent(
            '<div class="ajax-success">Response:<tt>' +
              JSON.stringify(response) +
              '</tt></div>'
          );
        },
        error: function () {
          this.setContent(
            '<div class="ajax-error">Oops, something went wrong</div>'
          );
        }
      }
    });

  });
  