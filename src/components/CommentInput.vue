<template>
  <div class="comment-input">
    <div class="comment-field">
      <span class="comment-field-name">用户名：</span>
      <div class="comment-field-input">
        <input v-model="data.name" />
      </div>
    </div>
    <div class="comment-field">
      <span class="comment-field-name">评论内容：</span>
      <div class="comment-field-input">
        <textarea v-model="data.content" />
      </div>
    </div>
    <div class="comment-field-button">
      <button @click="publish">发布</button>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
//import emitter from "@/utils/eventBus";

export default {
  props: {},
  setup(props, ctx) {
    let uuid = 0;
    const data = reactive({
      content: "",
      name: ""
    });
    function publish() {
      if (data.content && data.name) {
        ctx.emit("add-comment", {
          id: (uuid += 1),
          name: data.name,
          content: data.content,
          createTime: Date.now()
        });
        data.content = "";
        data.name = "";
      }
    }
    return {
      data,
      publish
    };
  }
};
</script>

<style></style>
