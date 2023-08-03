import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import Header from "@/components/Header";

const ContactPage = () => {
  return (
    <>
      <Header />
      <Breadcrumb
        pageName="Contact Page"
        description="If you have any queries feel free to contact us!."
      />
      <Contact />
    </>
  );
};

export default ContactPage;
