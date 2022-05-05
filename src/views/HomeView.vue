<script setup lang="ts">
import { useCheckList } from "@/composable/useCheckList";
import { useCustomDialog } from "@/composable/useCustomDialog";

const { CheckList, isAllChecked } = useCheckList(["apple", "orange", "grape"]);
const { CustomDialog, openDialog, isOpen } = useCustomDialog();
</script>

<template>
  <CheckList />

  <p>allChecked: {{ isAllChecked }}</p>

  <hr />

  <button @click="openDialog">open Dialog</button>
  <CustomDialog title="bbb" />
</template>
