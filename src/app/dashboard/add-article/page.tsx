"use client";
import { fetcherPost } from "@/utils/fetcher";
import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const Page = () => {
  const [writtedBlog, setwrittenBlog] = useState("");
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const editor = useRef(null);

  const handleSubmit = async () => {
    if (!title) {alert("Title is empty"); return;};
    if (!thumbnail) {alert("Must select thumbnail photo"); return};

    const formData = new FormData();
    formData.append("title", title);
    formData.append("coverImage", thumbnail);
    formData.append("thanaId", "1");
    formData.append("authorId", "1");
    formData.append("description", writtedBlog);
    console.log({ title, thumbnail, writtedBlog });
    const data = await fetcherPost("/api/place", formData);


    if (data.success) {
      setTitle("");
      setwrittenBlog("");
      setThumbnail("");
      alert("Place added");
    } else {
      alert("place not added");
    }
  };

  return (
    <div className="content">
      <div className="center-info">
        <main>
          <div>
            <div>
              <h2>Write a place article</h2>
              <button
                onClick={handleSubmit}
                className="cursor-pointer rounded-md px-4 py-3 text-center text-sm font-semibold bg-primary uppercase transition duration-200 ease-in-out hover:bg-gray-900"
              >
                Add Place
              </button>
            </div>
          </div>
          <div className="mb-8">
            <label
              htmlFor="text"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Place name
            </label>
            <input
              type="text"
              onChange={(e)=> setTitle(e.target.value)}
              placeholder="Enter place title"
              className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
            />
          </div>
          <div>
            <label>
              <p>
                <strong>Upload thumbnail photo:</strong>
              </p>
              <input
                onChange={(event: any) => setThumbnail(event.target.files[0])}
                style={{ padding: "0" }}
                type="file"
                name="thumbnail"
                id="thumbnail"
              />
            </label>
          </div>
          <br />
          <div>
            <p>
              <strong>Post details:</strong>
            </p>
            <JoditEditor
              // config={useMemo({placeholder:"Start"},['Start wrining...'])}
              ref={editor}
              value={writtedBlog}
              onBlur={(newContent) => setwrittenBlog(newContent)}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Page;
