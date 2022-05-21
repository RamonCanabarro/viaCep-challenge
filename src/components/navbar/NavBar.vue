<script>
export default {
  methods: {
    togglesidebar() {
      this.$emit("toggle-nav-drawer");
    },
  },
};
</script>
<template>
  <nav class="navbar container-fluid">
    <div @click="togglesidebar" class="nav">
      <img src="@/assets/logo.svg" alt="My Happy SVG" />
      <div class="left-text">
        <div class="title">
          <div id="title">Surreal São Paulo</div>
          <p>VTEX</p>
        </div>
      </div>
    </div>
    <div class="nav nav-right" id="navbarContent">
      <div class="icone-bell">
        <img
          src="@/assets/icone-bell.svg"
          height="24"
          width="21.44"
          alt="My Happy SVG"
        />
      </div>
      <div id="title">Olá, Joaquim</div>
      <div class="icone-user">
        <img
          id="user"
          src="@/assets/usuario.svg"
          height="54"
          width="54"
          alt="My Happy SVG"
        />
      </div>
    </div>
  </nav>
</template>
