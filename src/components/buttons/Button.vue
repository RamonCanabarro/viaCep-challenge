<template>
  <component :is="tag" :type="nativeType" :class="classes" @click="handleClick">
    <span v-if="$slots.label" class="btn-label">
      <slot name="label" />
    </span>
    <slot />
  </component>
</template>
<script>
export default {
  name: "NButton",
  props: {
    tag: {
      type: String,
      default: "button",
    },
    type: {
      type: String,
      default: "default",
    },
    nativeType: {
      type: String,
      default: "button",
    },
    round: {
      type: Boolean,
      default: false,
    },
    simple: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    social: {
      type: Boolean,
      default: false,
    },
    link: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Boolean,
      default: false,
    },
    wide: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "",
    },
  },
  computed: {
    classes() {
      const btnClasses = [
        { "btn-simple": this.simple },
        { "btn-icon": this.icon },
        { "btn-round": this.round },
        { "btn-block": this.block },
        { "btn-social": this.social },
        { "btn-link": this.link },
        { "btn-wd": this.wide },
        `btn-${this.type}`,
      ];
      if (this.size) {
        btnClasses.push(`btn-${this.size}`);
      }
      return btnClasses;
    },
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },
  },
};
</script>
