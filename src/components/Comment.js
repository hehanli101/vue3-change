import { h } from 'vue'
import emitter from '@/utils/eventBus'

const handleTimeString = (createTime) => {
  const duration = (+Date.now() - createTime) / 1000
  return duration > 60
    ? `${Math.round(duration / 60)}分钟前`
    : `${Math.round(Math.max(duration, 1))}秒前`
}

export const Comment1 = (props) => {
  // ctx: { slots, attrs, emit }
  const { name, content, createTime } = props.data
  const deleteFn = () => {
    emitter.emit('deleteComments', props.index)
  }
  return h('div', { class: 'comment' }, [
    h('div', { class: 'comment-user' }, [
      h('span', { class: 'comment-username' }, `${name}：`),
    ]),
    h('p', null, content),
    h(
      'span',
      { class: 'comment-delete', onClick: deleteFn, id: 'comment-id' }, // on:{click: xxx},attrs: {id: xxx}
      '删除',
    ),
    h('span', { class: 'comment-createdtime' }, handleTimeString(createTime)),
  ])
}
const Comment = {
  props: ['data', 'index'],
  setup(props) {
    const { name, content, createTime } = props.data
    const deleteFn = () => {
      emitter.emit('deleteComments', props.index)
    }
    return () => (
      <div class="comment">
        <div class="comment-user">
          <span class="comment-username">{name}：</span>
        </div>
        <p>{content}</p>
        <span class="comment-delete" onClick={deleteFn}>
          删除
        </span>
        <span class="comment-createdtime">{handleTimeString(createTime)}</span>
      </div>
    )
  },
}

export const Comment2 = {
  props: ['data', 'index'],
  render(_this) {
    const { name, content, createTime } = _this.data
    const deleteFn = () => {
      emitter.emit('deleteComments', _this.index)
    }
    return h('div', { class: 'comment' }, [
      h('div', { class: 'comment-user' }, [
        h('span', { class: 'comment-username' }, `${name}：`),
      ]),
      h('p', null, content),
      h(
        'span',
        { class: 'comment-delete', onClick: deleteFn, id: 'comment-id' }, // on:{click: xxx},attrs: {id: xxx}
        '删除',
      ),
      h('span', { class: 'comment-createdtime' }, handleTimeString(createTime)),
    ])
  },
}

// const Comment = defineComponent((props) => {
//   console.log('props', props.name)
//   const { name, content, createTime } = props
//   const deleteFn = () => {
//     emitter.emit('deleteComments', props.index)
//   }
//   return () => (
//     <div class="comment">
//       <div class="comment-user">
//         <span class="comment-username">{name}</span>
//       </div>
//       <p>{content}</p>
//       <span class="comment-delete" onClick={deleteFn}></span>
//       <span class="ccomment-createdtime">{handleTimeString(createTime)}</span>
//     </div>
//   )
// })

export default Comment
