import { useEffect, useState } from "react";
import RatingStars from "./RatingStars";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../store/productsSlice";

const CommentsSection = ({ product }: any) => {
  
  const [comments, setComments] = useState<any[]>(product?.comments);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
 
  const dispatch = useDispatch();
    
  const handleSubmit = () => {
    if (!text.trim()) return;

    setComments(prev => [
      ...prev,
      {
        id: Date.now(),
        name: "Anonymous",
        comment: text,
        rating,
      },
    ]);

    setText("");
    setRating(5);
  };

  useEffect(()=>{
    dispatch(updateProduct({...product, comments}));
  }, [comments]);

  return (
    <div className="mt-10 space-y-6">
      <h2 className="text-xl font-semibold">Reviews</h2>

      {/* Add Review */}
      <div className="space-y-3">
        <select
          value={rating}
          onChange={e => setRating(Number(e.target.value))}
          className="border p-2 rounded"
        >
          {[5,4,3,2,1].map(r => (
            <option key={r} value={r}>{r} Stars</option>
          ))}
        </select>

        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Write your review..."
          className="w-full border p-3 rounded"
        />

        <button
          onClick={handleSubmit}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Submit Review
        </button>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((c: any) => (
          <div key={c.id} className="border p-4 rounded-lg">
            <div className="flex justify-between">
              <strong>{c.name}</strong>
              {/* <span>⭐ {c.rating}</span> */}
              <RatingStars rating={c.rating}/>
            </div>
            <p className="text-gray-600 mt-2">{c.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
