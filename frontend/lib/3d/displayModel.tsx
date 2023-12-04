import { ModelName } from "../state";

import BlackHole from "@/components/3d/blackhole";
import Goose from "@/components/3d/goose";
import IronMan from "@/components/3d/ironman";
import Minutes from "@/components/3d/minutes";
import Porsche from "@/components/3d/porsche";

export const displayModel = (model: ModelName | null) => {
  switch (model) {
    case "blackhole":
      return <BlackHole />;
    case "ironman":
      return <IronMan />;
    case "goose":
      return <Goose />;
    case "minutes":
      return <Minutes />;
    case "porsche":
      return <Porsche />;
    default:
      return null;
  }
};