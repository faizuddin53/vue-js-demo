<template>
  <div class="auth-container">
    <div class="auth-card">
      <h2>Signup</h2>

      <form @submit.prevent="signup">
        <div class="form-group">
          <label>Name</label>
          <input
            v-model="form.name"
            type="text"
            placeholder="Your name"
            required
          />
        </div>

        <div class="form-group">
          <label>Email</label>
          <input
            v-model="form.email"
            type="email"
            placeholder="Your email"
            required
          />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input
            v-model="form.password"
            type="password"
            placeholder="Create password"
            required
          />
        </div>

        <div class="form-group">
          <label>Role</label>
          <select v-model="form.role" required>
            <option value="">Select role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button class="btn" type="submit">Create Account</button>
      </form>

      <p class="switch">
        Already have an account?
        <router-link to="/login">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "../composables/useUser";

const router = useRouter();
const authStore = useAuth();

const form = reactive({
  name: "",
  email: "",
  password: "",
  role: "",
});

function signup() {
  console.log("Signup data:", form);
  alert("Signup successful!");
  authStore.signUp(form);
  router.push("/login");
}
</script>

<style scoped>
.auth-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #43cea2, #185a9d);
}

.auth-card {
  background: #fff;
  padding: 30px;
  width: 380px;
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

input,
select {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border-radius: 6px;
  border: 1px solid #ccc;
  outline: none;
}

input:focus,
select:focus {
  border-color: #43cea2;
}

.btn {
  width: 100%;
  padding: 12px;
  background: #43cea2;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

.btn:hover {
  background: #36b89b;
}

.switch {
  text-align: center;
  margin-top: 15px;
}

.switch a {
  color: #43cea2;
  text-decoration: none;
  font-weight: bold;
}
</style>
