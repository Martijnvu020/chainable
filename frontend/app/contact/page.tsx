export default function ContactPage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white flex items-center justify-center">
      <form className="w-[90%] rounded-xl shadow-md p-8 space-y-6 border border-white">
        <h1 className="text-2xl font-semibold">Contact Us</h1>

        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            className="w-full px-4 py-2 rounded-md bg-neutral-900 border border-gray-600 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 rounded-md bg-neutral-900 border border-gray-600 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Write your message here..."
            rows={5}
            className="w-full px-4 py-2 rounded-md bg-neutral-900 border border-gray-600 focus:outline-none focus:border-blue-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-2 rounded-md"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
