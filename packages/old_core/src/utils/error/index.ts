// NJS error Function

type ErrorNames = "NotCalled" | "NotFound" | "NotInitialized";

class NoorError extends Error {
  constructor(message: string, ErrorNames: ErrorNames = "NotFound") {
    super(message);
    this.message = message;
    this.name = "Noor " + ErrorNames;
  }
}

export default NoorError;
