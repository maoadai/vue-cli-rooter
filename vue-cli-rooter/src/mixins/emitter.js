//广播自上而下的派发事件
// componentName：组件名称  eventName：事件名称  params 参数数组
function broadcast(componentName, eventName, params) {
    // 遍历所有的子元素，如果子元素componentName与传入的相同则派发事件
    this.$children.forEach(child => {
      var name = child.$options.componentName;
  
      if (name === componentName) {
        child.$emit.apply(child, [eventName].concat(params));
      } else {
        broadcast.apply(child, [componentName, eventName].concat([params]));
      }
    });
  }
  export default {
    methods: {
        // 冒泡查找componentName相同的组件并派发事件 params是数组
      dispatch(componentName, eventName, params) {
        var parent = this.$parent || this.$root;
        var name = parent.$options.componentName;
        // 向上查找知道找到componentName相同的组件
        while (parent && (!name || name !== componentName)) {
          parent = parent.$parent;
  
          if (parent) {
            name = parent.$options.componentName;
          }
        }
        // 如果找到了就派发事件
        if (parent) {
          parent.$emit.apply(parent, [eventName].concat(params));
        }
      },
      broadcast(componentName, eventName, params) {
        broadcast.call(this, componentName, eventName, params);
      }
    }
  };