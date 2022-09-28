import { createApp } from 'vue'
import App from './App.vue'
// 屏幕改变添加自适应
import {setDomFontSize} from './utils/dom'
setDomFontSize()

createApp(App).mount('#app')
