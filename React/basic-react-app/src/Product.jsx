import './Product.css';
import {Title} from './Title.jsx';
import {Description} from './Description.jsx';

function Product() {
  return (
    <>
      <div className='Product'>
        <Title />
        <Description />
      </div>
    </>
  )
}

export  {Product};