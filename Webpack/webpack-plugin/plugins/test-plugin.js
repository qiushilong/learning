
class TestPlugin{
  constructor(){
    console.log('constructor')
  }

  apply(compiler){
    console.log('apply')
  }
}

module.exports = TestPlugin;