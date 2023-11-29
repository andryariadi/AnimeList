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
        <Link href={actionUrl} className="semibold text-xl text-white">
          {actionLabel}
        </Link>
      </div>
    </>
  );
};

// export const getServerSideProps = async () => {
//   const user = await getServerSession(authOption);

//   return {
//     props: {
//       user,
//     },
//   };
// };

export default LoginGithub;
