import { FC } from "react";
import { Header } from "../../components/Header/Header";
import { Navigation } from "../../components/Navigation/Navigation";
import { Locale } from "../../../types/Locale";
import { useLocale } from "../../../hooks/useLocale";
import { Footer } from "../../components/Footer/Footer";

export type MainPageProps = {
  children: React.ReactNode;
};

export const MainPage: FC<MainPageProps> = ({ children }) => {
  const locale = useLocale();
  return (
    <>
      <Header />
      <main
        style={{
          flexGrow: 1,
          padding: "15px",
          paddingBottom: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          textAlign: locale.current === Locale.AR ? "end" : undefined,
        }}
      >
        <Navigation /> {children}
      </main>
      <Footer />
    </>
  );
};
