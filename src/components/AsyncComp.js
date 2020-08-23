import { defineAsyncComponent } from 'vue'
import LoadingComponent from '../components/LoadingComponent.vue'
import ErrorComponent from '../components/ErrorComponent.vue'

const AsyncComp = defineAsyncComponent({
  loader: () => import('../components/AsyncChild.vue'),
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
  delay: 1000,
  timeout: 3000,
  suspensible: false,
  onError(error, retry, fail, attempts) {
    if (error.message.match(/fetch/) && attempts <= 3) {
      retry()
    } else {
      fail()
    }
  },
})

export default AsyncComp
