const url = '/api/student/findAll?appkey=doubi_1559452142304'
fetch(url).then(resp => resp.json()).then(resp => {
  console.log(resp)
})
