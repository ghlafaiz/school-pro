form.addEventListener('submit', function (e) {
    e.preventDefault();

    // جمع بيانات النموذج
    const formData = new FormData(form);
    const entries = Object.fromEntries(formData.entries());

    // حفظ البيانات في localStorage
    localStorage.setItem('surveyData', JSON.stringify(entries));

    // عرض رسالة نجاح
    successMessage.style.display = 'block';
    console.log('تم حفظ البيانات محليًا:', entries);

    alert('تم إرسال النموذج بنجاح!\nتم حفظ البيانات في localStorage.');
});
const savedData = localStorage.getItem('surveyData');
if (savedData) {
    console.log('البيانات المسترجعة:', JSON.parse(savedData));
}
