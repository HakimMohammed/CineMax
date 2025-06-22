import Footer from "@/components/footer";
import NavigationBar from "@/components/navigation-bar";

const UserLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <NavigationBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default UserLayout;
