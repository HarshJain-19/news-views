import React, { useMemo } from "react";

const Card = ({ data, title, isCat }) => {
    return (
        <div className="card" title={title}>
            <h1
                className="source"
                title={`published at - ${data["publishedAt"]}`}
            >
                {isCat
                    ? data["name"]
                    : data["source"]
                    ? data["source"]["name"]
                    : ""}
            </h1>
            {isCat ? (
                ""
            ) : (
                <a href={data["urlToImage"]} target="_blank">
                    {data["urlToImage"] != null ? (
                        <img src={data["urlToImage"]} alt="Image" />
                    ) : (
                        ""
                    )}
                </a>
            )}
            <h1 className="title">
                {isCat ? data["category"] : data["title"]}
            </h1>
            <h3 className="desc">{data["description"]}...</h3>
            <div className="foot">
                <a
                    href={data["url"]}
                    title={`published at - ${
                        isCat ? data["counrty"] : data["publishedAt"]
                    }`}
                    target="_blank"
                >
                    <button>Read More...</button>
                </a>
                <h3>--{isCat ? data["language"] : data["author"]}</h3>
            </div>
        </div>
    );
};

export default Card;
