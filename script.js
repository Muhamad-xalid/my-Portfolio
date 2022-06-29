function resize() {
    var url = document.getElementById('url').value
    var height = document.getElementById('height').value
    var width = document.getElementById('width').value
  
    var img = document.getElementById('img')
    var urltext = document.getElementById('urltext')
    
        let lastindex = url.lastIndexOf('/');
        let lastpart = url.substring(lastindex)

        let generateurl = `https://source.unsplash.com${lastpart}/${width}x${height}`
       alert(generateurl);

       img.src = generateurl
       urltext.innerHTML = generateurl


}