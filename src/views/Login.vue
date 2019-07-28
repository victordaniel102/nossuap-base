<template>
  <div class="login">
    <div class="box-login">
      <p class="text-enter">Entrar</p>
      <p class="text-logo">NOSSUAP</p>
      <v-text-field label="Solo" solo placeholder="Matrícula" :loading="loading"></v-text-field>
      <v-text-field label="Solo" solo type="password" placeholder="Senha" :loading="loading"></v-text-field>
      <router-link to="/inicio">
        <v-btn large block>Entrar</v-btn>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),

  name: 'login',
  components: {
  }
}
</script>

<style scoped>
  * {
    margin: 0 !important;
    padding: 0 !important;
    text-decoration: none;
  }

  a {
    width: 100%;
  }

  .login {
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .box-login {
    height: 300px;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .v-input {
    width: 100%;
  }

  .v-btn {
    color: white !important;
    background-color: #1976d2 !important;
  }

  .text-enter {
    color: #757575;
  }

  .text-logo {
    font-size: 40px;
    color: #3f3f3f;
    margin-bottom: 20px !important;
  }

  @media only screen and (max-width: 450px) {
    .box-login {
      width: 100%;
      padding: 0 15px !important;
    }
  }
</style>
