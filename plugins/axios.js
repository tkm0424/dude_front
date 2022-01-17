export default ({ $axios, $auth, isDev }) => {
  // リクエストログ
  $axios.onRequest((config) => {
    if (isDev) {
      console.log(config)
    }
  })
  // レスポンスログ
  $axios.onResponse((config) => {
    if (isDev) {
      console.log(config)
    }
  })
  // エラーログ
  $axios.onError((e) => {
    console.log(e.response)
  })
}
