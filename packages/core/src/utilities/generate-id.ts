// _GenerateId function to generate ids for component,withs

function GenerateId(_for: "component" | "with" = "component") {
  const base = `$noor-${_for == "component" ? "$comb" : "$with"}`;
  return `${base}-${Math.random().toString(16).slice(4).toString()}`;
}

export default GenerateId;
