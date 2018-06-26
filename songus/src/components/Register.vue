<template>
    <div>
        <h1>Register</h1>
        <input
            type="email"
            name="email"
            placeholder="Email"
            v-model="email" /> <br />
        <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            v-model="password" /><br />
        <button
            @click="register">Register</button>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<style scoped>
</style>
