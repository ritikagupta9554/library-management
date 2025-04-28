export default function Textarea({ ...props }) {
    return (
      <textarea
        {...props}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    );
  }
  