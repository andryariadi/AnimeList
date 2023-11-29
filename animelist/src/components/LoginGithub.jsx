import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link";

const LoginGithub = async () => {
  const user = await authUserSession();

  const actionLabel = user ? "Logout" : "Login";
  const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin";

  console.log(user, "<--- diloginuser");

  return (
    <>
      <div>
        <Link href={actionUrl} className={`semibold text-sm px-3 py-1 rounded text-white ${user ? "bg-rose-700" : "bg-slate-700"}`}>
          {actionLabel}
        </Link>
      </div>
    </>
  );
};

export default LoginGithub;

// export const getServerSideProps = async () => {
//   const user = await getServerSession(authOption);

//   return {
//     props: {
//       user,
//     },
//   };
// };
