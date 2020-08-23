<template>
  <div class="root">
    <div class="child" ref="commentRef">
      <comment-input @add-comment="addComment"></comment-input>
      <p class="coment-num">
        评论数：
        <span>{{ num }}</span>
      </p>
      <p class="coment-num">
        删除评论数：
        <span>{{ deletenum }}</span>
      </p>
      <div v-for="(item, index) in comments" :key="item.id">
        <comment :data="item" :index="index"></comment>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from "@/utils/eventBus";
import LocalStorage from "@/utils/LocalStorage";
import CommentInput from "@/components/CommentInput.vue";
import Comment from "@/components/Comment";
import { watch, computed, onMounted, ref } from "vue";
import { useRef } from "../hooks/index"; // useReactive
import { useStore } from "vuex";
export default {
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  components: { CommentInput, Comment },
  setup() {
    console.log("setup");
    // let [comments, setComments] = useReactive([]);
    const comments = LocalStorage("comments", []);
    const [num, setNum] = useRef(comments.length);
    const [num1, setNum1] = useRef(comments.length);
    const store = useStore();
    const commentRef = ref("");
    function addComment(data) {
      setNum1(num1.value + 1);
      // setComments(comments.length, data);
      comments.push(data);
      store.commit("SET-COMMENTS", data);
      console.log("store", store.state);
    }
    function deleteComment(index) {
      comments.splice(index, 1);
    }
    onMounted(() => {
      console.log("commentRef", commentRef.value);
    });
    const deletenum = computed(() => num1.value - num.value);
    emitter.on("deleteComments", deleteComment); // Vue实例移除了$on,$off,$once 推荐使用mitt
    //const stopEffect = watchEffect(() => setNum(comments.length));
    const stopEffect = watch(
      () => comments.length,
      val => {
        setNum(val);
        if (val > 4) {
          stopEffect();
        }
      }
    );
    return {
      comments,
      num,
      addComment,
      deletenum,
      commentRef
    };
  }
};
</script>

<style lang="less">
.root {
  display: flex;
  justify-content: center;
}
.child {
  width: 50%;
}
.coment-num {
  text-align: right;
  margin-right: 20px;
  span {
    color: red;
  }
}
</style>
