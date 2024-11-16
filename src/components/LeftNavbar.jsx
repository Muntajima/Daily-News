import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() =>{
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res => res.json())
        .then(data => setCategories(data.data.news_category))
    }, [])

    //   {
  //     "category_id": "01",
  //     "category_name": "Breaking News"
  //   }
  
    return (
        <div>
            <h2 className='font-semibold mb-4 text-left text-lg'>All Caterogy</h2>
            <div>
                {
                    categories.map(category => (
                        <NavLink
                            to={`/category/${category.category_id}`}
                            key={category.category_id}
                            category={category}
                            className="flex flex-col btn items-start pl-12 text-lg bg-base-100 text-gray-500 rounded-none border-none">
                                {category.category_name}
                            
                        </NavLink>                   
                     ))
                }
            </div>
        </div>
    );
};

export default LeftNavbar;<h2></h2>