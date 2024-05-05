import { auth, currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import LocationComponent from "../components/GetLocation/page";
import axios from "axios";

export default async function Page() {
  const { userId } = auth();

  const user = await currentUser();
  return (
    <>
      <p>
        {user.username} - {user.primaryEmailAddress.emailAddress}
      </p>
      <Image src={user.imageUrl} width={100} height={100} />
      <LocationComponent />
    </>
  );
}
