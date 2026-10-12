import { Info } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
export function DemoNotice() {
  return (
    <Alert className="demo-notice" role="note">
      <Info aria-hidden="true" />
      <AlertTitle>Practice only. No real-world response.</AlertTitle>
      <AlertDescription>
        All scenarios, contacts, and locations are fictional. CampusCue does not
        report incidents, place calls, or dispatch help.
      </AlertDescription>
    </Alert>
  );
}
