document.querySelector('input[type="date"]').addEventListener('click', function() {
    this.showPicker();  // Mở trình chọn ngày
});

document.querySelector('.grid-container').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        let bill_no = e.target.getAttribute('data-bill_no');
        alert('XÓA dòng');
        console.log(bill_no);

    }
    if (e.target.classList.contains('edit-btn')) {
        let bill_no = e.target.getAttribute('data-bill_no');
        alert('SỬA dòng');
        console.log(bill_no);
    }
});

document.querySelector('.button-import').addEventListener('click', function(e) {
    e.preventDefault()
    window.location.href = 'import-bill-page.html';
})