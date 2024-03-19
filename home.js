function saveData() {
    var name = document.getElementById("name").value;
    var nickname = document.getElementById("nickname").value;

    if (name === '' || nickname === '') {
      alert("Please enter both name and nickname.");
      return;
    }

    var data = {
      name: name,
      nickname: nickname
    };

    localStorage.setItem('personalInfo', JSON.stringify(data));
    window.location.href = 'index.html';
  }