export default function About() {
  return (
    <div className="min-h-[40svh] mt-56 flex justify-center items-center">
      <div className="max-w-5xl space-y-32">
        <div>
          <h2 className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            About <span className="text-green-500">Us</span>
          </h2>
          <div>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Resiklo is a machine shop business inspired by Precious Plastic,
              focused in designing and building machines that are used in
              sustaining and restoring the environment thru waste recycling.
            </p>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              We build our machines with utmost commitment to quality and
              topnotch performance in the service of the community.
            </p>
          </div>
        </div>

        <div>
          <h2 className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            An Insight into Our{" "}
            <span className="text-green-500">Vision and Mission</span>
          </h2>
          <div>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              A world where every recyclable material is repurposed, ensuring
              nothing goes to waste. Our vision is to achieve{" "}
              <b>Total Net Zero Waste</b>, where sustainability is not just a
              goal but a way of life, creating a cleaner and greener future for
              generations to come.
            </p>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              We design and build high-quality, cost-effective, and affordable
              machines tailored for all types of recycling needs. Our goal is to
              provide durable and efficient solutions that make recycling
              easier, more accessible, and more sustainable for businesses and
              communities alike.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
