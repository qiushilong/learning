const express = require('express');
const dao = require('./dao')
const app = express();
const port = 3000;

//配置解析表单请求体:application/json
app.use(express.json())

// 查询任务列表
app.get('/todos', async (req, res) => {
  let data_str = await dao.getData();
  if (data_str == 'error')
    return res.send('服务器内部错误');
  let data = JSON.parse(data_str);
  res.send(data.todo_list);
});

//根据id查询单个任务
app.get('/todos/:id', async (req, res) => {
  let index = req.params.id;
  let data_str = await dao.getData();
  if (data_str == 'error')
    return res.send('服务器内部错误');
  let data = JSON.parse(data_str);
  if (!data.todo_list[index])
    return res.send('不存在');
  res.send(data.todo_list[index]);
})

//添加任务
app.post('/todos', async (req, res) => {
  console.log(req.body);
  let obj = {
    "task": req.body.task,
    "date": req.body.date
  }
  console.log(obj);
  let data_str = await dao.getData();
  if (data_str == 'error')
    return res.status(500).send('服务器内部错误');
  let data = JSON.parse(data_str);
  data.todo_list.push(obj);
  console.log(data);

  dao.setData(JSON.stringify(data));
  res.send('写入成功');
})

app.patch('/todos', (req, res) => {
  res.send('修改任务');
})
app.delete('/todos/:id', (req, res) => {
  res.send('删除任务');
})

app.listen(port, () => {
  console.log(`app run at http://localhost:${port}/`);
})