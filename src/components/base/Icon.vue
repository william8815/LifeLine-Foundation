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
import fire from '@/assets/icons/fire.svg';
import sensors from '@/assets/icons/sensors.svg';
import arrowForward from '@/assets/icons/arrow-forward.svg';
import thunder from '@/assets/icons/thunder.svg';
import group from '@/assets/icons/group.svg';
import quate from '@/assets/icons/quate.svg';
import home from '@/assets/icons/home.svg';
import key from '@/assets/icons/key.svg';
import verifiedUser from "@/assets/icons/verified-user.svg";
import rainbow from "@/assets/icons/rainbow.svg";
import building from "@/assets/icons/building.svg";
import check from "@/assets/icons/check.svg";
import checkOutline from "@/assets/icons/check-outline.svg";
import pointer from "@/assets/icons/pointer.svg";
import person from "@/assets/icons/person.svg";
import file from "@/assets/icons/file.svg";
import cycle from "@/assets/icons/cycle.svg";

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
  fire: fire,
  sensors: sensors,
  arrowForward: arrowForward,
  thunder: thunder,
  group: group,
  quate: quate,
  home: home,
  key: key,
  verifiedUser: verifiedUser,
  rainbow: rainbow,
  building: building,
  check: check,
  checkOutline: checkOutline,
  pointer: pointer,
  person: person,
  file: file,
  cycle: cycle,
};

const props = defineProps({
  name: { type: String, required: true },
  size: { type: Number, default: 16 },
});
</script>

<template>
  <component :is="icons[props.name]" v-bind="$attrs" :width="props.size" :height="props.size" />
</template>
