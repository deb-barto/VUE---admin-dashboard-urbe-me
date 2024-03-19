<template>
  <div class="relative">
    <IconNotification />
    <span v-if="user.hasNotification" class="absolute -top-[2px] -right-[1px] block w-2 h-2 bg-red-600 rounded-full"></span>
  </div>
</template>

<script>
import { useUserStore } from '../../stores/UserStore';
import IconNotification from '../Icons/IconNotification.vue'
export default {
  components: { IconNotification },
  name: 'NotificationHeader',
  setup() {
    const user = useUserStore()

    return {
      user
    }
  }
}
</script>

<style>

</style>