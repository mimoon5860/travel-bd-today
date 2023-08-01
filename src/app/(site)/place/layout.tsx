import Header from "@/components/Header";
export default function PlaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <div className="container">{children}</div>
    </div>
  );
}
