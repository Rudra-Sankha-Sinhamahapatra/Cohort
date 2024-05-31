import { Button } from "@repo/ui/button";
import styles from './page.module.css'

export default function Page(): JSX.Element {
  return (
   <>
   <div>
    <Button appName="Web app">
      Hi there
    </Button>
   </div>
   </>
  );
}
