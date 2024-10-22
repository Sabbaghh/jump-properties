import PropertyAddForm from "@/components/PropertyAddPage/PropertyAddForm";
const AddPropertyPage = () => {
  return (
    <section className="bg-blue-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="mb-4 rounded bg-white px-6 py-8 shadow-md md:m-0">
          <PropertyAddForm />
        </div>
      </div>
    </section>
  );
};

export default AddPropertyPage;
