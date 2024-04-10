
document.getElementById('clickBtn').addEventListener('click', function() {
    alert('Button clicked!');
  });
  document.getElementById('hoverDiv').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'orange';
  });
  document.getElementById('hoverDiv').addEventListener('mouseout', function() {
    this.style.backgroundColor = 'yellow';
  });
  document.getElementById('inputField').addEventListener('input', function() {
    document.getElementById('outputText').textContent = 'You typed: ' + this.value;
  });
  document.addEventListener('keypress', function(event) {
    alert('Key pressed: ' + event.key);
  });
  