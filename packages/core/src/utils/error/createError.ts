// NJS error Function

type ErrorNames = "NotCalled" | "NotFound" | "NotInitialized";

class NJFError extends Error {
  constructor(message: string, ErrorNames: ErrorNames = "NotFound") {
    super(message);
    this.message =  message;
    this.name = "NJF " + ErrorNames;
  }
}

export default NJFError;
