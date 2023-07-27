import Breadcrumb from "@/components/Common/Breadcrumb";
import Header from "@/components/Header";

export default function PlaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <Breadcrumb
        pageName="Beautiful places of Bangladesh"
        description="This project is done by students of european university of bangladesh!"
      />
      <div className="container">{children}</div>
    </div>
  );
}
