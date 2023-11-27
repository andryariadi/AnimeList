import Link from "next/link";
// import { authUserSession } from "@/libs/auth-libs";
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";

export default async function LoginGithub() {
  const user = await getServerSession(authOption);

  const actionLabel = user ? "Logout" : "Login";
  const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin";

  console.log(user, "<--- diloginuser");

  return (
    <>
      <div>
        <Link href={actionUrl} className="semibold text-xl text-white">
          {actionLabel}
        </Link>
      </div>
    </>
  );
}
