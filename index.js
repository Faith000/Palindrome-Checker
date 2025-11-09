const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

function normalizeString(str) {
  return str
    .toLowerCase()
    .replace(/\s+/g, '') 
    .replace(/[\p{P}\p{S}]/gu, '');
}

function isPalindrome(str){
   const cleaned = normalizeString(str);
   const reversed = cleaned.split('').reverse().join('');
      return cleaned === reversed;
}

checkButton.addEventListener('click', () => {
      const value = textInput.value;
      if (!value.trim()) {
        result.textContent = "Please input a value";
        alert('Please input a value');
      }
      if (isPalindrome(value)) {
        result.textContent = `${value} is a palindrome!`;
        result.style.color = "green";
      } else {
        result.textContent = `${value} is not a palindrome.`;
        result.style.color = "red";
      }
    });

