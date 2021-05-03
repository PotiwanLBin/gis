export default function ({ $axios }, inject) {
    // Create a custom axios instance
    const api = $axios.create({
    })
  
    // Set baseURL to something different
    // api.setBaseURL('/')
  
    // Inject to context as $api
    inject('localAxios', api)
  }
  