document.addEventListener('DOMContentLoaded', function() {
    // Handle all navigation links
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            // Only handle internal links
            if (this.href.startsWith(window.location.origin)) {
                e.preventDefault();
                
                // Load the new page content
                fetch(this.href)
                    .then(response => response.text())
                    .then(html => {
                        // Create a temporary element to parse the HTML
                        const parser = new DOMParser();
                        const doc = parser.parseFromString(html, 'text/html');
                        
                        // Update the content area
                        const newContent = doc.querySelector('.content');
                        if (newContent) {
                            document.querySelector('.content').innerHTML = newContent.innerHTML;
                        }
                        
                        // Update the URL without reloading
                        window.history.pushState({}, '', this.href);
                    })
                    .catch(error => console.error('Error loading page:', error));
            }
        });
    });
}); 