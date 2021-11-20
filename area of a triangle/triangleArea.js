let btn = document.getElementById('btn').addEventListener('click', function() {
    let height = document.getElementById('h').value;
    let long = document.getElementById('l').value;
    let basis = document.getElementById('b').value;
    let area = height * basis / 2
    document.getElementById('text').innerText = area;
});