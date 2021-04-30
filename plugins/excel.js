import excel from "vue-json-excel";

export default (context, inject) => {
  inject('excel', excel)
}
