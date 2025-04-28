export default function Button({ children, ...props }) {
    return (
      <button
        {...props}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {children}
      </button>
    );
  }
  