import Vue from 'vue'

// 创建一个create函数，可以动态生成组件实例，并且挂载至body上
// Component：组件配置对象
export function create(Component,props){
    // 借用Vue的构造函数来动态生成这个组件实例
    const vm = new Vue({
        render(h){
            // h是createElement的别名，可以返回一个虚拟DOM,VNode,虚拟DOM通过$mount得到真实的DOM，挂载实现真实的DOM
            return h(Component,props)
        }
    })

    //通过挂载得到真实DOM
    vm.$mount()

    // 通过$el属性得到真实的DOM
    document.body.appendChild(vm.$el)

    // 组件实例返回
 
    const comp = vm.$children[0];

    // 销毁方法
    comp.remove= ()=>{
        document.body.removeChild(vm.$el)
        comp.$destroy();
    }

    return comp;

}

