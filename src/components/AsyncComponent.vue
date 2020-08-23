<template>
  <div>
    我是异步组件
  </div>
</template>

<script>
function sleep(timeout) {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}

export default {
  name: 'AsyncComponent',
  props: {
    timeout: {
      type: Number,
    },
  },
  async setup(props) {
    await sleep(props.timeout)
  },
}
</script>
