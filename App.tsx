import { Pose, Category } from "./types";
import { getAllCategories } from "./api/categories";
import { useState, useEffect } from "react";
import Card from "./Components/YogaPoseCard";
import SearchBar from "./Components/SearchBar";

function App() {
  const [poses, setPoses] = useState<Pose[]>([]);
  const [searchInput, setsearchInput] = useState<string>("");

  const handleSearch = (e) => {
    setsearchInput(e.target.value);
    console.log(searchInput);
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

  return (
    <>
      <SearchBar value={searchInput} onChange={handleSearch} />
      <div className="pose-list">
        {poses.map((pose) => (
          <Card key={pose.id} pose={pose} />
        ))}
      </div>
    </>
  );
}

export default App;
