$(document).ready(function() {
    var $lightbox = $('#lightbox');

    $('[data-target="#lightbox"]').on('click', function(event) {
        var title = $(this).parent().find('.item-title');
        var prizes = $(this).parent().find('.item-prizes');
        var $img = $(this),
            src = $img.attr('src'),
            alt = $img.attr('alt'),
            css = {
                'Width': '100%',
                'Height': '100%'
            };

        $lightbox.find('.close').addClass('hidden');
        $lightbox.find('img').attr('src', src);
        $lightbox.find('img').attr('alt', alt);
        $lightbox.find('img').css(css);
        $lightbox.find('.item-title').text(title.text());
        $lightbox.find('.item-prizes').text(prizes.text());
    });

    $lightbox.on('shown.bs.modal', function (e) {
        var $img = $lightbox.find('img');

        $lightbox.find('.modal-dialog').css({'width': $img.width()});
        $lightbox.find('.close').removeClass('hidden');
    });
});