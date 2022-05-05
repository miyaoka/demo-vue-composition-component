import { defineComponent, ref } from "vue";

export const useCustomDialog = () => {
  const isOpen = ref(false);
  const openDialog = () => {
    isOpen.value = true;
  };

  const CustomDialog = defineComponent({
    props: {
      title: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      return () => (
        <dialog open={isOpen.value}>
          <h1>InputValue is {props.title}</h1>
          <button
            onClick={() => {
              isOpen.value = false;
            }}
          >
            CLOSE
          </button>
        </dialog>
      );
    },
  });

  return {
    CustomDialog,
    openDialog,
    isOpen,
  };
};
