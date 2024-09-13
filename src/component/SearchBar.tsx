import React, { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }
  }, [searchTerm, navigate]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
