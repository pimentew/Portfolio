export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Title Section */}
      <div className="mb-12 max-w-[672px] h-[248px] gap-6">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-[48px] tracking-[-0.01em]">
          Things I've made trying to put my dent in the universe
        </h1>
        <p className="text-base leading-7 text-[#A1A1AA] dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..
        </p>
      </div>

      {/* Projects Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          justifyContent: 'space-between',
        }}
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#F63B59',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
              }}
            >
              <span style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>H</span>
            </div>
            <h3 style={{ margin: '0.5rem 0', fontWeight: 'bold' }}>Company</h3>
            <p style={{ marginBottom: '1rem' }}>
              Creating technology to empower civilians to explore space on their own terms.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: '16px', height: '16px' }}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.828 10.172a4 4 0 0 0-5.656 5.656l1.414 1.414
                     M10.172 13.828a4 4 0 0 0 5.656-5.656l-1.414-1.414
                     M8 12h.01M16 12h.01M12 8v.01M12 16v.01"
                />
              </svg>
              <a
                href="https://company.com"
                style={{ color: '#333', textDecoration: 'none' }}
              >
                https://company.com
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
