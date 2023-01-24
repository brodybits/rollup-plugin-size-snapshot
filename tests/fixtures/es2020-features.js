import * as React from "react";

export function Component() {
  const ref = React.useRef();

  React.useEffect(() => {
    ref.current?.focus();
  });

  return React.createElement("div", { ref });
}
