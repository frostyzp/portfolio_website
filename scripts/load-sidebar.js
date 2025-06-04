// Cache for sidebar content
let sidebarCache = null;

// Function to load sidebar content
async function loadSidebar() {
    if (sidebarCache) {
        document.getElementById('sidebar-placeholder').innerHTML = sidebarCache;
        return;
    }

    try {
        const response = await fetch('components/sidebar.html');
        const data = await response.text();
        sidebarCache = data;
        document.getElementById('sidebar-placeholder').innerHTML = data;
    } catch (error) {
        console.error('Error loading sidebar:', error);
    }
}

// Load sidebar only once when the site first loads
if (!window.sidebarLoaded) {
    fetch('components/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-placeholder').innerHTML = data;
            window.sidebarLoaded = true;
        })
        .catch(error => console.error('Error loading sidebar:', error));
}

// Handle page transitions
window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        loadSidebar();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('components/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading sidebar:', error));
}); 