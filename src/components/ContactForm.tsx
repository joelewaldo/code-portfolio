import React, { useState, useEffect } from "react";
import axios from "axios";

const ContactForm: React.FC = () => {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [sender, setSender] = useState("");
  const [name, setName] = useState("");
  const [ip, setIp] = useState("");
  const refererUrl = document.referrer;
  const browser = navigator.userAgent;
  const device = getDeviceType();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await axios.get("https://api.ipify.org?format=json");
        setIp(response.data.ip);
      } catch (error) {
        console.error("Failed to fetch IP address:", error);
      }
    };

    fetchIp();
  }, []);

  function getDeviceType() {
    const ua = navigator.userAgent;
    if (/mobile/i.test(ua)) {
      return "Mobile";
    }
    if (/iPad|Android|Touch/.test(ua)) {
      return "Tablet";
    }
    return "Desktop";
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const response = await axios.post("http://localhost:5000/send-email", {
        subject,
        body,
        sender,
        name,
        ip,
        referer_url: refererUrl,
        browser,
        device,
      });
      if (response.status === 200) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="sender"
            className="block text-sm font-medium text-gray-300"
          >
            Your Email
          </label>
          <input
            type="email"
            id="sender"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
            className="mt-1 block w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-white"
            required
          />
        </div>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-white"
            required
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-300"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="mt-1 block w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-white"
            required
          />
        </div>
        <div>
          <label
            htmlFor="body"
            className="block text-sm font-medium text-gray-300"
          >
            Message
          </label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="mt-1 block w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-white"
            rows={5}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md flex items-center"
          disabled={loading}
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 mr-3 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
          ) : (
            "Send"
          )}
          {status === "success" && <span className="ml-2">✅</span>}
          {status === "error" && <span className="ml-2">❌</span>}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
