import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleNews from '../components/SingleNews';

const CategoryNews = () => {
    const {data} = useLoaderData();
    //console.log(data)
    return (
        <div>
            <h2 className="font-semibold mb-3">Dragon News Home</h2>
            <div>
                {
                    data.map(news => <SingleNews
                        key={news._id}
                        news={news}
                    ></SingleNews>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;