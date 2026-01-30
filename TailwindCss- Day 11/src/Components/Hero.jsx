export default function Hero() {
  return (
    <section className="bg-blue-600 text-white py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Find Your Dream Job
      </h1>

      <p className="text-lg md:text-xl mb-8 text-blue-100">
        Browse thousands of jobs from top companies
      </p>

      <div className="flex justify-center gap-4">
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">
          Get Started
        </button>
        <button className="border border-white px-6 py-3 rounded-lg">
          Learn More
        </button>
      </div>
    </section>
  );
}
