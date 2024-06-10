import PageHisbody from "./PageHisbody.vue"
import FooterButton from "./FooterButton.vue"
import LoginToast from "./LoginToast.vue"
const components = [
  PageHisbody,
  FooterButton,
  LoginToast
]
export const GlobalComponents = {
  install: (app) => {
    components.forEach(component => {
      app.component(component.name, component)
    })
  }
}