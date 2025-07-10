
// recherche pour le touriste 
import { useState } from 'react';

interface SearchBarProps {
  onSearch: (filters: {
    region: string;
    activity: string;
    date: string;
    duration: string;
    budget: string;
  }) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [filters, setFilters] = useState({
    region: '',
    activity: '',
    date: '',
    duration: '',
    budget: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-lg mb-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <input
          type="text"
          name="region"
          placeholder="Region"
          value={filters.region}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <select name="activity" value={filters.activity} onChange={handleChange} className="p-2 border rounded">
          <option value="">Activity Type</option>
          <option value="Adventure">Adventure</option>
          <option value="Cultural">Cultural</option>
          <option value="Sightseeing">Sightseeing</option>
        </select>
        <input
          type="date"
          name="date"
          value={filters.date}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="number"
          name="duration"
          placeholder="Duration (days)"
          value={filters.duration}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="number"
          name="budget"
          placeholder="Budget (€)"
          value={filters.budget}
          onChange={handleChange}
          className="p-2 border rounded"
        />
      </div>
      <button type="submit" className="mt-4 bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        Search
      </button>
    </form>
  );
}
