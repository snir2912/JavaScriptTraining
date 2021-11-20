let btn = document.getElementById('btn').addEventListener('click', function() {
    let height = parseInt(document.getElementById('h').value);
    let long = parseInt(document.getElementById('l').value);
    let basis = parseInt(document.getElementById('b').value);
    let s = (height + basis + long) / 2;
    console.log(s);
    let area = Math.sqrt(s * ((s - height) * (s - long) * (s - basis)));
    console.log(area);
    document.getElementById('text').innerText = area;
});