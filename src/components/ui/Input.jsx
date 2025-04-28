export default function Input({ ...props }) {
    return (
      <input
        {...props}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    );
  }
  