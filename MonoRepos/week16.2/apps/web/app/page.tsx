import Image from "next/image";
import { Card } from "@repo/ui/card";
import { Code } from "@repo/ui/code";
import styles from "./page.module.css";
import { Button } from "@repo/ui/button";
import { AppName } from "@repo/ui/app-name";

export default function Page(): JSX.Element {
  return (
    <>
    <Button appName="test1">click</Button>
    <Card className="font-semibold bg-gray-700 text-white border border-white" title="test1" href="https://www.google.com">
     Hii
      </Card> 
    <AppName name="test1" className="font-bold border border-white flex text-center"></AppName>
    </>
  );
}
