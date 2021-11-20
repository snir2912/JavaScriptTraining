let btn = document.getElementById('btn').addEventListener('click', function() {
    let height = document.getElementById('h').value;
    let long = document.getElementById('l').value;
    let basis = document.getElementById('b').value;
    let s = height + basis + long / 2
    let area = Math.sqrt(s * (s - height)(s - long)(s - basis))
    document.getElementById('text').innerText = area;
});