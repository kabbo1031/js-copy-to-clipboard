function copyText(){
  const input = document.getElementById('text');
  input.select();
  navigator.clipboard.writeText(input.value);

  document.getElementById('msg').innerText = 'Copied ✔';
}
