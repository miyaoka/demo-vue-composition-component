import { computed, defineComponent, ref } from "vue";

export const useCheckList = (labels: string[]) => {
  const checkListValue = ref<boolean[]>(labels.map(() => false));
  const isAllChecked = computed(() => {
    return checkListValue.value.every((val) => val);
  });
  const CheckList = defineComponent({
    setup() {
      return () =>
        labels.map((title, idx) => (
          <label>
            {title}

            <input
              type="checkbox"
              checked={checkListValue.value[idx]}
              onClick={() =>
                (checkListValue.value[idx] = !checkListValue.value[idx])
              }
            />
          </label>
        ));
    },
  });

  return {
    CheckList,
    isAllChecked,
  };
};
