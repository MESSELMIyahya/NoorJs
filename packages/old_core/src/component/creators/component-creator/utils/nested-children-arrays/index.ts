import {
  ComponentCreatorChildrenPropertiesType,
  ComponentCreatorChildrenType,
} from "../../../../../interfaces/component-creator";

// This function handles the the nested children arrays
// Examples : [1+3,[1,2,'hello',[null,null,1,['item1','item2']]]]

function componentCreator_Nested_Children_handler(
  children_array: ComponentCreatorChildrenType[]
): ComponentCreatorChildrenPropertiesType[] {
  // array of children
  const res_children_array: ComponentCreatorChildrenPropertiesType[] = [];

  children_array.forEach((child) => {
    // if child is array
    if (Array.isArray(child)) {
      // using the on child of type array to handel the nested children inside them
      componentCreator_Nested_Children_handler(child).forEach((e) =>
        // pushing the none-array child
        res_children_array.push(e)
      );
    }
    // is not array
    else {
      // push child if it not array
      res_children_array.push(child);
    }
  });

  // return the data
  return res_children_array;
}

export default componentCreator_Nested_Children_handler;
