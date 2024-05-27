import type { TurboModule } from "react-native/Libraries/TurboModule/RCTExport";
import { TurboModuleRegistry } from "react-native";

export interface Spec extends TurboModule {
  doesFileExists(filename: string): Promise<boolean>;
}

export default TurboModuleRegistry.get<Spec>(
  "CheckFile",
) as Spec | null;
