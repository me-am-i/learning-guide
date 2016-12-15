// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Firebase from 'firebase'

let firebase = new Firebase('https://gkeep-vueifire-6d2db.firebaseio.com')

firebase.child('notes').set([
  {title: 'Hello world', content: 'Lorem ipsum'}
])

firebase.child('notes').on('value', (snapshot) => {
  let notes = snapshot.val()
  console.log(notes)
  window.alert(notes[0].title)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
