document.getElementById('decodeForm').addEventListener('submit', function(event) {
 event.preventDefault();
 showLoader();
 const link = document.getElementById('link').value;
 setTimeout(() => {
 decodeSendGridLink(link);
 hideLoader();
 }, 1000);
});

document.getElementById('emailForm').addEventListener('submit', function(event) {
 event.preventDefault();
 showLoader();
 const newEmail = document.getElementById('newEmail').value;
 setTimeout(() => {
 changeEmailAddress(newEmail);
 hideLoader();
 }, 1000);
});

function decodeSendGridLink(link) {
 const url = new URL(link);
 const upn = url.searchParams.get('upn');
 if (upn) {
 const decodedData = atob(upn);
 document.getElementById('decodedData').textContent = decodedData;
 document.getElementById('result').classList.remove('hidden');
 } else {
 alert('Invalid SendGrid link');
 }
}

function changeEmailAddress(newEmail) {
 const decodedData = document.getElementById('decodedData').textContent;
 const modifiedData = decodedData.replace(/old_email@example.com/g, newEmail);
 document.getElementById('modifiedData').textContent = modifiedData;
 document.getElementById('modifiedData').classList.remove('hidden');
}

function showLoader() {
 document.getElementById('loader').classList.remove('hidden');
}

function hideLoader() {
 document.getElementById('loader').classList.add('hidden');
}
