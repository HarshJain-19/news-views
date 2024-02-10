import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import Empty from "./Empty";
import { v4 as uuidv4 } from "uuid";
import InfiniteScroll from "react-infinite-scroller";
import GridLoader from "react-spinners/GridLoader";

const cards = (props) => {
    const [totalPages, setTotalPages] = useState(1);
    const [currPage, setCurrPage] = useState(1);

    let apiKey = '102ab006ba894ad9bc36b42f10e468cf';

    let pageSize = 10;
    const [data, setData] = useState([]);

    const getData = async () => {
        if (props.category) {
            const rawData = await axios
                .get(
                    `https://newsapi.org/v2/top-headlines/sources?category=${props.category}&apiKey=${apiKey}`
                )
                .then((res) => res.data)
                .catch((err) =>
                    window.alert(
                        "Something Gone Wrong...\npage refresh the page or try again later\n and error: " +
                            err
                    )
                );
            console.log(rawData.sources);
            setData(rawData.sources);
        } else {
            const rawData = await axios
                .get(
                    `https://newsapi.org/v2/top-headlines?country=${
                        props.country
                    }&pagesize=${pageSize}&page=${1}&apiKey=${apiKey}`
                )
                .then((res) => res.data)
                .catch((err) =>
                    window.alert(
                        "Something Gone Wrong...\npage refresh the page or try again later\n and error: " +
                            err
                    )
                );
            console.log(rawData.articles);
            setTotalPages(rawData.totalResults / pageSize);
            setData(rawData.articles);
            setCurrPage(2);
        }
    };

    useEffect(() => {
        getData();
        console.log(props.country);
        console.log(props.category);
    }, [props.country, props.category]);

    const loader = (
        <div
            style={{
                display: "grid",
                placeItems: "center",
                margin: "1rem auto",
                width: "100%",
            }}
            key={uuidv4()}
        >
            <GridLoader color="#36d7b7" />
        </div>
    );

    const loadFunc = async () => {
        if (!props.category) {
            const newData = await axios
                .get(
                    `https://newsapi.org/v2/top-headlines?country=${props.country}&pagesize=${pageSize}&page=${currPage}&apiKey=${apiKey}`
                )
                .then((res) => res.data)
                .catch((err) =>
                    window.alert(
                        "Something Gone Wrong...\npage refresh the page or try again later\n and error: " +
                            err
                    )
                );
            console.log(newData.articles);
            setData([...data, ...newData.articles]);
            setCurrPage(currPage + 1);
        }
    };
    return (
        <InfiniteScroll
            loadMore={loadFunc}
            hasMore={!props.category && totalPages >= currPage}
            loader={loader}
        >
            <main className="cards" key={uuidv4()}>
                {data.length ? (
                    data.map((e, i) => (
                        <Card
                            data={e}
                            title={i + 1}
                            key={uuidv4()}
                            isCat={props.category}
                        />
                    ))
                ) : (
                    <Empty key={uuidv4()} />
                )}
            </main>
        </InfiniteScroll>
    );
};

export default cards;
