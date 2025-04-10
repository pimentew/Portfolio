// components/UsesSection.jsx
import PropTypes from "prop-types";

export default function UsesSection({ title, items }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {/* Left: Section Title */}
      <div className="w-full sm:w-1/4 text-gray-900 dark:text-white font-semibold text-base">
        {title}
      </div>

      {/* Right: Item list */}
      <div className="flex-1 flex flex-col gap-6">
        {items.map((item, index) => (
          <div key={index}>
            <h3 className="font-semibold text-gray-900 dark:text-white">{item.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

UsesSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};
