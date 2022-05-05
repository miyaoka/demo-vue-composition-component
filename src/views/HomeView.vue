<script setup lang="ts">
import { useCheckList } from "@/composable/useCheckList";
import { useCustomDialog } from "@/composable/useCustomDialog";

const { CheckList, isAllChecked } = useCheckList(["apple", "orange", "grape"]);
const { CustomDialog, openDialog, isOpen } = useCustomDialog();
</script>

<template>
  <section>
    <h2>checklist</h2>
    <div>
      <CheckList />
    </div>
    <p>allChecked: {{ isAllChecked }}</p>
  </section>

  <section>
    <h2>dialog</h2>
    <p>isOpen: {{ isOpen }}</p>
    <button @click="openDialog">open Dialog</button>
    <CustomDialog title="bbb" />
  </section>
</template>
