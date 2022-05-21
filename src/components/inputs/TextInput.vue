<template>
  <div
    class="input-component"
    message=""
    :type="error ? 'is-danger' : ''"
    :label="included && !computedValue ? '' : label"
    :expanded="expanded"
  >
    <div v-if="mask.length" class="control" :class="{ empty: !computedValue }">
      <input :data-mask="mask" />
    </div>
    <input
      v-else
      v-model="computedValue"
      :autocomplete="complete"
      :placeholder="placeholder"
      :class="{ empty: !computedValue, ...classInput }"
      :type="type"
      :disabled="disabled"
      :minlength="min"
      :maxlength="max"
    />
    <slot />
    <span v-if="description" class="item-description-field">
      {{ description }}
    </span>
  </div>
</template>
<script>
export default {
  name: "AppInput",
  props: {
    classField: {
      type: String,
      default: "",
    },
    classInput: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    complete: {
      type: String,
      default: "on",
    },
    placeholder: {
      type: String,
      default: "",
    },
    mask: {
      type: Array,
      default: () => {
        return [];
      },
    },
    value: {
      type: [String, Number, Date],
      default: "",
    },
    error: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
    included: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    min: {
      type: [Number, String],
      default: "",
    },
    max: {
      type: [Number, String],
      default: "",
    },
    expanded: {
      type: [Boolean, String],
      default: false,
    },
  },
  data() {
    return {
      newValue: this.value,
    };
  },
  computed: {
    computedValue: {
      get() {
        return this.newValue;
      },
      set(value) {
        this.newValue = value;
        this.$emit("input", value);
      },
    },
  },
  watch: {
    value(value) {
      this.newValue = value;
    },
  },
};
</script>
