// index.html
function toggleFaq(btn) {
        const answer = btn.nextElementSibling;
        const isOpen = answer.style.display === 'block';
        answer.style.display = isOpen ? 'none' : 'block';
        btn.querySelector('span').textContent = isOpen ? '+' : '-';
    }
