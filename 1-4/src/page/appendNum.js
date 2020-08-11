import { getRandom } from '../util/randomColor'
var container = document.getElementById('divContainer')
var divCenter = document.getElementById('divCenter')

export function createNum(n, color, isPrime) {
  var span = document.createElement('span')
  span.innerText = n
  if(isPrime(n)) {
    span.style.color = color
    createCenterNum(n, color, isPrime)
  }
  container.appendChild(span)
  createCenterNumber(n)
}
// 产生中间的数字
function createCenterNumber(n) {
  divCenter.innerText = n
}

function createCenterNum(n, color) {
  var div = document.createElement('div')
  div.classList.add('center')
  div.innerText = n
  document.body.appendChild(div)
  getComputedStyle(div).left; //只要读取某个元素的位置或尺寸信息，则会导致浏览器重新渲染 reflow
  div.style.color = color
  div.style.transform = `translate(${getRandom(-150, 150)}px, ${getRandom(-150, 150)}px)`
  div.style.opacity = 0
  
}
