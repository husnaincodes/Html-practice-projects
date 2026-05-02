// Bookmark Website JavaScript

// Add smooth scroll behavior to links
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Visual feedback when link is clicked
        this.style.animation = 'pulse 0.5s ease-in-out';
        
        // Log bookmark click
        console.log(`📌 Bookmark clicked: ${this.textContent}`);
    });
});

// Add animation to list items on page load
window.addEventListener('load', function() {
    const listItems = document.querySelectorAll('li');
    listItems.forEach((item, index) => {
        item.style.animation = `fadeIn 0.6s ease-out ${index * 0.1}s both`;
    });
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    const links = Array.from(document.querySelectorAll('a'));
    const currentIndex = links.indexOf(document.activeElement);
    
    if (e.key === 'ArrowRight' && currentIndex < links.length - 1) {
        links[currentIndex + 1].focus();
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        links[currentIndex - 1].focus();
    }
});

// Add hover count feature
let hoverCount = 0;
document.querySelectorAll('li').forEach(item => {
    item.addEventListener('mouseenter', function() {
        hoverCount++;
        if (hoverCount % 5 === 0) {
            console.log(`✨ You've hovered over ${hoverCount} bookmarks!`);
        }
    });
});

// Add right-click context menu for bookmarks
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        alert(`📌 Bookmark: ${this.textContent}\n🔗 URL: ${this.href}`);
    });
});

// Add search/filter functionality (bonus)
function filterBookmarks(searchTerm) {
    const links = document.querySelectorAll('a');
    let found = 0;
    
    links.forEach(link => {
        const text = link.textContent.toLowerCase();
        const parent = link.parentElement;
        
        if (text.includes(searchTerm.toLowerCase())) {
            parent.style.display = 'block';
            parent.style.animation = 'slideIn 0.3s ease-out';
            found++;
        } else {
            parent.style.display = 'none';
        }
    });
    
    if (found === 0 && searchTerm.length > 0) {
        console.log(`No bookmarks found for "${searchTerm}"`);
    }
}

// Make filterBookmarks accessible globally
window.filterBookmarks = filterBookmarks;

// Add page statistics on console
window.addEventListener('load', function() {
    const totalBookmarks = document.querySelectorAll('a').length;
    const categories = document.querySelectorAll('h2').length;
    
    console.log('%c📚 Bookmarks Dashboard', 'color: #667eea; font-size: 16px; font-weight: bold;');
    console.log(`Total Bookmarks: ${totalBookmarks}`);
    console.log(`Categories: ${categories}`);
    console.log('%cTip: Use filterBookmarks("keyword") to search bookmarks', 'color: #764ba2; font-style: italic;');
});

// Add keyboard shortcut hint
console.log('%c💡 Keyboard Tips:', 'color: #667eea; font-weight: bold;');
console.log('• Use Arrow Keys to navigate bookmarks');
console.log('• Right-click on any bookmark for details');
console.log('• Use filterBookmarks("search") in console to filter');

// Pulse animation CSS injection
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
`;
document.head.appendChild(style);

// Add performance timer
console.time('📊 Page Load Time');
window.addEventListener('load', function() {
    console.timeEnd('📊 Page Load Time');
});
