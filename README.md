1.更好的 Tree-shaking 全局 API
2.componsition API
3.Fragment Teleport, Suspense
4.Performance
5.custom api

1.setup ref reactivi (watch watcheffect, effect )computed toRefs Onmounted, unOnmoiunted
2.render function 2 种/JSX flat
3.Fragment 不需要根节点 telport portal 浏览器准备吧这个作为原生元素，渲染 vue 组件内容到指定的 dom suspense 异步组件 4.删除 v-bind.4.sync 语法 v-modle 多个 自定义指令 取消了 v-on 的 keycode 删除了 filter transition calss 明改了

## setup 新的钩子，是一个组件的选项，作为 componsition api 的入口，暴露 API 给 options API 使用

没有 this

## 也可以理解成一个生命周期， 最早执行

## router

#### router-view

1. 可以直接将 router 上的参数作为 props 传递；通过判断 router 是否存在，显示 404 页面
2. 同时使用 keep-alive 和 transition

### router-link

1. 移除 tag 属性 默认渲染 a 标签 tag="li"
2. 移除 event = "mouseover"

### router

1. 动态删除添加路由
2. mate merge 父级到子级

### global api tree-shaking

### reactivi-api setup lifecircle-api

1. 独立的库(effect)
2. ref,reactivi,watchEffect,toRef,computed
3. onMounted...

### functional component

1. 参数平级
2. h

###

const routes = [
{
path: '/parent/:id',
children: [
// empty child
{ path: '' },
// child with id
{ path: 'child/:id' },
{ path: 'child-second/:id' }
]
}
]
// /parent/1/child/2
