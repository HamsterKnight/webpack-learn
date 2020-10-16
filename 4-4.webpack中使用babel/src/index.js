const a = 'c';

const func = async () => {
  return await new Promise(resolve =>{
    setTimeout(() => {
      resolve({data: '数据对象'})
    }, 3000);
  })
}
console.timeEnd('结束')

