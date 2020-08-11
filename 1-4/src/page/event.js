import Num from '../util/number'
import { createNum } from './appendNum'
var isStart = true
var num = new Num()
num.cb = createNum
num.start()
window.onclick = function () {
  if(isStart) {
    num.stop()
    isStart = false
  } else {
    
    num.start()
    isStart = true
  }
}