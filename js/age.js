document.getElementById('calculateBtn').addEventListener('click', () => {
    const birthdateInput = document.getElementById('birthdate').value;
    const resultDiv = document.getElementById('result');

    if (!birthdateInput) {
        resultDiv.textContent = 'Please select your birthdate.';
        return;
    }

    const birthDate = new Date(birthdateInput);
    const today = new Date();

    if (birthDate > today) {
        resultDiv.textContent = 'Birthdate cannot be in the future.';
        return;
    }

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    resultDiv.textContent = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
});
