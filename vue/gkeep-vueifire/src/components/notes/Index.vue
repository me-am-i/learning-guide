<template>
  <ol>
    <li>twk</li>
    <li v-for="note in notes">
      <pre>
        {{note | json}}
      </pre>
    </li>
  </ol>
</template>

<script>
  import Firebase from 'firebase'
  export default {
    data () {
      return {
        notes: []
      }
    },
    ready () {
      const firebase = new Firebase('https://gkeep-vueifire-6d2db.firebaseio.com')
      firebase.child('notes').on('child_added', (snapshot) => {
        const note = snapshot.val()
        this.notes.unshift(note)
      })
    }
  }
</script>

<style>

</style>
