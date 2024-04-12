import Navigation from "@/components/navigation/Navigation";
import Header from "@/components/header/Header";

// This is a placeholder page for the sign in page. In the future we will have the possibility for different users to sign in here to use Badgemania
export default function SignIn() {
  return (
    <Navigation>
      <main className="flex flex-col items-center justify-between">
        <Header headerInfo="Sign in:" />

        <p className="font-martian">
          In the future we will have the possibility for different users to sign in here to use
          Badgemania.
        </p>
      </main>
    </Navigation>
  );
}
