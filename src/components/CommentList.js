// import Comment from './Comment';
import { h } from 'vue';
// const CommentList = (props) => {
//   console.log('props', props);
//   return props.list ? props.list.map((comment) => <Comment {...comment}/>) : '暂无评论';
// };

const CommentList = () => {
  console.log('props::', this);
  return h('div', null, 'hhaah');
};
export default CommentList;
