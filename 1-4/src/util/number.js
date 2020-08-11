import isPrime from './isPrime'
import { randomColor } from './randomColor'
// 产生一个num 对象
export default class Num {
  constructor(duration = 200) {
    this.num = 1
    this.duration = duration
    this.timer = null
    this.cb = null
  }
  start() {
    if(this.timer) {
      return
    }
    this.timer = setInterval(() => {
      this.cb && this.cb(this.num, randomColor(), isPrime)
      this.num++
    }, this.duration);
  }
  stop() {
    clearInterval(this.timer)
    this.timer = null
  }
}