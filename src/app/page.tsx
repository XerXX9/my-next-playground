import { Button } from "@/components/ui/button";
import { ProfileCards } from "./components/ProfileCards";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <ProfileCards name={"Scott"} title="Mr." avatarUrl="https://pbs.twimg.com/profile_images/634514155261833216/czgYrPLQ_200x200.jpg"></ProfileCards>
    </>
    
  );
}
