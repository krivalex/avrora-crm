<template>
  <section id="home-page">
    <FullTable :org="org" />
  </section>
</template>

<script lang="ts">
import FullTable from '@/components/FullTable.vue';
import { useOrgStore } from '@/store/orgStore';
import full_org from '@/test';

export default {
  name: 'HomePage',
  components: {
    FullTable
  },
  mounted() {
    const store = useOrgStore();
    store.setOrg(full_org.org);
  },
  computed: {
    org() {
      return full_org;
    }
  }
}

</script>
