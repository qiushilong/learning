import $ from 'jquery'
import './css/1.css'
import './css/1.less'
import './css/1.scss'

//----------------------------------
import Vue from 'vue'
// //导入单文件组件
import APP from './components/APP.vue'


$(
    function () {
        $('li:odd').css('backgroundColor', 'yellow');
        $('li:even').css('backgroundColor', 'lightblue');


        //js高级语法
        class Person {
            static info = 'aaa';
        }

        console.log(Person.info);




        const vm = new Vue({
            el: '#app',
            render: h => h(APP)
        })

    }
)

