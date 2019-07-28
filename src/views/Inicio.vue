<template>
  <div class="inicio">
    <v-toolbar color="grey darken-4" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>NOSSUAP</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>person</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute left>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-navigation-drawer>

    <div class="container-content">
      <div class="notas">

      </div>

      <div class="container-blocks">
        <div class="items">
          <div class="item">
            <i class="fas fa-clock"></i>
            <p class="item-title">Horários</p>
          </div>

          <div class="item">
            <i class="fas fa-list"></i>
            <p class="item-title">Boletim</p>
          </div>

          <div class="item">
            <i class="fas fa-calculator"></i>
            <p class="item-title">NosCalc</p>
          </div>

          <div class="item">
            <i class="fas fa-calendar-alt"></i>
            <p class="item-title">Agenda</p>
          </div>

          <div class="item turmas">
            <i class="fas fa-users"></i>
            <p class="item-title">Turmas</p>
          </div>
        </div>
      </div>
    </div>

    <v-footer
    dark
    padless
  >
    <v-card flat tile class="indigo lighten-1 white--text">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Copyright © {{ new Date().getFullYear() }} NosSUAP Team
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>NosSUAP</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </div>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
      item: 1,
      items: [
        { text: 'Horários', icon: 'mdi-clock' },
        { text: 'Boletim', icon: 'mdi-account' },
        { text: 'NosCalc', icon: 'mdi-flag' },
        { text: 'Turmas', icon: 'mdi-flag' },
        { text: 'Agenda', icon: 'mdi-flag' }
      ],
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram',
      ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    }
  }
</script>

<style scoped>
  .v-card {
    text-align: center !important; 
    width: 100% !important;
  }

  .container-content {
    padding: 10px;
  }

  .v-list-item__title {
    margin-left: 10px !important;
  }

  .items {
    margin-top: 20px;
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }

  .item {
    width: 100%;
    background: #03A9F4;
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    color: white !important;
    padding: 40px 0;
  }

  .item:hover {
    background-color: #555;
    transition: 0.3s;
  }

  .item > i {
    color: white !important;
    font-size: 50px !important;
  }

  .item-title {
    margin-top: 15px;
    font-size: 22px;
  }

  .item.turmas {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  .notas {
    width: 100%;
    height: 200px;
    background-color: #F3F3F3;
  }
  
</style>

