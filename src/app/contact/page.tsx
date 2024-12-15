import Header from "@/components/header";

export default function Contact() {
  return (
    <div>
      <Header />
      <main className="px-4 lg:px-[152px] py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
        <p className="text-gray-600 text-lg">
          Have questions, feedback, or just want to say hi? We&apos;d love to
          hear from you! Reach out using the form below or through the provided
          contact information.
        </p>

        {/* Informasi Kontak */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Our Info
            </h2>
            <p className="text-gray-600">
              <strong>Email:</strong> info@travelbook.com
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Phone:</strong> +123 456 7890
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Address:</strong> 123 Travel Street, Explore City, World
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
