import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import URL from '../constants/constants'

export default function Middle() {
  const location = useLocation();
  const image = location.state?.image;
  const navigate = useNavigate();

  const [loading, setLoading] = useState("Detecting Objects.....");
  const [items, setItems] = useState(null);

  const detectObjects = () => {
    const formData = new FormData();
    formData.append("image", image);

    axios
      .post(`${URL}/detect`, formData)
      .then((response) => {
        setLoading("Asking AI....");
        setItems(response.data.prediction);
        const obj = items && items.join(", ");
        return axios.post(
          `${URL}/recycleways`,
          { items: obj }
        );
      })
      .then((response) => {
        setLoading("Done!");
        navigate("/display", { state: { text: response.data.recycling_ways } });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    detectObjects();
  }, [image]);

  return (
    <div>
      {loading}
    </div>
  );
}
