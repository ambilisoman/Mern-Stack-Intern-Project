export default function Features() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why Choose Us?
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Verified Jobs</h3>
          <p className="text-gray-600">
            Only genuine opportunities from trusted companies.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Easy Apply</h3>
          <p className="text-gray-600">
            Apply to jobs in just one click.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
          <p className="text-gray-600">
            Find jobs that match your skills and goals.
          </p>
        </div>
      </div>
    </section>
  );
}
