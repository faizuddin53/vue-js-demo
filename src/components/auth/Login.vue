<template>
  <div class="auth-container">
    <div class="auth-card">
      <h2>Login</h2>

      <form @submit.prevent="login">
        <div class="form-group">
          <label>Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="Enter password"
            required
          />
        </div>

        <button class="btn" type="submit">Login</button>
      </form>

      <p class="switch">
        Don’t have an account?
        <router-link to="/signup">Signup</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "../composables/useUser";

const router = useRouter();
const autoStore = useAuth();
const email = ref("");
const password = ref("");

function login() {
  const isLogin = autoStore.login({
    email: email.value,
    password: password.value,
  });
  if (isLogin) {
    router.push("/");
  } else {
    alert("you enter wrong deatils , try with correct userdata");
  }
}
</script>

<style scoped>
.auth-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.auth-card {
  background: #fff;
  padding: 30px;
  width: 350px;
  border-radius: 10px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-size: 14px;
  color: #555;
}

input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border-radius: 6px;
  border: 1px solid #ccc;
  outline: none;
}

input:focus {
  border-color: #667eea;
}

.btn {
  width: 100%;
  padding: 12px;
  background: #667eea;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

.btn:hover {
  background: #5a67d8;
}

.switch {
  text-align: center;
  margin-top: 15px;
}

.switch a {
  color: #667eea;
  text-decoration: none;
  font-weight: bold;
}
</style>
