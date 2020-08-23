import LocalStorage from './LocalStorage'
import { onMounted, onUnmounted } from 'vue'

function drag() {
  const pos = LocalStorage(pos, {}, { x: 20, y: 20 })
  let dragging = false
  let startX = 0
  let startY = 0
  let x1 = 0
  let y1 = 0
  function start(event) {
    startX = event.clientX
    startY = event.clientY
    x1 = pos.x
    y1 = pos.y
    document.addEventListener('mousemove', move, false)
    document.addEventListener('mouseup', end, false)
  }

  function move(event) {
    dragging = true
    if (dragging) {
      pos.x = x1 + event.clientX - startX
      pos.y = y1 + event.clientY - startY
    }
  }
  function end() {
    this.dragging = false
    document.removeEventListener('mousemove', move, false)
    document.removeEventListener('mouseup', end, false)
  }
  onMounted(() => {})
  onUnmounted(() => {})
  return {
    start,
    pos,
  }
}

export { drag }
