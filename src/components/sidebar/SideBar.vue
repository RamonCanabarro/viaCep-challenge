<script>
export default {
  props: {
    open: {
      type: Boolean,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  watch: {
    open(val, old) {
      console.log(val, old);
    },
  },
};
</script>
<template>
  <section id="sidebar">
    <div id="sidebar-container" :class="open ? 'nav-open' : 'nav-closed'">
      <transition name="left-nav">
        <div id="vue-sidebar" v-show="open" class="hidden-md-down">
          <div class="icone-busca">
            <img src="@/assets/icone-busca.svg" alt="My Happy SVG" />
          </div>
          <div class="icone-folder">
            <img src="@/assets/icone-folder2.svg" alt="My Happy SVG" />
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>
