window.onload = function () {
  const div = document.querySelector('.hero')
  // div.style.width = '100vw'
  var pObjs = div.childNodes;
  if (pObjs) {
    for (var i = pObjs.length - 1; i >= 0; i--) { // 一定要倒序，正序是删不干净的，可自行尝试
      div.removeChild(pObjs[i]);
    }
  }
  const iframe = document.createElement('iframe')
  iframe.style.width = '100%'
  iframe.style.height = '100%'
  iframe.src = 'https://qingblogs.github.io/people/index.html'
  div.appendChild(iframe)
}
