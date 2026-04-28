// Test TEMA del SISTEMA //

(function () {
    try {
        const saved = localStorage.getItem('theme');
        if (saved === 'dark' || saved === 'light') {
            document.documentElement.dataset.theme = saved;
        } else if (globalThis.matchMedia?.('(prefers-color-scheme: dark)').matches) {
            document.documentElement.dataset.theme = 'dark';
        } else {
            document.documentElement.dataset.theme = 'light';
        }
    } catch (e) {
        console.error('Theme initialization error:', e);
    }
})();