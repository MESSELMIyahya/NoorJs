// __The component context type__

/*
 The Component's context (_context) is an object that is set by the @Component decorator inside the class component properties 
 to add functionalities & features like (listeners,state mounts and lifecycle method ,id...) to the class and some secret properties
 to prevent injecting non-noorJs-components to the app.
*/

// The context type (*NOTE - This may change in the feature and next versions)
interface _NoorClassComponentContextType {
  $_id: string | null; // a unique id for the component
  $$typeof: symbol; // for secret reasons (to check letter if the element is generated the NoorJs createElement method)
}

// Exporting
export default _NoorClassComponentContextType;
