// Auto expand section on the FAQ page when linked directly
window.onload = function () {
    if (window.location.pathname.endsWith('/frequently-asked-questions')) {
        const bookmark = window.location.hash.substr(1);
        const details = document.getElementById(bookmark);
        details.open = true;
    }
};
