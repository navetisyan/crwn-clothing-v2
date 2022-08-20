Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@navetisyan 
ZhangMYihua
/
crwn-clothing-v2
Public
Code
Issues
1
Pull requests
10
Actions
Projects
Security
Insights
crwn-clothing-v2/src/App.js /
@ZhangMYihua
ZhangMYihua splitting out cart-item into it's own component
Latest commit c4a41b7 on Mar 10
 History
 1 contributor
38 lines (34 sloc)  614 Bytes

import CategoryItem from './components/category-item/category-item.component';

import './categories.styles.scss';

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
    },
    {
      id: 2,
      title: 'Jackets',
    },
    {
      id: 3,
      title: 'Sneakers',
    },
    {
      id: 4,
      title: 'Womens',
    },
    {
      id: 5,
      title: 'Mens',
    },
  ];

  return (
    <div className='categories-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default App;
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
