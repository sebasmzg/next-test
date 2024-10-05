import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import NavigationLink from "./NavigationLink";
import { auth } from "@/auth";

export default async function Navigation() {
  const t = useTranslations("Navigation");
  const session = await auth();
  return (
    <div className="bg-slate-850">
      <nav className="container flex justify-between p-2 text-white">
        <div>
          {session ? (
            <button>Log Out</button>
          ) : (
            <>
              <NavigationLink href="/">{t("home")}</NavigationLink>
              <NavigationLink href="/pathnames">
                {t("pathnames")}
              </NavigationLink>
              <NavigationLink href="/profile">{t("profile")}</NavigationLink>
            </>
          )}
        </div>
        {!session && (
          <div>
            <NavigationLink href="/sign-in">{t("Login")}</NavigationLink>
            <NavigationLink href="/sign-up">{t("Sign up")}</NavigationLink>
            <LocaleSwitcher />
          </div>
        )}
      </nav>
    </div>
  );
}
