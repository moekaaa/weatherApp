//userに紐づく情報のパネル
<script setup>
import { onMounted } from 'vue';
import { useUserDataStore } from '../stores';
import { getCheerUpMessage, getTodayDate } from '../modules';

const userDataStore = useUserDataStore()
const cheerUpMessage = getCheerUpMessage()

</script>

<template>
    <div class="user-panel">
        <p>{{cheerUpMessage}}</p>
    </div>
</template>