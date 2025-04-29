import { Pose, Category } from "./types";
import { getAllCategories } from "./api/categories";
import { useState, useEffect } from "react";
import Card from "./Components/YogaPoseCard";
import SearchBar from "./Components/SearchBar";

function App() {
  const [poses, setPoses] = useState<Pose[]>([]);
  const [searchInput, setsearchInput] = useState<string>("");
  const [filteredPoses, setFilteredPoses] = useState(poses);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setsearchInput(value);
    const filtered = poses.filter((pose) => 
    pose.english_name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredPoses(filtered);
  };

  useEffect(() => {
    const fetchData = async () => {
      const allCategories: Category[] = await getAllCategories();
      const allPoses: Pose[] = allCategories.flatMap(
        (category) => category.poses
      );
      const uniquePoses = Array.from(
        new Map(allPoses.map((pose) => [pose.id, pose])).values()
      );
      setPoses(uniquePoses);
    };
    fetchData();
  }, []);

  // populates filteredPoses with unique poses when poses loads
  useEffect(() => {
    setFilteredPoses(poses);
  }, [poses]);

  return (
    <>
      <SearchBar value={searchInput} onChange={handleSearch} />
      <div className="pose-list">
        {filteredPoses.map((pose) => (
          <Card key={pose.id} pose={pose} />
        ))}
      </div>
    </>
  );
}

export default App;
