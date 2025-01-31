// __The NoorJs Error Class__

// Error types
type ErrorTypes = "NotCalled" | "NotFound" | "NotInitialized";

// ErrorNames
const ErrorNames: Record<ErrorTypes, string> = {
  NotCalled: "NoorJs:FunctionIsn'tCalled",
  NotFound: "NoorJs:NotFound",
  NotInitialized: "NoorJs:NotInitialized",
};

class NoorError extends Error {
  constructor(message: string, ErrorType: ErrorTypes = "NotFound") {
    super(message);
    this.message = `${this.get_error_name(ErrorType)} (${message})`;
    this.name = "NoorJs";
  }

  // _method to get the error name using the error type
  get_error_name(type: ErrorTypes) {
    // names based on the types
    return ErrorNames[type];
  }
}

// Export he Error
export default NoorError;
