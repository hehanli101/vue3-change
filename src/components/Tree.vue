<template>
  <quick :data="left" v-if="left.length"></quick>
  <li>{{ flag }}</li>
  <quick :data="right" v-if="right.length"></quick>
</template>

<script>
export default {
  name: 'quick',
  props: ['data'],
  setup(props) {
    // eslint-disable-next-line vue/no-setup-props-destructure
    const flag = props.data[0]
    const left = []
    const right = []
    props.data.slice(1).forEach((item) => {
      item > flag ? right.push(item) : left.push(item)
    })
    return { left, flag, right }
  },
}
</script>

<style></style>
