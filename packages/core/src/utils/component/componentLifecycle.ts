import { ComponentObjType } from "../../interfaces/component";

// Function to run the lifecycle methods

// Init methods
function componentLifecycleInit(methods: ComponentObjType['ele']['cycle']['init']) {
  // run the init methods
  methods.map((fun) => {
    fun();
  });
}

// Mount methods
function componentLifecycleMount(methods:ComponentObjType['ele']['cycle']['mount']) {
  // run the init methods
  methods.map((fun) => {
    fun();
  });
}

// Render methods
function componentLifecycleRender(methods:ComponentObjType['ele']['cycle']['render']) {
  // run the init methods
  methods.map((fun) => {
    fun();
  });
}

export {
  componentLifecycleInit,
  componentLifecycleMount,
  componentLifecycleRender,
};
