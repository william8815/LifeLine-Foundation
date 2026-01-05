<script setup>
import { computed } from "vue";

import favoriteOutline from '@/assets/icons/favorite-outline.svg';
import close from '@/assets/icons/close.svg';
import arrowDown from '@/assets/icons/arrow-down.svg';
import facebook from '@/assets/icons/media/facebook.svg';
import line from '@/assets/icons/media/line.svg';
import twitter from '@/assets/icons/media/twitter.svg';
import youtube from '@/assets/icons/media/youtube.svg';
import pin from '@/assets/icons/pin.svg';
import tel from '@/assets/icons/tel.svg';
import mailOutline from '@/assets/icons/mail-outline.svg';

const icons = {
  favoriteOutline: favoriteOutline,
  close: close,
  arrowDown: arrowDown,
  facebook: facebook,
  line: line,
  twitter: twitter,
  youtube: youtube,
  pin: pin,
  tel: tel,
  mailOutline: mailOutline,
};

const props = defineProps({
  name: { type: String, required: true },
  size: { type: Number, default: 16 },
});
</script>

<template>
  <component :is="icons[props.name]" v-bind="$attrs" :width="props.size" :height="props.size" />
</template>
