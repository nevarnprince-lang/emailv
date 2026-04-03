document.getElementById('decodeForm').addEventListener('submit', function(event) {
 event.preventDefault();
 const link = document.getElementById('link').value;
 decodeSendGridLink(link);
});

document.getElementById('emailForm').addEventListener('submit', function(event) {
 event.preventDefault();
 const newEmail = document.getElementById('newEmail').value;
 changeEmailAddress(newEmail);
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
