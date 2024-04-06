import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";




const HomePageFeed = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://v2.api.noroff.dev/online-shop");
                const resData = await res.json();
                console.log("Response Data:", resData);
                setData(resData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {data ? (
                <div className="feed-container">
                    {typeof data === "object" && Array.isArray(data.data) ? (
                        data.data.map((item) => (
                            <div className="product-container" key={item.id}>
                                <p>{item.title}</p>
                                <p>{item.price}$</p>
                                <img className="feed-img" src={item.image.url} alt={item.title} />
                                <Link to={`/product/${item.id}`}>
                                    <button>More info</button>
                                </Link>

                            </div>
                        ))
                    ) : (
                        <p>Data is not in the expected format</p>
                    )}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};


export default HomePageFeed;

