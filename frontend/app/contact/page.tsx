import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="flex items-center justify-center mb-2">
      <form className="w-[90%] rounded-xl shadow-md p-8 space-y-6 border bg-white">
        <h1 className="text-2xl font-semibold">Contact Us</h1>
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            className="w-full px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-green-500"
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
            className="w-full px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-green-500"
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
            rows={8}
            className="w-full px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-green-500"
            required
          ></textarea>
        </div>
        <Button className="w-full bg-green-400 hover:bg-green-500 transition text-white font-medium py-2 rounded-md">Send message</Button>
      </form>
    </div>
  )
}
