document.addEventListener("DOMContentLoaded", () => {
  const subBtn = document.getElementById('subBtn');

  if (!subBtn) {
    console.error("Submit button (#subBtn) not found in the DOM.");
    return;
  }

  subBtn.addEventListener('click', async () => {
    location.reload();
    
    const nameInput = document.getElementById('nameIn');
    const emailInput = document.getElementById('emailIn');
    const msgInput = document.getElementById('msgIn');

    if (!nameInput || !emailInput || !msgInput) {
      console.error("One or more input fields are missing in the DOM.");
      return;
    }

    const name = nameInput.value;
    const email = emailInput.value;
    const msg = msgInput.value;

    if (!name || !email || !msg) {
      alert("Please fill out all fields!");
      return;
    }

    const data = { name, email, msg };

    try {
      const response = await fetch('https://hacklumina.manancoder.hackclub.app/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      console.log(data);

      if (response.ok) {
        const result = await response.json();
        alert(result.message);
      } else {
        alert('Failed to submit the form.');
      }
    } catch (error) {
      alert('Failed to submit the form.');
    }
  });
});
