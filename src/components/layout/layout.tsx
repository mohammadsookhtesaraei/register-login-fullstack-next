import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="flex-1 container px-4 lg:px-0">{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
