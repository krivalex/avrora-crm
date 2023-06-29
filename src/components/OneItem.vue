<template>
  <details class="item">
    <summary>{{ item.title }}</summary>
    <p>{{ item.description }}</p>
  </details>
</template>

<script lang="ts">
import { IItem } from '@/types'

export default {
  name: 'OneItem',
  props: {
    item: {
      type: Object as () => Item,
      required: true
    }
  }
}

