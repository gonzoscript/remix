import { useOutletContext } from "remix";

import type { RouteData } from "../__layout";

export default function WithLayout() {
  let outletData = useOutletContext<RouteData>();
  return (
    <div>
      <h1>Page inside layout</h1>
      <pre>{JSON.stringify(outletData, null, 2)}</pre>
    </div>
  );
}
