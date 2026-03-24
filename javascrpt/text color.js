document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('btn');
    
    var title = document.getElementById('title');

    if (!btn || !title) {
        // Elements not found; nothing to do.
        return;
    }

    btn.addEventListener('click', function () {
        title.style.color = 'blue';
    });
});